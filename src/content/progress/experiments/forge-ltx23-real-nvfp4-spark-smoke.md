---
title: "Forge LTX-2.3 real NVFP4 Spark smoke"
description: "- Experiment: forge-ltx23-real-nvfp4-spark-smoke\n- Date: 2026-07-13\n- Paper ID: N/A — Forge runtime verification\n- Backend: local Forge native LTX-2.3 path\n- Device: NVIDIA GB10 \n- Remote spend: $0\n- Budget cap: local-only smoke; no rental…"
date: "2026-07-13T12:38:24.091Z"
kind: experiment
status: published
tags: []
---

# Forge LTX-2.3 real NVFP4 Spark smoke

- **Experiment:** `forge-ltx23-real-nvfp4-spark-smoke`
- **Date:** 2026-07-13
- **Paper ID:** N/A — Forge runtime verification
- **Backend:** local Forge native LTX-2.3 path
- **Device:** NVIDIA GB10 (DGX Spark)
- **Remote spend:** $0
- **Budget cap:** local-only smoke; no rental provisioned

## Requested profile

- Prompt: “A cinematic close tracking shot of a red-haired woman in a teal coat walking through a rain-slick neon alley at night, natural gait, consistent face and clothing, reflections in puddles, subtle handheld camera motion, realistic lighting, high detail”
- Seed: `9606`
- Geometry: `512x320`
- Frames/FPS: `49 @ 24 fps` (`2.04 s`)
- Quality mode: `4`, distilled-fast single-stage
- Scheduler: `distilled_fast8`
- Guidance: `1`
- Requested quantization: `nvfp4`
- Actual quantization reported by Forge: `nvfp4_rtn`
- Checkpoint: `/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors`
- Gemma: `/home/aegisfang666/models/forge/gemma-3-12b`

## Command

```bash
FORGE_LONGFORM_PROMPT='<prompt above>' \
FORGE_LONGFORM_QUALITY_MODE=4 \
FORGE_LONGFORM_REQUESTED_QUANT=nvfp4 \
FORGE_LONGFORM_W=512 FORGE_LONGFORM_H=320 \
FORGE_LONGFORM_SEG_FRAMES=49 FORGE_LONGFORM_TARGET_FRAMES=49 \
FORGE_LONGFORM_SECONDS=2 FORGE_LONGFORM_SEED=9606 \
FORGE_LONGFORM_RIFLEX_MODE=2 \
FORGE_LONGFORM_STEM=forge_real_nvfp4_512x320_49f_seed9606 \
./build-eng/forge_ltx2_longform_chain \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors \
  /home/aegisfang666/models/forge/gemma-3-12b \
  /home/aegisfang666/auto-research/outputs/ltx-real-gen-20260713
```

The RGB stream was encoded independently with ffmpeg as H.264/yuv420p at 24 fps.

## Result

- Native generation completed successfully.
- Generation wall time: `19.1004 s`
- Transformer forwards: `8`
- Seconds per transformer forward: `2.38754`
- Actual quantization: `nvfp4_rtn`
- Transient peak: `2,155,872,256` bytes
- Reported weight residency: `19,487,320,320` bytes
- RGB range/stddev/nonzero: `[0,255] / 42.9172 / 0.971501`
- MP4 independently decoded as `512x320`, `24 fps`, `49` frames.
- MP4 SHA-256: `145f019094c3708ba68d31ab7becec69d8cf2d4cd3b457325061278d521d477b`

QA highlights:

- Detail Laplacian variance p10/mean: `51.57 / 59.82`
- Motion MAE median/mean: `2.80 / 2.78`
- Freeze ratio (`MAE < 1`): `0.0`
- Advisory flags: none
- Optical-flow and semantic identity scoring were unavailable because OpenCV and a CLIP model were not configured.

Visual inspection shows strong adherence to the woman/teal-coat/neon-alley composition, stable face and clothing across sampled frames, coherent lighting/reflections, and no obvious severe anatomy or collapse. The short clip is conservative: limited camera/subject progression and softer facial detail are visible. It is real model output, but it is a low-resolution single-stage smoke, not the two-stage reference-quality profile or a three-way official/Forge/ComfyUI comparison.

## Artifacts

- MP4: `/home/aegisfang666/auto-research/outputs/ltx-real-gen-20260713/forge_real_nvfp4_512x320_49f_seed9606.mp4`
- Raw RGB: `/home/aegisfang666/auto-research/outputs/ltx-real-gen-20260713/forge_real_nvfp4_512x320_49f_seed9606.rgb`
- Native manifest: `/home/aegisfang666/auto-research/outputs/ltx-real-gen-20260713/forge_real_nvfp4_512x320_49f_seed9606.txt`
- QA metrics: `/home/aegisfang666/auto-research/outputs/ltx-real-gen-20260713/qa/metrics.json`
- QA contact sheet: `/home/aegisfang666/auto-research/outputs/ltx-real-gen-20260713/qa/contact_sheet.jpg`
