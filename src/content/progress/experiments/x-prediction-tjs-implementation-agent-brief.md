---
title: "Agent brief: implement x-Prediction / Truncated Jump Sampling (TJS)"
description: "Give this document to an implementation agent. Goal: port and validate x-Prediction / Truncated Jump Sampling for a Z-Image-Turbo-like diffusion/flow engine, then evaluate whether the same endpoint-decoding idea transfers to video…"
date: "2026-07-08T22:12:32.353Z"
kind: experiment
status: published
tags: []
---

# Agent brief: implement x-Prediction / Truncated Jump Sampling (TJS)

Give this document to an implementation agent. Goal: port and validate x-Prediction / Truncated Jump Sampling for a Z-Image-Turbo-like diffusion/flow engine, then evaluate whether the same endpoint-decoding idea transfers to video diffusion.

## 0. Executive summary

We tested x-Prediction / TJS on `Tongyi-MAI/Z-Image-Turbo` using Diffusers `ZImagePipeline` on local Spark / NVIDIA GB10.

Result: **scheduler-consistent TJS works**.

At 1024×1024 over 6 prompts × 4 seeds × 5 variants = 120 images:

| Variant | NFE | Mean latency | Speedup | SSIM vs baseline | Visual conclusion |
|---|---:|---:|---:|---:|---|
| Baseline | 10 | 13.55s | 1.00× | — | Reference quality |
| TJS scheduler 20% | 3 | 4.65s | 2.92× | 0.9364 | Coherent preview, more drift on hard prompts |
| TJS scheduler 40% | 5 | 7.19s | 1.88× | 0.9785 | **Best practical tradeoff** |
| TJS scheduler 80% | 9 | 12.30s | 1.10× | 0.9988 | Near baseline, low speed benefit |
| TJS literal paper 20% | 3 | 4.43s | 3.06× | 0.3042 | Invalid/noisy under Diffusers convention |

Recommended product modes:

- **Fast preview:** scheduler TJS 20%, `3 NFE`.
- **Default acceleration:** scheduler TJS 40%, `5 NFE`. This is the setting to port first.
- **High quality:** baseline 10 NFE, or scheduler TJS 80% only if you want a sign/scheduler check.

The critical implementation detail is **sign/scheduler convention**. The working endpoint decode in Diffusers/Z-Image was:

```text
x0_latents = latents + sigma * velocity
```

The literal paper-looking formula we tested:

```text
x0_latents = latents + (1 - sigma) * velocity
```

produced colored-noise failures in this implementation. Do not port the paper formula blindly.

---

## 1. Background: what TJS is doing

Normal diffusion/flow sampling runs the full denoising path:

```text
x_T -> model -> scheduler step -> model -> scheduler step -> ... -> x_0
```

With `K=10`, baseline uses 10 expensive transformer forwards.

TJS says: after some early number of ODE/scheduler steps, the current state already contains enough endpoint information. So we stop early, run one extra forward to estimate endpoint velocity, and decode the clean endpoint directly.

For total step count `K=10`:

```text
gamma = 0.2 -> k_star = ceil(0.2 * 10) = 2 -> 2 ODE steps + 1 endpoint forward = 3 NFE
gamma = 0.4 -> k_star = ceil(0.4 * 10) = 4 -> 4 ODE steps + 1 endpoint forward = 5 NFE
gamma = 0.8 -> k_star = ceil(0.8 * 10) = 8 -> 8 ODE steps + 1 endpoint forward = 9 NFE
```

---

## 2. Required implementation target

Implement TJS as an optional sampler mode in the engine:

```text
sampler = baseline | tjs_scheduler
```

Required TJS parameters:

```text
total_steps K = 10 initially
gamma = 0.2, 0.4, or 0.8
k_star = ceil(gamma * K)
endpoint_decode = scheduler_consistent
```

Required output metadata per generation:

```json
{
  "sampler": "tjs_scheduler",
  "total_steps": 10,
  "gamma": 0.4,
  "k_star": 4,
  "ode_steps_taken": 4,
  "endpoint_forward": 1,
  "executed_nfe": 5,
  "endpoint_sigma": 0.81818,
  "endpoint_timestep": 818.18,
  "endpoint_formula": "x0 = x + sigma * velocity"
}
```

---

## 3. Z-Image / FlowMatch pseudocode

This pseudocode matches the convention that worked in Diffusers `ZImagePipeline`.

```cpp
// Inputs:
// - prompt embeddings
// - seed / initial noise generator
// - scheduler timesteps and sigmas
// - total steps K, usually 10 for Z-Image-Turbo
// - gamma, e.g. 0.4 for default TJS mode
// - transformer output convention equivalent to Diffusers' `velocity`

int K = 10;
int k_star = ceil(gamma * K);

Latents x = sample_initial_noise(seed);

// 1. Run the normal ODE/scheduler path only until k_star.
for (int i = 0; i < k_star; ++i) {
    float t = timesteps[i];

    Tensor velocity = zimage_transformer(
        x,
        t,
        prompt_embeddings
    );

    // Diffusers ZImagePipeline convention:
    //   velocity = transformer(...)
    //   noise_pred = -velocity
    //   x_next = FlowMatchEulerDiscreteScheduler.step(noise_pred, t, x)
    Tensor noise_pred = -velocity;
    x = flowmatch_euler_step(noise_pred, t, x, scheduler_state);
}

// 2. Endpoint decode forward. This is one additional NFE.
float t_endpoint = timesteps[k_star];
float sigma = sigmas[k_star];

Tensor velocity_endpoint = zimage_transformer(
    x,
    t_endpoint,
    prompt_embeddings
);

// 3. Scheduler-consistent endpoint decode. This is the key line.
Latents x0 = x + sigma * velocity_endpoint;

// 4. Decode exactly as baseline would decode final latents.
Latents vae_input = (x0 / vae_scaling_factor) + vae_shift_factor;
Image image = vae_decode(vae_input);
```

### Important indexing note

For `K=10`, if `gamma=0.4`:

```text
k_star = 4
run loop i = 0,1,2,3      // four normal ODE steps
endpoint uses timesteps[4]
sigma uses sigmas[4]
```

This yields 5 total model forwards.

---

## 4. Validation matrix

Start with exactly this matrix so results can be compared to our Spark run.

Prompts:

```text
1. portrait of a consistent original character named Mira, red coat, silver hair, cinematic lighting, desktop GPU video generation test still
2. the same character Mira with silver hair and red coat walking through a neon train station, identity preserved, cinematic frame
3. a glass robot hummingbird hovering above a wooden desk, shallow depth of field, high detail
4. wide shot of storm clouds rolling over a futuristic desert server farm, dramatic lighting
5. three distinct characters in a workshop examining a glowing video diffusion server rack, coherent faces, no text
6. Mira, the silver-haired woman in a red coat, reflected in a rain puddle and a shop window, same identity in both reflections
```

Seeds:

```text
0, 1, 2, 3
```

Variants:

```text
baseline_10nfe
tjs_scheduler_3nfe   // gamma 0.2, k*=2 + endpoint forward
tjs_scheduler_5nfe   // gamma 0.4, k*=4 + endpoint forward
tjs_scheduler_9nfe   // gamma 0.8, k*=8 + endpoint forward
tjs_literal_paper_3nfe_canary // optional negative-control sign test
```

Resolution:

```text
1024x1024 for final validation
512x512 acceptable only for quick smoke
```

Metrics to record:

```text
latency excluding model load
executed NFE
prompt id
seed
resolution
sampler variant
endpoint timestep
endpoint sigma
output image path
image sanity: loadable, non-blank, finite pixels
optional: PSNR/SSIM vs baseline for same prompt+seed
manual quality review notes
```

---

## 5. Acceptance criteria

Minimum acceptance for the port:

1. Baseline 10-NFE output matches expected model quality.
2. TJS 9-NFE scheduler output is nearly identical to baseline. If not, scheduler/sign/timestep convention is wrong.
3. TJS 5-NFE scheduler output is visually close to baseline on most prompts and is materially faster.
4. TJS 3-NFE scheduler output is coherent enough for preview mode.
5. Literal paper-formula canary should produce bad/noisy images under the Diffusers convention. If it does not, re-check model-output signs; your engine may expose a different velocity/noise convention.
6. No training/autograd graph is retained during inference. Use no-grad / inference mode / command-buffer-only inference path.
7. The engine reports exact NFE accounting.

Expected approximate timing pattern at 1024×1024:

```text
3 NFE: ~3x faster than baseline
5 NFE: ~2x faster than baseline
9 NFE: ~1.1x faster than baseline
```

Exact latency will vary by engine/hardware, but speedup should roughly scale with transformer-forward count.

---

## 6. Common failure modes

### Failure: TJS output is colored noise

Likely cause: wrong endpoint formula or sign convention.

Try scheduler-consistent decode:

```text
x0 = x + sigma * velocity
```

If your model output is not `velocity` but `noise_pred = -velocity`, then rewrite accordingly:

```text
x0 = x - sigma * noise_pred
```

### Failure: 9-NFE TJS differs strongly from baseline

Likely cause:

- wrong `k_star` indexing
- wrong sigma index
- wrong timestep normalization
- wrong scheduler state progression
- missing shift/dynamic sigma transformation

9-NFE should be extremely close because it runs almost the full path.

### Failure: memory grows / process dies over long sweeps

Likely cause: inference graph retention or stale activation buffers.

Fix:

- disable autograd/training graph
- reuse or free intermediate buffers carefully
- ensure endpoint forward does not retain references to prior step tensors

On Spark, missing `torch.no_grad()` caused exit-137 in longer sweeps.

### Failure: 3-NFE is coherent but faces/details drift

Expected. Treat 3-NFE as preview mode, not final quality.

---

## 7. Does this apply to video?

Short answer: **probably yes in principle, but not proven by our run yet.**

Why it should transfer:

- The x-Prediction/TJS argument is about affine diffusion / flow paths and endpoint decodability, not images specifically.
- Video latent diffusion and video DiT models usually denoise a spatiotemporal latent tensor instead of a 2D latent tensor.
- If the video sampler is also a flow-matching or diffusion ODE with a velocity/noise prediction at each timestep, the same early-exit + endpoint-decode idea should be applicable.
- The endpoint formula would operate on the full latent video tensor:

```text
x0_video_latents = x_video_latents + sigma * velocity_video
```

where `velocity_video` has shape like:

```text
[B, C, T, H, W]
```

or whatever packed token/video latent layout the model uses.

Why it may be harder:

- Video quality is more sensitive to temporal coherence. A TJS endpoint may preserve per-frame structure while introducing flicker or identity drift across frames.
- Later denoising steps may matter more for motion smoothness, temporal consistency, hands/faces across frames, and object permanence.
- Video samplers often use custom schedules, frame packing, causal attention, sliding windows, or guidance tricks that change the sign/sigma convention.
- Metrics must include temporal quality, not just per-frame similarity.

Video-specific validation plan:

1. Pick a video diffusion model with a clear scheduler and accessible denoising loop.
2. Implement baseline and scheduler TJS with identical noise seed and prompt.
3. Test tiny output first, e.g. 8-16 frames at low resolution.
4. Compare variants:

```text
baseline full NFE
tjs 30-40% NFE candidate
tjs 60-80% NFE high-quality candidate
```

5. Evaluate:

```text
latency
VRAM
frame-to-frame flicker
identity consistency
motion smoothness
prompt adherence
per-frame artifacts
```

6. Use fixed prompts designed for temporal consistency:

```text
same character walking through a room
same face turning left to right
object rotating smoothly
camera pan through a scene
hands interacting with object
```

Recommendation for video:

- Start conservatively with **higher early-exit fractions** than image.
- For example, if an image default is `gamma=0.4`, test video at `gamma=0.5`, `0.6`, and `0.8` first.
- Only push to 3-NFE/very early exits if temporal coherence holds.

Expected product framing:

- TJS may be excellent for **desktop/server video preview mode**.
- Final render mode may need a later exit or full baseline until temporal metrics confirm no flicker/identity regression.

---

## 8. Deliverables for implementation agent

The implementation agent should produce:

1. Engine TJS sampler implementation.
2. Unit tests for NFE/k-star indexing.
3. Sign-convention test using 9-NFE near-baseline check.
4. Benchmark script for the prompt/seed matrix above.
5. Markdown report with timing table, contact sheets, and failure cases.
6. A short video-transfer assessment if the engine has a video diffusion path.

Report must explicitly state:

```text
model
scheduler
sigma schedule
timestep normalization
transformer output convention
endpoint formula
NFE accounting
latency measurement scope
hardware
resolution
prompt/seed matrix
```

---

## 9. Source artifacts from our run

Spark benchmark artifacts:

```text
outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark/
```

Reports:

```text
site/experiments/x-prediction-tjs-z-image-turbo-extensive-benchmark.md
site/experiments/x-prediction-tjs-z-image-windows-porting-notes.md
```

Implemented reference harness:

```text
src/auto_research/tjs_z_image.py
experiments/configs/tjs_z_image_turbo_spark.yaml
experiments/prompts/tjs_z_image_smoke.yaml
```
