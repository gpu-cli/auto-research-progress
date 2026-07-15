---
title: "Qwen3.6 VLM Review — Z-Image Cache/Forecast Visual Sweep"
description: "- Contact sheet: outputs/tjszimageturbospark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/contactsheetvisualsweep.png\n- Raw Qwen output: outputs/tjszimageturbospark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/qw…"
date: "2026-07-09T10:17:58.419Z"
kind: report
status: published
tags: []
---

# Qwen3.6 VLM Review — Z-Image Cache/Forecast Visual Sweep

Date: 2026-07-08

## Run

- Contact sheet: `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/contact_sheet_visual_sweep.png`
- Raw Qwen output: `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/qwen36_vlm_eval_raw.txt`
- Cleaned output: `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/qwen36_vlm_eval_clean.txt`
- Structured JSON: `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/qwen36_vlm_eval.json`
- Evaluator: Qwen3.6-35B-A3B Q4_K_M GGUF + `mmproj-F16.gguf` via llama.cpp `llama-mtmd-cli`
- Pipeline helper: `scripts/qwen36_vlm_score_sweep.py`

## Overall VLM judgment

- Most images coherent: **true**
- Safest variants: `tjs_exit_20pct_scheduler`, `tjs_exit_40pct_scheduler`

The contact sheet displays a comparison of different acceleration methods for image generation. The `baseline_recommended` column serves as the high-quality reference. The `tjs_exit_20pct_scheduler` and `tjs_exit_40pct_scheduler` columns show high fidelity to the baseline, with minor variations in texture and sharpness. `cache_velocity_conservative` and `cache_velocity_aggressive` introduce noticeable artifacts, particularly in the hummingbird and storm scenes, with the aggressive variant showing more distortion. `forecast_velocity_conservative` and `forecast_velocity_aggressive` also show degradation, with the aggressive variant having significant blurring and loss of detail. The `tjs_exit_40pct_cache_velocity_conservative` column appears to be a hybrid approach that mitigates some artifacts but still shows some degradation compared to the baseline.

## Structured variant scores

Scale: visual/prompt/identity are 1–5 where 5 is best; artifact severity is 1–5 where 1 is best.

| Variant | Visual | Prompt | Identity | Artifact severity | Usable for short | Notes |
|---|---:|---:|---:|---:|---|---|
| `baseline_recommended` | 5 | 5 | 5 | 1 | yes | High quality reference. Sharp details, correct lighting, and consistent character appearance across all rows. |
| `tjs_exit_20pct_scheduler` | 4 | 5 | 5 | 2 | yes | Very close to baseline. Slightly softer texture in the coat and background, but overall excellent quality. Character identity is well preserved. |
| `tjs_exit_40pct_scheduler` | 4 | 5 | 5 | 2 | yes | Slightly more noticeable softness compared to the 20% variant, but still very high quality. Character details are well maintained. |
| `cache_velocity_conservative` | 3 | 4 | 4 | 3 | no | Noticeable artifacts in the hummingbird wing structure and storm-cloud texture. The character portraits are okay but slightly less sharp. |
| `cache_velocity_aggressive` | 2 | 3 | 3 | 4 | no | Significant artifacts. Hummingbird wings are distorted, storm clouds look smeared, and character faces are slightly distorted. |
| `forecast_velocity_conservative` | 3 | 4 | 4 | 3 | no | Blurring is evident, especially in the server room and storm scenes. Character details are less sharp than baseline. |
| `forecast_velocity_aggressive` | 2 | 3 | 3 | 4 | no | Severe blurring and loss of detail. Character faces are blurry, server lights are smeared, storm clouds lack definition. |
| `tjs_exit_40pct_cache_velocity_conservative` | 3 | 4 | 4 | 3 | no | Hybrid approach shows some improvement over pure cache/forecast but still has artifacts. Hummingbird wings are a bit odd, storm clouds are less defined. |

## Research recommendation from VLM

The `tjs_exit_20pct_scheduler` and `tjs_exit_40pct_scheduler` variants offer the best balance of speed and quality, closely matching the baseline. The `cache_velocity` and `forecast_velocity` variants show significant quality degradation, especially in complex scenes like the hummingbird and storm clouds. Further research should focus on optimizing the `tjs_exit` methods or finding a way to combine their strengths with the `cache_velocity` approach to reduce artifacts.

## Interpretation for our lane

The VLM agrees with James's human read that the sheet is mostly coherent, but it is stricter than the earlier human eyeball pass about whether cache/forecast variants are ready for shorts. It treats conservative cache/forecast as visually interesting but not yet reliable enough for promotion. That points to a useful next research question: keep TJS as the safe acceleration baseline, and move cache/forecast work inward to attention/block/feature-level reuse rather than whole-velocity reuse.

## Consequence

- Promote **TJS scheduler early-exit** as the reliable acceleration candidate.
- Keep conservative velocity cache/forecast as a research signal, not a product/smoke-test candidate.
- For LTX/Forge, test TJS-style endpoint decodability first, not whole-velocity cache/forecast.
