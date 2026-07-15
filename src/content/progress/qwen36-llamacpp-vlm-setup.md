---
title: "Qwen3.6-35B-A3B via llama.cpp setup"
description: "- llama.cpp source: /home/aegisfang666/tools/llama.cpp\n- build: /home/aegisfang666/tools/llama.cpp/build\n- symlinked CLIs:\n  - /home/aegisfang666/.local/bin/llama-cli\n  - /home/aegisfang666/.local/bin/llama-server\n  -…"
date: "2026-07-09T05:27:33.208Z"
kind: report
status: published
tags: []
---

# Qwen3.6-35B-A3B via llama.cpp setup

Date: 2026-07-08

## Installed artifacts

- llama.cpp source: `/home/aegisfang666/tools/llama.cpp`
- build: `/home/aegisfang666/tools/llama.cpp/build`
- symlinked CLIs:
  - `/home/aegisfang666/.local/bin/llama-cli`
  - `/home/aegisfang666/.local/bin/llama-server`
  - `/home/aegisfang666/.local/bin/llama-mtmd-cli`
  - `/home/aegisfang666/.local/bin/llama-qwen2vl-cli`
- model repo used for GGUF: `unsloth/Qwen3.6-35B-A3B-GGUF`
- model file: `/home/aegisfang666/models/qwen3.6-35b-a3b-gguf/Qwen3.6-35B-A3B-UD-Q4_K_M.gguf`
- multimodal projector: `/home/aegisfang666/models/qwen3.6-35b-a3b-gguf/mmproj-F16.gguf`
- helper script: `scripts/qwen36_vlm_eval.sh`

The original HF repo `Qwen/Qwen3.6-35B-A3B` is a Transformers repo with no GGUF files. The working local GGUF came from Unsloth.

## Build

Built llama.cpp at commit `32e41fa` with CUDA enabled:

```bash
cmake -S /home/aegisfang666/tools/llama.cpp \
  -B /home/aegisfang666/tools/llama.cpp/build \
  -DGGML_CUDA=ON \
  -DCMAKE_BUILD_TYPE=Release
cmake --build /home/aegisfang666/tools/llama.cpp/build --config Release -j$(nproc)
```

Detected device:

```text
CUDA0: NVIDIA GB10 (124610 MiB, 119543 MiB free)
```

## Text smoke test

Working command shape:

```bash
llama-cli \
  -m /home/aegisfang666/models/qwen3.6-35b-a3b-gguf/Qwen3.6-35B-A3B-UD-Q4_K_M.gguf \
  -ngl all -c 4096 -n 96 --temp 0.1 \
  --conversation --single-turn --simple-io --log-disable \
  --chat-template-kwargs '{"enable_thinking":false}' \
  -p 'Answer in one short sentence only: what is 2+2?'
```

Output:

```text
2+2 equals 4.
```

Important: for text mode, use `--conversation --single-turn` plus `--chat-template-kwargs '{"enable_thinking":false}'`. Without that, Qwen3.6 defaults to thinking and can emit long reasoning/blank streams.

## Vision smoke test

Helper:

```bash
scripts/qwen36_vlm_eval.sh IMAGE_PATH PROMPT OUTPUT_PATH
```

Example used:

```bash
scripts/qwen36_vlm_eval.sh \
  outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/contact_sheet_visual_sweep.png \
  'Inspect this Z-Image acceleration contact sheet. Are most images coherent? Which variants look safest? Answer with concise bullets; include a final recommendation.' \
  outputs/tjs_z_image_turbo_spark/20260708-224333-zimage-visual-sweep-cache-forecast-6prompt/qwen36_vlm_eval_raw.txt
```

Qwen correctly identified the sheet structure:

- 6 rows / 8 columns
- row subjects: red-coat woman portrait, subway scene, hummingbird, solar-farm storm, server-room people, shop-window reflection
- columns: baseline, TJS 20%, TJS 40%, conservative/aggressive cache, conservative/aggressive forecast, TJS+cache
- visual judgment: most images are coherent; TJS scheduler columns look safest; conservative cache/forecast also look close/viable.

## Current limitation

`llama-mtmd-cli` does not expose the same `--chat-template-kwargs` path as `llama-cli`, so Qwen3.6 vision mode currently emits thinking before the final answer. The raw output is usable but verbose. For automated scoring, either:

1. run with a higher `QWEN36_N_PREDICT` and post-process after `</think>` when present, or
2. use `llama-server` / OpenAI-compatible route if it accepts `chat_template_kwargs` for multimodal requests.

## Research use

Use this for visual scoring of generated-image/video sweeps where SSIM underrates alternate but coherent trajectories. Suggested rubric:

- prompt adherence
- image quality
- identity/character consistency
- artifact severity
- composition quality
- usable for short/video
- pairwise preference vs baseline/TJS
