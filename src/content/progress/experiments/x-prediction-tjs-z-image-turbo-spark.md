---
title: "x-Prediction / TJS Z-Image-Turbo Spark Results"
description: "- Run: outputs/tjszimageturbospark/20260708-151846-zimage-two-prompt-scheduler-sweep\n- Model: Tongyi-MAI/Z-Image-Turbo\n- Backend: local Spark / NVIDIA GB10; no gpu-cli, no remote GPU spend\n- Resolution: 512x512; prompts: 2; seed: 0;…"
date: "2026-07-08T21:21:00.648Z"
kind: experiment
status: published
tags: []
---

# x-Prediction / TJS Z-Image-Turbo Spark Results

- Run: `outputs/tjs_z_image_turbo_spark/20260708-151846-zimage-two-prompt-scheduler-sweep`
- Model: `Tongyi-MAI/Z-Image-Turbo`
- Backend: local Spark / NVIDIA GB10; no gpu-cli, no remote GPU spend
- Resolution: 512x512; prompts: 2; seed: 0; requested steps: 10
- Contact sheet: `outputs/tjs_z_image_turbo_spark/20260708-151846-zimage-two-prompt-scheduler-sweep/contact_sheet_2prompts.png`

| Variant | Formula | NFE | Avg latency | Speedup vs baseline | Quality finding |
|---|---:|---:|---:|---:|---|
| `baseline_recommended` | baseline | 10 | 3.39s | 1.00x | Best / reference quality; prompt adherence good. |
| `tjs_exit_20pct_scheduler` | scheduler | 3 | 1.09s | 3.10x | Usable. Slightly softer / minor facial-detail degradation, but prompt adherence holds. |
| `tjs_exit_40pct_scheduler` | scheduler | 5 | 1.64s | 2.06x | Best tradeoff. Very close to baseline visually, significant speedup. |
| `tjs_exit_80pct_scheduler` | scheduler | 9 | 2.74s | 1.24x | Closest to baseline but only small NFE saving. |
| `tjs_exit_20pct_paper` | paper | 3 | 1.04s | 3.26x | Not usable here; collapses to colored noise under Diffusers convention. |

## Interpretation

- The scheduler-consistent endpoint decode is the right convention for Diffusers ZImagePipeline in this harness.
- Literal paper-formula decode produced colored-noise failures, so the paper notation needs translation to Diffusers scheduler/model-output signs.
- 3-NFE scheduler TJS holds up surprisingly well for these two smoke prompts, but 5-NFE is the safer quality/speed tradeoff.
- Character identity and red-coat prompt adherence remain broadly intact for scheduler variants across portrait and train-station action prompts.
- The prior exit-137 was consistent with autograd memory growth in the manual loop. Wrapping the TJS path in `torch.no_grad()` fixed the sweep.
