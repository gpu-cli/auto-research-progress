---
title: "GitHub Project Watch"
description: "Daily rate-limit-friendly GitHub repository watch for Forge-relevant AI video, diffusion, quantization, CUDA/NVIDIA, ComfyUI, and local inference projects."
date: "2026-07-14T15:05:09.114Z"
kind: report
status: published
tags: []
---

# GitHub Project Watch

> Daily rate-limit-friendly GitHub repository watch for Forge-relevant AI video, diffusion, quantization, CUDA/NVIDIA, ComfyUI, and local inference projects.

## 2026-07-08T16:46:15-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

**Before live searches**

```json
{"core":{"limit":5000,"remaining":4400,"reset":1783552750,"used":600},"graphql":{"limit":5000,"remaining":4973,"reset":1783551164,"used":27},"search":{"limit":30,"remaining":30,"reset":1783550704,"used":0}}
```

**After live searches**

```json
{"core":{"limit":5000,"remaining":4400,"reset":1783552750,"used":600},"graphql":{"limit":5000,"remaining":4973,"reset":1783551164,"used":27},"search":{"limit":30,"remaining":22,"reset":1783550791,"used":8}}
```

Authenticated GitHub CLI was available as `lightsofapollo`, so live repository search proceeded. Search budget used: 8/8 allowed repository-search queries; no code search.

### Forge orientation

- Synced target repo safely: `/home/aegisfang666/workspace/forge` was clean on `main`; `git pull --ff-only origin main` reported `Already up to date`.
- Relevant Forge hooks from the bounded context pass:
  - Backend A: native C++ diffusion/video engine for Z-Image/Z-Image-Turbo and LTX-2.3.
  - Quantization: NVFP4 W4A4 via cuBLASLt-FP4, AWQ/SVDQuant variants, z-image/LTX/SeedVR2 quant gates.
  - Long-form video: LTX latent-tail extension, overlap conditioning, AdaIN latent renorm, RIFLEx, and training-free character consistency via CharaConsist-style DiT hooks.
  - Media/runtime: Windows + NVIDIA deployment, one VRAM budget, C ABI/Rust bindings, native no-Python runtime target.

### Exact `gh search` queries run

Window used: `pushed:>2026-04-09`.

1. `z-image-turbo quantization language:Python pushed:>2026-04-09`
2. `video diffusion inference optimization language:Python pushed:>2026-04-09`
3. `character consistency diffusion identity preservation pushed:>2026-04-09`
4. `Wan video diffusion quantization language:Python pushed:>2026-04-09`
5. `HunyuanVideo inference optimization language:Python pushed:>2026-04-09`
6. `CogVideoX inference optimization language:Python pushed:>2026-04-09`
7. `ComfyUI character consistency video diffusion pushed:>2026-04-09`
8. `NVFP4 CUDA quantization inference pushed:>2026-04-09`

Raw captured search output: `outputs/github-watch/search-20260708T164531-0600.jsonl`.

### Top candidate repositories

| Rank | Repo | Stars | Pushed | Score | Reason | Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|---|
| 1 | [`iconben/z-image-studio`](https://github.com/iconben/z-image-studio) | 121 | 2026-07-02 | 11 | Fresh Apache-2.0 Z-Image-Turbo CLI/WebUI/MCP server explicitly supporting base and quantized models. | Compare its local Z-Image-Turbo orchestration, quantized-model assumptions, and MCP/API surfaces against Forge's Z-Image ABI and app-facing quant workflow. | Python app layer may be useful mostly as UX/orchestration reference, not native runtime code. | Manual deep inspection later; extract model paths, quant artifact expectations, and prompt/image API shape. No clone in this scheduled run. |
| 2 | [`g023/zlightning_inf_cpp`](https://github.com/g023/zlightning_inf_cpp) | 0 | 2026-06-10 | 10 | C++/CUDA Z-Image-Turbo inference engine targeting 1024x1024 PNG on 12GB RTX 3060-class hardware. | Very direct Backend A relevance: native Z-Image-Turbo inference, memory pressure, CUDA kernels, possible conversion/loading lessons for Forge's no-Python path. | Zero stars and unknown maturity; language reported as Makefile; may be a small prototype or incomplete. | High-priority manual source audit candidate; check license boundaries, kernel approach, loader format, and whether it has reproducible timings. |
| 3 | [`kekzl/imp`](https://github.com/kekzl/imp) | 29 | 2026-07-08 | 8 | Fresh MIT C++/CUDA RTX 5090 inference engine claiming NVFP4, long-context loops, tool calling, and fastest single-stream decode. | Not diffusion, but overlaps Forge Backend B/deferred llama.cpp NVFP4 patch thinking: Blackwell NVFP4 kernels, CUDA graph/decode path, single-stream latency priorities. | Claims are broad and may be unverified; Claude-generated code warning in description; could be noisy or benchmark-fragile. | Manual metadata/code-read later, not clone-by-default; inspect benchmark methodology and NVFP4 implementation only if time permits. |
| 4 | [`intel/auto-round`](https://github.com/intel/auto-round) | 1512 | 2026-07-08 | 8 | Actively maintained Apache-2.0 low-bit quantization toolkit with CPU/XPU/CUDA support and vLLM/SGLang/Transformers compatibility. | Potential calibration/quality reference for Forge AWQ/SVDQuant/default recipe decisions and quant quality gates. | Primarily LLM/Python ecosystem; integration path to native diffusion NVFP4 artifacts may be indirect. | Track as quant-quality reference; inspect docs for calibration corpora and CUDA low-bit coverage before borrowing ideas. |
| 5 | [`mikeyoubeach/zimage-lora-trainer`](https://github.com/mikeyoubeach/zimage-lora-trainer) | 2 | 2026-04-29 | 7 | Z-Image-Turbo LoRA training pipeline with quality filtering, batch captioning, uint4 quantization, and ComfyUI integration. | Useful for Forge's character-consistency path where per-character LoRAs remain the fallback if training-free DiT hooks stall. | Training-oriented, not Forge's preferred no-training path; license unspecified; low stars. | Later inspect as a reference for datasets/captioning/ComfyUI artifacts, not as runtime dependency. |
| 6 | [`MerkyorLynn/lynn-engine`](https://github.com/MerkyorLynn/lynn-engine) | 21 | 2026-06-08 | 6 | Native LLM inference engine mentioning W4A8/NVFP4 quantization, custom CUDA/Triton kernels, MoE, speculative decoding, and Blackwell. | Backend B/deferred native NVFP4 LLM path and CUDA-kernel reference, especially if it contains clear kernels or benchmark harnesses. | Python language, license unspecified, LLM-only, likely not directly reusable for diffusion/video. | Track only; inspect if Forge resumes Backend B native NVFP4 work. |
| 7 | [`abrahamjroy/ProcessedElectricSheepDreams`](https://github.com/abrahamjroy/ProcessedElectricSheepDreams) | 32 | 2026-02-03 | 6 | Local Z-Image-Turbo app claiming optimized SDNQ quantization, image-to-image, inpainting, MCP, NVIDIA/AMD support. | UX/workflow and quant-artifact reference for Forge app surfaces around text-to-image, image-to-image, and inpainting. | Pushed date is outside the intended 90-day window despite search query; license unspecified; native app details unclear. | Low-priority manual review only if Z-Image app/workflow references are needed. |
| 8 | [`9prodhi/qwen3-moe-rs`](https://github.com/9prodhi/qwen3-moe-rs) | 1 | 2026-07-02 | 5 | Rust Burn Qwen3 MoE inference/training stack mentioning FP8/NVFP4, CUDA-graph decode, OpenAI-compatible server. | Rust/CUDA graph and NVFP4 LLM runtime reference; possible contrast with Forge Rust bindings and Backend B design. | Very low stars, LLM-only, license `other`, likely not directly relevant to diffusion/video. | Keep as low-priority watch item; no action now. |

### Skipped / noise notes

- Six of eight queries returned zero repositories under the chosen freshness window/search syntax: video diffusion optimization, character consistency, Wan quantization, HunyuanVideo optimization, CogVideoX optimization, and ComfyUI character consistency. This likely reflects query strictness rather than absence of relevant projects.
- `BarnettZhou/zit-mac` is Apple/Metal-focused and mobile/Apple-local rather than Forge's Windows + NVIDIA target; not recommended except for GGUF workflow comparison.
- `miguefuentes1985/vllm-qwen3.5-nvfp4-5090` is fresh but zero-star and appears to be a narrow vLLM recipe rather than reusable implementation.
- Some `pushed` dates in the `z-image-turbo` result set predate the requested `pushed:>2026-04-09` window; treat the raw search as GitHub's best-effort result list and manually gate freshness in scoring.

### Best follow-up opportunities

1. **Manual deep inspection of `g023/zlightning_inf_cpp`** for native C++/CUDA Z-Image-Turbo implementation details that could inform Forge's Backend A loader/kernel/runtime path.
2. **Manual inspection of `iconben/z-image-studio`** for quantized Z-Image-Turbo artifact assumptions, CLI/WebUI/MCP UX, and local smoke-test patterns.
3. **Track `intel/auto-round` and `kekzl/imp`** as quantization/Blackwell NVFP4 references, but only after higher-priority Forge Z-Image and video-diffusion items.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. No GPU spend occurred.

## 2026-07-09T09:02:22-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

**Before live searches**

```json
{"core":{"limit":5000,"remaining":5000,"reset":1783612843,"used":0},"graphql":{"limit":5000,"remaining":5000,"reset":1783612843,"used":0},"search":{"limit":30,"remaining":30,"reset":1783609303,"used":0}}
```

**After live searches**

```json
{"core":{"limit":5000,"remaining":5000,"reset":1783612911,"used":0},"graphql":{"limit":5000,"remaining":5000,"reset":1783612911,"used":0},"search":{"limit":30,"remaining":22,"reset":1783609365,"used":8}}
```

Authenticated GitHub CLI was available as `lightsofapollo`, so live repository search proceeded. Search budget used: 8/8 allowed repository-search queries; no code search. Note: an initial invalid `gh search --json repositoryTopics` attempt failed before consuming search quota; the successful searches used valid `gh search repos` fields.

### Forge orientation

- Target repo `/home/aegisfang666/workspace/forge` was on `main` but not clean: `?? engine/models/`. Per safety rule, no fetch/pull was run; current tree was used.
- Bounded Forge context read: `README.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/MEDIA.md`, `docs/MODELS.md`, `docs/QUANT_SUPPORT_MATRIX.md`, and `media/README.md`.
- Relevant hooks:
  - Native Backend A targets Z-Image/Z-Image-Turbo first, then LTX-2.3; quant matrix has Z-Image/LTX NVFP4/AWQ/SVDQuant legs partially covered.
  - Long-form plan prioritizes keyframe identity, LTX latent-tail extension/overlap, AdaIN renorm, RIFLEx, and app-side chaining.
  - `media/` now has NVENC/NVDEC, MP4 mux, WAV, subtitles, and clip concat/trim primitives, so shorts-maker pipelines are relevant as workflow/fixture references.

### Exact `gh search` queries run

Window used: `pushed:>2026-04-10`.

1. `z image turbo quantization OR z-image-turbo language:Python pushed:>2026-04-10`
2. `video diffusion inference optimization language:Python pushed:>2026-04-10`
3. `character consistency diffusion OR identity preservation diffusion pushed:>2026-04-10`
4. `Wan video diffusion quantization language:Python pushed:>2026-04-10`
5. `HunyuanVideo inference optimization language:Python pushed:>2026-04-10`
6. `ComfyUI character consistency video diffusion pushed:>2026-04-10`
7. `AI shorts generator ffmpeg moviepy clips language:Python pushed:>2026-04-10`
8. `storyboard video generation clips consistency language:Python pushed:>2026-04-10`

Raw captured search output: `outputs/github-watch/search-20260709T090222-0600.json`.

### Top candidate repositories

| Rank | Repo | Stars | Pushed | Score | Reason | Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|---|
| 1 | [`iconben/z-image-studio`](https://github.com/iconben/z-image-studio) | 121 | 2026-07-02 | 10 | Apache-2.0 Python CLI/WebUI/MCP server for Z-Image-Turbo base and quantized models; topics include CUDA, ROCm, diffusers, LoRA, MCP, WebUI. | Compare local Z-Image-Turbo orchestration, quantized model assumptions, CLI/API/MCP surfaces, and smoke-test UX against Forge's Z-Image ABI and quant workflow. | Python app layer; not a native runtime implementation. | Manual deep inspection later; extract artifact layout, prompt/image API shape, and quant compatibility expectations. |
| 2 | [`martin-rizzo/ComfyUI-ZImagePowerNodes`](https://github.com/martin-rizzo/ComfyUI-ZImagePowerNodes) | 312 | 2026-06-26 | 9 | Active ComfyUI custom nodes specifically for Z-Image / Z-Image-Turbo. | Strong ecosystem/parity reference for Forge creator workflow coverage and Z-Image user-facing knobs. | License metadata was absent in `gh repo view`; not necessarily reusable code. | Inspect docs/examples later for node parameters and workflow patterns, not as dependency. |
| 3 | [`ussoewwin/ComfyUI-QwenImageLoraLoader`](https://github.com/ussoewwin/ComfyUI-QwenImageLoraLoader) | 340 | 2026-07-08 | 8 | Fresh high-star ComfyUI loader for Nunchaku Qwen Image and Z-Image Turbo LoRA / Diffsynth ControlNet flows. | Useful for Forge's LoRA/control compatibility and character-consistency fallback lane where per-character LoRAs are accepted. | Training/adapter oriented; not a no-training runtime acceleration win. | Track as ComfyUI compatibility reference; inspect only after core Z-Image/LTX runtime gates. |
| 4 | [`nuii2142-prog/faceless-video-pipeline`](https://github.com/nuii2142-prog/faceless-video-pipeline) | 0 | 2026-07-06 | 8 | MIT local topic-to-video pipeline using ComfyUI Z-Image-Turbo, Whisper, FFmpeg, script/per-scene prompts. | Best fresh SHORTS-MAKER style hit: maps to Forge app-side scene planning + per-scene generation + `media/` encode/concat/mux primitives. | Zero stars and likely simple; uses FFmpeg whereas Forge avoids shipping FFmpeg in core. | Manual workflow read later; extract prompt scheduling and clip assembly shape as fixtures for Forge app examples. |
| 5 | [`MapGamer71223/Automated-You-tube-shorts-generator`](https://github.com/MapGamer71223/Automated-You-tube-shorts-generator) | 0 | 2026-05-09 | 7 | Shorts pipeline with script generation, semantic clip retrieval, voice synthesis, subtitle alignment, visual effects, 9:16 render, FFmpeg, MoviePy, CLIP/FAISS, Vosk, segmentation. | Useful app-level reference for timeline/caption/audio assembly around generated or retrieved clips; maps to Forge `media/` export primitives and possible SHORTS-MAKER workflows. | Appears retrieval/stock-clip oriented rather than diffusion-generated multi-shot continuity; license unspecified; low signal. | Keep as shorts assembly candidate for later manual inspection; do not clone in scheduled watch. |
| 6 | [`Raigor2/local-inference-benchmarks`](https://github.com/Raigor2/local-inference-benchmarks) | 0 | 2026-06-24 | 5 | Head-to-head local inference benchmark of Z-Image, Boogu, and Krea 2 on RTX 3090. | Could provide lightweight benchmark framing for Forge's Z-Image local latency/quality notes. | HTML/static and zero stars; methodology unknown. | Low-priority manual read only if benchmark fixtures are needed. |
| 7 | [`ugqi/z-image-vae-fp32`](https://github.com/ugqi/z-image-vae-fp32) | 0 | 2026-07-03 | 4 | Rehosted fp32 VAE decoder for Z-Image-Turbo to avoid WebGPU fp16 overflow/NaNs. | Minor correctness signal: VAE precision can matter in alternate backends; Forge's VAE path should keep parity/NaN canaries. | Weight rehost, not code; WebGPU issue may not apply to Forge CUDA/BF16. | Note as low-priority precision canary, no action now. |

### Shorts-maker / multi-clip stitched-video candidates

- **Found today:** `nuii2142-prog/faceless-video-pipeline` is the most relevant generated-video assembly candidate because it combines topic/script generation, per-scene prompts, ComfyUI Z-Image-Turbo visuals, Whisper, and FFmpeg into a local explainer-video pipeline.
- **Found today:** `MapGamer71223/Automated-You-tube-shorts-generator` is a broader shorts assembly pipeline with voice, subtitles, semantic clip retrieval, visual effects, MoviePy/FFmpeg, and 9:16 rendering. It is probably more useful for Forge app workflow shape than for diffusion-model runtime internals.
- **Not found today:** no high-confidence repo specifically handling N generated ~22s diffusion clips with identity continuity, transitions, audio, captions, and Forge-like native media constraints. Continue rotating shorts/storyboard/multi-shot queries; today's exact storyboard query returned zero results.

### Skipped / noise notes

- Six of eight successful queries returned zero repositories under the chosen exact syntax: video diffusion optimization, character consistency, Wan quantization, HunyuanVideo optimization, ComfyUI character consistency, and storyboard clips. Treat this as query strictness/noise, not absence of relevant projects.
- Several Z-Image search hits were API wrappers, Pinokio packages, Apple/Swift/MLX ports, LoRA trainers, or zero-star shell repos. They were deprioritized unless they had an actionable Forge hook.
- No repository was cloned. No code search was run. Public metadata/detail calls via `gh repo view` were used only for top candidates.

### Best follow-up opportunities

1. **Inspect `iconben/z-image-studio`** for quantized Z-Image-Turbo artifact assumptions and app/API shape; likely the highest-signal Z-Image app reference today.
2. **Inspect `nuii2142-prog/faceless-video-pipeline`** as a lightweight SHORTS-MAKER workflow fixture: script → per-scene prompts → ComfyUI Z-Image-Turbo → audio/transcription → assembled video.
3. **Inspect `martin-rizzo/ComfyUI-ZImagePowerNodes` / `ussoewwin/ComfyUI-QwenImageLoraLoader`** later for ComfyUI parity, LoRA/control flow, and creator workflow coverage.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. No GPU spend occurred.

## 2026-07-10T09:02:00-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

**Before live searches**

```json
{"core":{"limit":5000,"remaining":4981,"reset":1783697623,"used":19},"graphql":{"limit":5000,"remaining":4985,"reset":1783698719,"used":15},"search":{"limit":30,"remaining":30,"reset":1783695712,"used":0}}
```

**After searches and candidate metadata inspection**

```json
{"core":{"limit":5000,"remaining":4981,"reset":1783697623,"used":19},"graphql":{"limit":5000,"remaining":4974,"reset":1783698719,"used":26},"search":{"limit":30,"remaining":22,"reset":1783695780,"used":8}}
```

Authenticated GitHub CLI was available as `lightsofapollo`. Search budget used: 8/8 allowed repository-search queries; no code search.

### Forge orientation

- The target checkout was on dirty non-main branch `experiment/zimage-spectrum-tjs-stack @ 36e6e12ba994` with edits in `pipeline_image_stages.cpp` and `zimage_tjs_gate.cpp`. Per the safety rule, no fetch/pull/reset/stash/clean or Forge source write was attempted. Local `origin/main` was `a351f83edcc1`; this is informational only because no sync was attempted.
- Bounded context read: `README.md`, `docs/FEATURES.md`, `docs/MODELS.md`, `docs/CREATOR_WORKFLOW_COVERAGE_MATRIX.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, and `media/README.md`.
- Relevant hooks: native Z-Image/LTX inference and NVFP4; LTX keyframe/latent-tail long-form plans; creator workflow fixtures; and native NVENC/NVDEC, MP4, audio, subtitles, clip concat, and trim primitives.

### Exact `gh search` queries run

Window used: `pushed:>2026-05-11` (60 days).

1. `z-image turbo quantization pushed:>2026-05-11`
2. `video diffusion inference optimization pushed:>2026-05-11`
3. `character consistency video diffusion pushed:>2026-05-11`
4. `Wan video quantization inference pushed:>2026-05-11`
5. `LTX video inference optimization pushed:>2026-05-11`
6. `ComfyUI multi shot video workflow pushed:>2026-05-11`
7. `AI shorts generator ffmpeg moviepy pushed:>2026-05-11`
8. `storyboard video generation clip continuity pushed:>2026-05-11`

Every search used `gh search repos ... --limit 20 --sort updated --order desc`; raw output is `outputs/github-watch/search-20260710T0901-0600.json`.

### Candidate repositories

Only three relevant repositories appeared in the bounded result set, so this section is intentionally shorter than the usual 5–10 rather than padded with unrelated projects.

| Rank | Repo | Stars | Pushed | Score | Reason | Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|---|
| 1 | [`SlavaSexton/ComfyUI-Agent-Kit`](https://github.com/SlavaSexton/ComfyUI-Agent-Kit) | 43 | 2026-07-07 | 13 | **New today.** MIT local-ComfyUI agent toolkit whose metadata claims 67 prompt recipes, 545 templates, hardware-aware selection, workflow building, ControlNet, restore/enhance, and multi-shot video. Created 2026-06-20 and still fresh. | Strong app/workflow reference for agent-driven shot planning and template selection around Forge's native graph, LTX keyframes, and media export primitives. | Metadata does not prove identity continuity, actual clip stitching, audio/caption alignment, or robust installs; core runtime integration would violate Forge's app-side workflow boundary. | High-priority **manual metadata/README inspection candidate** for a later cycle; extract one storyboard→shots→clip spans→audio/subtitles→concat fixture shape. No clone today. |
| 2 | [`iconben/z-image-studio`](https://github.com/iconben/z-image-studio) | 121 | 2026-07-02 | 10 | Resurfaced Apache-2.0 CLI/WebUI/MCP server for base and quantized Z-Image-Turbo; public topics include CUDA, ROCm, diffusers, LoRA, MCP, and WebUI. | Compare quantized artifact assumptions and app/API surface with Forge's Z-Image ABI and conversion path. | Not new today; Python application layer rather than native inference code. | Retain as a later manual comparison target; do not duplicate earlier watch work. |
| 3 | [`g023/zlightning_inf_cpp`](https://github.com/g023/zlightning_inf_cpp) | 0 | 2026-06-10 | 10 | Resurfaced MIT C++/CUDA Z-Image-Turbo engine claiming prompt→1024² PNG on a 12 GB RTX 3060; topics include GGUF, 8-bit, quantization, and fast inference. | Direct Backend A loader/memory/kernel comparison opportunity for native low-VRAM Z-Image inference. | Zero stars and no activity after the initial push; reproducibility and maturity unknown. | Candidate for later manual source audit, only after current Spectrum/TJS work settles. No clone today. |

### Shorts-maker / multi-clip stitched-video candidates

- **New candidate:** `SlavaSexton/ComfyUI-Agent-Kit` explicitly advertises multi-shot video and agent-driven local ComfyUI workflow construction. It is relevant to prompt scheduling and app-side shot orchestration, but public metadata alone does **not** verify coherent stitching, cross-shot identity, transitions, timeline editing, captions, or audio alignment.
- **None verified today:** no repository in this cycle demonstrably takes N generated clips of roughly 22 seconds and turns them into a continuity-preserving longer video/short with identity, story, transitions, captions, and aligned audio.
- Prior candidates `nuii2142-prog/faceless-video-pipeline` and `MapGamer71223/Automated-You-tube-shorts-generator` did not reappear under today's rotated queries; their 2026-07-09 notes remain the current assembly references.

### Skipped / noise notes

- Queries 2–5 and 7–8 returned zero repositories. Query 6 returned only ComfyUI Agent Kit; query 1 returned two previously known Z-Image projects. This is a strict-query limitation, not proof of ecosystem absence.
- No actionable new Wan, HunyuanVideo, CogVideoX, LTX optimization, character-consistency, NVFP4 kernel, or end-to-end shorts-assembly repository was found today.
- Candidate details remained bounded to public repository metadata (description, topics, stars/forks, dates, language, license, URL). No repository was cloned and no code search was used.

### Best follow-up opportunities

1. **Manually inspect `SlavaSexton/ComfyUI-Agent-Kit` later** for reusable workflow vocabulary—not runtime dependency code—covering shot plans, prompt recipes, hardware selection, and multi-shot coordination.
2. **Turn the best verified workflow shape into a Forge app fixture** that feeds per-shot prompts/keyframes into LTX and hands clip/audio/subtitle spans to native concat/mux.
3. **Defer repeat Z-Image repo inspection** until the active Spectrum × TJS branch is resolved; current local attribution/control gates are higher value.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. GPU spend was **$0**.

## 2026-07-11T09:01:41-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

- Before: `core 5000/5000`, `graphql 5000/5000`, `search 30/30` remaining.
- After: `core 5000/5000`, `graphql 5000/5000`, `search 22/30` remaining.
- Authenticated as `lightsofapollo`; 8/8 repository searches used; no code search.

### Forge orientation

- Forge was clean on `main`; `git pull --ff-only origin main` safely fast-forwarded `7141ff9 → aa60918275977110002a445682a901095db5edd9`.
- The sync added a native LongCat-Video-Avatar 1.5 port (DiT, VAE, UMT5, Whisper/audio conditioning, continuation tests, capture tools), making LongCat workflow repositories directly relevant today.
- Forge remains the native Windows/NVIDIA runtime; app-side assembly can use its existing NVENC/NVDEC, MP4 audio/subtitle mux, and clip concat/trim surfaces.

### Exact `gh search` queries run

Window: `pushed:>2026-05-12`; all used `--limit 20 --sort updated --order desc`.

1. `LongCat Avatar video generation pushed:>2026-05-12`
2. `video diffusion inference optimization pushed:>2026-05-12`
3. `character consistency video diffusion pushed:>2026-05-12`
4. `Wan Hunyuan CogVideo quantization inference pushed:>2026-05-12`
5. `ComfyUI multi shot video workflow pushed:>2026-05-12`
6. `AI shorts generator ffmpeg moviepy pushed:>2026-05-12`
7. `storyboard video generation clip continuity pushed:>2026-05-12`
8. `NVFP4 CUDA quantization inference pushed:>2026-05-12`

Raw capture: `outputs/github-watch/search-20260711T-daily.json`.

### Candidate repositories

| Rank | Repo | Stars | Pushed | Score | Reason / Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|
| 1 | [`rookiestar28/ComfyUI-LongCat-Avatar`](https://github.com/rookiestar28/ComfyUI-LongCat-Avatar) | 25 | 2026-06-15 | 12 | MIT LongCat Avatar 1.5 ComfyUI nodes; direct parity reference for Forge's newly landed audio/reference ABI and creator fixture. | Metadata does not prove current upstream parity, NVIDIA performance, or quality. | Inspect public workflow contract later; derive a Forge fixture without a runtime dependency. |
| 2 | [`SlavaSexton/ComfyUI-Agent-Kit`](https://github.com/SlavaSexton/ComfyUI-Agent-Kit) | 45 | 2026-07-07 | 11 | Active MIT agent toolkit with 545 templates and multi-shot video; maps to storyboard lowering and Forge clip/audio/subtitle export. | Known from yesterday; no verified cross-shot identity or assembly behavior. | Inspect multi-shot templates for continuity and timeline fields. |
| 3 | [`smthemex/ComfyUI_LongCat_Avatar`](https://github.com/smthemex/ComfyUI_LongCat_Avatar) | 4 | 2026-06-02 | 9 | Alternate MIT LongCat Avatar wrapper; useful to triangulate input/default conventions. | Low adoption and older activity. | Compare workflow surface with rank 1 before deeper work. |
| 4 | [`kekzl/imp`](https://github.com/kekzl/imp) | 29 | 2026-07-11 | 8 | Fresh MIT C++/CUDA RTX 5090 NVFP4 engine; possible Backend B kernel/benchmark reference. | LLM-only, broad unverified claims, fully AI-written by its own description. | Track methodology only; LongCat/LTX is higher priority. |
| 5 | [`intel/auto-round`](https://github.com/intel/auto-round) | 1,518 | 2026-07-11 | 8 | Active Apache-2.0 CUDA quantization toolkit; calibration/quality reference for Forge CFG-aware diagnostics. | Python/LLM-centered and indirect for diffusion NVFP4. | Borrow evaluation methodology only where it maps cleanly. |
| 6 | [`kegeai888/LongCat-Video-Avatar-1.5-WebUI`](https://github.com/kegeai888/LongCat-Video-Avatar-1.5-WebUI) | 1 | 2026-05-28 | 7 | LongCat portrait-video WebUI; possible UX/reference-input example. | No detected license, one star. | Metadata/README comparison only; do not reuse code. |
| 7 | [`MerkyorLynn/lynn-engine`](https://github.com/MerkyorLynn/lynn-engine) | 21 | 2026-06-08 | 5 | Blackwell W4A8/NVFP4 LLM engine; secondary Backend B reference. | LLM-only, unspecified license, month-old push. | Watch only. |
| 8 | [`9prodhi/qwen3-moe-rs`](https://github.com/9prodhi/qwen3-moe-rs) | 1 | 2026-07-02 | 5 | Rust Qwen3 MoE with NVFP4/CUDA graphs; bindings/runtime comparison. | LLM-only, one star, nonstandard license metadata. | Watch only. |

### Shorts-maker / multi-clip stitched-video candidates

- **No newly verified end-to-end assembler today.** Dedicated shorts and storyboard queries returned no repositories.
- ComfyUI Agent Kit remains the best active multi-shot lead, but it is not verified to take N ~22-second clips through identity continuity, transitions, captions, aligned audio, and final assembly.
- The LongCat wrappers address within-clip audio-driven identity, not cross-clip story continuity. A later fixture could pair their reference/audio contract with Forge's native concat/audio/subtitle surface.

### Skipped / noise notes

- Five queries returned zero results. Exact multi-token repository search is strict; this is not evidence that the ecosystem is empty.
- The NVFP4 query mostly resurfaced LLM-only projects. A zero-star, unlicensed narrow vLLM recipe was omitted.
- No candidate was cloned or content-inspected; install quality and claims remain unverified.

### Best follow-up opportunities

1. Compare the two MIT LongCat wrappers' workflow contracts against Forge's new LongCat ABI.
2. Inspect Agent Kit's multi-shot templates for shot, identity, audio, caption, transition, and timeline fields.
3. Keep NVFP4 LLM engines secondary to native LongCat quality/continuation validation.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. GPU spend was **$0**.

## 2026-07-12T09:01:23-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

- Before: `core 4972/5000`, `graphql 4956/5000`, `search 30/30` remaining.
- After: `core 4972/5000`, `graphql 4955/5000`, `search 22/30` remaining.
- Authenticated as `lightsofapollo`; 8/8 successful repository searches used; no code search. An initial local invocation used unsupported `gh search repos --json` fields and failed before issuing searches; it consumed no search quota and was corrected before the eight bounded searches.

### Forge orientation

- Forge is clean but on non-main branch `chore/beads-shared-dolt-metadata @ 0b8e7ed4f21a59500d3d50ed7ffbf4321aa5aedf`; `origin/main @ 0185b84f20102d5ff4764b47ffbebd61104c5d25`. Per policy, no fetch/pull, checkout, reset, or Forge write was attempted.
- Bounded context confirms Forge already has native LTX-2.3 T2V/I2V/keyframe conditioning, landed latent-tail multi-join generation, native NVENC clip concat/trim, optional audio spans, MP4 audio/subtitle mux, and a creator-workflow fixture boundary. Multi-shot orchestration belongs app-side; findings should become native fixture vocabulary rather than imported ComfyUI runtime dependencies.

### Exact `gh search` queries run

Window: `pushed:>2026-05-13`; all successful searches used `--limit 20 --sort updated --order desc`.

1. `z image turbo quantization pushed:>2026-05-13`
2. `video diffusion inference optimization pushed:>2026-05-13`
3. `character consistency video diffusion pushed:>2026-05-13`
4. `LTX Wan Hunyuan CogVideo inference pushed:>2026-05-13`
5. `ComfyUI multi shot video workflow pushed:>2026-05-13`
6. `AI shorts generator ffmpeg moviepy pushed:>2026-05-13`
7. `storyboard generated video clips continuity pushed:>2026-05-13`
8. `NVFP4 CUDA quantization inference pushed:>2026-05-13`

Raw capture: `outputs/github-watch/search-20260712T-daily.json`.

### Candidate repositories

No genuinely new high-confidence repository displaced the current Forge queue. The list retains six active candidates rather than padding to ten with unrelated results.

| Rank | Repo | Stars | Pushed | Score | Reason / Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|
| 1 | [`SlavaSexton/ComfyUI-Agent-Kit`](https://github.com/SlavaSexton/ComfyUI-Agent-Kit) | 45 | 2026-07-12 | 12 | **New activity today.** MIT local-ComfyUI agent toolkit advertising 545 templates and multi-shot video. Best current reference for app-side storyboard/prompt/template lowering into Forge's native LTX and media surfaces. | Known lead, not a new project; metadata still does not verify identity continuity, final stitching, transitions, captions, or audio alignment. | Later manual template inspection should extract one native Forge fixture schema: shot IDs, references, prompts, durations, transition spans, audio spans, subtitle cues, and continuity assertions. |
| 2 | [`g023/zlightning_inf_cpp`](https://github.com/g023/zlightning_inf_cpp) | 0 | 2026-06-10 | 10 | MIT C++/CUDA Z-Image-Turbo engine claiming 1024² output on a 12 GB RTX 3060; direct native loader/memory/runtime comparison for Forge Backend A. | No new activity, zero adoption, and claims remain unverified. | Keep as a later source-audit candidate; current Forge monitor/quality gates have higher priority. |
| 3 | [`iconben/z-image-studio`](https://github.com/iconben/z-image-studio) | 121 | 2026-07-02 | 9 | Apache-2.0 Z-Image-Turbo CLI/WebUI/MCP supporting base and quantized models; useful app/API and artifact-layout reference. | Python orchestration layer and already known; not native runtime code. | Compare quant artifact assumptions and request surface only when Forge app/API parity work resumes. |
| 4 | [`kekzl/imp`](https://github.com/kekzl/imp) | 29 | 2026-07-12 | 8 | Active MIT C++/CUDA RTX 5090 NVFP4 engine; potential Blackwell kernel and single-stream benchmark-method reference for Forge's deferred Backend B work. | LLM-only; self-described as fully AI-written; broad performance claims are not independently verified. | Track benchmark methodology, not implementation adoption; secondary to LTX/LongCat evidence work. |
| 5 | [`intel/auto-round`](https://github.com/intel/auto-round) | 1,517 | 2026-07-11 | 8 | Active Apache-2.0 quantization toolkit; calibration and quality-evaluation methodology may inform Forge CFG-aware diagnostics. | Python/LLM-centered and indirect for diffusion NVFP4. | Borrow only evaluation ideas that map to identical-trace Forge gates. |
| 6 | [`MerkyorLynn/lynn-engine`](https://github.com/MerkyorLynn/lynn-engine) | 21 | 2026-06-08 | 5 | W4A8/NVFP4 Blackwell LLM engine with CUDA/Triton kernels; secondary native-runtime reference. | LLM-only, no detected license, and stale relative to stronger leads. | Watch only. |

### Shorts-maker / multi-clip stitched-video candidates

- **No new end-to-end assembler found today.** The dedicated shorts and storyboard searches returned zero repositories.
- **Best active lead:** ComfyUI Agent Kit was pushed today and still advertises multi-shot video, but metadata does not establish the requested N×~22-second continuity-preserving assembly path.
- Forge itself already supplies the key low-level hooks—LTX latent-tail continuation, keyframes, native clip concat/trim, audio spans, subtitle cues, and MP4 mux. The actionable gap is an app-side storyboard/timeline fixture and continuity QA, not another media backend.
- Prior assembly leads (`nuii2142-prog/faceless-video-pipeline`, `MapGamer71223/Automated-You-tube-shorts-generator`) remain workflow references but did not reappear today.

### Skipped / noise notes

- Five of eight queries returned no repositories. Long multi-token repository searches are strict; zero results are not evidence that no implementations exist.
- The NVFP4 search mostly resurfaced LLM-only projects. A zero-star vLLM recipe and a one-star Rust Qwen runtime were omitted because they add little Forge diffusion/video value.
- No high-confidence new Wan, HunyuanVideo, CogVideoX, LTX optimization, character-consistency, or generated-video assembly repository was found.
- No durable wiki source note was added: today's best item is activity on an already indexed lead, not a new durable finding.

### Best follow-up opportunities

1. Convert Agent Kit's eventual public multi-shot contract into a Forge-native fixture rather than importing its runtime: storyboard → per-shot references/prompts → LTX continuation → audio/subtitle spans → native concat/mux.
2. Keep the fixture's identity/continuity QA separate from assembly success, especially at continuation joins.
3. Defer repeat Z-Image/NVFP4 audits until they can answer a specific current Forge loader, quality, or benchmark question.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. GPU spend was **$0**.

## 2026-07-13T09:01:27-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

- Before: `core 4997/5000`, `graphql 4989/5000`, `search 30/30` remaining.
- After: `core 4997/5000`, `graphql 4989/5000`, `search 22/30` remaining.
- Authenticated as `lightsofapollo`; 8/8 allowed repository searches used; no code search.

### Forge orientation

- Forge was clean on `main`; `git pull --ff-only origin main` safely reported `Already up to date` at `42ecadde32d43143b178e860c2a9de773d0136a9`.
- Bounded context read: `README.md`, `docs/FEATURES.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, and `media/README.md`.
- Current hooks remain unusually complete for these findings: native Z-Image/LTX inference and NVFP4, LTX latent-tail multi-shot continuation and keyframes, strict-face-identity QA, plus native clip concat/trim, audio spans, subtitle cues, and MP4 mux. The highest-value external projects are therefore workflow/fixture references or targeted kernel/evaluation references—not replacement media runtimes.

### Exact `gh search` queries run

Window: `pushed:>2026-05-14`; every query used `--limit 20 --sort updated --order desc`.

1. `z image turbo quantization pushed:>2026-05-14`
2. `video diffusion inference optimization pushed:>2026-05-14`
3. `character consistency video diffusion pushed:>2026-05-14`
4. `LTX Wan Hunyuan CogVideo inference pushed:>2026-05-14`
5. `ComfyUI multi shot video workflow pushed:>2026-05-14`
6. `AI shorts generator ffmpeg moviepy pushed:>2026-05-14`
7. `storyboard generated video clips continuity pushed:>2026-05-14`
8. `NVFP4 CUDA quantization inference pushed:>2026-05-14`

Raw capture: `outputs/github-watch/search-20260713T0901-0600.jsonl`.

### Candidate repositories

No genuinely new high-confidence repository displaced Forge's current PR-hardening and evidence queue. The table ranks the best active/relevant results and explicitly distinguishes fresh activity from previously known leads.

| Rank | Repo | Stars | Pushed | Score | Reason | Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|---|
| 1 | [`SlavaSexton/ComfyUI-Agent-Kit`](https://github.com/SlavaSexton/ComfyUI-Agent-Kit) | 45 | 2026-07-12 | 13 | MIT local-ComfyUI agent kit advertising 67 prompt recipes, 545 templates, workflow building, hardware-aware selection, and multi-shot video; active yesterday. | Best app-side reference for lowering storyboard/shot/template intent into Forge's LTX continuation plus native timeline/export surfaces. | Already tracked; metadata still does not prove cross-shot identity, N×~22-second assembly, transitions, captions, aligned audio, or install quality. | Later inspect only its public multi-shot contract and convert useful fields into a Forge-native fixture; do not import the ComfyUI runtime. |
| 2 | [`iconben/z-image-studio`](https://github.com/iconben/z-image-studio) | 121 | 2026-07-02 | 12 | Apache-2.0 CLI/WebUI/MCP server for base and quantized Z-Image-Turbo. | Request/API and quantized-artifact-layout comparison for Forge's Z-Image conversion and app-facing surfaces. | Known Python orchestration project, not native inference code; no activity since July 2. | Keep as a targeted UX/artifact reference when Forge app/API parity work resumes. |
| 3 | [`g023/zlightning_inf_cpp`](https://github.com/g023/zlightning_inf_cpp) | 0 | 2026-06-10 | 11 | MIT C++/CUDA Z-Image-Turbo engine claiming prompt→1024² PNG on a 12 GB RTX 3060. | Direct native loader, memory-pressure, and low-VRAM runtime comparison for Backend A. | Zero stars, no recent follow-up, and reproducibility/performance claims remain unverified. | Manual source audit only when it can answer a specific Forge loader or memory question. |
| 4 | [`intel/auto-round`](https://github.com/intel/auto-round) | 1,520 | 2026-07-13 | 10 | **Fresh activity today.** Apache-2.0 low-bit quantization toolkit with CUDA plus vLLM/SGLang/Transformers integration. | Calibration and quant-quality methodology may inform Forge's CFG-guided-output and real-weight INT8 evidence ladders. | LLM/Python-centered; not a direct diffusion NVFP4 implementation and should not supersede matched Forge traces. | Track evaluation methodology only; borrow ideas only where identical-source, identical-trace controls remain possible. |
| 5 | [`kekzl/imp`](https://github.com/kekzl/imp) | 29 | 2026-07-13 | 8 | **Fresh activity today.** MIT from-scratch C++/CUDA RTX 5090 `sm_120a` LLM engine claiming NVFP4 and low single-stream latency. | Secondary Blackwell kernel and benchmark-accounting reference for Forge's deferred Backend B/native-NVFP4 lane. | LLM-only, self-described as fully AI-written, and broad speed claims are not independently established by metadata. | Watch benchmark methodology; do not divert from current LTX/LongCat correctness gates. |
| 6 | [`9prodhi/qwen3-moe-rs`](https://github.com/9prodhi/qwen3-moe-rs) | 1 | 2026-07-02 | 6 | Rust/Burn Qwen3 MoE runtime advertising FP8/NVFP4, CUDA-graph decode, and an OpenAI-compatible server. | Rust/CUDA-graph comparison for Backend B and Forge bindings. | One star, nonstandard license metadata, LLM-only, and no fresh activity. | Watch only. |
| 7 | [`MerkyorLynn/lynn-engine`](https://github.com/MerkyorLynn/lynn-engine) | 21 | 2026-06-08 | 5 | Native-style Blackwell LLM engine advertising W4A8/NVFP4 and custom CUDA/Triton kernels. | Secondary low-bit kernel reference. | No detected license, LLM-only, and stale versus stronger leads. | No action now. |

### Shorts-maker / multi-clip stitched-video candidates

- **No new end-to-end assembler found today.** Both the shorts/FFmpeg/MoviePy and storyboard/continuity searches returned zero repositories.
- **Best active lead remains ComfyUI Agent Kit**, pushed 2026-07-12, but repository metadata does not verify the requested path from N generated ~22-second clips to a continuity-preserving longer video with identity, transitions, audio/music/voice alignment, captions, and final timeline assembly.
- Forge already has the low-level native primitives and LTX continuation path. The actionable missing layer remains an app-side storyboard/timeline fixture with explicit shot IDs, references, prompts, durations, transition spans, audio spans, subtitle cues, and separate strict-identity/continuity assertions.
- Earlier workflow references `nuii2142-prog/faceless-video-pipeline` and `MapGamer71223/Automated-You-tube-shorts-generator` did not reappear in today's bounded searches.

### Skipped / noise notes

- Five of eight queries returned zero repositories. Exact multi-token repository search is strict; zero results are not evidence that no relevant implementations exist.
- The NVFP4 query mostly produced LLM-only results. The zero-star, unlicensed `miguefuentes1985/vllm-qwen3.5-nvfp4-5090` recipe was omitted from the ranked table because it offers little reusable Forge diffusion/video value.
- No actionable new Wan, HunyuanVideo, CogVideoX, LTX optimization, character-consistency, diffusion acceleration, or continuity-preserving shorts repository was found.
- No wiki source note was added: today's fresh signals are activity on already known general quantization/kernel projects, not a new durable Forge finding.

### Best follow-up opportunities

1. Extract a typed storyboard/timeline fixture from a verified public multi-shot workflow when one appears; keep orchestration app-side and target Forge's existing LTX continuation and native export primitives.
2. Keep `intel/auto-round` as an evaluation-method reference for matched-source quantization controls, without treating LLM calibration results as diffusion evidence.
3. Keep `kekzl/imp` secondary and methodology-only until a specific Blackwell kernel or benchmark-accounting question arises.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. GPU spend was **$0**.

## 2026-07-14T09:00:33-06:00 — daily Forge GitHub project watch

### Rate-limit snapshot

- Before: `core 4988/5000`, `graphql 4998/5000`, `search 30/30` remaining.
- After searches and bounded metadata inspection: `core 4988/5000`, `graphql 4997/5000`, `search 22/30` remaining.
- Authenticated as `lightsofapollo`; 8/8 allowed repository searches used; no code search.

### Forge orientation

- Forge was clean on `main`; `git pull --ff-only origin main` safely reported `Already up to date` at `16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`, equal to `origin/main`.
- Bounded context read: `README.md`, `docs/FEATURES.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, and `media/README.md`.
- Forge already has native Z-Image/LTX inference and NVFP4, LTX latent-tail multi-join generation, keyframe conditioning, native clip concat/trim, optional audio spans, subtitle cues, and MP4 mux. External multi-shot projects are most useful as workflow/evaluation references; app orchestration should remain outside the native runtime.
- Current research context also keeps strict identity separate from seam/subject continuity and prioritizes hardening draft PR #17 before competing identity implementation.

### Exact `gh search` queries run

Window: `pushed:>2026-05-15`; every query used `--limit 20 --sort updated --order desc`.

1. `z-image turbo quantization pushed:>2026-05-15`
2. `video diffusion acceleration inference pushed:>2026-05-15`
3. `character consistency video generation pushed:>2026-05-15`
4. `LTX video inference CUDA pushed:>2026-05-15`
5. `(Wan OR HunyuanVideo OR CogVideoX) quantization pushed:>2026-05-15`
6. `multi-shot ComfyUI video pushed:>2026-05-15`
7. `AI shorts generator clips ffmpeg pushed:>2026-05-15`
8. `storyboard video continuity clips pushed:>2026-05-15`

Raw capture: `outputs/github-watch/search-20260714T090138-0600.json`.

### Candidate repositories

Scores apply the watch rubric to public metadata only; claimed capabilities are not treated as verified execution.

| Rank | Repo | Stars | Pushed | Score | Reason | Forge hook | Risk | Next action |
|---:|---|---:|---|---:|---|---|---|---|
| 1 | [`koala-penguin/ltx23-toolkit`](https://github.com/koala-penguin/ltx23-toolkit) | 1 | 2026-07-08 | 16 | **New.** MIT Python/ComfyUI toolkit explicitly claiming LTX-2.3 22B AV single-shot, character-consistency, seamless-long-video workflows, CLI assistance, and QC. | Closest direct reference for Forge's landed LTX keyframe/latent-tail continuation, audio, long-form QA, and app-side workflow fixture. | Created only July 7, one star, 44 KB; metadata does not verify model assets, install quality, seam metrics, strict identity, or actual N×~22s behavior. | Highest-priority later manual README/workflow inspection; extract typed shot/reference/duration/QC fields without importing ComfyUI runtime code. |
| 2 | [`smthemex/ComfyUI_JoyAI_Echo`](https://github.com/smthemex/ComfyUI_JoyAI_Echo) | 57 | 2026-06-23 | 15 | Apache-2.0 inference-only ComfyUI release claiming minute-level multi-shot audio-video, paired cross-modal memory, and story-level consistency. | Strong benchmark/reference candidate for the exact long-video continuity target: compare story memory, A/V continuity, shot boundaries, and evaluation vocabulary with Forge LTX/LongCat evidence. | Uses a separate distilled DMD generator and paired memory rather than Forge's same-checkpoint/no-training LTX path; 22 MB repo and seven open issues; claims remain metadata-only. | Later inspect architecture/workflow and quality protocol, not model integration; use it to sharpen matched Forge multi-shot A/V and identity gates. |
| 3 | [`SlavaSexton/ComfyUI-Agent-Kit`](https://github.com/SlavaSexton/ComfyUI-Agent-Kit) | 46 | 2026-07-12 | 14 | Known MIT toolkit remains active and advertises 67 prompt recipes, 545 templates, hardware-aware local ComfyUI control, workflow building, and multi-shot video. | App-side storyboard/template lowering into Forge LTX continuation and native timeline/export surfaces. | Metadata still does not prove cross-shot identity, transitions, captions, aligned audio, or final N-clip assembly. | Inspect only its public multi-shot contract later and convert useful fields into a Forge-native fixture. |
| 4 | [`iconben/z-image-studio`](https://github.com/iconben/z-image-studio) | 121 | 2026-07-14 | 12 | **New activity today.** Apache-2.0 CLI/WebUI/MCP server for base and quantized Z-Image-Turbo, with CUDA/diffusers/LoRA topics. | Quantized-artifact layout, request/API, and creator UX comparison for Forge's Z-Image path. | Known Python orchestration project, not native inference code; today’s push content was not inspected. | Track the activity; inspect only when a specific Forge conversion/API parity question is ready. |
| 5 | [`xiaoweihu339-afk/character-anchor-skill`](https://github.com/xiaoweihu339-afk/character-anchor-skill) | 1 | 2026-05-25 | 11 | MIT reusable workflow for character anchors and golden reference galleries across image/video generation. | Potential fixture vocabulary for Forge hero-frame/reference sets and strict identity evaluation, complementing rather than replacing PR #17. | One star, tiny project, no activity in 50 days, and metadata does not establish runnable model integration or quantitative identity checks. | Later inspect only for reference-gallery schema and acceptance criteria after PR #17 hardening. |
| 6 | [`zhuang2002/ComfyUI_JoyAI_Echo`](https://github.com/zhuang2002/ComfyUI_JoyAI_Echo) | 33 | 2026-06-07 | 10 | Alternate ComfyUI JoyAI-Echo implementation claiming faithful BF16 multi-shot audio-video generation. | Triangulates workflow inputs/defaults against the Apache-2.0 wrapper and Forge's A/V continuation surface. | No detected license, older push, and no metadata-level evidence of QC or reproducibility. | Metadata/README comparison only; do not reuse code absent a clear license. |
| 7 | [`aqillakhani/storms-runpod-worker`](https://github.com/aqillakhani/storms-runpod-worker) | 0 | 2026-06-27 | 9 | Serverless worker orchestrating F5-TTS, SkyReels V3/EchoMimicV2/LTX-Video, GFPGAN, model caching, and CUDA memory management. | Secondary orchestration/residency reference for audio-driven generation and phase-based model caching. | Zero stars, no detected license, RunPod/serverless focus, and no demonstrated clip-continuity or local Forge integration. | Watch only; no remote run and no dependency adoption. |
| 8 | [`YouMind-OpenLab/awesome-seedance-2-prompts`](https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts) | 1,566 | 2026-07-14 | 7 | Highly active prompt/workflow corpus claiming 2,000+ Seedance prompts, character-consistency tips, and advanced video workflows. | Possible prompt/shot taxonomy and creator-workflow fixture source for app-level tests. | Primarily a prompt collection for a different API/model, `NOASSERTION` license, and not local inference or assembly code. | Treat as a low-priority vocabulary source, not an implementation candidate. |

### Shorts-maker / multi-clip stitched-video candidates

- **Best new direct lead: `koala-penguin/ltx23-toolkit`.** Its metadata is unusually aligned with Forge: LTX-2.3, character consistency, seamless long video, CLI, and QC. It is not yet verified to consume N independent ~22-second clips or preserve strict face identity, so it is a manual-inspection candidate rather than evidence.
- **Strongest minute-level research reference: `smthemex/ComfyUI_JoyAI_Echo`.** It explicitly claims multi-shot audio-video, cross-modal memory, and story-level consistency. The separate distilled generator makes it unsuitable as a direct same-checkpoint Forge port, but its workflow and evaluation protocol may be valuable.
- **`anshulapi/ReelGraph` surfaced but is not actionable yet.** Its description exactly targets agentic story analysis, scripting, style planning, character consistency, generation, and quality checks, but GitHub metadata reports repository size `0`, no language, no license, zero stars, and only the creation push. Treat it as a concept/placeholder, not runnable code.
- Dedicated shorts results were predominantly long-video clip extractors (`juninmd/shorts-generator`, `backblaze-b2-samples/ai-shorts-generator`, and similar). They crop existing videos into shorts; they do not assemble generated clips or preserve cross-shot identity, so they were excluded.
- No repository was verified today to implement the complete requested path: N generated ~22-second clips → identity/story continuity → transitions/timeline → aligned dialogue/music → captions → final native assembly.

### Skipped / noise notes

- The generic video-acceleration and storyboard-continuity queries returned zero repositories. Exact multi-token repository search is strict; zero results are not ecosystem evidence.
- The grouped Wan/HunyuanVideo/CogVideoX query produced 20 mostly unrelated, suspiciously synchronized LLM/KV-cache quantization repositories because GitHub's Boolean matching was noisy. None was promoted.
- `RohannJohny/ProjectStoryBoard` is a small unlicensed hackathon project; public metadata was insufficient to establish a practical pipeline. The four shorts-generator hits were clip-extraction/cropping tools, not generated-video assemblers.
- No source or README content was inspected, and no capability claim above was execution-verified.

### Best follow-up opportunities

1. Manually inspect `ltx23-toolkit` for one concrete LTX long-video workflow and its QC schema; map only reusable typed fields to a Forge app fixture.
2. Compare JoyAI-Echo's public multi-shot/cross-modal-memory evaluation protocol against Forge's separate seam, strict-face-identity, audio, subtitle, and determinism gates—without adopting its distilled model.
3. Keep current Forge priority intact: harden PR #17 first, then use external workflow references to define a full N-clip acceptance fixture rather than starting a competing runtime implementation.

### No-spend statement

No repositories were cloned. No code search was run. No local GPU tests were run. No remote GPU jobs were run. GPU spend was **$0**.
