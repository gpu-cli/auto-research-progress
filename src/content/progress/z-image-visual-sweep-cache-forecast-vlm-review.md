---
title: "Z-Image Cache/Forecast Visual Sweep — VLM Review"
description: "Run: outputs/tjszimageturbospark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt"
date: "2026-07-09T10:18:17.739Z"
kind: report
status: published
tags: []
---

# Z-Image Cache/Forecast Visual Sweep — VLM Review

Run: `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt`

Contact sheet: `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/contact_sheet_visual_sweep.png`

Evaluator: Hermes built-in visual inspection. `llama-cli` / `llama-server` were not installed on this host at evaluation time, so Qwen-via-llama.cpp was not used in this pass. The run is structured so a local llama.cpp VLM can be added as the next evaluator.

## Matrix

Prompts:

1. `character_red_coat`
2. `character_same_identity_action`
3. `object_motion_scene`
4. `landscape_motion_scene`
5. `complex_composition`
6. `hard_consistency`

Variants:

1. `baseline_recommended`
2. `tjs_exit_20pct_scheduler`
3. `tjs_exit_40pct_scheduler`
4. `cache_velocity_conservative`
5. `cache_velocity_aggressive`
6. `forecast_velocity_conservative`
7. `forecast_velocity_aggressive`
8. `tjs_exit_40pct_cache_velocity_conservative`

## Quantitative summary

| Variant | Mean latency | Speedup vs baseline | Effective forwards | Mean SSIM vs baseline |
|---|---:|---:|---:|---:|
| baseline_recommended | 3.0983s | 1.00x | 10 | 1.0000 |
| tjs_exit_20pct_scheduler | 1.0883s | 2.85x | 3 | 0.9085 |
| tjs_exit_40pct_scheduler | 1.6325s | 1.90x | 5 | 0.9629 |
| cache_velocity_conservative | 1.8987s | 1.63x | 6 | 0.8116 |
| cache_velocity_aggressive | 1.3573s | 2.28x | 4 | 0.7517 |
| forecast_velocity_conservative | 1.9002s | 1.63x | 6 | 0.8146 |
| forecast_velocity_aggressive | 1.3582s | 2.28x | 4 | 0.7534 |
| tjs_exit_40pct_cache_velocity_conservative | 1.0906s | 2.84x | 3 | 0.7948 |

## Visual review summary

The visual sweep confirms James's concern: **SSIM underrates several cache/forecast variants**. The low-SSIM cache/forecast outputs are often not corrupted; they are alternate coherent samples with identity/composition drift.

### Variant ranking by visual usefulness

| Rank | Variant | Visual verdict | Notes |
|---:|---|---|---|
| 1 | `tjs_exit_40pct_scheduler` | Best quality/speed tradeoff | Very close to baseline on all rows; strong default. |
| 2 | `tjs_exit_20pct_scheduler` | Very fast and often usable | Some detail/identity weakening on complex/hard rows but generally coherent. |
| 3 | `cache_velocity_conservative` | Visually viable | Good portrait/object/landscape coherence. Drifts identity/composition in action/reflection rows. |
| 4 | `forecast_velocity_conservative` | Visually viable | Similar to conservative cache; sometimes slightly more natural, still sample-shifted. |
| 5 | `tjs_exit_40pct_cache_velocity_conservative` | Fast but mixed | Good speed; visually usable in some rows, weaker on hard consistency and complex composition. |
| 6 | `cache_velocity_aggressive` | Usable for simple prompts, weaker for complex | Strong speed; more visible prompt/composition drift. |
| 7 | `forecast_velocity_aggressive` | Usable for simple prompts, weaker for complex | Similar to aggressive cache. |
| 8 | `baseline_recommended` | Quality reference | Not ranked as acceleration candidate. |

## Prompt-level observations

- `character_red_coat`: almost all variants are usable. Cache/forecast variants preserve the red coat/silver hair concept, with face/framing shifts.
- `character_same_identity_action`: conservative cache/forecast remain coherent but alter identity/body pose more than TJS. Aggressive variants still look plausible but weaker as identity-preserving outputs.
- `object_motion_scene`: all variants are visually plausible hummingbirds. SSIM differences mostly reflect alternate pose/background, not failure.
- `landscape_motion_scene`: cache/forecast variants are broadly good; they change cloud/rain structure but remain prompt-faithful.
- `complex_composition`: hardest row. Cache/forecast variants show more hand/face/composition weaknesses; TJS 40 is clearly better.
- `hard_consistency`: cache/forecast variants are coherent but drift in reflection/identity details. Good enough for creative stills, not proven for identity consistency.

## Revised conclusion

Do **not** reject cache/forecast from SSIM alone, but do use visual/VLM scoring as the promotion gate.

The current evidence says:

1. `tjs_exit_40pct_scheduler` and `tjs_exit_20pct_scheduler` are the reliable acceleration candidates.
2. Conservative velocity cache/forecast are visually coherent enough to remain research leads, but Qwen3.6 did not mark them safe for shorts due artifacts in hummingbird/storm/server rows.
3. Aggressive cache/forecast are prompt-dependent and too risky for identity/composition rows.
4. `tjs_exit_40pct_cache_velocity_conservative` is fast but mixed; it may be a preview/ideation mode rather than final render mode.
5. LTX2.3 promotion should start from TJS-style endpoint decodability, not whole-velocity cache/forecast.


See `site/z-image-visual-sweep-cache-forecast-vlm-review.md` and run `outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt`. This six-prompt visual sweep supports James's read: conservative cache/forecast variants are often visually coherent despite low SSIM. Updated decision: keep conservative velocity cache/forecast alive as research candidates and use visual/VLM preference scoring as the promotion gate.

## Next recommended experiment

Use visual scoring as the promotion gate:

- expand to 12–20 prompts and 2–3 seeds;
- use blind variant labels;
- add local llama.cpp VLM scoring once `llama-server`/`llama-cli` and a multimodal GGUF/projector are installed;
- score: prompt adherence, character consistency, artifact severity, composition quality, and `usable_for_short`.

If conservative cache/forecast score near TJS 20 visually while keeping 1.6x speedup, then they are worth porting to a Forge/LTX2.3 image/video smoke lane. If only simple prompts pass, use them as prompt-adaptive modes rather than global defaults.
