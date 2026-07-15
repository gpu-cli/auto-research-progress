---
title: "Extensive x-Prediction / TJS Z-Image-Turbo benchmark"
description: "- Run directory: outputs/tjszimageturbospark/20260708-152535-zimage-extensive-512-benchmark\n- Model: Tongyi-MAI/Z-Image-Turbo via Diffusers ZImagePipeline\n- Hardware/backend: local Spark, NVIDIA GB10, CUDA 13 stack; no gpu-cli, no remote…"
date: "2026-07-08T21:45:56.224Z"
kind: experiment
status: published
tags: []
---

# Extensive x-Prediction / TJS Z-Image-Turbo benchmark

- Run directory: `outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark`
- Model: `Tongyi-MAI/Z-Image-Turbo` via Diffusers `ZImagePipeline`
- Hardware/backend: local Spark, NVIDIA GB10, CUDA 13 stack; no `gpu-cli`, no remote GPU spend
- Matrix: 6 prompts × 4 seeds × 5 variants = 120 images
- Resolution: 1024×1024; steps: 10; guidance scale: 0.0
- Contact sheet seed0/all prompts: `outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark/contact_sheet_seed0_all_prompts.png`
- Scheduler-variant all-seed sheet: `outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark/contact_sheet_all_seeds_scheduler_variants.png`

## Summary table

| Variant | Formula | NFE | Mean latency | Median latency | Speedup | Sanity pass | Mean SSIM vs baseline | Mean PSNR vs baseline |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `baseline_recommended` | baseline | 10 | 13.55s | 13.51s | 1.00× | 100% | — | — |
| `tjs_exit_20pct_scheduler` | scheduler | 3 | 4.65s | 4.65s | 2.92× | 100% | 0.9364 | 22.949 |
| `tjs_exit_40pct_scheduler` | scheduler | 5 | 7.19s | 7.19s | 1.88× | 100% | 0.9785 | 27.708 |
| `tjs_exit_80pct_scheduler` | scheduler | 9 | 12.30s | 12.28s | 1.10× | 100% | 0.9988 | 40.24 |
| `tjs_exit_20pct_paper` | paper | 3 | 4.43s | 4.43s | 3.06× | 100% | 0.3042 | 11.303 |

## Findings

- The extensive run completed without OOM after `torch.no_grad()` was added to the hand-written TJS loop.
- Scheduler-consistent endpoint decoding is the only viable formula tested for Diffusers Z-Image. The literal paper formula consistently produces non-blank but visually invalid colored-noise images.
- 5-NFE scheduler TJS is the strongest default candidate: it halves NFE and gives roughly 2× speedup while preserving prompt structure in visual sheets.
- 3-NFE scheduler TJS is a useful fast-preview mode: much faster, often coherent, but visibly less stable on hard composition/identity prompts.
- 9-NFE scheduler TJS is close to baseline but not compelling as an acceleration setting.
- Pixel metrics are included only as sanity/relative drift indicators; generative quality must be confirmed by human visual review or downstream engine eval.

## Porting recipe for Windows engine

1. Match the Z-Image schedule: `K=10`, default Z-Image sigmas `linspace(1.0, 1/K, K)`, then apply the same FlowMatchEuler scheduler shifting used by your engine.
2. For each normal denoise step, preserve the engine convention equivalent to Diffusers `velocity = transformer(...)`; Diffusers then passes `noise_pred = -velocity` to `FlowMatchEulerDiscreteScheduler.step`.
3. For TJS with fraction `gamma`, compute `k_star = ceil(gamma*K)`. Run exactly `k_star` normal ODE/scheduler updates.
4. Run one extra transformer forward at the early-exit latent/timestep to get `velocity`. This is the `+1` endpoint NFE.
5. Use scheduler-consistent endpoint decode for Diffusers/Z-Image convention: `x0_latents = latents + sigma * velocity`, where `sigma = scheduler.sigmas[k_star]`.
6. Decode `x0_latents` through the same VAE path as baseline: `(latents / scaling_factor) + shift_factor`, then VAE decode/postprocess.
7. Disable autograd/inference graph building (`torch.no_grad`, `inference_mode`, or engine equivalent) for the whole TJS path; otherwise memory grows across variants.
8. Validate against the same seed/prompt matrix with baseline, 3-NFE, 5-NFE, 9-NFE, and the deliberately-bad literal paper formula to catch sign mistakes.

## Recommended settings

- Default quality/speed mode: scheduler TJS at `gamma=0.4` → `k*=4`, `5 NFE`.
- Fast preview mode: scheduler TJS at `gamma=0.2` → `k*=2`, `3 NFE`.
- Do not port the literal paper-formula expression directly without translating signs/scheduler convention.
