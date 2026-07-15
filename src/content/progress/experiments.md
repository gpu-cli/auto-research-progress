---
title: "Experiment Queue"
description: "Current actionable Forge-grounded queue. Remote GPU execution requires separate explicit approval; none is approved by this file."
date: "2026-07-15T04:46:48.610Z"
kind: experiment
status: published
tags: []
---

# Experiment Queue

> Current actionable Forge-grounded queue. Remote GPU execution requires separate explicit approval; none is approved by this file.

## Ready — local / read-only

1. **Blind LTX decoded quant-triad review**
   - Input: `outputs/ltx23-continuous/20260715T031626Z-decoded-quant-ab-smoke/`
   - Action: randomize RTN / CFG-AWQ / BF16 columns; score prompt adherence, identity, temporal artifacts, detail, and overall preference; unblind only after scoring.
   - Gate: do not select a recipe from BF16 pixel proximity alone.

2. **Replicated LTX decoded triad — local Spark**
   - Variants: BF16 master, direct RTN NVFP4, CFG-AWQ NVFP4.
   - Matrix: one non-duplicate prompt/seed at 512×320×49, eight executed NFE.
   - Outputs: playable media, artifact/source hashes, actual quant path, timing, decoded QA, contact sheet, and blind review.
   - Stop condition: inconsistent trace/pixel/perceptual rankings keep recipe promotion blocked.

3. **PR #26 NVFP4 scale-slab model gate — local/read-only first**
   - Validate miss, hit, and corrupt-cache fallback against real Gemma/LTX artifacts.
   - Require unchanged output/parity, deterministic content/recipe identity, safe fallback, and measured cold-load/resident-byte value.

4. **PR #27 LongCat graph/runtime model gate — local when fixtures are available**
   - Compare graph and direct ABI for portrait, A2V, continuation, and two-speaker controls.
   - Preserve family-specific identity, mouth/SyncNet, speaker, join, VRAM, determinism, and teardown evidence.

5. **ACID-style LTX adaptive-cache replay — trace only**
   - Compare no-cache, fixed-low, fixed-high, adaptive, and random-switch controls over byte-inert block traces.
   - No native skip path until critical-step stability, replay cosine, and projected warm end-to-end gain clear the documented gates.

## Remote status

- **No remote experiment is approved or queued.**
- Do not execute historical Diffusion-LLM or LTX remote commands from old reports.
- Any remote run requires a separate user/Slack approval with an explicit budget cap and a fresh `gpu doctor --json` readiness check.
