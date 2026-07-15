---
title: "Spectrum + TJS Full Stack: Five 1024px Comparisons"
description: "The complete practical stack works. Against the normal 10-NFE Z-Image-Turbo reference, Spectrum plus conservative 9-NFE TJS completed five distinct matched 1024x1024 sets at 1.91x mean speedup, mean SSIM 0.9562, and no severe selected…"
date: "2026-07-10T15:24:13.581Z"
kind: report
status: published
tags: []
---

# Spectrum + TJS Full Stack: Five 1024px Comparisons

## Verdict

**The complete practical stack works.** Against the normal 10-NFE Z-Image-Turbo reference, Spectrum plus conservative 9-NFE TJS completed five distinct matched 1024x1024 sets at **1.91x mean speedup**, mean SSIM **0.9562**, and no severe selected visual failure.

This remains an opt-in experiment. Fine facial identity, hands, clothing layers, cloud texture, and synthetic UI can shift. The unchanged reference path remains preferable for exact identity-sensitive final renders.

## Performance and quality

| Set | Scene | Reference | Full stack | Speedup | SSIM | PSNR |
|---:|---|---:|---:|---:|---:|---:|
| 1 | Mira portrait | 38.1311 s | 19.3738 s | 1.97x | 0.9510 | 24.01 dB |
| 2 | Mira at train station | 36.5420 s | 19.2599 s | 1.90x | 0.9526 | 22.81 dB |
| 3 | Glass robot hummingbird | 36.4903 s | 19.2469 s | 1.90x | 0.9828 | 28.26 dB |
| 4 | Stormy desert server farm | 36.4926 s | 19.2583 s | 1.90x | 0.9602 | 24.66 dB |
| 5 | Three people at server rack | 36.4837 s | 19.2473 s | 1.90x | 0.9343 | 20.56 dB |
| **Mean** | **Five matched sets** | **36.8279 s** | **19.2772 s** | **1.91x** | **0.9562** | **24.06 dB** |

Configuration: unchanged Z-Image-Turbo checkpoint; local NVIDIA GB10 Spark; seed 0; 1024x1024; five full transformer evaluations plus four Spectrum forecasts; TJS `gamma=0.8` endpoint; no remote GPU spend.

## Five-set overview

![Five matched 1024px reference/full-stack sets](/assets/spectrum-stack/overview-five-sets-reference-vs-full-stack-1024.png)

## Full-resolution pairs

1. [Mira portrait](/assets/spectrum-stack/set-1-reference-vs-full-stack-1024.png)
2. [Mira at neon train station](/assets/spectrum-stack/set-2-reference-vs-full-stack-1024.png)
3. [Glass robot hummingbird](/assets/spectrum-stack/set-3-reference-vs-full-stack-1024.png)
4. [Stormy desert server farm](/assets/spectrum-stack/set-4-reference-vs-full-stack-1024.png)
5. [Three people at the video diffusion rack](/assets/spectrum-stack/set-5-reference-vs-full-stack-1024.png)

## Visual findings

- Character scenes retain the intended silver hair, red coat, pose, setting, and object count while changing fine identity details.
- The hummingbird is nearly indistinguishable and gives the highest SSIM (`0.9828`).
- The wide server-farm composition remains stable, including rack count/layout and storm structure.
- The three-person scene retains all subjects and the pointing gesture. It is the least pixel-similar row (`0.9343`) but remains coherent.
- No selected output shows noise collapse, a missing subject, gross anatomy failure, or broken scene geometry.

## Four-way promotion gate

A warmed six-prompt × four-seed 512px matrix and six hard 1024px rows compared all four selectable modes:

| Resolution / mode | Latency | Speedup | NFE | Full / forecast DiT | Mean / min SSIM |
|---|---:|---:|---:|---:|---:|
| 512 baseline | 7.6323 s | 1.00x | 10 | 10 / 0 | 1.0000 / 1.0000 |
| 512 TJS-9 | 7.0559 s | 1.08x | 9 | 9 / 0 | 0.9979 / 0.9959 |
| 512 Spectrum | 4.8204 s | 1.58x | 10 | 6 / 4 | 0.9232 / 0.7609 |
| 512 Spectrum × TJS-9 | 4.0428 s | **1.89x** | 9 | 5 / 4 | 0.9182 / 0.7525 |
| 1024 baseline | 36.3196 s | 1.00x | 10 | 10 / 0 | 1.0000 / 1.0000 |
| 1024 TJS-9 | 32.8874 s | 1.10x | 9 | 9 / 0 | 0.9990 / 0.9983 |
| 1024 Spectrum | 22.6097 s | 1.61x | 10 | 6 / 4 | 0.9515 / 0.9151 |
| 1024 Spectrum × TJS-9 | 19.1817 s | **1.89x** | 9 | 5 / 4 | 0.9486 / 0.9109 |

![512px four-way overview](/assets/spectrum-stack/four-way-512-overview.png)

![1024px four-way overview](/assets/spectrum-stack/four-way-1024-overview.png)

### Review verdict

Qwen3.6 conservatively rejected combined mode on four identity/structure sheets and recommended Spectrum-only. Full-resolution 1024px human review did not confirm its claimed severe face merging or broken reflections: all subjects, anatomy, scene geometry, and reflection logic remained coherent, but fine identity and structural details shifted.

**Promotion:** expose combined mode as an explicit preview/general fast option. Preserve baseline and TJS-9 for exact identity-sensitive final renders.

## Engineering status

Typed Spectrum controls now flow from graph through runtime and append-only ABI to the Z-Image pipeline, with explicit TJS composition, strict unsupported-mode rejection, full/forecast metadata, byte-stable default graphs, and generation-boundary leakage tests. The validated change targets PR #3 after independent blocker review and CI.

Detailed record: `wiki/experiments/spectrum-tjs-stack-zimage-turbo-forge-spark.md`
