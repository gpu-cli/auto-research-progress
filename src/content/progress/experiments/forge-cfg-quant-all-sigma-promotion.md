---
title: "Forge CFG quantization all-sigma promotion reconciliation"
description: "Cycle: 2026-07-10T15:40:18-06:00  \nOutcome: BLOCKED  \nBackend/spend: local DGX Spark , $0 remote spend"
date: "2026-07-14T16:47:07.791Z"
kind: experiment
status: published
tags: []
---

# Forge CFG quantization all-sigma promotion reconciliation

**Cycle:** 2026-07-10T15:40:18-06:00  
**Outcome:** BLOCKED  
**Backend/spend:** local DGX Spark (NVIDIA GB10), $0 remote spend

## Reconciliation

The initial `feat/cfg-aware-quant-diagnostics` candidate is already merged as Forge PR [#1](https://github.com/gpu-cli/forge-lib/pull/1), merge SHA `40aac7576f6994a946c590c5dd3d3c6bda850b27`. No duplicate product branch or PR was created. The unresolved promotion gate is the report's follow-up: prompt-conditioned, matched traces over all eight production sigmas, comparing same-artifact control, RTN, AWQ, and current recipe variants, followed by render/contact-sheet review.

An existing unmerged `origin/production-hardening` branch (`0aeec4b`) already contains same-noise A/B and prompt-context scaffolding. It has no open PR. This cycle did not duplicate or overwrite it.

## Isolated execution

- Worktree: `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-promotion`
- Branch: `exp/cfg-quant-all-sigma-reconcile`
- Base: `origin/main@40aac7576f6994a946c590c5dd3d3c6bda850b27`
- Reused models through a symlink; no large artifacts were copied.

Harness control command:

```bash
/home/aegisfang666/workspace/forge/build-eng/forge_ltx2_cfg_quant_diag \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors \
  /home/aegisfang666/auto-research/outputs/forge-cfg-quant-promotion-20260710/self-control.json 3.0
```

Real result: conditional, unconditional, CFG-gap, and guided cosine were all exactly `1.0`; all MSE values were `0.0`. Focused regression test `forge_quant_cfg_diagnostics_test` passed.

## Blocker

Only BF16, official combined FP8, and direct NVFP4 LTX artifacts exist locally. There is no RTN artifact, no AWQ artifact, no recipe-excluded/current-recipe variant set, and no `golden-ltx` prompt-conditioned capture (`manifest.json`, context, initial latent, eight-sigma schedule) on this host. Therefore the required matched matrix and render/VLM correlation cannot be executed honestly. The existing diagnostic also remains a synthetic one-sigma fixture, so repeating it across fabricated random sigmas would not satisfy the prompt-conditioned gate.

Smallest actionable setup request: provide or generate one prompt-conditioned `golden-ltx` capture plus matched RTN, AWQ, and recipe-variant artifacts derived from the same BF16 source. Then run all candidates on the identical eight-sigma trajectory and decode matched final latents for contact-sheet human/VLM review.

## Promotion decision

BLOCKED. No Forge source changes, commit, push, or PR. The already-merged diagnostic remains valid; only the evidence needed to choose a quantization recipe is missing.

## 2026-07-11 verified retry

Current Forge `main@aa609182` contains PRs #1/#2 and the former `production-hardening@0aeec4b` same-noise/render scaffolding; there are no open PRs. A new clean worktree, `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-strict-identity` (`exp/cfg-quant-strict-identity`), was created from current main.

The CUDA 13.0/SM121 diagnostic and two focused tests built successfully. `forge_quant_cfg_diagnostics_test` and `forge_ltx2_awq_capture_plan_test` passed. The exact v2 self-control was then started with the local direct-NVFP4 LTX artifact and real positive/negative prompt inputs, but failed closed during context creation: `Gemma encode failed: gemma3 requires the cuDNN build`. This host has cuDNN frontend headers but no cuDNN runtime/header, and it still lacks matched RTN, CFG-aware AWQ, and recipe artifacts.

**Decision: BLOCKED.** No speculative Forge change, commit, push, or PR. No RunPod job was started: remote compute would not supply the missing matched artifacts and would add model-sync cost without resolving the gate. gpu-cli reported zero active pods and `$0` spend; this experiment spent `$0`. Smallest unblock: cuDNN 9 plus matched RTN/AWQ artifacts generated from the existing BF16 source.

## 2026-07-11 10:50 MDT evidence advance

The local cuDNN blocker is resolved. The already-downloaded cuDNN 9.24 ARM64 packages and cached cuDNN frontend were wired into an ignored `build-cudnn`; configuration reported fused cuDNN SDPA enabled. Both focused tests passed. A real prompt-conditioned all-eight-sigma same-artifact control then completed exactly (`1.0` cosine / `0.0` MSE for every signal and sigma).

On the identical fixed latent/context trace, BF16→direct-NVFP4 aggregate guided cosine/MSE was `0.8011959151 / 2.5588612916`, versus `0.6340412938 / 4.7458794839` for BF16→combined-FP8. The worst direct-NVFP4 guided point was cosine `0.3986383813`, MSE `9.9539692160` at sigma `0.725`; FP8's worst guided cosine was `0.2063783265` at sigma `0.725`, with worst MSE `12.1470713506` at sigma `0.909375`.

**Decision remains BLOCKED:** these reports explicitly have `trajectory:false`. No matched CFG-aware AWQ artifact or decoded strict-identity/contact-sheet review exists, so the numerical ordering cannot select a production recipe. No product diff or PR was created. Outputs: `outputs/forge-cfg-quant-strict-identity-20260711/`. Spend `$0`; no remote job/pod.

## 2026-07-14 verified matched-artifact rerun

The artifact blocker is now resolved: BF16, matched RTN NVFP4, CFG-AWQ NVFP4, and combined FP8 artifacts all exist locally and were hashed into `outputs/forge-cfg-quant-promotion-20260714/artifact-sha256.txt`. The CFG-AWQ and RTN validation sidecars identify the same BF16 source. Cached cuDNN 9.24 and model files were reused without copies.

Focused CFG and AWQ-plan tests passed. On the same prompt, negative prompt, seed `260708241`, guidance `3`, fixed latent/context, and all eight production sigmas, BF16 self-control remained exact. Aggregate guided results were:

| Candidate vs BF16 | Guided cosine | Guided MSE |
|---|---:|---:|
| RTN NVFP4 | 0.8000798410 | 2.8825774807 |
| CFG-AWQ NVFP4 | **0.8094020528** | **2.6135872075** |
| Combined FP8 | 0.6411260822 | 4.6205045510 |

CFG-AWQ reduced guided MSE by `9.33%` and increased guided cosine by `1.17%` relative to RTN. Runtime was 53.64 s for RTN, 58.01 s for AWQ, and 70.64 s for FP8 on local NVIDIA GB10; this is diagnostic runtime, not a production throughput benchmark.

**Decision: BLOCKED.** The rerun is still `trajectory:false` and one-prompt. The prior 512×320×49 decoded A/B compared AWQ to RTN only and measured SSIM `0.6426` / MS-SSIM `0.5442`; it does not include a decoded BF16 control or independent human/VLM identity and artifact review. The smallest completion is a matched BF16/RTN/AWQ decoded matrix over additional prompts/seeds plus independent full-resolution review. No Forge source diff, commit, push, or PR was created. Local/remote cycle spend `$0`; no gpu-cli job or pod.
