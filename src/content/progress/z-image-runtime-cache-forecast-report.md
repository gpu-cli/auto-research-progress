---
title: "Z-Image Runtime Cache/Forecast Test Report"
description: "Correction after visual review: TJS remains the only confirmed quantitative/reference-preserving win, but the cache/forecast probes are more visually viable than SSIM suggested. Most non-noise outputs in the contact sheet look coherent and…"
date: "2026-07-09T03:18:15.945Z"
kind: report
status: published
tags: []
---

# Z-Image Runtime Cache/Forecast Test Report

Local Spark follow-up after the x-Prediction/TJS win.

## Verdict

Correction after visual review: TJS remains the only confirmed quantitative/reference-preserving win, but the cache/forecast probes are **more visually viable than SSIM suggested**. Most non-noise outputs in the contact sheet look coherent and usable; they should not be dismissed from SSIM alone.

## Runs

- Velocity cache + forecast probe: `outputs/tjs_z_image_turbo_spark/20260708-205824-zimage-cache-forecast-probe-2prompt`
- TeaCache body-residual first probe: `outputs/tjs_z_image_turbo_spark/20260708-210523-zimage-teacache-body-probe-2prompt`
- TeaCache fixed-gate safety probe: `outputs/tjs_z_image_turbo_spark/20260708-211001-zimage-teacache-body-fixedgate-2prompt`
- Wiki note: `wiki/experiments/z-image-runtime-cache-forecast-probes.md`

## Key metrics

| Variant | Mean latency | Effective forward calls | Mean SSIM vs baseline | Verdict |
|---|---:|---:|---:|---|
| baseline | 3.36s | 10 | 1.000 | reference |
| TJS 40% scheduler | 1.64s | 5 | 0.978 | keep |
| velocity cache conservative | 1.91s | 6 | 0.840 | visually viable; sample shifts |
| velocity forecast conservative | 1.91s | 6 | 0.843 | visually viable; sample shifts |
| TeaCache body first probe | 0.78s | 1 body miss / 9 hits | 0.394 | visually poor/over-skipped in unguarded body-cache test |
| TeaCache body fixed gate | 3.02s | 10 body misses / 0 hits | 1.000 | safe but no speedup |
| TJS 40% + TeaCache fixed gate | 1.65s | 5 body misses / 0 hits | 0.978 | same as TJS, no additive win |

## Interpretation

- Whole-velocity cache/forecasting shifts the sample and identity/composition enough to reduce SSIM, but visual review shows many outputs are still coherent and likely usable.
- TeaCache is still consequential prior art, but the Diffusers hook did not reproduce the MLX Z-Image gate scale. With a permissive gate it destroys quality; with safety gating it skips nothing.
- FasterCache CFG branch skipping is not useful for current Z-Image-Turbo because CFG is 0.
- DeepCache is U-Net-shaped and not a direct DiT/Z-Image fit.
- PAB remains feasible but invasive; should only be tried with per-layer guardrails.

## Decision

Do not treat the SSIM-only result as a rejection. The next step is a larger visual sweep / human preference pass for the velocity cache and forecast variants. Do not promote the broken unguarded TeaCache body-cache hook, but the visually coherent velocity cache/forecast outputs are still live candidates.
