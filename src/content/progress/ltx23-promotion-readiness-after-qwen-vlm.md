---
title: "LTX-2.3 Promotion Readiness After Qwen3.6 VLM Review"
description: "The promotion candidate is TJS-style endpoint decodability, not whole-velocity cache/forecast."
date: "2026-07-09T15:12:47.545Z"
kind: report
status: published
tags: []
---

# LTX-2.3 Promotion Readiness After Qwen3.6 VLM Review

Date: 2026-07-08

## Decision from Z-Image + Qwen VLM

The promotion candidate is **TJS-style endpoint decodability**, not whole-velocity cache/forecast.

Evidence:

- Qwen3.6 VLM review of the six-prompt Z-Image sweep agreed that most generated images are coherent.
- Qwen marked `tjs_exit_20pct_scheduler` and `tjs_exit_40pct_scheduler` as the safest variants for short-form use.
- Qwen marked conservative whole-velocity cache/forecast as research-only because artifacts appear in complex rows such as hummingbird wings, storm texture, and server-room/detail rows.

## Forge/LTX status checked

Forge target repo: `/home/aegisfang666/workspace/forge`

Useful LTX files found:

- `engine/src/pipelines/pipeline_video_stages.cpp`
- `engine/tools/ltx2_ref_render.cpp`
- `engine/tools/ltx2_decode_latent.cpp`
- `engine/tests/ltx2_parity_test.cpp`
- `engine/tests/ltx2_dit_test.cpp`
- `engine/tests/ltx2_e2e_test.cpp`

The LTX sigma schedule is already explicit in Forge:

```cpp
constexpr double kSigma[9] = {1.0, 0.99375, 0.9875, 0.98125, 0.975,
                              0.909375, 0.725, 0.421875, 0.0};
```

The existing controlled render loop uses rectified-flow velocity update:

```cpp
lat += (sigma[i + 1] - sigma[i]) * velocity;
```

This makes the endpoint-decoding candidate for step `i`:

```text
x0_hat ≈ x_i + (0 - sigma_i) * v_i
       = x_i - sigma_i * v_i
```

That matches the earlier feasibility hypothesis.

## Build / smoke verification

Built the relevant CUDA/cuDNN targets locally after downloading and converting the LTX-2.3 artifact:

```bash
cmake -S engine -B engine/build-cudnn-gitfe2 \
  -DCMAKE_BUILD_TYPE=Release \
  -DFORGE_ENABLE_CUDA=ON \
  -DFORGE_ENABLE_CUDNN=ON \
  -DFORGE_CUDNN_ROOT=/home/aegisfang666/workspace/forge/third_party/cudnn-local/root/usr \
  -DFORGE_CUDNN_INCLUDE_DIR=/home/aegisfang666/workspace/forge/third_party/cudnn-local/root/usr/include \
  -DFORGE_CUDNN_LIBRARY=/home/aegisfang666/workspace/forge/third_party/cudnn-local/root/usr/lib/libcudnn.so \
  -DCMAKE_CUDA_ARCHITECTURES=121a
cmake --build engine/build-cudnn-gitfe2 --target forge_ltx2_dit_test forge_ltx2_ref_render forge_ltx2_decode_latent -j$(nproc)
```

Local artifacts now present:

```text
engine/models/ltx-2.3/ltx-2.3-22b-distilled-1.1.safetensors  43G
engine/models/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors          18G
```

The NVFP4 conversion verified successfully; SHA256:

```text
5fa67764fb4b9866bc5eb8a4ee0529eb1c666b9fa2f4a8a8a4c11a07f01ec3a6
```

Direct DiT smoke now passes:

```text
loaded LTX-2.3 video DiT (48 layers) in 1.5 s (weights 16.73 GiB)
small fwd (T=192): mean -0.0017 std 0.9998 amax 4.53
  batch=2 rerun: byte-identical (deterministic)
  batch=2 isolation (slot0 invariant to slot1 data): BIT-IDENTICAL
  batch=2 slot 0 vs single: differing 0/24576, max|delta| 0, amax 6.00 [NVFP4 cuBLASLt M-position accumulation]
  batch=2 slot 1 vs single: differing 0/24576, max|delta| 0, amax 5.47 [NVFP4 cuBLASLt M-position accumulation]
warm step (T=6144, 768x512x121): 2174 ms (8-step 17.39 s)
  CFG step (T=6144): sequential 2x forward 4365 ms  batched forward_batch(2) 4377 ms  speedup 1.00x  [LTX DiT is compute/attention-bound: no BW amortization]
ltx2 dit: all checks passed
```

CTest over the broader LTX regex is not meaningful yet in this build dir because encoder/parity/e2e targets were not built and the registered `forge_ltx2_dit_test` test self-skips without default model args. The direct binary invocation above is the successful smoke.

## Next implementation hook

The narrow implementation is to add a controlled TJS candidate path to `ltx2_ref_render.cpp` or a sibling tool, not the product pipeline first:

1. Load `golden-ltx` initial noise and context.
2. Run full 8-step baseline latent as currently implemented.
3. For candidate exit step `i`, compute one fresh DiT forward at `sigma[i]`.
4. Estimate endpoint latent with `x0_hat = x_i - sigma[i] * velocity_i`.
5. Compare endpoint latent vs full baseline/reference by latent cosine/MSE.
6. Decode both through `forge_ltx2_decode_latent` and score visually with Qwen3.6.

Initial candidate exit steps: after sigma index 4 or 5 (`0.975` / `0.909375`) because LTX2.3 is already only 8 distilled steps; do not start with extremely early exits.

## Blocker

The former artifact/build blocker is cleared for DiT-level endpoint-decoding experiments: the LTX-2.3 NVFP4 model exists locally and the cuDNN-enabled DiT smoke passes.

Remaining blockers are narrower:

- Full text-to-video still needs Gemma access or a preconverted Gemma/context artifact.
- Image/video verification still needs either `golden-ltx/manifest.json` or a new controlled render sibling that saves baseline and endpoint latents/frames.
- Qwen3.6 VLM scoring should be applied after decoded LTX frames/contact sheets exist.

Remote GPU execution should wait for explicit approval or a configured budget rule.
