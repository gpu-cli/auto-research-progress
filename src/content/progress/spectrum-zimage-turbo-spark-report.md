---
title: "Spectrum on Forge Z-Image-Turbo: Spark A/B Report"
description: "Promote as an opt-in experimental Forge acceleration. Spectrum forecasts four of ten internal Z-Image transformer evaluations while retaining the original scheduler and checkpoint. Across the final post-review 24-pair 512px A/B matrix it…"
date: "2026-07-10T12:36:15.537Z"
kind: report
status: published
tags: []
---

# Spectrum on Forge Z-Image-Turbo: Spark A/B Report

## Verdict

**Promote as an opt-in experimental Forge acceleration.** Spectrum forecasts four of ten internal Z-Image transformer evaluations while retaining the original scheduler and checkpoint. Across the final post-review 24-pair 512px A/B matrix it was **1.59x faster** with coherent visible output.

Do not enable it by default yet: difficult multi-subject and reflection rows can shift identity, framing, and fine object details even when the result remains visually valid.

## Performance

| Resolution | Baseline mean | Spectrum mean | Speedup | Pairs |
|---|---:|---:|---:|---:|
| 256x256 | 2.3468 s | 1.4861 s | 1.58x | 24 |
| 512x512 | 7.4434 s | 4.6890 s | 1.59x | 24 |
| 1024x1024 | 36.5571 s | 22.7676 s | 1.61x | 1 |

Configuration: Z-Image-Turbo, 10 steps, identical prompts/seeds, forecast steps `2,4,6,8`, NVIDIA GB10 Spark, no remote spend.

## Quality

512px aggregate:

- Mean/median SSIM: **0.9232 / 0.9329**
- Minimum SSIM: **0.7609**
- Mean/median PSNR: **22.16 / 21.24 dB**

SSIM measures baseline preservation, not standalone generation quality. Side-by-side inspection found no selected noise collapse, missing-subject failure, or severe anatomy failure. Spectrum preserved the requested red-coat/silver-hair character, train-station layout, three-person server-rack scene, and puddle/window reflection structure, while changing fine identity and composition details.

![Selected 512px baseline/Spectrum pairs](/assets/spectrum-zimage/contact-sheet-512.png)

The matched 1024px pair retained the same character, coat, portrait composition, and workstation context with SSIM **0.9532** and PSNR **24.20 dB**. Fine facial, clothing-layer, and background-UI details shifted, but no obvious anatomy or artifact regression appeared.

![Matched 1024px baseline/Spectrum pair](/assets/spectrum-zimage/baseline-vs-spectrum-1024.png)

Representative files:

- [Baseline 512px](/assets/spectrum-zimage/baseline-p0-s0-512.bmp)
- [Spectrum 512px](/assets/spectrum-zimage/spectrum-p0-s0-512.bmp)

## Artifacts

- Raw 256px matrix: `outputs/spectrum-spark/ab-256/`
- Raw final 512px matrix: `outputs/spectrum-spark/ab-512-final/`
- Final benchmark log: `outputs/spectrum-spark/ab-512-final.log`
- 1024px pair: `outputs/spectrum-spark/ab-1024-20260710/`
- 1024px log: `outputs/spectrum-spark/ab-1024-20260710.log`
- Wiki record: `wiki/experiments/spectrum-zimage-turbo-forge-spark.md`

## Verification

Passing Forge targets:

- `forge_tests`
- `forge_spectrum_forecast_test`
- `forge_zimage_tjs_gate`

The global build currently reaches unrelated existing Linux-only SeedVR2 test errors caused by `_putenv`; that is documented rather than folded into the Spectrum change.

Spectrum now resets at an explicit generation boundary, snapshots validated schedule parameters, allocates six history states through the VRAM arena (45 MiB at 512px), and fails closed for CFG, batching, masks/img2img, TJS, or non-10-step schedules. The gate verifies six full evaluations, four forecasts, and a paired SSIM floor.
