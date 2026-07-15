---
title: "Porting notes: x-Prediction / TJS for Z-Image-Turbo"
description: "This note distills the Spark/Diffusers benchmark into implementation guidance for a Windows inference engine."
date: "2026-07-08T21:46:44.874Z"
kind: experiment
status: published
tags: []
---

# Porting notes: x-Prediction / TJS for Z-Image-Turbo

This note distills the Spark/Diffusers benchmark into implementation guidance for a Windows inference engine.

## Proven benchmark context

- Model: `Tongyi-MAI/Z-Image-Turbo`
- Source implementation: Hugging Face Diffusers `ZImagePipeline`
- Scheduler: `FlowMatchEulerDiscreteScheduler`
- Hardware used for test: local Spark / NVIDIA GB10
- Resolution: 1024×1024
- Prompts/seeds/variants: 6 prompts × 4 seeds × 5 variants = 120 images
- No remote GPU, no `gpu-cli`
- Full benchmark report: `site/experiments/x-prediction-tjs-z-image-turbo-extensive-benchmark.md`
- Run artifacts: `outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark/`

## Core result

The usable endpoint decode for Diffusers/Z-Image was the scheduler-consistent convention:

```text
x0_latents = latents + sigma * velocity
```

The literal paper-formula variant tested as:

```text
x0_latents = latents + (1 - sigma) * velocity
```

produced colored-noise failures under this implementation. Treat this as a sign/scheduler-convention trap, not as evidence that TJS fails.

## NFE accounting

For total step count `K = 10`:

```text
gamma = 0.2 -> k_star = ceil(0.2 * 10) = 2 -> 2 ODE steps + 1 endpoint forward = 3 NFE
gamma = 0.4 -> k_star = ceil(0.4 * 10) = 4 -> 4 ODE steps + 1 endpoint forward = 5 NFE
gamma = 0.8 -> k_star = ceil(0.8 * 10) = 8 -> 8 ODE steps + 1 endpoint forward = 9 NFE
```

## Windows engine pseudocode

```cpp
// Inputs: prompt embeddings, initial latent x, K=10, gamma, scheduler sigmas/timesteps.
// This assumes your transformer output convention is equivalent to Diffusers' `velocity`.

int k_star = ceil(gamma * K);

Latents x = sample_initial_noise(seed);

for (int i = 0; i < k_star; ++i) {
    float t = timesteps[i];
    Tensor velocity = zimage_transformer(x, t, prompt_embeds);

    // Diffusers ZImagePipeline uses:
    //   noise_pred = -velocity
    //   x = FlowMatchEulerDiscreteScheduler.step(noise_pred, t, x)
    Tensor noise_pred = -velocity;
    x = flowmatch_euler_step(noise_pred, t, x, scheduler_state);
}

// Endpoint decode costs one extra model forward.
float t_endpoint = timesteps[k_star];
float sigma = sigmas[k_star];
Tensor velocity_endpoint = zimage_transformer(x, t_endpoint, prompt_embeds);

// Scheduler-consistent endpoint decode observed to work.
Latents x0 = x + sigma * velocity_endpoint;

Image img = vae_decode((x0 / vae_scaling_factor) + vae_shift_factor);
```

## Validation checklist for port

1. Run baseline 10-NFE and TJS variants from identical initial noise/seed.
2. Confirm TJS 9-NFE is nearly identical to baseline. If it is not, scheduler/timestep/sigma/sign convention is likely wrong.
3. Confirm TJS 5-NFE is close to baseline on portraits, objects, landscapes, and multi-character/server-room prompts.
4. Confirm literal paper formula creates bad/noisy images; if both formulas look good or both fail, inspect sign conventions.
5. Disable autograd/training graph construction for TJS. On Spark, missing `torch.no_grad()` caused exit-137 memory pressure in long sweeps.
6. Record latency excluding model load, and keep prompt/seed/resolution identical.
7. Compare at 1024×1024 and at your target desktop/server resolution.

## Recommended product modes

- **Fast preview:** scheduler TJS `gamma=0.2`, 3 NFE. Good for previews; not always final quality.
- **Default acceleration:** scheduler TJS `gamma=0.4`, 5 NFE. Best current quality/speed tradeoff.
- **High quality:** baseline 10 NFE or scheduler TJS 9 NFE. The 9-NFE variant is near-baseline but only ~1.1× faster in our 1024 run.

## Benchmark result table

| Variant | NFE | Mean latency | Speedup | SSIM vs baseline | Visual conclusion |
|---|---:|---:|---:|---:|---|
| Baseline | 10 | 13.55s | 1.00× | — | Reference quality |
| TJS scheduler 20% | 3 | 4.65s | 2.92× | 0.9364 | Coherent preview, more drift on hard prompts |
| TJS scheduler 40% | 5 | 7.19s | 1.88× | 0.9785 | Best practical tradeoff |
| TJS scheduler 80% | 9 | 12.30s | 1.10× | 0.9988 | Near baseline but low speed benefit |
| TJS literal paper 20% | 3 | 4.43s | 3.06× | 0.3042 | Invalid/noisy under Diffusers convention |
