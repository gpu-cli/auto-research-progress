---
title: "Auto Research Journal"
description: "Journal-style chronological log of periodic research runs. Hermes maintains this during scheduled research. Durable wiki facts remain under wiki/; this file is the human-readable running narrative."
date: "2026-07-15T13:56:57.745Z"
kind: note
status: published
tags: []
---

# Auto Research Journal

> Journal-style chronological log of periodic research runs. Hermes maintains this during scheduled research. Durable wiki facts remain under `wiki/`; this file is the human-readable running narrative.

## 2026-07-14T19:38:54-06:00 — Forge adaptive-cache digest

- **Forge/reference:** pristine `main == origin/main @ dc383a05cbc03dd07eeb865018d53a6cd3e177e1`. Clean research worktree `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260714-afternoon`, branch `research/forge-digest-20260714-afternoon`, was fast-forwarded to the same SHA.
- **New lead — ACID (`2607.12358v1`):** training-free two-threshold switching around drift-signal critical steps is the strongest new LTX trace candidate. Start with byte-inert per-block drift capture and offline no-cache/fixed-low/fixed-high/ACID/random replay; require stable critical steps, cosine `>=0.995`, and projected `>=10%` warm end-to-end gain before native caching.
- **PR boundary:** draft PR #17 is now `CLEAN` at `0adc001a`; its Linux and Windows checks executed and passed. Next evidence is N=1 byte identity plus deterministic assignment-aware N=2/3/4 and independent lifetime/provenance review—not a duplicate branch.
- **Caveat:** ACID is abstract-verified only; the same-day versioned PDF endpoint returned HTTP 404. No method formula or code availability is claimed yet.
- **Execution/spend:** no Forge source write, build, generation, remote GPU run, or PR; GPU spend `$0`. Durable notes: `wiki/papers/acid-adaptive-caching-for-video-generation.md` and `wiki/queries/forge-research-digest-2026-07-14.md`.

## 2026-07-14T16:38:58-06:00 — Reflection: graph-native Ingredients evidence contract

- Forge was clean and synchronized at `main == origin/main @ dc383a05cbc03dd07eeb865018d53a6cd3e177e1`.
- Highest-value synthesis: the newly landed typed LTX Ingredients reference path lets the proposed shot ledger bind an executable graph semantic key, reference/LoRA identity, output hash, and hardened strict-evaluator sidecars. It closes a control/evidence gap, not the existing cross-shot identity-quality gate.
- Next card is CPU-only: prove graph↔direct-ABI lowering/provenance A/A plus null/default byte identity and fail-closed unsupported mixtures, reusing existing outputs rather than generating again.
- PR #17 remains the separate unstable Z-Image arbitrary-N boundary at `1dada5a`; Linux/Windows CPU and SBOM gates plus N=1 and assignment-aware N>1 evidence remain required.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-14T16:38:58-06:00`; durable update: `wiki/queries/forge-research-digest-2026-07-14.md`. No Forge source write, generation, remote GPU job, or spend.

## 2026-07-14T13:32:36-06:00 — Forge current-main and PR-boundary digest

- **Forge/reference:** safely fetched and fast-forwarded the pristine reference checkout; `main == origin/main @ e887a3a0bcb02346e90b4e6e412ca529a9b56ab5`, clean. Read-only research used clean `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260714-afternoon`, branch `research/forge-digest-20260714-afternoon`, at the same SHA. The new main commit is merged CI hardening, not a new model/runtime feature.
- **Priority 1 — PR #17 correctness/evidence:** draft PR #17 advanced again during this cycle, ending at verification head `6bec4d11`; its latest commit corrects resumed fine-tune step counting/adapter handling on top of the multi-reference driver, arbitrary-N reference blocks, disjoint RoPE tiles, teacher-data tooling, and dormant resampler. Keep work on that branch. First close/classify Linux CPU and SBOM failures and run ABI/N=0/N=1/malformed-array/token-budget gates; only then spend on renders. Promotion still requires N=1 byte identity, deterministic N=2/3/4, distinct-reference ArcFace/DINO assignment, held-out contact sheets, provenance review, and independent lifetime/ABI review.
- **Priority 2 — HALO trace:** trace LTX per-head post-RoPE/SDPA/gate statistics in a byte-inert sidecar and reject the idea unless rankings are stable across prompts/seeds and beat random heads without structure/identity regression.
- **Priority 3 — Xema capacity replay:** reuse Forge's monitor/residency counters to replay deterministic 24/32/48 GiB plans offline; require predicted peak within 5% and byte-identical trace mode before changing policy.
- **Novelty:** live arXiv through 2026-07-13 found Cycle-World (`2607.11836v1`), but its model-level cycle-consistency method does not outrank the training-free/current-branch gates above.
- **Execution/spend:** no Forge implementation, build, model generation, remote GPU run, or GPU spend; `$0`. No PR created. Durable detail: `wiki/queries/forge-research-digest-2026-07-14.md`.

## 2026-07-14T10:46:16-06:00 — Forge verified CFG quant promotion cycle

- **Outcome: BLOCKED; no product PR.** Exactly one candidate was reconciled: completion of the LTX-2.3 CFG-aware quantization promotion gate. Forge PRs [#1](https://github.com/gpu-cli/forge-lib/pull/1) and [#2](https://github.com/gpu-cli/forge-lib/pull/2) already merged the diagnostic and all-eight-sigma harness; `exp/cfg-quant-all-sigma-reconcile` is zero commits ahead of current main, so stale implementation work was not duplicated.
- **Forge/reference:** pristine `/home/aegisfang666/workspace/forge` was fetched and verified clean on `main == origin/main @ 16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`. Execution reused clean isolated `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-matched-artifacts-20260713`, branch `exp/cfg-quant-matched-artifacts-20260713 @ 42ecadde32d43143b178e860c2a9de773d0136a9` (13 commits behind current main, zero ahead). Cached models and cuDNN 9.24 were referenced in place; no model was copied.
- **Real local execution:** focused `forge_quant_cfg_diagnostics_test` and `forge_ltx2_awq_capture_plan_test` passed. The prompt-conditioned fixed-latent matrix reran BF16 self-control, RTN NVFP4, CFG-AWQ NVFP4, and combined FP8 over all eight production sigmas on NVIDIA GB10. Self-control was exact. Aggregate guided cosine/MSE: RTN `0.8000798410 / 2.8825774807`; CFG-AWQ `0.8094020528 / 2.6135872075`; FP8 `0.6411260822 / 4.6205045510`. AWQ reduced guided MSE by `9.33%` versus matched RTN and raised cosine by `1.17%` relative.
- **Gate/decision:** the numerical signal is reproducible but remains explicitly `trajectory:false` and covers one prompt. Existing decoded evidence compares AWQ only against RTN for one 512×320×49 render (`SSIM 0.6426`, `MS-SSIM 0.5442`); it lacks a decoded BF16 control, the required broader matched prompt/seed matrix, and independent human/VLM identity/artifact review. Therefore no default/recipe change, commit, push, or draft PR is justified.
- **Spend/artifacts:** local spend `$0`; this cycle launched no remote job or pod (`$0/$5`). gpu-cli ended with zero active/provisioning pods. Its cumulative historical counter moved from `$0.625358` at preflight to `$0.931400` at final verification (`+$0.306042`) despite this cycle creating no rental, so that delayed/concurrent accounting is conservatively recorded but not attributed to this experiment; even treating `$0.931400` as today's spend remains below the `$30` cap. Outputs: `outputs/forge-cfg-quant-promotion-20260714/`; prior render evidence: `outputs/forge-cfg-quant-matched-artifacts-20260713/render-ab/`; durable card: `site/experiments/forge-cfg-quant-all-sigma-promotion.md`.

## 2026-07-13T22:07:39-06:00 — Reflection: one LongCat trace chooses bytes versus compute

- Forge remained clean and synchronized at `main == origin/main @ 16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Highest-value synthesis: consolidate SyncCache residual reuse and Jensen-corrected continuation-KV quantization behind one pixel-inert LongCat capture, then use measured host-ring versus block-compute attribution to select at most one native A/B.
- Safety boundary: only historical self-attention keys may receive bias-corrected quantization; audio/text/current QKV and human-sensitive work remain recomputed. Trace and later A/B retain RGB/routing hashes plus identity, join, mouth, same-PCM SyncNet, speaker, residency, and determinism gates.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-13T22:07:39-06:00`; durable update: `wiki/queries/forge-research-digest-2026-07-13-noon.md`.
- No Forge source write, local generation, remote GPU job, or spend. LTX comparison remains blocked on the Comfy API export, official Gemma path, and spatial upsampler.

## 2026-07-13T15:51:38-06:00 — Reflection: LTX VAE win promotes denoiser tracing

- Forge remained clean and synchronized at `main == origin/main @ 16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Highest-value synthesis: after Forge reduced production LTX VAE decode from 2,185 ms to 447 ms, denoise is now ~83% of the 3,057 ms warm call. This clears the prior attribution gate for byte-inert RotateAttention-style RoPE/INT4 tracing—but only with projected end-to-end accounting and independent quality/identity gates.
- Next executable action remains CPU-only: supply the Comfy API export, official Gemma, and spatial-upscaler paths, then inspect the landed comparison suite's `plan.json`. No GPU ranking before the plan is valid.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-13T15:51:38-06:00`; durable update: `wiki/queries/forge-research-digest-2026-07-13-noon.md`.
- No Forge source write, local generation, remote GPU job, or spend.

## 2026-07-13T12:36:06-06:00 — LTX evidence envelope landed; dry-run exposes one concrete input blocker

- Safely fast-forwarded pristine Forge `main` by 11 commits to `main == origin/main @ 16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`; research used clean `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260713`, branch `research/forge-digest-20260713`, at the same SHA.
- The merged LTX Official/Forge/Comfy comparison suite is the ready evidence surface. Focused tests passed **29/29**. Its CPU-only real-example dry-run was then executed and failed closed before `plan.json` because the example still points to `/path/to/LTX-2.3_T2V_I2V_Two_Stage_Distilled.api.json`. Supply that API export plus official Gemma/spatial-upscaler paths, then rerun the plan before GPU generation.
- New paper lead: RotateAttention (`2607.02584v1`) reports RoPE-aware mixed INT4 attention with up to 2.2x kernel / 1.68x end-to-end speedup. Forge fit is strong because LTX uses exact split 3D RoPE; start with byte-inert pre/post-RoPE Q/K traces and offline quantization simulation, not a kernel port.
- SyncCache remains the third card: current main's 48-layer LongCat routing captures are useful scaffolding, but routing parity is not residual-cache safety. Trace internal visual/audio boundaries and replay offline before skipping work.
- Durable detail: `wiki/queries/forge-research-digest-2026-07-13-noon.md`; paper note: `wiki/papers/rotateattention-rope-aware-rotation-and-range-rectification-for-int4-quantized-attention-in-video-generation.md`. Only open Forge PR is draft #17 (arbitrary-N IC references); no overlap, source change, new PR, local GPU generation, remote job, or spend.

## 2026-07-13T06:28:58-06:00 — PR #16 evidence hygiene verified; real matrix is now the gate

- Forge primary remains read-only at dirty/diverged `main @ 33f3974` (ahead 1, behind 41); current-main research used clean `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260713`, branch `research/forge-digest-20260713 @ adfa4c3`.
- Draft PR #16 advanced to `9799ff7` with identity-hashed effective profiles plus bounded/atomic Comfy downloads, worker reaping, path containment, and stale-evidence purging. Focused local verification passed **29/29** with the QA dependencies supplied.
- Cheapest next gate: provide the official Gemma path, spatial upsampler, and ComfyUI API workflow; inspect one CPU-only dry-run plan, then run the serial official/Forge/Comfy matrix locally. Keep joint-A/V vs video-only and RNG/sampler differences explicit.
- Latest hosted run `29228913907` executed zero steps in every non-GPU job; it is infrastructure failure, not code evidence. Live arXiv through 2026-07-10 did not displace the queue.
- Durable detail: `wiki/queries/forge-research-digest-2026-07-13.md`. PR: https://github.com/gpu-cli/forge-lib/pull/16. No local generation, remote GPU job, or spend.

## 2026-07-13T03:41:51-06:00 — Reflection: PR #16 becomes the shared LTX evidence envelope

- Primary Forge remained read-only at dirty/diverged `main @ 33f3974` (ahead 1, behind 41); current-main inspection used the existing clean `origin/main @ adfa4c3` research worktree.
- Highest-value synthesis: use draft PR #16's identity-hashed official/Forge/Comfy comparison suite to close PR #15's modality, clear-speech SyncNet, and strict Ingredients identity gaps before adding new trajectory-changing work.
- Next CPU-only card is a four-row dry-run contract: official joint A/V, official video-only, Forge video-only, and Forge joint A/V. Real generation waits for PR #15's >=51-frame clear-speech fixture.
- Native INT8 becomes a later Forge comparison row only after one real-weight projection clears warm speed, cosine, dispatch, fallback, and workspace-lifetime gates; SyncCache remains trace-only and sequenced after PR #15.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-13T03:41:51-06:00`; durable update: `wiki/queries/forge-research-digest-2026-07-13.md`.
- No GPU execution, remote job, or spend. `site/experiments.md` remains stale and its remote command must not be executed.

## 2026-07-12T23:33:00-06:00 — Forge native INT8 full-path matrix completed

- Scaled the earlier INT32-accumulation screen into Forge's production-style BF16 activation cast → rowwise INT8 → chunked cuBLASLt GEMM → scaled BF16 output path at six real LTX-2.3/Z-Image projection dimensions.
- RTX 4090 delivered **2.02–2.63×** per-shape and weighted three-linear proxies of **2.35× LTX / 2.20× Z-Image**. RTX 5090 delivered **2.08–2.46×** and **2.26× / 2.18×**. A40 was shape-dependent at **1.03–1.48×**; local GB10 lost at **0.77–0.91×**.
- Numerical agreement cleared the experiment gate on every architecture: minimum sampled cosine `0.999989`, maximum NRMSE `0.004740`; exact INT8→INT32 correctness passed.
- Full-path remote spend was `$0.12941389`; total including the prior accumulation screen/setup attempts is `$0.25626667`. Final gpu-cli state: zero pods, `$0/hr`.
- Promotion: real-model integration profiling on RTX 4090/5090; shape-gated A40; disable this implementation on GB10. No whole-model or perceptual speed/quality claim yet.
- Durable record: `wiki/experiments/forge-native-int8-full-path-architecture-matrix.md`; team report: `site/experiments/forge-native-int8-full-path-matrix.md`; raw evidence: `artifacts/native-int8-full-path-matrix-2026-07-13/`.

## 2026-07-12T18:17:09-06:00 — Forge LTX profiling + tiling landed; execute the frontier

- Fetched Forge `origin/main @ 5e84177151db773b8becdb073e14dae63bfa146b`, which merges production LTX profiling/hardening PR #9 and request-scoped decoder-tiling PR #13. Clean reference `main @ 33f3974` remains one local metadata commit ahead/21 behind, so `--ff-only` correctly failed and the checkout stayed read-only.
- Top action: run one matched local LTX untiled/tiled cold+warm A/B on current main, recording semantic/config identity, stage attribution, peak scratch/resident bytes, and decode parity. The implementation and hardening work is already merged; this is now an evidence task, not a new feature branch.
- Sparse/cache tracing remains conditional: warm denoise/attention >=15% of wall time, projected removable work >=30%, replay cosine >=0.995. CFG quantization and LongCat continuation quality remain separate gates.
- Durable cards: `wiki/queries/forge-research-digest-2026-07-12.md`. No Forge source/build/artifact write, PR, local/remote GPU run, or spend occurred.

## 2026-07-12T13:37:53-06:00 — Wiki ↔ Forge resource-quality reflection

- Kept clean but diverged Forge `main @ 33f3974` read-only after fetching `origin/main @ bc12d68` (ahead 1, behind 5); no unsafe sync or duplicate tiling work.
- Highest-value synthesis: certify residency, runtime layout/scale slabs, request-scoped LTX VAE tiling, and later sparse/cache controls as independently typed Pareto rows in one identity-addressed evidence bundle.
- Next gate: CPU default/cache-identity checks, then one local cold/warm untiled-vs-tiled LTX memory/quality A/B; sparse/cache tracing remains conditional on warm denoise attribution.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-12T13:37:53-06:00`; durable synthesis: `wiki/queries/forge-research-digest-2026-07-12.md`.
- No GPU run or spend. `site/experiments.md` remains stale and its remote command must not be executed.

## 2026-07-12T12:14:23-06:00 — Forge Ada/tiling reconciliation digest

- Fetched Forge; the pristine-reference policy blocked synchronization because local `main @ 33f3974` is clean but one metadata commit ahead/five commits behind `origin/main @ bc12d68`. It remained untouched; exact divergence was recorded.
- **Ada card:** merged PR #12 now supports `sm_89` while correctly hiding NVFP4. Next proof is a 4090 CUDA smoke plus warm INT8/FP8 GEMM attribution; require cosine >=0.995 and projected >=10% end-to-end gain before model generation.
- **LTX tiling card:** draft PR #13 already owns request-scoped decoder tiling. Do not duplicate it; first correct placeholder commit authorship and distinguish hosted infrastructure failures from executed code failures, then gate default byte/cache identity and real memory/quality A/B.
- **Monitor/scale-slab card:** retain the host-only runtime-layout proof and one exact-profile cold/warm run before sparse/cache instrumentation; current evidence remains 45.2 s cold vs 1.67 s warm at 512x320x49.
- Durable detail: `wiki/queries/forge-research-digest-2026-07-12.md`. No implementation worktree was created or modified, no PR was opened, and no local/remote GPU run or spend occurred.

## 2026-07-12T09:01:23-06:00 — Daily GitHub project watch

- Ran eight authenticated, bounded repository searches; full results and exact queries: `site/github-project-watch.md#2026-07-12t090123-0600--daily-forge-github-project-watch`.
- Best active lead is `SlavaSexton/ComfyUI-Agent-Kit`, pushed today, as an app-side multi-shot/storyboard fixture reference. No new end-to-end N×~22-second continuity-preserving assembler was found.
- Forge remained untouched because its clean checkout is on non-main branch `chore/beads-shared-dolt-metadata`; no cloning, code search, GPU execution, or spend.

## 2026-07-12T07:34:01-06:00 — Reflection: certified LongCat continuation becomes the cache-risk benchmark

- Safely synchronized clean Forge `main` with `origin/main @ 0185b84f20102d5ff4764b47ffbebd61104c5d25`.
- Highest-value synthesis: LongCat continuation is no longer blocked—it is certified on both owned GPUs—so the next cheap action is an identity-addressed bundle of existing manifests/QA, followed by trace-only TetherCache/NaviCache/TaoCache hypotheses against the real 5.71 GiB continuation cache.
- Detailed reflection: `site/wiki-forge-reflections.md#2026-07-12t073401-0600--certified-longcat-continuation-as-the-cache-risk-benchmark`; durable update: `wiki/queries/forge-research-digest-2026-07-12.md`.
- No GPU execution, remote spend, Forge source write, commit, push, or PR.

## 2026-07-12T06:11:08-06:00 — Forge runtime-layout and monitor-first digest

- Fetched `origin/main @ 896faebdff6484275712e238e2b19dba72e4d6c2`; reference `main @ aa60918275977110002a445682a901095db5edd9` remains read-only and 58 commits behind because `.beads/interactions.jsonl` is modified. No local work was discarded or overwritten.
- New top card: Forge already identifies a runtime-native NVFP4 scale slab as the next format-level win—remove repeated CPU swizzle/synchronous upload of 1.91 GiB of scale tensors across 1,798 tensors, gated by v1 byte identity and measured cold-load/resident-byte reductions.
- Queue: (1) host-only scale-slab recipe/identity/size proof, then real-GPU parity/perf; (2) exact-profile cold/warm LTX attribution before HyperVAttention/NaviCache traces; (3) keep LongCat continuation identity and CFG-aware quantization as independent blocked quality gates.
- Live arXiv through 2026-07-09 produced no new training-free single-checkpoint paper that displaced this queue. Durable detail: `wiki/queries/forge-research-digest-2026-07-12.md`.
- No implementation worktree was created or modified; no local/remote GPU run, PR, or spend.

## 2026-07-12T01:30:49-06:00 — Reflection: identity-addressed Forge evidence bundles

- Forge remained read-only at dirty `main @ aa60918275977110002a445682a901095db5edd9`, 58 commits behind the known `origin/main`; no sync or source write was attempted.
- Highest-value synthesis: join monitor, eight-sigma trace, CFG, decoded-media, and QA sidecars under Forge semantic/config identity, while keeping diagnostic verbosity out of media cache identity and output-changing controls typed/distinct.
- Full section: `site/wiki-forge-reflections.md#2026-07-12t013049-0600--forgewiki-reflection`; durable update: `wiki/queries/forge-research-digest-2026-07-12.md`.
- `site/experiments.md` remains a stale obsolete remote-command queue; no command was executed. No local/remote GPU run or spend.

## 2026-07-12T00:07:59-06:00 — Forge monitor-first optimization and product-control digest

- Fetched `origin/main @ 896faebdff6484275712e238e2b19dba72e4d6c2`; local reference remains read-only at `main @ aa60918275977110002a445682a901095db5edd9`, 58 commits behind, because `.beads/interactions.jsonl` is modified. No local work was discarded or overwritten.
- Forge's merged per-call video monitor and graph residency fixes make one cold/warm exact-profile attribution run the next discriminating action before HyperVAttention/NaviCache instrumentation.
- The unified program now supplies typed artifacts, capability manifests, cache identity, and request-scoped denoise-control tests; any promoted Spectrum/TJS/cache feature should land through those controls, not environment variables.
- Strict LongCat continuation identity and CFG-aware quantization remain independent quality gates, blocked here by the external continuation artifact, cuDNN 9, and matched quant artifacts.
- Durable card set: `wiki/queries/forge-research-digest-2026-07-12.md`.
- No local/remote GPU run, Forge implementation, PR, or spend.

## 2026-07-11T19:26:19-06:00 — Reflection: performance attribution before LTX method traces

- Fetched `origin/main @ 31e0af11` but kept dirty local Forge `main @ aa609182` read-only (`.beads/interactions.jsonl` modified).
- The new opt-in video performance monitor makes cold/warm Resident-vs-Staged attribution the next shared LTX test before sparse-attention, NaviCache, or quantized-KV work.
- LongCat's existing 253-frame Windows artifact remains the correct input for continuation SFace/join QA; it is unavailable on this host, so no regeneration was attempted.
- Full reflection: `site/wiki-forge-reflections.md` section `2026-07-11T19:26:19-06:00`.
- No local generation, remote GPU run, or spend.

## 2026-07-11T18:04:51-06:00 — Forge evening triage: queue unchanged, reference checkout locally dirty

- Fetched Forge read-only and verified `HEAD == origin/main == aa60918275977110002a445682a901095db5edd9` on `main`; synchronization is current, but `.beads/interactions.jsonl` is locally modified, so no checkout/merge or reference-tree write was attempted.
- Live arXiv refresh through submissions dated 2026-07-09 found no training-free, single-checkpoint result that displaces the noon queue. OPSD-V remains post-training; the newest directly relevant signals (SAGA and guidance-aware quantization) are already captured in the wiki.
- Action queue remains: (1) score existing LongCat three-segment output for portrait identity across both joins; (2) unblock the matched RTN/AWQ CFG matrix with cuDNN 9 and artifacts; (3) collect a pixel-inert eight-sigma attention/residual trace before sparse-kernel work.
- Existing clean experiment worktree available: `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-strict-identity`, branch `exp/cfg-quant-strict-identity`, at `aa609182`; no worktree was modified.
- No local generation, remote GPU run, PR, or GPU spend.

## 2026-07-11T13:23:19-06:00 — Forge/wiki LongCat continuation reflection

- Safely synced clean Forge `main @ aa609182`; already matched `origin/main`.
- Highest-value correction: LongCat's single-segment identity baseline already has 100% sampled-face detection and mean SFace cosine 0.9304. The missing product gate is portrait/first-frame identity across the two joins of the 253-frame continuation path.
- `longcat_avatar_quality.py` lacks SFace, portrait-reference, segment, and boundary outputs; factor the existing evaluator from `ltx_longform_quality.py` and score an existing stress artifact before generating more.
- Follow-up after certification: LongCat's ~36.9k full-attention tokens make it a promising pixel-inert sparse-attention trace target; keep its 5.728-GiB continuation-KV compression study separate from denoiser caching.
- Updated `wiki/queries/forge-research-digest-2026-07-11-noon.md`; full report: `site/wiki-forge-reflections.md#2026-07-11t132319-0600--forgewiki-reflection`.
- No local generation, remote GPU job, or spend.

## 2026-07-11T12:00:32-06:00 — Forge execution gates after LongCat Avatar merge

- **Forge preflight:** safely fetched and verified the pristine reference checkout clean on `main @ aa60918275977110002a445682a901095db5edd9`, exactly matching `origin/main`; no implementation worktree was created or modified.
- **Finding 1:** run offline YuNet/SFace identity trajectories and boundary sheets on the newly merged LongCat Avatar three-segment stress artifact before claiming character consistency.
- **Finding 2:** the CFG-aware LTX quant verdict remains the highest-value blocked experiment; provide cuDNN 9 and matched RTN/AWQ artifacts, then run exact self-control → one real trace → decoded strict-identity matrix.
- **Finding 3:** if those prerequisites remain blocked, capture one pixel-inert LTX eight-sigma observability trace and require projected >=30% attention-work reduction, replay cosine >=0.995, and >=15% end-to-end attribution before sparse-kernel work.
- **Novelty:** live arXiv results through 2026-07-09 did not displace this queue; OPSD-V and FourTune require post-training/backward work.
- **Artifacts:** added `wiki/queries/forge-research-digest-2026-07-11-noon.md`; rebuild/lint results are recorded below.
- **Spend/PR:** no local generation, remote GPU run, spend, Forge code change, commit, push, or PR.

## 2026-07-11T10:37:50-06:00 — Forge verified experiment-to-PR promotion

- **Outcome:** `BLOCKED`; no product change, commit, push, or draft PR.
- **Reconciliation:** Forge PRs #1 (`40aac75`) and #2 (`eee7c1d`) already merged the CFG-aware diagnostic and prompt-conditioned all-eight-sigma plan. The former `production-hardening@0aeec4b` same-noise/render scaffolding is also an ancestor of current main. No open Forge PR exists, so duplicate work was eliminated.
- **Selected candidate:** complete the remaining strict-identity quantization promotion gate: v2 exact self-control, BF16→RTN/AWQ/current-recipe all-eight-sigma traces, then matched 49/145-frame decoded renders and SFace/contact-sheet review.
- **Isolation:** created clean worktree `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-strict-identity`, branch `exp/cfg-quant-strict-identity`, base `origin/main@aa60918275977110002a445682a901095db5edd9`. Models were referenced in `/home/aegisfang666/models/forge/`; none were copied.
- **Real execution:** configured a fresh CUDA 13.0/SM121 build and built `forge_ltx2_cfg_quant_diag`, `forge_quant_cfg_diagnostics_test`, and `forge_ltx2_awq_capture_plan_test`. Both focused unit gates passed. The v2 same-artifact command started but failed closed while building prompt contexts: `Gemma encode failed: gemma3 requires the cuDNN build`.
- **Blockers:** local cuDNN runtime/headers are absent (the available cuDNN frontend headers alone are insufficient); no matched LTX RTN, CFG-aware AWQ, or recipe artifacts exist locally. A remote run would not fix missing matched artifacts and would require syncing very large models, so no unjustified rental was started.
- **Spend:** gpu-cli healthy, RunPod key configured, zero active pods, reported spend `$0`; cycle/local experiment spend `$0` of the `$5` cap and daily `$0` observed of `$30`.
- **Smallest action:** install/provide cuDNN 9 for the Spark Forge build and generate/provide matched RTN plus CFG-aware AWQ artifacts from the existing BF16 source. Then rerun the exact v2 self-control first and continue to the immutable render matrix.
- **Primary checkout:** clean `main`, exactly `origin/main@aa609182`; experiment worktree preserved clean because the candidate remains blocked.

## 2026-07-11T09:01:41-06:00 — daily Forge GitHub project watch

- Safely fast-forwarded clean Forge `main` to `aa609182`; the newly landed native LongCat Avatar path makes `rookiestar28/ComfyUI-LongCat-Avatar` and `smthemex/ComfyUI_LongCat_Avatar` useful workflow-parity references.
- `SlavaSexton/ComfyUI-Agent-Kit` remains the strongest multi-shot orchestration lead, but no N×~22-second continuity-preserving assembler was verified today.
- Full report: `site/github-project-watch.md`; durable note: `wiki/sources/github-project-watch-2026-07-11.md`.
- Eight authenticated repository searches; no cloning, code search, local GPU run, remote GPU job, or spend.

## 2026-07-11T07:19:53-06:00 — Forge/wiki shared-trace reflection

- Forge remained read-only at `main @ eee7c1d` because untracked `.hermes/` makes the worktree dirty; HEAD matches `origin/main`.
- Highest-value synthesis: unify CFG branch/guided metrics, sparse-attention occupancy, NaviCache block deltas, and profile timing into one versioned eight-sigma LTX trace, then join offline decisions to the existing decoded SFace/longform quality matrix.
- Updated `wiki/queries/forge-research-digest-2026-07-11.md`; full report: `site/wiki-forge-reflections.md#2026-07-11t071953-0600--forgewiki-reflection`.
- No generation, remote GPU job, or spend.

## 2026-07-11T05:57:10-06:00 — Forge HyperVAttention and LTX runtime digest

- **Forge preflight:** fetched `origin`; reference `main @ eee7c1d2c9b55c01f105f4451334037df81a3dd8` exactly matches `origin/main`. Untracked `.hermes/` kept the primary checkout non-pristine, so it remained read-only. Clean experiment worktree remains `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-promotion`, `exp/cfg-quant-all-sigma-reconcile @ bfd8f2534f19e73c91d05d58609a4106c9d9d34e`. No open Forge PRs.
- **Finding 1:** HyperVAttention (`2607.03012v1`) is a new training-free sparse-attention target: trace LTX cluster/topology churn across eight sigmas before kernel work; require >=30% projected work reduction and replay cosine >=0.995.
- **Finding 2:** Sol (`2606.23743v2`) explicitly accelerates LTX-2.3 with an instance-specific stack. Reuse Forge manifests to attribute attention, ring upload, DiT, VAE, and QA costs before composing controls.
- **Finding 3:** UnityShots (`2606.21661v1`) requires training and is not portable as-is, but its fixed opening-shot + previous-tail slots motivate a bounded ablation using Forge's existing anchors and latent-tail extension against SFace identity gates.
- **Artifacts:** added `wiki/queries/forge-research-digest-2026-07-11.md`; rebuilt index/overview/graph and linted the wiki.
- **Spend:** no local generation, remote GPU job, or GPU spend; `$0`.
- **Recommended action:** approve card 1's instrumentation-only local trace in a new/rebased isolated Forge worktree; it changes no generated pixels.

## 2026-07-10T23:52:05-06:00 — Forge execution-first research digest

- **Forge preflight:** fetch succeeded; `main` and `origin/main` are both `eee7c1d2c9b55c01f105f4451334037df81a3dd8`. The reference checkout remains unmodified because untracked `.hermes/` makes it non-pristine. Existing experiment worktree: `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-promotion`, `exp/cfg-quant-all-sigma-reconcile @ bfd8f2534f19e73c91d05d58609a4106c9d9d34e`.
- **Novelty check:** live arXiv results through 2026-07-09 did not displace the current training-free shortlist. FourTune requires W4A4G4 post-training/backward kernels; OPSD-V requires on-policy self-distillation; LongE2V fine-tunes an event-video model.
- **Priority 1:** execute Forge main's merged all-eight-sigma CFG diagnostics: exact self-control, BF16→direct RTN, and BF16→CFG-aware AWQ on identical real trajectories, followed by decoded contact-sheet/VLM review.
- **Priority 2:** if matched quant artifacts are unavailable, run the instrumentation-only LTX attention occupancy trace before considering sparse kernels.
- **Priority 3:** offline-rank diverse negative-index anchors, then gate a matched regeneration against the recorded 40%/0% SFace strict-identity baselines.
- **Artifacts:** added `wiki/queries/forge-research-digest-2026-07-10-night.md`; wiki index/overview/graph rebuilt and linted.
- **Spend:** no local generation, remote GPU job, or GPU spend; `$0`.
- **Recommended action:** approve immediate card 1 execution in the existing isolated worktree; fallback approval is the card 2 trace.

## 2026-07-10T19:10:44-06:00 — Forge/wiki reflection: CFG-aware quant loop on main

- Safely synced clean Forge `main @ eee7c1d`; PR #2's prompt-conditioned all-eight-sigma CFG diagnostic and CFG-aware AWQ capture plan are now merged.
- Highest-value synthesis: the old instrumentation/golden-capture blocker is gone. Run v2 self-control, BF16→direct RTN, and BF16→new CFG-aware AWQ first; then require a separate real-trajectory decoded perceptual gate because v2 records `trajectory: false`.
- Updated `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md` and `site/wiki-forge-reflections.md`.
- No local generation, remote GPU job, or spend.

## 2026-07-10T17:49:38-06:00 — Forge sparse-attention and identity-anchor research digest

- **Forge preflight:** read-only on dirty `feat/cfg-aware-quant-diagnostics @ e843aa011f9121da66937034787c0b4fc22c653a` with untracked `.wrangler/`; no fetch/pull or checkout mutation. Additional worktrees: detached `d5b04a7fbd7d4cb7d28335b3b0f392ce54fb187d` and `exp/cfg-quant-all-sigma-reconcile @ 40aac7576f6994a946c590c5dd3d3c6bda850b27`.
- **Finding 1:** ScalingAttention (`2606.23019v1`) motivates an instrumentation-only LTX per-head block-occupancy trace before any sparse kernel. Gate on held-out topology stability and projected >=30% attention FLOP reduction.
- **Finding 2:** TetherCache (`2606.13035v1`) is not directly portable from autoregressive Self-Forcing to LTX, but its relevance+diversity selection is a bounded candidate for Forge's existing negative-index anchors. Gate against the recorded 40%/0% SFace strict-identity baselines.
- **Finding 3:** native INT8 DiT GEMM (`2606.14598v1`) supports a device-gated older-GPU microbench, not a Blackwell path change; authors report 2.8-4.2x GEMM and ~1.1x end-to-end on RTX 3090, while B200 loses.
- **Artifacts:** added three paper notes and `wiki/queries/forge-research-digest-2026-07-10-late.md`; rebuilt/linted the wiki and refreshed team overview/graph.
- **Spend:** no local generation, remote job, or GPU spend; `$0`.
- **Recommended action:** approve only the cheapest ScalingAttention occupancy trace in an isolated clean Forge worktree; it changes no generated pixels and can reject the idea before kernel implementation.

## 2026-07-10T15:40:18-06:00 — Forge verified experiment-to-PR promotion

- **Outcome:** `BLOCKED`; no speculative Forge changes, push, or PR.
- **Reconciliation:** `feat/cfg-aware-quant-diagnostics` is already merged by Forge PR #1 at `40aac7576f6994a946c590c5dd3d3c6bda850b27`, eliminating a duplicate implementation/PR. `origin/production-hardening@0aeec4b` already has unmerged same-noise A/B and prompt-context scaffolding and has no open PR.
- **Selected unresolved candidate:** prompt-conditioned LTX traces over all eight production sigmas, comparing same-artifact control, RTN, AWQ, and current recipe variants on identical trajectories, then correlating conditional/unconditional/CFG-gap/guided cosine and MSE with decoded contact-sheet review.
- **Isolation:** worktree `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-promotion`; branch `exp/cfg-quant-all-sigma-reconcile`; base `origin/main@40aac7576f6994a946c590c5dd3d3c6bda850b27`. Reused model storage by symlink; no large artifacts copied.
- **Real execution:** reran direct-NVFP4 vs itself with `forge_ltx2_cfg_quant_diag`; conditional, unconditional, gap, and guided cosine were exactly `1.0`, and all MSE values were `0.0`. `ctest --test-dir build-eng --output-on-failure -R quant_cfg_diagnostics` passed 1/1.
- **Blocker:** this host has BF16, official combined FP8, and direct NVFP4 LTX artifacts, but no matched RTN, AWQ, or recipe-variant artifacts and no prompt-conditioned `golden-ltx` capture. The required all-eight-sigma matrix and render/VLM correlation cannot be run honestly from the synthetic one-sigma fixture.
- **Spend:** local DGX Spark / NVIDIA GB10; remote GPU not used; `$0` spend.
- **Outputs:** `outputs/forge-cfg-quant-promotion-20260710/self-control.json`, `site/experiments/forge-cfg-quant-all-sigma-promotion.md`, and `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md`.
- **Smallest action:** provide or generate one prompt-conditioned golden LTX capture plus matched RTN, AWQ, and recipe variants from the same BF16 source; then reuse/reconcile `origin/production-hardening` for the matrix and decoded review.

## 2026-07-08T13:01:15-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded; wrote `site/index.md` and updated `wiki/` from live discovery/scoring.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `papers/diffusion-llm-training-benchmark.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, and `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hits included `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `sources/huggingface-z-image-turbo-quantization-candidates.md`, `sources/oracle-consistent-character-generation-lora-paper.md`, and `sources/z-image-paper-2511-22699.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization agents test-time compute"` — succeeded; top hits included `papers/moworld-a-flash-world-model.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.

### Top papers / findings
1. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair**. Matched distillation and inference interests. The key operational claim is that a short teacher-alignment repair stage can make pruned diffusion generators usable for one-step distillation; reported ImageNet-512 results include 20% pruning to 98.826M parameters and one network evaluation with FID 3.12 versus a 124.713M-parameter, 63-NFE baseline at FID 3.53. This is a strong candidate for a local reproducibility/readiness check if code appears.
2. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion**. Matched diffusion/video, distillation, and inference efficiency themes. It claims a 5B Wan2.2-derived video diffusion model can be reformulated/distilled for constant-memory chunk-wise generation, causal linear attention, head pruning, step distillation, and memory-optimized VAE decoding, producing 5s 480x832 16 FPS videos in 20s on a commercial mobile device. Useful as a systems/compression reference even if full training is expensive.
3. `2607.06216v1` — **MoWorld: A Flash World Model**. Matched inference optimization and distillation themes in the wiki query. It claims an end-to-end world-model pipeline with data generation, pre-training, distillation, and mixed-precision parallel inference, with up to 50 FPS and 30–50% of existing world-model inference cost. Worth tracking for lightweight benchmarking ideas and local smoke-test feasibility.

Secondary live-discovery items were less aligned with the current profile or explicitly near excluded areas: `2607.06268v1` MAC-XA and `2607.06133v1` property-driven synthetic data are medical-domain adjacent; `2607.06483v1` floor-plan generation and `2607.06319v1` motion prediction mainly match synthetic-data watch terms rather than the high-priority LLM/diffusion/inference agenda.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/` for the live discovery set, including `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `moworld-a-flash-world-model.md`, and related scored papers.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 15 papers, 4 sources, 2 concepts, 21 total wiki pages, 28 graph edges.

### Follow-up questions / candidate local smoke tests
- For `2607.06335v1`, check whether code or pseudocode is available and whether the teacher-alignment repair stage can be approximated on a tiny diffusion model locally before any remote GPU spend.
- For `2607.06173v1`, inspect the project page/repository for released inference code and identify whether a memory-only benchmark can be run locally without retraining.
- For `2607.06216v1`, look for released MoWorld artifacts and determine whether the 50 FPS claim is tied to NPU-specific kernels or has a portable PyTorch/CUDA path.
- For the Z-Image-Turbo thread, continue tracking quantized GGUF/INT8 candidates and character-consistency evaluation baselines before proposing a local smoke test.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.


## 2026-07-08T13:09:19-06:00 — steering update

- Updated `research_profile.yaml` to sharpen the focus on diffusion and LLMs, especially video diffusion/video generation and character consistency/identity preservation.
- Updated the periodic research cron prompt so scheduled cycles query `video diffusion character consistency` and treat those themes as top priority.
- Operational constraint for the next hour: `gpu`/gpu-cli is not ready here. Scheduled research must not call gpu-cli or run remote GPU jobs. Any compute-oriented follow-up during this window must be local Spark-only and cheap.
- No remote GPU jobs were run. No remote GPU spend occurred.

## 2026-07-08T13:31:00-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — failed against live arXiv with HTTP 429 rate limiting. This cycle therefore used the required fallback and should not be treated as new live discovery.
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml --offline-sample` — succeeded; wrote `site/index.md` and updated `wiki/` from the deterministic offline sample.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "video diffusion character consistency"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `sources/oracle-consistent-character-generation-lora-paper.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hits remained the Z-Image-Turbo source notes plus ORACLE and diffusion compression notes.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `papers/diffusion-llm-training-benchmark.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, and `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization agents test-time compute"` — succeeded; top hits included `papers/moworld-a-flash-world-model.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.

### Top papers / findings
1. **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** (`2607.06173v1`) stayed the strongest current wiki hit for the new video-generation focus. It is directly relevant to video diffusion systems: recurrent/chunk-wise generation, causal linear attention, head pruning, step distillation, and memory-optimized VAE decoding around a 5B Wan2.2-derived model. The paper claims 5-second 480x832 videos at 16 FPS in 20 seconds on a commercial mobile device. Next step is repository/project-page inspection; no compute needed yet.
2. **ORACLE consistent character generation LoRA paper** remains the best stored source for character consistency / identity preservation. It is not a fresh live result from this cycle, but it is the most relevant current wiki baseline for evaluating consistent-character generation and Z-Image-Turbo identity preservation experiments.
3. **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** (`2607.06335v1`) remains a strong diffusion-efficiency candidate. It claims a short teacher-alignment repair stage enables pruned diffusion generators to enter one-step distillation, with ImageNet-512 results of 98.826M parameters / 1 NFE / FID 3.12 at 20% pruning. This is relevant as a compression recipe that could inform Z-Image-Turbo speed/quality tradeoff thinking, though it is not specifically character consistency.

The offline fallback also refreshed **Diffusion LLM Training Benchmark** (`2601.12345v1`), a deterministic sample paper with score 11.0 and metadata marked `confidence: medium`. Because live arXiv returned HTTP 429, do not interpret this sample as a new recent paper.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- `wiki/papers/diffusion-llm-training-benchmark.md`

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 15 papers, 4 sources, 2 concepts, 21 total wiki pages, 28 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06173v1` MobileWan: inspect the project page for code/artifacts; if inference code is available, propose a cheap local-only memory/load smoke test before any generation benchmark.
- For the ORACLE / character consistency track: convert the stored source note into a paper page or query page with evaluation criteria, then identify a no-GPU or tiny local Spark check for identity-consistency metrics.
- For Z-Image-Turbo quantization: continue tracking GGUF/INT8/Convrot candidates and evaluate download size, license, and local VRAM requirements before proposing a Spark-only smoke test.
- For `2607.06335v1`: inspect for released code and whether teacher-alignment repair can be approximated on a toy diffusion model locally.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- Per James's temporary constraint, gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. Any compute follow-up before 2026-07-08T14:10:00-06:00 should be local Spark-only and cheap.


## 2026-07-08T13:35:16-06:00 — steering update

- Refined focus from general video generation to **desktop/server video generation**: workstation/server GPU video diffusion, local inference optimization, ComfyUI-style workflows, and reproducible character-consistency evaluation.
- Updated `research_profile.yaml` to prefer desktop/server GPU inference paths and exclude/deprioritize mobile-only generation or mobile-device-only optimization.
- Updated the periodic research cron prompt so scheduled cycles query `desktop server video generation diffusion` and interpret mobile-only papers as lower priority unless they contain transferable desktop/server techniques.
- Operational constraint remains: `gpu`/gpu-cli is not ready here; scheduled research must not call gpu-cli or run remote GPU jobs. Any compute-oriented follow-up during this window must be local Spark-only and cheap.
- No remote GPU jobs were run. No remote GPU spend occurred.

## 2026-07-08T13:57:04-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; wrote `site/index.md` and updated `wiki/`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "desktop server video generation diffusion"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `papers/diffusion-llm-training-benchmark.md`, and `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "video diffusion character consistency identity preservation"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `papers/diffusion-llm-training-benchmark.md`, and `sources/oracle-consistent-character-generation-lora-paper.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hits remained the Z-Image-Turbo intent/candidate notes, ORACLE, and diffusion compression notes.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `papers/diffusion-llm-training-benchmark.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization local workstation gpu"` — succeeded; top hits included `papers/moworld-a-flash-world-model.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability**. This is the strongest live match for the Z-Image-Turbo / desktop-server inference focus. It claims a training-free Truncated Jump Sampling early-exit method for diffusion/flow models, with 20–70% fewer NFEs across SDXL, SD3.5M, Z-Image-Turbo, and class-conditional benchmarks while keeping near-matched quality. This looks directly actionable as a local Spark-only smoke-test candidate because it should not require retraining or remote GPU spend.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair**. Still a strong diffusion-efficiency candidate: it combines pruning repair with one-step distillation and reports ImageNet-512 results such as a 20% pruned one-step generator at 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter, 63-NFE baseline at FID 3.53. Relevance is high for server/workstation speed-quality tradeoffs, but local testing depends on code availability and a small checkpoint path.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion**. Despite the mobile target, it remains relevant as a Wan2.2-derived video diffusion systems/compression reference: recurrent chunk-wise generation, constant-memory attention, causal linear attention, head pruning, step distillation, and memory-optimized VAE decoding. It should stay deprioritized for mobile-only deployment claims, but the transferable techniques are useful for desktop/server ComfyUI-style pipelines.

Additional useful findings: `2607.06216v1` **MoWorld** is relevant to local/workstation inference optimization through distillation and mixed-precision parallel inference, while the stored ORACLE and Z-Image-Turbo source notes remain the best wiki anchors for character consistency / identity-preservation evaluation.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current index after rebuild: 23 total wiki pages, including 17 paper pages, 4 source pages, and 2 concept pages.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: inspect for code or sampler pseudocode, then try a tiny local Spark-only early-exit sampling comparison on an already-local or small downloadable diffusion checkpoint. This is the most aligned near-term smoke test because the method is training-free.
- For `2607.06173v1` MobileWan: inspect the project page/repository for portable CUDA/PyTorch inference code and separate transferable Wan2.2 compression ideas from mobile-only deployment details.
- For ORACLE / character consistency: promote the stored source note into a full paper/query page with concrete identity-consistency metrics, then evaluate whether those metrics can be run locally on a tiny generated sample set.
- For Z-Image-Turbo quantization candidates: continue checking license, artifact size, VRAM needs, and ComfyUI compatibility before proposing a Spark-only load/inference smoke test.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- Per James's temporary constraint, gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. Any compute follow-up before 2026-07-08T14:10:00-06:00 should be local Spark-only and cheap.


## 2026-07-08T14:20:04-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; wrote `site/index.md` and updated `wiki/`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "desktop server video generation diffusion"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "video diffusion character consistency identity preservation"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `sources/oracle-consistent-character-generation-lora-paper.md`, and `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hits remained `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `sources/huggingface-z-image-turbo-quantization-candidates.md`, `sources/oracle-consistent-character-generation-lora-paper.md`, `sources/z-image-paper-2511-22699.md`, and relevant diffusion-compression paper notes.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `papers/diffusion-llm-training-benchmark.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization local workstation gpu"` — succeeded; top hits included `papers/moworld-a-flash-world-model.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** remains the most actionable desktop/server inference item. It explicitly reports results on Z-Image-Turbo and claims training-free Truncated Jump Sampling can cut NFEs by 20–70% across SDXL, SD3.5M, Z-Image-Turbo, and class-conditional benchmarks with near-matched quality. Because it is training-free, it is still the best local Spark-only smoke-test candidate before any remote spend.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** is the strongest diffusion compression/distillation paper in the current live set. It reports that a short teacher-alignment repair bridge lets a pruned diffusion generator enter one-step distillation; the abstract reports a 20% pruned one-step ImageNet-512 generator at 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter / 63-NFE baseline at FID 3.53. This is relevant to workstation/server speed-quality tradeoffs, but local validation depends on released code or a small-model reproduction path.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** is lower priority as a deployment target because James deprioritized mobile-only generation, but it remains worth tracking for transferable Wan2.2-derived techniques: recurrent chunk-wise generation, constant-memory attention, causal linear attention, head pruning, step distillation, and memory-optimized VAE decoding. These ideas could inform desktop/server ComfyUI-style video pipelines even if the paper's headline device is mobile.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization due to distillation and mixed-precision parallel inference claims. The stored ORACLE and Z-Image-Turbo source notes remain the wiki anchors for character consistency / identity-preservation evaluation; no newer live paper in this cycle displaced them.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 17 paper pages, 4 source pages, 2 concept pages, 23 total wiki pages, 32 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: inspect code/pseudocode and try a local-only early-exit sampler comparison on a small available diffusion checkpoint or a minimal Z-Image-Turbo path if artifact size/VRAM permit.
- For ORACLE / character consistency: promote the source note into a full paper/query page with concrete identity-consistency metrics, then run a tiny metric-only evaluation on existing/generated samples without remote GPU use.
- For `2607.06173v1` MobileWan: inspect the project page for portable CUDA/PyTorch pieces and separate server-transferable Wan2.2 compression ideas from mobile/NPU-specific details.
- For Z-Image-Turbo quantization candidates: continue checking license, artifact size, VRAM requirements, and ComfyUI compatibility before any Spark-local load/inference smoke test.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. Discovery, wiki maintenance, report writes, and query commands only.

## 2026-07-08T14:42:57-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; wrote `site/index.md` and updated `wiki/`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "desktop server video generation diffusion"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "video diffusion character consistency identity preservation"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `sources/oracle-consistent-character-generation-lora-paper.md`, and `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hits remained the Z-Image-Turbo intent/candidate notes, ORACLE, Z-Image paper note, and relevant diffusion-compression paper notes.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `papers/diffusion-llm-training-benchmark.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization local workstation gpu"` — succeeded; top hits included `papers/moworld-a-flash-world-model.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** remains the most actionable desktop/server inference item. The report says it is training-free, applies to diffusion/flow models including Z-Image-Turbo, and claims 20–70% fewer NFEs with near-matched quality across SDXL, SD3.5M, Z-Image-Turbo, and class-conditional benchmarks. This is the best near-term local Spark-only smoke-test candidate because it should not require retraining.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** remains the strongest diffusion compression/distillation paper in the current live set. It reports a short teacher-alignment repair bridge before one-step distillation, including a 20% pruned ImageNet-512 generator at 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter / 63-NFE baseline at FID 3.53. Relevant for server/workstation speed-quality tradeoffs, but local validation depends on released code or a toy/small-checkpoint path.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** remains lower priority as a deployment target because the headline is mobile, but it is still useful for transferable Wan2.2-derived video diffusion systems ideas: recurrent chunk-wise generation, constant-memory attention, causal linear attention, head pruning, step distillation, and memory-optimized VAE decoding. Treat it as a desktop/server technique source, not a mobile deployment goal.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization due to distillation and mixed-precision parallel inference claims. Stored ORACLE and Z-Image-Turbo notes remain the best wiki anchors for character consistency / identity preservation; no newer live paper in this cycle displaced them.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 17 paper pages, 4 source pages, 2 concept pages, 23 total wiki pages, 32 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: inspect code/pseudocode and try a local-only early-exit sampler comparison on a small available diffusion checkpoint or a minimal Z-Image-Turbo path if artifact size/VRAM permit.
- For ORACLE / character consistency: promote the source note into a full paper/query page with concrete identity-consistency metrics, then run a tiny metric-only evaluation on existing/generated samples without remote GPU use.
- For `2607.06173v1` MobileWan: inspect the project page for portable CUDA/PyTorch pieces and separate server-transferable Wan2.2 compression ideas from mobile/NPU-specific details.
- For Z-Image-Turbo quantization candidates: continue checking license, artifact size, VRAM requirements, and ComfyUI compatibility before any Spark-local load/inference smoke test.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. Discovery, wiki maintenance, report writes, and query commands only.


## 2026-07-08T14:53:27-06:00 — x-Prediction/TJS Spark harness progress

- Created Spark-local harness scaffolding for x-Prediction / Truncated Jump Sampling comparison:
  - `src/auto_research/tjs_z_image.py`
  - `experiments/configs/tjs_z_image_turbo_spark.yaml`
  - `experiments/configs/tjs_tiny_proxy_spark.yaml`
  - `experiments/prompts/tjs_z_image_smoke.yaml`
  - `tests/test_tjs_z_image.py`
- Installed isolated diffusion environment `.venv-spark-diff` with CUDA 13/AArch64 PyTorch and Diffusers stack. The main project env was not polluted.
- Verified Spark CUDA locally: `torch 2.13.0+cu130`, CUDA available, device `NVIDIA GB10`, fp16 matmul succeeded.
- Verified installed Diffusers has `ZImagePipeline`.
- Ran harness dry-run: `outputs/tjs_z_image_turbo_spark/20260708-145259-dry-run/`.
- Ran tiny Diffusers proxy smoke test: `outputs/tjs_z_image_turbo_spark/20260708-145327-tiny-proxy/`.
  - Baseline image generated successfully at 128x128, 2 steps, latency ~0.68s.
  - TJS row is currently a placeholder with `error: real_tjs_adapter_not_implemented_yet`; real Z-Image scheduler adapter still needs implementation.
- Test suite status: `uv run pytest -q` passed with 25 tests.
- No `gpu`/gpu-cli calls were made. No remote GPU jobs were run. No remote GPU spend occurred.


## 2026-07-08T15:05:40-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; wrote `site/index.md` and updated `wiki/`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "desktop server video generation diffusion"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "video diffusion character consistency identity preservation"` — succeeded; top hits included `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/proxypose-6-dof-pose-tracking-via-video-to-video-translation.md`, `sources/research-intent-z-image-turbo-quantization-and-character-consistency.md`, `papers/diffusion-llm-training-benchmark.md`, and `sources/oracle-consistent-character-generation-lora-paper.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hits were `experiments/x-prediction-tjs-z-image-turbo-spark.md`, the Z-Image-Turbo intent/candidate source notes, ORACLE, and the Z-Image paper note.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `papers/diffusion-llm-training-benchmark.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, and the local TJS harness note.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization local workstation gpu"` — succeeded; top hits included `papers/moworld-a-flash-world-model.md`, `experiments/x-prediction-tjs-z-image-turbo-spark.md`, `papers/diffusion-llm-training-benchmark.md`, `papers/bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `papers/mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`, and `papers/x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** remains the most actionable desktop/server inference item. It explicitly includes Z-Image-Turbo in the reported evaluation and claims training-free Truncated Jump Sampling can reduce NFEs by 20–70% while preserving near-matched quality. The wiki now also has a local Spark harness note with tiny-proxy baseline verification, so the next step is implementing the real Z-Image/TJS adapter rather than remote execution.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** remains the strongest diffusion compression/distillation item in the live set. It reports a short teacher-alignment repair bridge before one-step distillation and an ImageNet-512 20% pruned one-step generator at 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter / 63-NFE baseline at FID 3.53. This is relevant for workstation/server speed-quality tradeoffs, but local validation still depends on released code or a toy/small-checkpoint reproduction path.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** is still lower priority as a deployment target because the headline is mobile, but it remains useful for transferable Wan2.2-derived systems ideas: recurrent chunk-wise generation, constant-memory attention, causal linear attention, head pruning, sampling-step distillation, and memory-optimized VAE decoding.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization due to distillation and mixed-precision parallel inference claims. The stored ORACLE and Z-Image-Turbo source notes remain the best wiki anchors for character consistency / identity preservation; no newer live paper in this cycle displaced them.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 17 paper pages, 4 source pages, 2 concept pages, 1 experiment page, 24 total wiki pages, 34 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: implement the real Z-Image-Turbo scheduler/early-exit adapter in the existing Spark harness and compare baseline vs TJS on a very small prompt set, using local Spark only.
- For ORACLE / character consistency: promote the source note into a full paper/query page with concrete identity-consistency metrics, then run a tiny metric-only evaluation on existing/generated samples without remote GPU use.
- For `2607.06173v1` MobileWan: inspect the project page for portable CUDA/PyTorch pieces and separate server-transferable Wan2.2 compression ideas from mobile/NPU-specific details.
- For `2607.06335v1`: inspect code availability and decide whether teacher-alignment repair can be approximated on a tiny diffusion model locally.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. Discovery, wiki maintenance, report writes, and query commands only.


## 2026-07-08T15:18:46-06:00 — x-Prediction/TJS Z-Image-Turbo quality sweep

- Ran real `Tongyi-MAI/Z-Image-Turbo` on local Spark / NVIDIA GB10. No `gpu`/gpu-cli and no remote spend.
- Implemented and verified a real Diffusers ZImagePipeline TJS adapter with `torch.no_grad()` memory hygiene.
- Run directory: `outputs/tjs_z_image_turbo_spark/20260708-151846-zimage-two-prompt-scheduler-sweep`.
- Contact sheet: `outputs/tjs_z_image_turbo_spark/20260708-151846-zimage-two-prompt-scheduler-sweep/contact_sheet_2prompts.png`.
- Two prompts tested: portrait of silver-haired Mira in a red coat, and same character walking through a neon train station.
- Results:
  - Baseline 10 NFE avg latency: 3.39s.
  - Scheduler-formula TJS 3 NFE: usable, avg 1.09s, slight quality loss.
  - Scheduler-formula TJS 5 NFE: best speed/quality tradeoff, avg 1.64s.
  - Scheduler-formula TJS 9 NFE: near-baseline quality, avg 2.74s.
  - Literal paper-formula TJS 3 NFE: not usable under this Diffusers implementation; outputs colored noise.
- Conclusion: endpoint sign/convention translation is critical. For Diffusers Z-Image, use scheduler-consistent endpoint decode, not the literal formula as written in paper notation.
- Verification: `uv run pytest tests/test_tjs_z_image.py -q` and `uv run pytest -q` both passed; wiki lint clean.


## 2026-07-08T15:28:39-06:00 — scheduled discovery cycle

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; output: `wrote report site/index.md` and `updated wiki wiki`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query "desktop server video generation diffusion" --wiki wiki` — succeeded; top hits included `MobileWan`, `ProxyPose`, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, and `x-Prediction`.
- `uv run python -m auto_research.cli wiki query "video diffusion character consistency identity preservation" --wiki wiki` — succeeded; top hits included `MobileWan`, `ProxyPose`, the Z-Image-Turbo research-intent source, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, and the ORACLE character-consistency source note.
- `uv run python -m auto_research.cli wiki query "z-image-turbo quantization character consistency" --wiki wiki` — succeeded; top hits included the completed local `x-Prediction TJS vs Baseline on Z-Image-Turbo Spark Harness`, Z-Image-Turbo source notes, ORACLE, and diffusion-compression notes.
- `uv run python -m auto_research.cli wiki query "diffusion llm benchmark" --wiki wiki` — succeeded; top hits included `Diffusion LLM Training Benchmark`, `MobileWan`, `Bridging Diffusion Pruning and Step Distillation`, `Diffusion Models`, and `x-Prediction`.
- `uv run python -m auto_research.cli wiki query "llm inference optimization local workstation gpu" --wiki wiki` — succeeded; top hits included `MoWorld`, the local Z-Image-Turbo TJS harness, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `MobileWan`, and `x-Prediction`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** remains the most actionable paper for James's desktop/server diffusion focus. The live report lists it at score 14.0 and says it applies to SDXL, SD3.5M, Z-Image-Turbo, and class-conditional benchmarks, reducing NFEs by 20–70% without retraining, distillation, or architecture changes. This now connects directly to the local Spark experiment note, where the real Z-Image-Turbo scheduler-formula TJS sweep has already completed.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** remains the strongest diffusion compression/distillation paper in the live set. The abstract reports replacing long post-pruning retraining with a teacher-alignment repair bridge before one-step distillation; reported ImageNet-512 numbers include 20% pruning to 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter / 63-NFE baseline at FID 3.53.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** remains lower priority as a deployment target because it is mobile-focused, but it is still useful as a Wan2.2-derived systems reference: recurrent chunk-wise generation, constant-memory attention, causal linear attention, attention-head pruning, sampling-step distillation, and memory-optimized VAE decoding may transfer to desktop/server video pipelines.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization due to distillation and mixed-precision parallel inference. For character consistency / identity preservation, no newer live paper displaced the stored ORACLE source note and the Z-Image-Turbo research/candidate notes.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.
- Existing experiment note referenced by queries: `wiki/experiments/x-prediction-tjs-z-image-turbo-spark.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 17 paper pages, 4 source pages, 2 concept pages, 1 experiment page, 24 total wiki pages, 34 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: extend the local Spark Z-Image-Turbo sweep from two prompts to a small character-consistency matrix with same-character prompts, fixed seeds, contact sheets, and quantitative sanity/identity metrics.
- For ORACLE / character consistency: promote the source note into a full paper/query page with concrete metrics, then run metric-only evaluation on the images already produced by the Z-Image-Turbo harness before generating more samples.
- For `2607.06335v1`: inspect code availability and decide whether the teacher-alignment repair bridge can be approximated on a tiny diffusion model locally.
- For `2607.06173v1` MobileWan: inspect the project page for portable PyTorch/CUDA components and separate server-transferable Wan2.2 compression ideas from mobile/NPU-only details.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. This cycle performed discovery, wiki maintenance, report writes, and local wiki query commands only.


## 2026-07-08T15:25:35-06:00 — extensive x-Prediction/TJS benchmark

- Ran expanded real `Tongyi-MAI/Z-Image-Turbo` benchmark on local Spark / NVIDIA GB10. No `gpu`/gpu-cli and no remote spend.
- Run: `outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark/`.
- Matrix: 6 prompts × 4 seeds × 5 variants = 120 images at 1024×1024.
- Variants: baseline 10 NFE; scheduler TJS 3/5/9 NFE; literal paper-formula 3 NFE as a sign-convention canary.
- Key timing:
  - Baseline 10 NFE: 13.55s mean.
  - Scheduler TJS 3 NFE: 4.65s mean, 2.92× speedup.
  - Scheduler TJS 5 NFE: 7.19s mean, 1.88× speedup, best quality/speed tradeoff.
  - Scheduler TJS 9 NFE: 12.30s mean, near baseline but only 1.10× speedup.
  - Literal paper formula: visually invalid colored noise despite non-blank image sanity checks.
- Visual sheets confirm scheduler-formula TJS preserves prompt structure across portraits, train station identity, object, landscape, server-room, and reflection/identity prompts. 3 NFE is preview-quality; 5 NFE is the practical default candidate.
- Reports written:
  - `site/experiments/x-prediction-tjs-z-image-turbo-extensive-benchmark.md`
  - `site/experiments/x-prediction-tjs-z-image-windows-porting-notes.md`


## 2026-07-08T15:49:55-06:00 — scheduled discovery cycle

### Commands run
- `date --iso-8601=seconds` — succeeded; timestamp `2026-07-08T15:49:55-06:00`.
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; output: `wrote report site/index.md` and `updated wiki wiki`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query "desktop server video generation diffusion" --wiki wiki` — succeeded; top hits included `MobileWan`, `ProxyPose`, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, and `x-Prediction`.
- `uv run python -m auto_research.cli wiki query "video diffusion character consistency identity preservation" --wiki wiki` — succeeded; top hits included `MobileWan`, `ProxyPose`, the Z-Image-Turbo research intent source, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `ORACLE`, `Diffusion Models`, and `EeveeDark`.
- `uv run python -m auto_research.cli wiki query "z-image-turbo quantization character consistency" --wiki wiki` — succeeded; top hit was the completed local `x-Prediction TJS vs Baseline on Z-Image-Turbo Spark Harness`, followed by Z-Image-Turbo candidate/source notes, ORACLE, the Z-Image paper note, and diffusion-compression notes.
- `uv run python -m auto_research.cli wiki query "diffusion llm benchmark" --wiki wiki` — succeeded; top hits included `Diffusion LLM Training Benchmark`, `MobileWan`, `Bridging Diffusion Pruning and Step Distillation`, `Diffusion Models`, `x-Prediction`, and the local TJS harness note.
- `uv run python -m auto_research.cli wiki query "llm inference optimization local workstation gpu" --wiki wiki` — succeeded; top hits included `MoWorld`, the local Z-Image-Turbo TJS harness, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `MobileWan`, and `x-Prediction`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** remains the strongest paper for James's desktop/server diffusion acceleration focus. The current live report scores it 14.0 and lists Z-Image-Turbo directly in the abstract, with a training-free Truncated Jump Sampling method claiming 20–70% fewer NFEs across SDXL, SD3.5M, Z-Image-Turbo, and class-conditional benchmarks. The wiki query now connects it to the already completed local Spark Z-Image-Turbo TJS benchmark, making character-consistency evaluation the natural next local step.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** remains the best diffusion compression/distillation candidate in the live set. The reported bridge is a short teacher-alignment repair stage after pruning and before one-step distillation; the abstract reports 20% pruning to 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter / 63-NFE baseline at FID 3.53. This is relevant for workstation/server speed-quality tradeoffs, but it still needs code or a toy reproduction path before compute.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** remains lower priority as a deployment target because the headline is mobile, but the Wan2.2-derived methods are still useful for desktop/server video pipelines: recurrent chunk-wise generation, constant-memory attention, causal linear attention, attention-head pruning, sampling-step distillation, and memory-optimized VAE decoding.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization because of distillation and mixed-precision parallel inference claims. For character consistency / identity preservation, no newer live paper displaced the stored ORACLE source note and Z-Image-Turbo candidate notes.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.
- Existing experiment note surfaced by queries: `wiki/experiments/x-prediction-tjs-z-image-turbo-spark.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 17 paper pages, 4 source pages, 2 concept pages, 1 experiment page, 24 total wiki pages, 34 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: extend the already completed Spark Z-Image-Turbo benchmark into a small character-consistency matrix using same-character prompts, fixed seeds, contact sheets, and identity/CLIP-style sanity metrics.
- For ORACLE / character consistency: promote the source note into a full paper/query page with concrete identity-preservation metrics, then run metric-only evaluation on the images already produced by the Z-Image-Turbo harness before generating more samples.
- For `2607.06335v1`: inspect code availability and decide whether teacher-alignment repair can be approximated on a tiny diffusion model locally.
- For `2607.06173v1` MobileWan: inspect the project page for portable PyTorch/CUDA components and separate server-transferable Wan2.2 compression ideas from mobile/NPU-only details.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. This cycle performed live discovery, wiki maintenance, report writes, and local wiki query commands only.


## 2026-07-08T16:12:26-06:00 — scheduled discovery cycle

### Commands run
- `date --iso-8601=seconds` — succeeded; timestamp `2026-07-08T16:12:26-06:00`.
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; output: `wrote report site/index.md` and `updated wiki wiki`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "desktop server video generation diffusion"` — succeeded; top hits included `MobileWan`, `ProxyPose`, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `x-Prediction`, `Diffusion Models`, `EeveeDark`, and the ORACLE character-consistency source note.
- `uv run python -m auto_research.cli wiki query --wiki wiki "video diffusion character consistency identity preservation"` — succeeded; top hits included `MobileWan`, `ProxyPose`, the Z-Image-Turbo research-intent source, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, ORACLE, `Diffusion Models`, and `EeveeDark`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "z-image-turbo quantization character consistency"` — succeeded; top hit was the completed local `x-Prediction TJS vs Baseline on Z-Image-Turbo Spark Harness`, followed by the Z-Image-Turbo research/candidate notes, ORACLE, the Z-Image paper note, and diffusion-compression notes.
- `uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"` — succeeded; top hits included `Diffusion LLM Training Benchmark`, `MobileWan`, `Bridging Diffusion Pruning and Step Distillation`, `Diffusion Models`, `x-Prediction`, the completed local TJS harness note, `PCBWorld`, and `ArtisanCAD`.
- `uv run python -m auto_research.cli wiki query --wiki wiki "llm inference optimization local workstation gpu"` — succeeded; top hits included `MoWorld`, the local Z-Image-Turbo TJS harness, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `MobileWan`, `x-Prediction`, `MAC-XA`, and `ProxyPose`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** remains the most actionable paper for the desktop/server diffusion acceleration focus. The live report scores it 14.0 and explicitly includes Z-Image-Turbo, SDXL, and SD3.5M, claiming training-free Truncated Jump Sampling reduces NFEs by 20–70% while preserving near-matched quality. The wiki query now strongly connects this paper to the already completed local Spark Z-Image-Turbo TJS harness, so the next useful step is character-consistency evaluation rather than more discovery.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** remains the strongest diffusion compression/distillation paper in the current live set. It reports a short teacher-alignment repair stage after pruning and before one-step distillation; the abstract reports 20% pruning to 98.826M parameters / 1 NFE / FID 3.12 versus a 124.713M-parameter / 63-NFE baseline at FID 3.53. This is relevant to server/workstation speed-quality tradeoffs, but local validation still needs code availability or a toy/small-checkpoint reproduction path.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** remains lower priority as a deployment target because it is mobile-focused, but it is still useful as a Wan2.2-derived systems reference: recurrent chunk-wise generation, constant-memory attention, causal linear attention, attention-head pruning, sampling-step distillation, and memory-optimized VAE decoding may transfer to desktop/server ComfyUI-style video pipelines.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization because of distillation and mixed-precision parallel inference claims. For character consistency / identity preservation, no newer live paper displaced the stored ORACLE source note and Z-Image-Turbo candidate notes. The current report also contains lower-priority but potentially useful distillation/efficiency items such as Few-Medoids, EeveeDark, TurnOPD, and ArtisanCAD.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/papers.json`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.
- Existing experiment note surfaced by queries: `wiki/experiments/x-prediction-tjs-z-image-turbo-spark.md`.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts: 17 paper pages, 4 source pages, 2 concept pages, 1 experiment page, 24 total wiki pages, 34 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: extend the completed Spark Z-Image-Turbo benchmark into a small character-consistency matrix using same-character prompts, fixed seeds, contact sheets, and identity/CLIP-style sanity metrics.
- For ORACLE / character consistency: promote the source note into a full paper/query page with concrete identity-preservation metrics, then run metric-only evaluation on images already produced by the Z-Image-Turbo harness before generating more samples.
- For `2607.06335v1`: inspect code availability and decide whether teacher-alignment repair can be approximated on a tiny diffusion model locally.
- For `2607.06173v1` MobileWan: inspect the project page for portable PyTorch/CUDA components and separate server-transferable Wan2.2 compression ideas from mobile/NPU-only details.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. This cycle performed live discovery, wiki maintenance, report writes, and local wiki query commands only.


## 2026-07-08 — x-Prediction/TJS implementation brief

- Wrote a porting-ready implementation-agent brief for x-Prediction / Truncated Jump Sampling:
  - `site/experiments/x-prediction-tjs-implementation-agent-brief.md`
- The brief includes Z-Image-Turbo pseudocode, endpoint/sign convention warnings, validation matrix, acceptance criteria, common failure modes, and a video applicability section.
- Video conclusion: likely applicable in principle to flow/diffusion video samplers, but not yet proven by our still-image benchmark; temporal coherence/flicker/identity consistency need dedicated video tests.


## 2026-07-08 — steering update: Forge is the research target and gpu-cli is enabled

- Updated the periodic research job to treat `/home/aegisfang666/workspace/forge` as the target project for research.
- Forge sync preflight is now required before scheduled research: check branch/status, fetch `origin/main`, and fast-forward pull only when the tree is clean and on `main`.
- Synced Forge immediately in this session. Result: already up to date at `f871af9 Fix z-image batch maxN diagnostics`.
- Added Forge target source note: `wiki/sources/forge-target-project.md`.
- Updated `research_profile.yaml` to prioritize research that maps to Forge's Windows + NVIDIA inference roadmap: Z-Image/Z-Image-Turbo, desktop/server video generation, character consistency, CUDA/Blackwell/NVFP4/cublasLt/CUTLASS/TensorRT, quantization, and unified VRAM/residency scheduling.
- Updated the scheduled cron job to include `gpu-cli` and `github-repo-management` skills. `gpu run`/RunPod is now considered enabled for approved remote experiment lanes, but remote spend still requires budget/approval and recorded command/GPU/output/result.
- PRs to Forge are possible later once explicitly requested and arm64 Linux support is available; scheduled research should produce PR opportunities, not open PRs autonomously.


## 2026-07-08T16:34:37-06:00 — scheduled discovery cycle

### Commands run
- `date --iso-8601=seconds` — succeeded; timestamp `2026-07-08T16:34:37-06:00`.
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — succeeded against live discovery; output: `wrote report site/index.md` and `updated wiki wiki`.
- `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki` — succeeded; rebuilt `wiki/index.md`.
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` — succeeded; output: `wiki lint clean`.
- `uv run python -m auto_research.cli wiki overview --wiki wiki --site site` — succeeded; wrote `site/wiki-overview.md` and `site/wiki-graph.md`.
- Initial wiki query attempt used obsolete `--top-k 8` and failed with `unrecognized arguments`; corrected command shape after `uv run python -m auto_research.cli wiki query --help` showed `--limit`.
- `uv run python -m auto_research.cli wiki query --wiki wiki --limit 8 "desktop server video generation diffusion"` — succeeded; top hits included `MobileWan`, `ProxyPose`, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `x-Prediction`, `Diffusion Models`, `EeveeDark`, and the ORACLE character-consistency source note.
- `uv run python -m auto_research.cli wiki query --wiki wiki --limit 8 "video diffusion character consistency identity preservation"` — succeeded; top hits included `MobileWan`, `ProxyPose`, the Z-Image-Turbo research-intent source, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, ORACLE, `Diffusion Models`, and `EeveeDark`.
- `uv run python -m auto_research.cli wiki query --wiki wiki --limit 8 "z-image-turbo quantization character consistency"` — succeeded; top hit was the completed local `x-Prediction TJS vs Baseline on Z-Image-Turbo Spark Harness`, followed by Z-Image-Turbo quantization/research notes, ORACLE, the Z-Image paper note, and diffusion-compression notes.
- `uv run python -m auto_research.cli wiki query --wiki wiki --limit 8 "diffusion llm benchmark"` — succeeded; top hits included `Diffusion LLM Training Benchmark`, `MobileWan`, `Bridging Diffusion Pruning and Step Distillation`, `Diffusion Models`, `x-Prediction`, the completed local TJS harness note, `PCBWorld`, and `ArtisanCAD`.
- `uv run python -m auto_research.cli wiki query --wiki wiki --limit 8 "llm inference optimization local workstation gpu"` — succeeded; top hits included `MoWorld`, the local Z-Image-Turbo TJS harness, `Diffusion LLM Training Benchmark`, `Bridging Diffusion Pruning and Step Distillation`, `MobileWan`, `x-Prediction`, `MAC-XA`, and `ProxyPose`.

### Top papers / findings
1. `2607.06114v1` — **x-Prediction Is All You Need: Training-Free Accelerated Generation via Endpoint Decodability** is still the strongest actionable desktop/server diffusion acceleration item. The live report scores it 14.0, and its abstract explicitly covers Z-Image-Turbo, SDXL, and SD3.5M with claimed 20–70% NFE reduction via training-free Truncated Jump Sampling. The wiki also links it to the completed local Spark Z-Image-Turbo TJS harness, so the next increment should be character/identity consistency evaluation, not remote compute.
2. `2607.06335v1` — **Bridging Diffusion Pruning and Step Distillation with Teacher-Aligned Repair** remains the best current diffusion compression/distillation candidate. It attacks both model size and denoising-step count and reports a repaired 20% pruned one-step generator beating the stated 63-NFE baseline FID in the abstract. It needs a code check or tiny local approximation before any expensive run.
3. `2607.06173v1` — **MobileWan: Closing the Quality Gap for Mobile Video Diffusion** is mobile-targeted and therefore deprioritized as a deployment result, but it continues to matter as a Wan2.2-derived systems paper. Transferable ideas for desktop/server video workflows include recurrent chunk-wise generation, constant-memory attention, causal linear attention, attention-head pruning, sampling-step distillation, and memory-optimized VAE decoding.

Additional notes: `2607.06216v1` **MoWorld** continues to surface for local/workstation inference optimization due to distillation and mixed-precision parallel inference claims. No newer live paper displaced the stored ORACLE character-consistency source note or Z-Image-Turbo quantization candidate notes for identity-preservation evaluation.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- Paper pages under `wiki/papers/`, including `x-prediction-is-all-you-need-training-free-accelerated-generation-via-endpoint-decodability.md`, `few-medoids-an-embarrassingly-simple-coreset-selection-method-for-few-shot-knowledge-distillation.md`, `bridging-diffusion-pruning-and-step-distillation-with-teacher-aligned-repair.md`, `eeveedark-a-binary-neural-framework-for-low-light-video-enhancement-via-event-guided-sensor-level-fusion.md`, `moworld-a-flash-world-model.md`, `turnopd-making-on-policy-distillation-turn-aware-for-efficient-long-horizon-agent-training.md`, `artisancad-an-industrial-level-cad-agent-with-expert-grounded-knowledge-distillation.md`, and `mobilewan-closing-the-quality-gap-for-mobile-video-diffusion.md`.
- Existing experiment note surfaced by queries: `wiki/experiments/x-prediction-tjs-z-image-turbo-spark.md`.
- Note: no `papers.json` artifact was found in the project during this cycle; the CLI reported only `site/index.md` and wiki updates.

### Lint status
- Clean: `wiki lint clean`.
- Current overview counts from `site/wiki-overview.md`: 17 paper pages, 4 source pages, 2 concept pages, 1 experiment page, 24 total wiki pages, 34 graph edges.

### Follow-up questions / candidate local Spark smoke tests
- For `2607.06114v1` x-Prediction/TJS: extend the completed Spark Z-Image-Turbo still-image benchmark into a small character-consistency matrix with same-character prompts, fixed seeds, contact sheets, and identity/CLIP-style sanity metrics.
- For ORACLE / character consistency: turn the source note into a full paper/query page with concrete identity-preservation metrics, then first run metric-only evaluation over existing Z-Image-Turbo harness outputs before generating new samples.
- For `2607.06335v1`: inspect code availability and decide whether teacher-alignment repair can be approximated locally on a tiny diffusion checkpoint.
- For `2607.06173v1` MobileWan: inspect the project page for PyTorch/CUDA-portable components and separate server-transferable Wan2.2 compression ideas from mobile/NPU-only details.

### Spend note
- No remote GPU jobs were run. No remote GPU spend occurred.
- gpu-cli was not used at all in this cycle; no `gpu`, `gpu doctor`, or `gpu run` commands were called. This cycle performed live discovery, wiki maintenance, report writes, and local wiki query commands only.

## 2026-07-08T16:42:02-06:00 — wiki/Forge reflection cycle

- Synced Forge safely: `main @ f871af9 (clean; fetched origin/main and pull --ff-only reported already up to date)`.
- Appended reflection report: `site/wiki-forge-reflections.md#20260708t1642020600--forgewiki-reflection`.
- Created durable synthesis query: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Highest-value synthesis: the completed Spark Z-Image-Turbo TJS result should become a Forge Z-Image sampler/golden-capture card before any new remote compute; character-consistency evaluation should first score existing outputs.
- No remote GPU jobs were run; no spend incurred.

## 2026-07-08T16:46:15-06:00 — daily GitHub project watch

- Ran authenticated, rate-limit-friendly GitHub repository watch for Forge-relevant Z-Image-Turbo, video diffusion, character consistency, CUDA/NVFP4, quantization, and local inference projects.
- GitHub search budget: started with search remaining `30/30`; ran 8 repository-search queries; ended with search remaining `22/30`. No code search was used.
- Synced Forge safely first: `/home/aegisfang666/workspace/forge` was clean on `main`; `git pull --ff-only origin main` reported `Already up to date`.
- Full report: `site/github-project-watch.md`.
- Durable source note: `wiki/sources/github-project-watch-2026-07-08.md`.
- Best candidates for later manual inspection: `iconben/z-image-studio`, `g023/zlightning_inf_cpp`, and `kekzl/imp` / `intel/auto-round` as NVFP4/quantization references.
- No repositories were cloned. No local GPU tests or remote GPU jobs were run; no spend incurred.

## 2026-07-08T16:51:16-06:00 — research source expansion session started

### Sources James added
- **Semantic Scholar** for citations, related papers, author graphs, recommendations, and paper graph context beyond arXiv.
- **Hugging Face Hub** for models, datasets, Spaces, daily papers, model-card/file changes, and future webhooks; confirmed `hf` CLI is available and supports JSON output.
- **OpenReview** for early conference/workshop signal, reviews, and rejected-but-interesting methods.
- **Papers With Code / CatalyzeX-style code-link sources** for implementations, datasets, and leaderboards. Treat scores as hints, not truth.
- **Runtime/hardware feeds** for NVIDIA CUDA/cuDNN/CUTLASS/TensorRT plus PyTorch, Triton, xFormers, FlashAttention, diffusers, ComfyUI, vLLM, and SGLang. For Forge, runtime/kernel changes are first-class research inputs.

### Files updated
- `research_profile.yaml` — added the new sources/runtime families to watch/preference terms.
- `research_sources.yaml` — created the durable non-arXiv source registry with example commands/endpoints.
- `wiki/sources/research-source-expansion-semantic-scholar-hugging-face-openreview-code-links-runtime-feeds.md` — recorded this source-expansion session for the LLM wiki.
- `README.md` — documented `research_sources.yaml` as a core file.

### Session status
Ready for James's next ideas. Intake rule: classify each idea as topic/source/artifact/runtime dependency/experiment candidate/exclusion, then update `research_profile.yaml`, `research_sources.yaml`, wiki, and journal only when it is durable. No remote GPU jobs were run.



## 2026-07-08T16:57:19-06:00 — scheduled Forge research cycle with HF/runtime expansion

### Preflight / orientation
- Working directory: `/home/aegisfang666/auto-research`.
- Oriented on `research_profile.yaml`, `research_sources.yaml`, `wiki/SCHEMA.md`, `wiki/index.md`, and recent `site/research-journal.md`.
- Forge target sync: `/home/aegisfang666/workspace/forge` was clean on `main`; `git pull --ff-only` reported `Already up to date`.
- Read Forge context docs: `docs/ZIMAGE.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/QUANT_SUPPORT_MATRIX.md`, and `docs/LLM_RUNTIME.md`.
- Ran `gpu prime` for current gpu-cli conventions. No remote GPU execution was attempted.

### Commands run
- `git -C /home/aegisfang666/workspace/forge status --short --branch` → clean `main...origin/main`.
- `git -C /home/aegisfang666/workspace/forge pull --ff-only` → already up to date.
- `gpu prime` → confirmed project rules: use `uv`, never inline secrets, use `gpu run ...` only when approved.
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` → live discovery succeeded; wrote `site/index.md` and updated `wiki`.
- HF Hub searches with JSON output: trending papers, `z-image`, `video diffusion`, `character consistency`, `Wan Hunyuan CogVideo`, and `GGUF NVFP4 quantization ComfyUI diffusers`.
- GitHub release checks via `gh release list -R ...` for PyTorch, Triton, xFormers, FlashAttention, diffusers, ComfyUI, vLLM, and SGLang.
- OpenReview setup probe via `uv run python - <<'PY' ... import openreview ...` → `ModuleNotFoundError`; recorded as setup need.
- Semantic Scholar bounded unauthenticated lookups for top arXiv candidates → partial `HTTP 429`; one reference sample for `2607.06335` and paper metadata for `2607.06216` succeeded.
- Wiki maintenance: `wiki rebuild-index`, `wiki lint --fail-on never`, `wiki overview`.
- Wiki queries run: `desktop server video generation diffusion`; `video diffusion character consistency identity preservation`; `z-image-turbo quantization character consistency`; `multi-clip generated video stitching shorts maker`; `llm inference optimization local workstation gpu`; `runtime kernel CUDA TensorRT diffusers ComfyUI vLLM SGLang`.

### Source hits and top findings
1. **Z-Image-Turbo INT8/DP4A artifact:** HF surfaced `jajmangold/Z-Image-Turbo-fni8`, modified 2026-07-08, tagged `fni8`, `int8`, `w8a8`, `dp4a`, `volta`, `sm_70`, `quantized`, `diffusion`, `text-to-image`, `comfyui`, and `base_model:quantized:Tongyi-MAI/Z-Image-Turbo`. This is not NVFP4, but is actionable as a quantization/artifact-layout reference for Forge's Z-Image path.
2. **Runtime release movement:** PyTorch `v2.13.0` landed 2026-07-08; FlashAttention 4 beta21 landed 2026-07-08; diffusers `v0.39.0` landed 2026-07-03 with new image/video pipelines. For Forge, the immediate action is parity/watchlist review, not dependency migration.
3. **Best paper candidates remain stable:** arXiv discovery still ranks `2607.06114v1` x-Prediction/TJS highest for Z-Image-Turbo acceleration, `2607.06335v1` teacher-aligned repair for diffusion pruning+step distillation, and `2607.06173v1` MobileWan for transferable video-memory/chunking ideas despite its mobile deployment focus.

### Semantic Scholar / code-link notes
- Semantic Scholar unauthenticated calls were rate-limited for several top-paper metadata calls (`HTTP 429`), so this cycle used partial graph context only.
- A `2607.06335` reference sample succeeded and pointed to relevant compression/distillation context: pruning Stable Diffusion, SiDA, MAR, and multi-resolution diffusion papers.
- Papers With Code / CatalyzeX-style implementation mapping was not expanded into new pages this cycle because no new verified code link surpassed the existing x-Prediction/Z-Image and HF artifact leads.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- `wiki/sources/huggingface-runtime-watch-2026-07-08.md`
- Existing paper pages refreshed by the auto-research CLI under `wiki/papers/`.

### Lint status
- `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` reported `wiki lint clean` before the new source note.
- A final rebuild/lint/overview was run after adding the new source note; see subsequent command output for final status.

### Suggested next actions
- `inspect hf artifact jajmangold/Z-Image-Turbo-fni8` — verify files/license/layout and whether any DP4A/W8A8 idea maps to Forge's quant code.
- `plan local zimage tjs character metrics` — run metric-only identity/consistency scoring over existing TJS outputs before more generation.
- `review diffusers 0.39 zimage drift` — compare current Forge Z-Image scheduler/sign assumptions against diffusers after the v0.39.0 release.
- `install openreview client` — add optional OpenReview client support to the project environment if early conference monitoring should become regular.

### Spend note
- No remote GPU jobs were run. No `gpu run` commands were executed. Remote spend: `$0`.

## 2026-07-08T17:05:00-06:00 — source fetcher CLI added

James asked whether the non-HF sources had real fetch paths. The first pass had a registry and scheduled prompt only; this update added concrete `auto_research.cli sources fetch` commands and source fetcher functions for:
- Semantic Scholar paper metadata, references, citations, and recommendations.
- Hugging Face Hub papers/models/datasets through `hf`.
- OpenReview through the official `openreview-py` client, with API fallback.
- Papers With Code with API attempt plus bounded HTML fallback when the API returns HTML.
- GitHub release feeds for runtime projects such as diffusers/vLLM/SGLang/PyTorch/Triton.
- NVIDIA CUDA release notes fetch.

Verification:
- `uv run pytest -q` passed.
- Live fetches wrote outputs under `outputs/sources/` for Hugging Face, OpenReview, Papers With Code fallback, GitHub diffusers releases, and CUDA release notes.
- Semantic Scholar fetch path is implemented and tested, but live unauthenticated API returned HTTP 429 during this session; use `SEMANTIC_SCHOLAR_API_KEY`/`S2_API_KEY` or retry later.



## 2026-07-08T17:19:58-06:00 — scheduled Forge research cycle with expanded source fetches

### Preflight / orientation
- Working directory: `/home/aegisfang666/auto-research`.
- Oriented on `research_profile.yaml`, `research_sources.yaml`, `wiki/SCHEMA.md`, `wiki/index.md`, and recent `site/research-journal.md`.
- Forge target sync: `/home/aegisfang666/workspace/forge` was clean on `main`; `git fetch origin main` and `git pull --ff-only origin main` reported `Already up to date`; current commit `f871af9`.
- Read Forge target context docs including `docs/ZIMAGE.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/QUANT_SUPPORT_MATRIX.md`, `docs/LLM_RUNTIME.md`, and `docs/SEEDVR2_UPSCALE_PLAN.md`.
- Ran `gpu prime` for current gpu-cli conventions. No `gpu run` or remote GPU execution was attempted.

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — live discovery succeeded; wrote `site/index.md` and updated `wiki/`.
- Hugging Face source fetches via `auto_research.cli sources fetch --source huggingface`: trending papers, `z-image`, `video diffusion`, `character consistency`, `Wan Hunyuan CogVideo`, and `GGUF NVFP4 quantization ComfyUI diffusers`; outputs under `outputs/sources/*-20260708-171958.json`.
- Semantic Scholar bounded unauthenticated fetches for `2607.06114` and `2607.06335`: direct metadata hit `HTTP 429` rate limits for some calls; one references call and one recommendations call succeeded.
- OpenReview bounded fetch: `video diffusion character consistency` wrote `outputs/sources/openreview-video-character-20260708-171958.json`.
- Papers With Code/code-link probes for `Z-Image Turbo` and `video diffusion character consistency` wrote HTML fallback payloads; no verified structured code link was promoted.
- Runtime release fetches via GitHub API for PyTorch, Triton, xFormers, FlashAttention, diffusers, ComfyUI, vLLM, and SGLang; NVIDIA CUDA release-notes fetch wrote `outputs/sources/nvidia-cuda-release-notes-20260708-171958.json`.
- Wiki maintenance: `wiki rebuild-index`, `wiki lint --fail-on never`, and `wiki overview`.
- Required wiki queries completed for desktop/server video diffusion, identity preservation, Z-Image-Turbo quantization, multi-clip shorts/stitching, local workstation LLM inference, and runtime/kernel changes.

### Source hits and top findings
1. **OpenReview BachVid early signal** — Review text surfaced a training-free method for consistent character/background video by generating an identity video, then reusing selected internal keys/values from video diffusion layers. This maps directly to Forge's long-form consistency and DiT-hook research lane, but review concerns are important: low-quality supplementary videos, CogVideoX-5B-only evidence, and weaker Face-Arc identity metric than baselines. Durable note created: `wiki/sources/openreview-bachvid-character-consistent-video-2026-07-08.md`.
2. **HF Z-Image ecosystem remains active** — `jajmangold/Z-Image-Turbo-fni8` is still the freshest actionable quant artifact (`int8`, `w8a8`, `dp4a`, `comfyui`, Apache-2.0 tags). `nphSi/Z-Image-Lora` shows high download activity and `HaJImiMIMI/Z-Image-Turbo` / `SearchingMan/Z-Image-Turbo-student-adapter` remain useful diffusers compatibility references. The focused `character consistency` HF search only returned low-signal 2025 user artifacts.
3. **Runtime/kernel changes worth tracking** — PyTorch `v2.13.0` landed 2026-07-08 with CuTeDSL Native DSL as a prototype Inductor path and CUDA deterministic backward for FlexAttention; FlashAttention 4 beta21 added SM120/CuTe Pack-GQA and fixes; diffusers `v0.39.0` remains the Z-Image/video-pipeline drift item for Forge parity checks.

### Paper graph / code-link notes
- Semantic Scholar recommendations seeded from x-Prediction/TJS returned paper-graph hints for one-step diffusion distillation and diffusion-LLM acceleration: FPD (`2605.21484`), TAD (`2605.09536`), EMPURPLE (`2607.04276`), CoFRe / Fixed-Point Masked Generative Modeling (`2605.31215`), and on-manifold training-free guidance (`2607.00647`). These are hints only; no paper pages were created yet.
- Papers With Code returned HTML fallback payloads rather than verified code links; treat this as source-path verification, not a new implementation lead.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- `wiki/sources/huggingface-runtime-watch-2026-07-08.md`
- `wiki/sources/openreview-bachvid-character-consistent-video-2026-07-08.md`
- Existing paper pages under `wiki/papers/` refreshed by the auto-research CLI.

### Lint status
- Final `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` reported `wiki lint clean`.
- Current overview counts: 17 paper pages, 9 source pages, 2 concept pages, 1 experiment page, 1 query page, 30 total wiki pages, 53 graph edges.

### Suggested next actions
- `inspect openreview bachvid` — fetch the full submission/code and decide whether KV/feature injection is a Forge LTX/DiT spike or just a cautionary reference.
- `inspect hf artifact jajmangold/Z-Image-Turbo-fni8` — verify file layout/license and whether DP4A/W8A8 assumptions inform Forge's quant support matrix.
- `run zimage tjs character metrics` — score existing local TJS benchmark outputs for identity/consistency before generating more samples.
- `review diffusers 0.39 zimage drift` — compare Forge's Z-Image scheduler/sign assumptions against current diffusers after v0.39.0.

### Spend note
- No remote GPU jobs were run. No `gpu run` commands were executed. Remote spend: `$0`.

## 2026-07-08T17:45:01-06:00 — scheduled Forge research cycle refresh

### Preflight / orientation
- Working directory: `/home/aegisfang666/auto-research`.
- Oriented on `research_profile.yaml`, `research_sources.yaml`, `wiki/SCHEMA.md`, `wiki/index.md`, and recent `site/research-journal.md`.
- Forge target sync: `/home/aegisfang666/workspace/forge` was clean on `main`; `git fetch origin main` and `git pull --ff-only origin main` reported `Already up to date`; current commit `f871af9`.
- Read Forge target context docs: `docs/ZIMAGE.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/QUANT_SUPPORT_MATRIX.md`, `docs/LLM_RUNTIME.md`, and `docs/SEEDVR2_UPSCALE_PLAN.md`.
- Ran `gpu prime` for conventions. No `gpu run` or remote GPU execution was attempted.

### Commands run
- `uv run python -m auto_research.cli run --config examples/profile_config.yaml` — live discovery succeeded; wrote `site/index.md` and updated `wiki/`.
- Source fetches via `uv run python -m auto_research.cli sources fetch`: Hugging Face trending papers and model searches for `z-image`, `video diffusion`, `character consistency`, `Wan Hunyuan CogVideo`, and `GGUF NVFP4 quantization ComfyUI diffusers`; Semantic Scholar bounded checks for `2607.06114` and `2607.06335`; OpenReview queries; Papers With Code probes; GitHub releases for PyTorch/Triton/xFormers/FlashAttention/diffusers/ComfyUI/vLLM/SGLang; NVIDIA CUDA release notes. Outputs saved under `outputs/sources/*-20260708-174359.json`.
- Wiki maintenance: `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki`, `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never`, and `uv run python -m auto_research.cli wiki overview --wiki wiki --site site`.
- Required wiki queries completed for desktop/server video diffusion, identity preservation, Z-Image-Turbo quantization, multi-clip shorts/stitching, local workstation LLM inference, and runtime/kernel changes.

### Source hits and top findings
1. **PyTorch 2.13.0 landed during this cycle** — GitHub release fetch saw `pytorch/pytorch` `v2.13.0` published `2026-07-08T17:39:58Z`. Treat this as a Forge Windows/CUDA/Inductor compatibility watch item, not an immediate migration.
2. **ComfyUI v0.27.0 explicitly supports int8 convrot models** — useful because Forge already tracks INT8/Convrot/Z-Image quant artifacts and `docs/QUANT_SUPPORT_MATRIX.md` has open quality/default decisions. This is a concrete ecosystem signal to inspect artifact assumptions, not a proof that Forge should adopt the format.
3. **Z-Image artifact picture is stable** — `jajmangold/Z-Image-Turbo-fni8` remains the freshest actionable HF quant artifact (`int8`, `w8a8`, `dp4a`, `comfyui`, base model `Tongyi-MAI/Z-Image-Turbo`). Focused HF `character consistency`, `Wan/Hunyuan/CogVideo`, and combined `GGUF/NVFP4/ComfyUI/diffusers` searches did not surface a stronger durable lead.

### Paper graph / code-link notes
- Semantic Scholar direct paper/reference calls were partially rate-limited with unauthenticated `HTTP 429`; the `2607.06114` recommendations call and `2607.06335` references call succeeded.
- Semantic Scholar recommendation hints from x-Prediction/TJS included one-step diffusion distillation and diffusion-LLM acceleration items: Fixed-Point Iteration, TAD, EMPURPLE, Fixed-Point Masked Generative Modeling, and DirectTryOn. These remain hints only; no paper pages were created yet.
- OpenReview returned sparse normalized fields again; no new OpenReview page was promoted beyond the existing BachVid note.
- Papers With Code returned HTML fallback payloads, not verified structured code links.

### Wiki/report files touched or refreshed
- `site/index.md`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `site/research-journal.md`
- `wiki/index.md`
- `wiki/log.md`
- `wiki/sources/huggingface-runtime-watch-2026-07-08.md`
- Existing paper pages under `wiki/papers/` refreshed by the auto-research CLI.

### Lint status
- Final `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never` reported `wiki lint clean`.
- Current overview counts: 17 paper pages, 9 source pages, 2 concept pages, 1 experiment page, 1 query page, 30 total wiki pages, 53 graph edges.

### Suggested next actions
- `review pytorch 2.13 forge impact` — scan release notes for CUDA/Windows/Inductor/attention changes that matter to Forge's native path and build matrix.
- `inspect comfyui int8 convrot` — compare ComfyUI v0.27 int8-convrot model assumptions against Forge's Z-Image/AWQ/SVDQ/NVFP4 quant matrix.
- `inspect hf artifact jajmangold/Z-Image-Turbo-fni8` — verify files/license/layout before using it as a quant reference.
- `run zimage tjs character metrics` — score existing TJS benchmark outputs for identity/consistency before generating more samples.

### Spend note
- No remote GPU jobs were run. No `gpu run` commands were executed. Remote spend: `$0`.


## 2026-07-08 — scheduling update: channel digest cadence

- Updated scheduled Forge-targeted auto-research from high-frequency iteration mode to a lower-frequency Slack channel digest.
- Cron job `ac8a73bcd518` now runs every 6 hours and delivers to the Slack home channel (`deliver=slack`) instead of staying tied to this test thread.
- Final scheduled output is now constrained to a concise team digest: Forge sync status, up to 3 high-signal findings/experiment cards, GPU spend status, artifact paths, and recommended next approvals.
- The job still syncs `/home/aegisfang666/workspace/forge` from `origin/main` when safe before research and maps findings to Forge implementation/benchmark/PR opportunities.

## 2026-07-08T22:44:48-06:00 — wiki/Forge reflection cycle

- Synced Forge safely: clean `main` fast-forwarded from `f871af9` to `1060ac0`.
- Appended reflection report: `site/wiki-forge-reflections.md#2026-07-08t224448-0600--forgewiki-reflection`.
- Updated durable synthesis query: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Highest-value synthesis: the previous TJS sampler recommendation has landed in Forge; the next useful work is TJS character/creator-workflow evaluation plus golden/canary capture, not another isolated sampler port.
- No remote GPU jobs were run; no spend incurred.

## 2026-07-08T23:51:54-06:00 — Forge-targeted research cycle

### Forge sync status
- `git status --short --branch` returned clean `main` (`## main...origin/main`).
- Ran `git fetch origin main` and `git pull --ff-only origin main`; result: already up to date.
- Oriented on Forge docs: `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/STACK.md`, `docs/MODELS.md`, `docs/NVFP4.md`, `docs/VRAM.md`, `docs/DEV.md`, `docs/VIDEO_QUALITY_PLAN.md`, and `docs/ZIMAGE_TJS.md`.

### Commands run
- Live arXiv API queries for video diffusion character consistency, DiT cache/inference, training-free video acceleration, FP4/Blackwell, and Z-Image.
- Semantic Scholar metadata probes for selected papers; hit 429 on some requests, but OrbitQuant/TaoCache/FP4 diagnosis metadata returned.
- GitHub release watch for llama.cpp, PyTorch, CUTLASS, diffusers, ComfyUI, vLLM, SGLang, and FlashAttention. Notable fresh releases: PyTorch v2.13.0, CUTLASS v4.5.3, FlashAttention fa4 beta21, llama.cpp b9935.
- `gpu prime`, `gpu doctor --json`, `gpu config show --json`, and `gpu run --help` before drafting remote lanes. Doctor reported daemon pass and RunPod API key pass, but gpu-cli auth fail: `No credentials found. Run gpu auth runpod (or vastai/thunder/ionet)`.

### Top experiment cards
1. **OrbitQuant** (`2607.02461v1`) — data-agnostic W/A quantization for image/video DiTs, explicitly including Z-Image-Turbo and video models. Local first: compare direct RTN NVFP4 vs AWQ vs rotation/codebook on captured Forge linears; success = step cosine/final visual quality without unacceptable activation overhead.
2. **RhymeFlow** (`2606.06309v1`) — training-free asynchronous denoising for video, a video-side analogue to Forge’s landed Z-Image TJS. Local first: simulate keyframe/non-keyframe sigma schedules on LTX traces before a disabled experimental sampler branch.
3. **TaoCache** (`2508.08978v1`) — late-stage structure-preserving cache/forecast for video DiTs. Local first: port the gating idea to the existing Z-Image visual-sweep/cache harness, then promote to LTX only if contact sheets/VLM/human review prefer it.

### GPU spend status
- No remote `gpu run` jobs were launched; no remote GPU spend occurred. Remote lanes remain blocked by gpu-cli auth despite RunPod API key check passing, and would still need budget/approval before execution.

### Artifacts refreshed
- `site/index.md`
- `site/papers.json`
- `site/research-journal.md`
- `wiki/papers/orbitquant-data-agnostic-quantization-for-image-and-video-diffusion-transformers.md`
- `wiki/papers/rhymeflow-training-free-acceleration-for-video-generation-with-asynchronous-denoising-flow-scheduling.md`
- `wiki/papers/taocache-structure-maintained-video-generation-acceleration.md`

### Next actions
- Approve a local Forge issue/card to add an OrbitQuant microbench beside the existing AWQ/NVFP4 quant path.
- Approve a local Z-Image TaoCache-style visual sweep before any LTX/video port.
- Fix gpu-cli auth (`gpu auth runpod`) if remote $5 RTX5090 lanes should be runnable from cron.


## 2026-07-09T04:46:52-06:00 — wiki/Forge reflection cycle

- Synced Forge safely: `main @ 1060ac0 (clean; fetched origin/main and pull --ff-only reported already up to date)`.
- Appended reflection report: `site/wiki-forge-reflections.md#2026-07-09t044652-0600--forgewiki-reflection`.
- Updated durable synthesis query: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Highest-value synthesis: TJS is already landed; the next actionable work is a local creator-workflow benchmark combining TJS keyframes, LTX conditioning, SAM2/VFI diagnostics, and OrbitQuant/RhymeFlow/TaoCache follow-up cards where appropriate.
- Blocker/risk: this cron host did not build/run Forge's Windows/CUDA gates; no remote GPU jobs were run and no spend was incurred.

## 2026-07-09T05:56:05-06:00 — Forge-targeted research cycle

### Forge sync status
- `git status --short --branch` returned clean `main` (`## main...origin/main`).
- Ran `git fetch origin main` and `git pull --ff-only origin main`; Forge fast-forwarded from `1060ac0` to `5cc9b3a graph: execute denoise schedules in runtime`.
- Oriented on Forge docs: `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/STACK.md`, `docs/MODELS.md`, `docs/NVFP4.md`, `docs/VRAM.md`, and `docs/VIDEO_QUALITY_PLAN.md`.

### Commands run
- Live arXiv queries for video diffusion acceleration, DiT quantization/video, character-consistent video, Z-Image, and training-free diffusion acceleration.
- Targeted arXiv metadata fetch for `2607.06481v1` PACR-Video, `2607.04311v2` Aura, `2607.06856v1` Gen4U, `2512.07328v1` ContextAnyone, `2510.21696v1` BachVid, `2603.29931v1` Gloria, and `2607.07693v1` diffusion RLHF.
- GitHub release watch for CUTLASS, PyTorch, diffusers, Triton, llama.cpp, and ComfyUI.
- `gpu prime`, `gpu doctor --json`, `gpu config show --json`, and `gpu run --help` before drafting remote lanes. Doctor still reported `healthy: false` because gpu-cli auth failed (`No credentials found`), while RunPod API key and daemon checks passed.

### Top findings / experiment cards
1. **CUTLASS/runtime watch for Blackwell blockscaled FP4** — CUTLASS 4.5.3 fixes CuTe DSL compile-time regression; adjacent release notes mention Blackwell blockscaled GEMM alignment fixes. Forge action: version-pinned cast+GEMM microbench for NVFP4 Spike A before relying on CUTLASS/cuBLASLt behavior.
2. **PACR-Video + Aura as long-video consistency rubrics** — not immediate ports because they require adapters/training or VLM bridges, but they define strong metric axes for recurring entities, scene/style persistence, transition coherence, subject interactions, and copy-paste artifacts. Forge action: convert to Qwen3.6/graph-level evaluation over Z-Image TJS + LTX conditioning outputs.
3. **Gen4U activation diagnostics** — suggests frozen video DiT activations contain semantic/geometric structure. Forge action: test-only LTX activation trace summaries for AWQ-vs-direct-cast and clip-conditioning A/B runs.

### GPU spend status
- No remote `gpu run` jobs were launched; no remote GPU spend occurred.
- Remote lanes remain blocked by gpu-cli auth and would still require budget/approval before execution.

### Artifacts refreshed
- `site/index.md`
- `site/papers.json`
- `site/research-journal.md`
- `site/wiki-overview.md`
- `site/wiki-graph.md`
- `wiki/sources/forge-target-project.md`
- `wiki/sources/runtime-release-watch-2026-07-09.md`
- `wiki/papers/prompt-adapter-context-routing-for-parameter-efficient-multi-shot-long-video-extrapolation.md`
- `wiki/papers/aura-consistent-multi-subject-video-generation-via-vlm-grounded-semantic-alignment.md`
- `wiki/papers/gen4u-unifying-video-generation-and-understanding-via-diffusion.md`
- `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`

### Next actions
- Approve a local Forge CUTLASS/cuBLASLt FP4 smoke card for Spike A.
- Approve a graph-level long-video consistency rubric using PACR/Aura axes and Qwen3.6 VLM scoring.
- Fix gpu-cli auth (`gpu auth runpod`) if cron should be able to run approved RTX5090 remote lanes.

## 2026-07-09T09:02:22-06:00 — daily GitHub project watch

- Ran authenticated, rate-limit-friendly GitHub repository watch for Forge-relevant Z-Image-Turbo, ComfyUI, video/character consistency, quantization, and shorts-maker/multi-clip video assembly projects.
- GitHub search budget: started with search remaining `30/30`; ran 8 repository-search queries; ended with search remaining `22/30`. No code search was used.
- Forge sync status: target repo was on `main` but dirty due untracked `engine/models/`, so no fetch/pull was run; continued with the current tree.
- Full report: `site/github-project-watch.md`.
- Durable source note: `wiki/sources/github-project-watch-2026-07-09.md`.
- Best candidates for later manual inspection: `iconben/z-image-studio`, `nuii2142-prog/faceless-video-pipeline`, and `MapGamer71223/Automated-You-tube-shorts-generator`; also track `martin-rizzo/ComfyUI-ZImagePowerNodes` and `ussoewwin/ComfyUI-QwenImageLoraLoader` as Z-Image/ComfyUI ecosystem references.
- No repositories were cloned. No local GPU tests or remote GPU jobs were run; no spend incurred.

## 2026-07-09T10:50:26-06:00 — wiki/Forge reflection cycle

- Forge sync status: current tree was on `main` but dirty due untracked `engine/models/`, so no fetch/pull was run; continued with current `5cc9b3a graph: execute denoise schedules in runtime`.
- Appended reflection report: `site/wiki-forge-reflections.md#2026-07-09t105026-0600--forgewiki-reflection`.
- Updated durable synthesis query: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Highest-value synthesis: local LTX-2.3 is now DiT-smoke-unblocked, so the next useful Forge card should produce a real creator-workflow artifact (TJS keyframes → LTX conditioning → native media export → PACR/Aura/Gen4U-style diagnostics), not another isolated sampler note.
- Blockers/risks: untracked `engine/models/` blocks safe scheduled Forge sync; `site/experiments.md` still has a stale remote-gpu plan and should be regenerated or marked stale.
- No remote GPU jobs were run; no spend incurred.


## 2026-07-09T12:02:26-06:00 — Forge-targeted research cycle

### Forge sync status
- `git -C /home/aegisfang666/workspace/forge status --short --branch` returned `## main...origin/main` plus untracked `engine/models/`.
- Per hard preflight, no `fetch`/`pull` was run because the tree is dirty; continued against current Forge tree.
- Oriented on Forge context: `README.md`, `AGENTS.md`, `docs/ZIMAGE_TJS.md`, `docs/LTX2.md`, and `docs/VIDEO_QUALITY_PLAN.md`.

### Commands run
- Live arXiv scans for video diffusion acceleration, DiT/video quantization, character-consistent video, Z-Image, cache/reuse, attention broadcast, timestep/flow scheduling, and FP4/NVFP4 diffusion quantization.
- GitHub release watch for `huggingface/diffusers`, `ggml-org/llama.cpp`, `NVIDIA/cutlass`, `pytorch/pytorch`, and `triton-lang/triton`.
- `gpu prime`, `gpu doctor --json`, `gpu config show --json`, and `gpu run --help` before considering remote lanes. Doctor returned `healthy: false` because gpu-cli auth credentials are missing; RunPod API key, daemon, and zero-active-pod checks passed.
- Wiki/report maintenance commands after this entry: `uv run python -m auto_research.cli wiki rebuild-index --wiki wiki`, `uv run python -m auto_research.cli wiki lint --wiki wiki --fail-on never`, and `uv run python -m auto_research.cli wiki overview --wiki wiki --site site`.

### Top findings / experiment cards
1. **Gen4U activation diagnostics for LTX** (`2607.06856v1`) remains the highest-signal fresh paper direction: use frozen video-DiT activation traces as diagnostics, not as a product encoder. Forge card: add test-only LTX summaries for layer/sigma activation norm, adjacent-frame/token cosine, and stability traces across direct-cast vs AWQ and first-frame vs clip conditioning; correlate with `ltx2_ab_eval`, contact sheets, and VLM/human labels.
2. **PACR-Video + Aura consistency rubrics** (`2607.06481v1`, `2607.04311v2`) remain useful as evaluation specs rather than ports. Forge card: turn recurring-entity, scene/style persistence, transition coherence, subject interaction, copy-paste artifact, and global-vs-fine identity checks into a Qwen3.6/Forge graph evaluation fixture over Z-Image TJS keyframes plus LTX clip-conditioning outputs.
3. **RhymeFlow/TaoCache-style no-training video acceleration** remains the best next runtime probe class after landed Z-Image TJS. Forge card: implement local/proxy Z-Image cache/forecast/TaoCache sweeps first, then only promote conservative LTX asynchronous schedule probes after visual preference/identity-preserving signal is confirmed.

### GPU spend status
- No remote `gpu run` jobs were launched; no remote GPU spend occurred.
- Remote lanes are not executable from this cron host until gpu-cli auth is fixed (`gpu auth runpod` or equivalent), and would still need configured budget/James approval before spending.

### Artifacts refreshed / referenced
- Refreshed: `site/research-journal.md`, `wiki/index.md`, `wiki/log.md`, `site/wiki-overview.md`, `site/wiki-graph.md`.
- Current digest/report references: `site/index.md`, `site/papers.json`.
- Relevant wiki pages: `wiki/papers/gen4u-unifying-video-generation-and-understanding-via-diffusion.md`, `wiki/papers/prompt-adapter-context-routing-for-parameter-efficient-multi-shot-long-video-extrapolation.md`, `wiki/papers/aura-consistent-multi-subject-video-generation-via-vlm-grounded-semantic-alignment.md`, `wiki/papers/rhymeflow-training-free-acceleration-for-video-generation-with-asynchronous-denoising-flow-scheduling.md`, `wiki/papers/taocache-structure-maintained-video-generation-acceleration.md`, `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.

### Next actions
- Clean or intentionally ignore Forge `engine/models/` so scheduled sync can resume safely.
- Approve a local Forge card for the creator-workflow artifact: Z-Image TJS keyframes → LTX clip conditioning → native media export → PACR/Aura/Gen4U-style diagnostics.
- Fix gpu-cli auth if cron should run approved `$5` RTX5090 remote lanes; no remote job should launch before that plus budget approval.

## 2026-07-09T16:34:01-06:00 — Forge-targeted research cycle

### Forge sync status
- Hard preflight found a clean `main`; ran `git fetch origin main` and `git pull --ff-only origin main`.
- Forge was already current at `bc6cdcc` (`Merge pull request #1 from gpu-cli/chore/ignore-model-validation-artifacts`).
- Reviewed `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/STACK.md`, `docs/MODELS.md`, `docs/NVFP4.md`, `docs/VRAM.md`, `docs/DEV.md`, `docs/VIDEO_QUALITY_PLAN.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/LTX2.md`, `docs/EIGHT_BIT_QUANT_PLAN.md`, and `docs/MEDIA.md`.

### Source and code checks
- Ran bounded arXiv scans for video diffusion acceleration/consistency, DiT cache/quantization, and NVFP4/Blackwell; saved results under `outputs/sources/arxiv-forge-targeted-20260709-1634.json` and `outputs/sources/arxiv-candidates-20260709-1634.json`.
- Read the versioned PDF for `2607.06631v1` Dynamic-in-Few-Step and checked bounded GitHub search for code; no official implementation was found.
- Refreshed HF paper/Z-Image/LTX-2.3 artifact watches and CUTLASS, Diffusers, llama.cpp, ComfyUI, and TensorRT release feeds under `outputs/sources/`.
- Inspected `jajmangold/fni8` and `jajmangold/ComfyUI-fni8`, including licenses, README claims, test coverage, and current LTX/Wan xfails.
- Compared Forge commits since `5cc9b3a`: `dc83610` added native Windows AAC-LC MP4 muxing; `80493f9` moved FP4/cuDNN SDPA workspaces into device-arena accounting.

### Top experiment cards
1. **Playable creator-workflow artifact now has the necessary Forge plumbing.** Run Z-Image 5-NFE TJS hero/keyframes → LTX first-frame/clip conditioning → native NVENC MP4+AAC → PACR/Aura/Qwen identity/transition scoring. Record arena/model/op-workspace peaks and a deliberately tight-budget fail-soft check. Likely areas: `bindings/rust/forge-graph/examples/production_validation.rs`, `media/tests/media_export_primitives_gate.cpp`, `engine/src/core/device_ctx.h`, `docs/VIDEO_QUALITY_PLAN.md`.
2. **Dynamic-in-Few-Step (`2607.06631v1`) is a profiling rubric, not an immediate port.** It reports 24% fewer per-step FLOPs and another 1.20× wall-clock gain on top of four-step Wan distillation, but requires joint distillation, learned step-specific pruning, and a Mixture-of-Models artifact. First add trace-only LTX per-sigma/per-block sensitivity, latency, and workspace measurements; do not add trained artifacts without approval.
3. **fni8 is useful hardware-policy evidence, not a generic RTX path.** Its W8A8/W4A8 dp4a gains target firmware-limited CMP GV100/sm_70 and explicitly do not transfer to normal V100/RTX devices. Borrow per-layer quality fallback/floating softmax ideas; only benchmark the backend if explicit sm_70/CMP support is desired.

### GPU readiness and spend
- Ran `gpu prime`, `gpu doctor --json`, `gpu config show --json`, and live `gpu run --help` before recording possible remote lanes.
- `gpu doctor` remains unhealthy because gpu-cli authentication credentials are missing; RunPod API key, daemon, and zero-active-pod checks passed.
- No remote `gpu run` launched and no remote GPU spend occurred. Any future lane is capped at `$5` in the card, requires auth repair plus approval, and must sync explicit output paths.

### Artifacts
- Added `wiki/papers/dynamic-in-few-step-unifying-dynamic-computation-and-few-step-distillation-for-efficient-video-generation.md`.
- Added `wiki/sources/fni8-comfyui-volta-int8-diffusion-watch-2026-07-09.md`.
- Updated `wiki/sources/forge-target-project.md`, `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`, `site/index.md`, and `site/papers.json`.
- Rebuilt/linted wiki and refreshed `site/wiki-overview.md` / `site/wiki-graph.md` after this journal entry.

### Recommended approvals
- Approve the local creator-workflow artifact card first; it needs no remote spend.
- Approve trace-only LTX step-sensitivity instrumentation if the workflow needs deeper diagnosis.
- Decide explicitly whether sm_70/CMP belongs in Forge's hardware matrix before any fni8-derived implementation work.

## 2026-07-09T16:56:41-06:00 — Forge-targeted research cycle

### Forge sync status
- Hard preflight found clean `main`; ran `git fetch origin main` and `git pull --ff-only origin main`.
- Forge was already current at `bc6cdccb91afc3d344c46fdf0176ebf45629a371`; other worktrees were left untouched.
- Read `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/LTX2.md`, `docs/ZIMAGE_TJS.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/NVFP4.md`, `docs/EIGHT_BIT_QUANT_PLAN.md`, `docs/VIDEO_QUALITY_PLAN.md`, and the LTX block/attention implementation.

### High-signal experiment cards
1. **NaviCache (`2606.26795v1`, ICML 2026, official Apache-2.0 code)** — training-free, offline-calibration-free block-feature caching with test-time uncertainty/recompute. Published mid presets report 2.01x on Wan and 2.17x on HunyuanVideo. Forge hypothesis: trace and replay block input/output deltas at `engine/src/models/ltx2/dit.cpp:1090-1198` over the exact eight LTX sigmas, then gate a local experimental cache branch on >=1.25x warm speedup plus per-frame and identity/transition review. Expected artifact: `outputs/forge-ltx-navicache-trace/`.
2. **HyperQuant (`2606.23406v1`, MIT code)** — data-free RHT+lattice+Rice compression evaluated directly on LTX-2-19B. At 4 bps its INT8 path reports 22.74 dB PSNR, 0.8172 SSIM, 0.2008 LPIPS and 35.16→9.5 GiB weight memory, but the paper's pseudo-quant path is slower than BF16. Forge hypothesis: one `[4096,4096]` native linear microbench through `engine/src/quant/convert.cpp` plus the NVFP4/INT8 cast+MMA seam; promote only if quality beats RTN at comparable bytes and decode+MMA stays within 10% of current NVFP4. Expected artifact: `outputs/forge-hyperquant-linear-probe/`.

### Source/code verification
- Read versioned arXiv PDFs and metadata for both papers.
- Verified official repositories and licenses with GitHub; NaviCache includes Wan/Hunyuan/Open-Sora implementations and metrics, while HyperQuant includes CUDA RHT/Rice plus INT8/FP8 integrations but no drop-in Forge/LTX-2.3 path.
- HyperVAttention (`2607.03012v1`) was reviewed but not promoted: the public Apache-2.0 repository currently contains only a README/license, so its reported 2.13x sparse-attention result is not yet the cheapest executable Forge card.

### GPU spend and artifacts
- No local generation run and no remote `gpu run`; remote spend `$0`.
- Added raw/versioned source notes and paper pages for NaviCache and HyperQuant; updated `wiki/sources/forge-target-project.md`, `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`, and this journal.
- Wiki index/overview rebuild and lint follow this entry.

### Next action
- Keep the playable creator-workflow artifact first. If one research probe is approved next, choose **NaviCache trace-only replay**; it changes no pixels until the estimator is validated and needs no remote spend.


## 2026-07-09 — Forge-targeted research digest

- Forge `main` synced at `bc6cdcc` (merged model-validation sidecar ignore PR).
- Highest-priority probes: Spectrum hidden-state forecasting for Z-Image-Turbo and EasyCache trace-replay for LTX-2.3.
- Quantization lead: HyperQuant RHT-normalized activation probe using Forge's existing NVFP4 path.
- Character/video lead: selective first-step/block-group FreeSpec experiment; MemRoPE deferred until sequential/causal LTX state exists.
- Dynamic-in-Few-Step is not training-free and requires major distillation/post-training; fni8 is a narrow Volta/CMP DP4A reference, not a general Forge INT8 path.
- Durable synthesis: `wiki/queries/forge-research-digest-2026-07-09.md`.
- No GPU spend.

## 2026-07-09T18:54:32-06:00 — wiki/Forge reflection cycle

- Forge was on `main @ bc6cdcc` but actively dirty with a Spectrum hidden-state forecasting spike, so no fetch/pull was performed and no Forge source was edited by this cron cycle.
- Rebuilt the existing host target and verified `forge_spectrum_forecast_test` passes.
- Appended reflection: `site/wiki-forge-reflections.md#2026-07-09t185432-0600--forgewiki-reflection`.
- Updated durable synthesis: `wiki/queries/forge-research-digest-2026-07-09.md`.
- Highest-value synthesis: the top-ranked Spectrum card is already becoming Forge code, but it remains a host-tested scaffold—not a measured acceleration win. Next gate is one interior forecast step with full CUDA build/render, timing, trace, contact-sheet, and identity/artifact review.
- Maintenance debt recorded: stale `site/experiments.md` remote plan and overdue `wiki/log.md` rotation.
- No remote GPU jobs were run; no spend incurred.

## 2026-07-09T23:10:21-06:00 — Forge-targeted research cycle

### Forge preflight
- Target checkout: `main @ bc6cdccb91afc3d344c46fdf0176ebf45629a371`.
- The checkout was dirty with an active Spectrum hidden-state forecasting spike (`engine/src/models/zimage/dit.{h,cpp}`, `spectrum_forecast.{h,cpp}`, ops, tests, and CMake). Per the hard safety rule, no fetch/pull/reset/stash/clean or Forge source write was attempted. Other worktrees were left untouched.
- Read current `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/LTX2.md`, `docs/ZIMAGE_TJS.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/VIDEO_QUALITY_PLAN.md`, `docs/NVFP4.md`, and the active Spectrum diff/code.

### High-signal experiment cards
1. **Finish the active Spectrum/Z-Image proof** ([arXiv 2603.01623](https://arxiv.org/abs/2603.01623)). Claim: hidden-state forecasting can skip transformer work without retraining. Hypothesis: one forecasted interior Turbo step after two full observations yields at least 10% end-to-end improvement without systematic identity/detail loss. Forge seam: active `engine/src/models/zimage/dit.cpp`, `spectrum_forecast.cpp`, `ops/kernels.cu`, and `engine/tests/zimage_tjs_gate.cpp`. Cheapest validation: full CUDA build plus baseline-only/no-forecast identity control and one forecasted render. Promotion gate: baseline parity, valid trace/NFE accounting, >=10% warm speedup, and contact-sheet/human-or-VLM artifact/identity pass. Artifact: `outputs/forge-zimage-spectrum-one-skip/`. Current caveat: raw `cudaMalloc` history is experiment-only and must move under arena/fail-soft accounting before shipment.
2. **SAGA as a long-clip diagnostic, not a direct LTX port** ([arXiv 2607.08020v1](https://arxiv.org/abs/2607.08020v1), new 2026-07-09). Claim: training-free Slepian acceleration-domain guidance reduces causal video flicker/drift; Self-Forcing Temporal Quality rises 97.30→97.91 and Image Quality 69.60→70.51. Hypothesis: its high-frequency acceleration score predicts Forge's known chained-clip seams. Forge seam: `bindings/rust/forge-graph/examples/production_validation.rs` and the future latent-tail loop around `engine/src/pipelines/pipeline_video.cpp`. Cheapest validation: offline score existing clips around labeled transitions. Promotion gate: known bad seams rank above within-shot controls across >=3 prompts/seeds before any guidance code. Artifact: `outputs/forge-ltx-saga-diagnostic/`. No official code was verified; paper backbones are causal Wan-derived 1.3B models, not LTX-2.3.
3. **NaviCache trace-only replay for LTX-2.3** ([arXiv 2606.26795v1](https://arxiv.org/abs/2606.26795v1), official Apache-2.0 code). Claim: test-time uncertainty/recompute caching reports 2.01x on Wan and 2.17x on HunyuanVideo. Hypothesis: LTX block-residual uncertainty can predict conservative skips over Forge's exact eight sigmas. Forge seam: block loop in `engine/src/models/ltx2/dit.cpp`; keep state request-local and arena-accounted. Cheapest validation: collect true input/output residual deltas and replay skip decisions offline without changing pixels. Promotion gate: bounded estimator error, then >=1.25x warm speedup with no identity/transition regression. Artifact: `outputs/forge-ltx-navicache-trace/`.

### Discovery and spend
- Ran bounded live arXiv scans; raw result set saved to `outputs/sources/arxiv-forge-targeted-20260709-late.json`. Inspected versioned SAGA and ScalingAttention HTML; bounded GitHub search found no official repository for either. ScalingAttention remains watch-only because Forge first needs an attention-share/profile proof and the paper's custom sparse kernel is not public.
- No local generation and no remote `gpu run` occurred. Remote GPU spend: **$0**. No GPU readiness commands were needed because no remote lane was planned or executed.

### Durable updates
- Added `wiki/raw/papers/saga-2607-08020v1.md` and `wiki/papers/saga-stable-acceleration-guidance-for-autoregressive-video-generation.md`.
- Updated `wiki/queries/forge-research-digest-2026-07-09.md`, `wiki/sources/forge-target-project.md`, and this journal.
- Wiki index, overview/graph, lint, and project tests are run after this entry.

### Next action
- Complete the local Spectrum one-skip CUDA/render gate first; do not start a competing Forge implementation while the worktree is dirty. In parallel, the SAGA diagnostic is CPU/offline and can be run against existing clips without GPU spend.

## 2026-07-10T00:54:59-06:00 — wiki/Forge reflection cycle

- Forge remained on `main @ bc6cdcc` with the active dirty Spectrum spike, so no fetch/pull or Forge source write was attempted.
- Rebuilt and passed `forge_spectrum_forecast_test`; `git diff --check` was clean.
- Appended reflection: `site/wiki-forge-reflections.md#2026-07-10t005459-0600--forgewiki-reflection`.
- Updated durable synthesis: `wiki/queries/forge-research-digest-2026-07-09.md`.
- Highest-value synthesis: the current gate jumps directly to four forecasted steps and only supports unguided batch-1 execution; first prove one interior skip with explicit no-CFG labeling, arena-accounted history, CUDA timing, dumps, and visual/identity review.
- No remote GPU jobs were run; no spend incurred.

## 2026-07-10T05:15:33-06:00 — Forge-targeted research digest

### Forge preflight

- Target checkout: dirty branch `perf/zimage-spectrum-forecast` at exact commit `bc6cdccb91afc3d344c46fdf0176ebf45629a371`.
- The Spectrum implementation is staged and additional component/UTF-8 validation artifacts are untracked. Per the safety rule, no fetch, pull, reset, clean, stash, overwrite, or Forge source write was attempted. The `forge-arm64` and `forge-gitignore-worktree` worktrees were left untouched.
- Read current `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/LTX2.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/VIDEO_QUALITY_PLAN.md`, `docs/NVFP4.md`, `docs/ABI_V03_BATCHING_MULTIGPU_PLAN.md`, and the current Z-Image/LTX denoise, CFG, block-loop, and A/B harness code.

### High-signal findings / experiment cards

1. **Spectrum is now a measured Forge result, not merely a candidate.** The local GB10 24-pair 512px A/B recorded `7.4434 s → 4.6890 s` (`1.59x`), mean SSIM `0.9232`, six full and four forecast evaluations, with coherent outputs but some fine identity/framing changes. Next action is a scoped opt-in PR decision, not another competing Z-Image implementation. Evidence: `wiki/experiments/spectrum-zimage-turbo-forge-spark.md` and `site/spectrum-zimage-turbo-spark-report.md`.
2. **Fresh CFG-aware PTQ diagnostic (`2607.08241v1`).** The paper's branch-drift theorem says gap-only calibration can look correct while the combined guided prediction is wrong. Forge already has exact conditional/unconditional/fold seams in `pipeline_image_stages.cpp` and `pipeline_video_stages.cpp`; the cheapest card is trace-only branch/gap/guided-output cosine+MSE across BF16/RTN/AWQ and guidance scales before considering mixed activation precision. Expected artifact: `outputs/forge-cfg-quant-guided-error/metrics.json`.
3. **NaviCache trace replay remains the cheapest independent LTX runtime probe.** Instrument the 48-block loop and ring-upload path at `engine/src/models/ltx2/dit.cpp:1090-1198`, replay decisions offline over the exact eight sigmas, and change no pixels until uncertainty prediction is validated. Expected artifact: `outputs/forge-ltx-navicache-trace/`.

### Discovery, artifacts, and spend

- Live arXiv scan surfaced `2607.08241v1`, *Closing the Null Space: Guidance-Aware Quantization for Classifier-Free Diffusion*, submitted 2026-07-09. Full arXiv HTML was read; bounded GitHub repository/code search found no official implementation. The paper's experiments are a 6.1M CIFAR-10 ADM UNet, so its CFG algebra is actionable but its bit allocation is not treated as direct Z-Image/LTX evidence.
- Added raw/paper/query wiki records and updated the Forge target source. Durable digest: `wiki/queries/forge-research-digest-2026-07-10.md`.
- No remote `gpu run` and no new local generation occurred. Remote GPU spend: **$0**. No gpu-cli readiness commands were needed because no remote lane was planned or executed.
- Wiki index/overview/graph rebuilt and wiki lint passed clean after the end-to-end dry run. `uv run pytest -q` passed all 33 tests; `uv run python -m auto_research.cli run --config examples/config.yaml --offline-sample` wrote the site report and updated the wiki successfully.

### Next action

- Review and land the existing Spectrum work as an opt-in experimental PR if the identity tradeoff is acceptable. Then approve one instrumentation-only follow-up: CFG-guided quantization traces first for quant-quality risk, or NaviCache trace replay first for LTX latency.

## 2026-07-10T06:59:24-06:00 — wiki/Forge reflection cycle

- Forge was on dirty branch `experiment/zimage-spectrum-tjs-stack @ 36e6e12`, so no fetch/pull or Forge source write was attempted.
- Verified focused targets rebuild; `forge_spectrum_forecast_test` passed and `git diff --check` was clean.
- Appended reflection: `site/wiki-forge-reflections.md#2026-07-10t065924-0600--forgewiki-reflection`.
- Updated durable digest: `wiki/queries/forge-research-digest-2026-07-10.md`; clarified limitations in `wiki/experiments/spectrum-tjs-stack-zimage-turbo-forge-spark.md`.
- Highest-value synthesis: Spectrum × TJS logged `1.91x` baseline-relative speed at 1024px with mean SSIM `0.9562`, but the current two-row/one-seed gate cannot establish additivity and silently drops the stack quality floor plus the hardest reflection prompt. Run a hardened four-way matrix before PR/default claims.
- No remote GPU job or spend.

## 2026-07-10T09:02:00-06:00 — daily GitHub project watch

- Ran 8 authenticated, rate-limited `gh search repos` queries; search quota moved from 30/30 to 22/30. Full report: `site/github-project-watch.md`; raw capture: `outputs/github-watch/search-20260710T0901-0600.json`.
- Best new lead: `SlavaSexton/ComfyUI-Agent-Kit` (MIT, 43 stars, pushed 2026-07-07), a candidate app-side reference for agent-driven ComfyUI workflow building and multi-shot video. Metadata does not yet prove cross-shot identity, clip stitching, timeline, caption, or audio continuity.
- `iconben/z-image-studio` and `g023/zlightning_inf_cpp` resurfaced but were already tracked. No verified N×~22-second continuity-preserving shorts assembler was found today.
- Forge was dirty on non-main branch `experiment/zimage-spectrum-tjs-stack @ 36e6e12ba994`, so no sync or Forge source modification was attempted.
- No cloning, code search, local/remote GPU execution, or spend.

## 2026-07-10T11:25:50-06:00 — Forge-targeted research cycle

### Forge preflight
- Inspected branch/status and all six registered worktrees. The target is dirty branch `experiment/zimage-spectrum-tjs-stack @ 36e6e12ba994c101eed861b3da04d4b161b1cdd2`, with edits in `pipeline_image_stages.cpp` and `zimage_tjs_gate.cpp`; no worktree was modified.
- Per safety policy, did not fetch, pull, reset, clean, stash, or overwrite. Read Forge `README.md`, `AGENTS.md`, `CLAUDE.md`, `docs/ZIMAGE_TJS.md`, `docs/LTX2.md`, `docs/GRAPH_CONTROL_ARCHITECTURE.md`, `docs/QUANT_QUALITY_METRICS.md`, `docs/LONGFORM_CONSISTENCY_PLAN.md`, and the current Z-Image/LTX code and gates.
- Read-only remote checks show `main @ a67f8bdb535046f965cb348d689f4338736be8e8`, the merge of Spectrum PR #3. Ubuntu/Windows CPU compile-and-test and GPU-accounting checks passed; Linux GPU gates were skipped.

### Findings / experiment cards
1. **Spectrum merged; composition is separately actionable.** The hardened four-way local matrix now covers 96 images at 512px plus 24 at 1024px. Spectrum × TJS-9 measured `1.89x` at both resolutions; 1024px mean/min SSIM was `0.9486/0.9109`. Cheapest next step is preserving/rebasing the dirty composition changes onto merged main, restoring an explicit composition quality floor, and running hosted CI—not more generation. Expected artifact: separate composition PR linked to `outputs/spectrum-four-way/`.
2. **CFG-aware quant trace.** Instrument existing conditional/unconditional/fold seams and compare branch, gap, and guided-output error for BF16/RTN/AWQ artifacts before any mixed-precision implementation. Artifact: `outputs/forge-cfg-quant-guided-error/metrics.json`.
3. **LTX NaviCache trace replay.** Trace the 48-block ring/prefetch loop over the exact eight sigmas and replay skip decisions offline before changing pixels. Artifact: `outputs/forge-ltx-navicache-trace/`.

### Discovery and spend
- Bounded live arXiv scans found `2607.08766v1` OPSD-V, but its on-policy post-training requirement does not beat the current single-checkpoint/training-free cards.
- No local generation, remote `gpu run`, or GPU spend occurred. Spend: `$0`.

### Durable updates and next action
- Updated `wiki/sources/forge-target-project.md`, `wiki/experiments/spectrum-tjs-stack-zimage-turbo-forge-spark.md`, `wiki/queries/forge-research-digest-2026-07-10.md`, and this journal.
- Verification: `uv run pytest -q` passed 33 tests; the required offline end-to-end smoke wrote `site/index.md` and updated `wiki/`; index rebuild and overview/graph generation succeeded; final wiki lint was clean.
- Final-state addendum (11:40 MDT): the Forge target was externally recloned during this cycle. It is now clean single-worktree `main @ d5b04a7fbd7d4cb7d28335b3b0f392ce54fb187d` from `gpu-cli/forge-lib`; explicit fetch and fast-forward pull reported already up to date. The earlier uncommitted composition branch/edits are absent from the new clone.
- Immediate action: locate a preserved patch/branch or reconstruct the reviewed composition diff on a fresh branch, then decide whether to open a separate Spectrum × TJS PR. After that, approve one instrumentation-only card: CFG quant trace for quality risk or NaviCache replay for LTX latency.

## 2026-07-10T13:04:32-06:00 — wiki/Forge reflection cycle

- Safely synced clean Forge `main @ d5b04a7`; fetch/pull reported already up to date.
- Corrected the prior recovery assumption: current main already contains the four-way Spectrum × TJS gate, six prompts/four benchmark seeds, exact full/forecast accounting, and a Spectrum SSIM floor. Do not reapply the old dirty diff blindly.
- Highest-value synthesis: Forge's long-form LTX/SeedVR2 plumbing is already implemented and seam-certified; strict face identity (recorded SFace 40%/0% on two long-form artifacts) is now the primary creator-quality gap.
- Reflection: `site/wiki-forge-reflections.md#2026-07-10t130432-0600--forgewiki-reflection`.
- Updated durable pages: `wiki/experiments/spectrum-tjs-stack-zimage-turbo-forge-spark.md` and `wiki/queries/forge-research-digest-2026-07-10.md`.
- No local generation, remote GPU job, or spend.

## 2026-07-11T01:13:25-06:00 — Forge/wiki reflection: guided quant error → strict identity

- Forge inspected read-only at `main @ eee7c1d`; untracked `.hermes/` blocked safe sync, although `HEAD` matched `origin/main`.
- Highest-value synthesis: reuse Forge's merged all-eight-sigma CFG diagnostic, quant-quality matrix, long-form harness, and YuNet/SFace QA as one staged paired experiment. Hold anchors/conditioning fixed while comparing BF16, direct RTN, and CFG-aware AWQ; only then test anchor or CharaConsist interventions separately.
- Updated `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md` and `site/wiki-forge-reflections.md`.
- No local generation, remote GPU job, or spend.
## 2026-07-11T10:40:05-06:00 — Forge verified promotion reconciliation

- **Decision: BLOCKED (unchanged).** Exactly one candidate was reconciled: the strict-identity completion of the merged CFG-aware quantization diagnostics. PRs [#1](https://github.com/gpu-cli/forge-lib/pull/1) and [#2](https://github.com/gpu-cli/forge-lib/pull/2) already contain the instrumentation and all-eight-sigma implementation; no duplicate product change or PR was created.
- **Forge reference:** `/home/aegisfang666/workspace/forge` was fetched and verified clean on `main`, exactly `origin/main@aa60918275977110002a445682a901095db5edd9`.
- **Isolation:** reused clean `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-strict-identity`, branch `exp/cfg-quant-strict-identity`, base/current `aa609182`. Existing `/home/aegisfang666/models/forge` cache (184 GiB) remains referenced rather than copied.
- **Evidence rerun:** `./build-eng/forge_quant_cfg_diagnostics_test` passed and `ctest --test-dir build-eng -R forge_ltx2_awq_capture_plan_test --output-on-failure` passed 1/1. Host inspection still finds no cuDNN runtime, and the matched RTN plus CFG-aware AWQ artifacts remain absent; therefore the previously observed fail-closed Gemma error cannot yet be advanced into the real self-control/matched matrix.
- **GPU readiness/spend:** `gpu doctor --json` healthy with RunPod key configured; `gpu status --json` reported zero active pods and `$0.00` spend. Cycle spend `$0.00/$5`; observed daily spend `$0.00/$30`. No job/pod IDs. Remote rental was not started because it would not manufacture the missing matched artifacts and would add sync cost without discriminating evidence.
- **Smallest unblock:** provide/install cuDNN 9 for this Forge build and generate/provide RTN and CFG-aware AWQ artifacts from the same BF16 LTX source. Then run v2 same-artifact control first, followed by the three-prompt all-eight-sigma matrix and matched decoded strict-identity review.

## 2026-07-11T10:50:30-06:00 — Forge verified CFG quant promotion retry

- **Decision: BLOCKED, with new real evidence.** Reconciled exactly one candidate: strict-identity completion of merged CFG quant diagnostics. PRs #1/#2 and their source/tests are already on main; no stale implementation was duplicated.
- **Forge state:** pristine reference checkout clean on `main == origin/main@aa60918275977110002a445682a901095db5edd9`. Reused clean isolated worktree `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-strict-identity`, branch `exp/cfg-quant-strict-identity`, same base SHA. Cached LTX/Gemma artifacts and cuDNN/frontend were referenced in place; no model copy.
- **Local unblock and commands:** extracted the already-downloaded cuDNN 9.24 ARM64 development headers, linked the existing ignored cuDNN frontend cache, configured `build-cudnn` with explicit include/library/RPATH, and built `forge_ltx2_cfg_quant_diag`. Focused tests `forge_quant_cfg_diagnostics_test` and `forge_ltx2_awq_capture_plan_test` passed 2/2. The build explicitly reported cuDNN fused SDPA enabled.
- **Executed matrix:** real prompt/negative-prompt, fixed seed `260708241`, guidance `3`, all eight production sigmas. Same-artifact direct-NVFP4 control was exact (`1.0` cosine, `0.0` MSE for conditional, unconditional, gap, and guided at every sigma). BF16→direct-NVFP4 aggregate guided cosine/MSE was `0.8011959151 / 2.5588612916`; worst guided cosine was `0.3986383813` at sigma `0.725`, and worst guided MSE `9.9539692160` there. BF16→combined-FP8 aggregate guided cosine/MSE was `0.6340412938 / 4.7458794839`; worst guided cosine was `0.2063783265` at sigma `0.725`, and worst guided MSE `12.1470713506` at sigma `0.909375`.
- **Interpretation/gate:** direct NVFP4 is numerically closer than combined FP8 on this fixed-latent prompt-conditioned trace, but `trajectory:false`; it is not a render/perceptual verdict. Matched CFG-aware AWQ artifact, decoded trajectory/contact sheet, and human/VLM identity evidence remain absent, so product promotion fails closed. No Forge source change, commit, push, or PR.
- **Spend:** local GB10 only, `$0.00/$5` experiment and `$0.00/$30` observed daily remote spend; no gpu-cli job/pod IDs. Inventory was checked, but a rental would not resolve the missing matched AWQ artifact and was not launched.
- **Artifacts:** `outputs/forge-cfg-quant-strict-identity-20260711/{self-control,bf16-vs-direct-nvfp4,bf16-vs-combined-fp8}.json`.

## 2026-07-12T10:31:18-06:00 — Forge verified CFG quant promotion reconciliation

- **Decision: BLOCKED.** Exactly one candidate was selected: strict-identity completion of the merged CFG-aware LTX quantization diagnostic. Forge PRs #1 and #2 already merged the diagnostic and all-eight-sigma implementation; the stale `feat/cfg-aware-quant-diagnostics` implementation was not duplicated.
- **Reference checkout:** fetch succeeded, but `/home/aegisfang666/workspace/forge` local `main@33f3974979aa9a13dcb5958b54e8610ae1d428aa` is one commit ahead and five behind `origin/main@bc12d68abe9e67fd1ab4f834ac487c3e571da558`. Fast-forward correctly refused. No reset, rebase, merge, stash, clean, build, or artifact generation was performed there. The checkout is clean but diverged on `main`; smallest synchronization request is to decide how to preserve/reconcile local commit `33f3974`.
- **Isolation/cache:** reused clean worktree `/home/aegisfang666/workspace/worktrees/forge-cfg-quant-strict-identity`, branch `exp/cfg-quant-strict-identity@aa60918275977110002a445682a901095db5edd9` (now behind current `origin/main`). Reused cached LTX/Gemma artifacts and cached cuDNN 9.24 in place; no model was copied.
- **Real execution:** rebuilt `forge_quant_cfg_diagnostics_test`, `forge_ltx2_awq_capture_plan_test`, and `forge_ltx2_cfg_quant_diag`; focused CTest passed 2/2. Re-ran the prompt-conditioned same-artifact direct-NVFP4 control at guidance 3 over all eight production sigmas. Conditional, unconditional, CFG-gap, and actual guided output were exact at every sigma (`cosine=1`, `MSE=0`); report remains explicitly `trajectory:false`.
- **Promotion gate:** matched RTN and CFG-aware AWQ artifacts from the same BF16 source still do not exist locally, and there is no matched decoded trajectory/contact sheet plus independent human/VLM identity review. A rental would provide compute but would not create the missing calibration/artifact definition automatically, so no non-discriminating remote job was launched and no speculative Forge change, commit, push, or PR was created.
- **GPU/spend:** `gpu doctor` healthy, RunPod key present, zero active pods, observed gpu-cli spend `$0.00`; inventory checked (cheapest listed suitable 48 GB option RTX A6000 at `$0.33/hr`, low stock). Cycle/daily remote spend `$0.00/$5` and `$0.00/$30`; no job or pod IDs.
- **Artifacts:** `outputs/forge-cfg-quant-strict-identity-20260712/self-control.json`. Smallest experiment unblock: define/generate matched RTN and CFG-aware AWQ artifacts from `ltx-2.3-22b-distilled-1.1.safetensors`, then execute identical all-eight-sigma traces and matched decoded render/contact-sheet review.

## 2026-07-13T00:22:27-06:00 — Forge-targeted research digest

### Forge state

- Fetched `origin/main@adfa4c35e4d2e53bc5909854c8f5f8bc1e0da0df`.
- Primary reference remained read-only at dirty, diverged `main@33f3974979aa9a13dcb5958b54e8610ae1d428aa` (ahead 1, behind 41; modified `.beads/interactions.jsonl`). No reset, clean, stash, merge, checkout, build, or artifact generation occurred there.
- Used clean dedicated worktree `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260713`, branch `research/forge-digest-20260713`, at exact current origin SHA.
- Reconciled open drafts before triage: PR #15 owns LongCat multi-speaker plus LTX Ingredients/joint A/V; PR #14 owns IC-reference Rust propagation. No duplicate Forge implementation or PR was created.

### High-signal cards

1. **Harden draft PR #15 first.** Its current evidence does not certify strict Ingredients identity and lacks a >=51-frame clear-speech human fixture for semantic SyncNet/face-mouth scoring. Reuse its existing capture/evaluator stack and update the same PR only after deterministic RGB+PCM, valid face/mouth detections, matched-PCM SyncNet, explicit identity verdicts, and local replacements for zero-step hosted CI checks.
2. **SyncCache (`2606.30849v1`) is the best new training-free lead.** Trace LongCat visual residual stability inside/outside the human region while always recomputing audio; replay schedules offline before skipping forwards. Require pixel-inert tracing, >=25% predicted removable heavy work, then >=1.20x warm speed with no identity/speaker/mouth/SyncNet regression. No official code was verified.
3. **Advance native INT8 to real weights.** The completed architecture matrix measured 2.02–2.63x per-shape gains on RTX 4090 and 2.08–2.46x on RTX 5090, but only on deterministic synthetic tensors. Run one captured real-weight/activation projection before any full render or capability claim; keep GB10 disabled and A40 shape-gated.

### Durable artifacts and spend

- Added `wiki/raw/papers/synccache-2606-30849v1.md` and `wiki/papers/synccache-exploiting-asymmetric-dynamics-for-fast-audio-driven-portrait-animation.md`.
- Added durable synthesis `wiki/queries/forge-research-digest-2026-07-13.md`.
- No local generation, remote `gpu run`, or GPU spend occurred; spend **$0**.
- Next action: supply/run one >=51-frame clear-speech human fixture against PR #15's existing A/V gate. After that, approve SyncCache trace-only instrumentation or the native INT8 real-weight projection control.

## 2026-07-13T09:01:27-06:00 — daily GitHub project watch

- Ran 8 authenticated, bounded `gh search repos` queries; search quota moved from 30/30 to 22/30. Full report: `site/github-project-watch.md`; raw capture: `outputs/github-watch/search-20260713T0901-0600.jsonl`.
- No genuinely new high-confidence project displaced the Forge queue. Best active leads were `SlavaSexton/ComfyUI-Agent-Kit` (multi-shot workflow reference, pushed July 12), `intel/auto-round` (quant-evaluation reference, pushed today), and `kekzl/imp` (secondary RTX 5090/NVFP4 kernel-method reference, pushed today).
- No verified N×~22-second continuity-preserving generated-video assembler was found. Forge was clean on `main` and already current at `42ecadde32d43143b178e860c2a9de773d0136a9`.
- No cloning, code search, local/remote GPU execution, or spend.

## 2026-07-13T09:46:49-06:00 — wiki/Forge reflection

- Safely synced clean Forge `main == origin/main@42ecadde32d43143b178e860c2a9de773d0136a9`.
- Highest-value synthesis: current main's certified single-person LongCat path plus its existing layer/debug hooks makes a SyncCache trace immediately actionable without stacking on PR #15; trace internal self/text/audio/FFN boundaries and measured cost, because post-block similarity alone cannot validate audio-preserving reuse.
- Corrected target selection: use Z-Image/LTX for the generic real-weight W8A8 follow-up; current LongCat evidence already rejects W8A8/FP8/NVFP4 quality and ships official W8A16 reconstruction only.
- Reflection: `site/wiki-forge-reflections.md#2026-07-13t094649-0600--certified-longcat-baseline-makes-synccache-traceable`.
- Updated `wiki/queries/forge-research-digest-2026-07-13.md`, `wiki/index.md`, `wiki/log.md`, and `site/experiments.md`. No local generation, remote GPU job, or spend.

## 2026-07-13T18:43:30-06:00 — Forge-targeted late research digest

### Forge state

- Safely fetched and verified pristine `/home/aegisfang666/workspace/forge` on clean `main == origin/main@16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Reused clean `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260713`, branch `research/forge-digest-20260713`, at the same SHA. No Forge implementation, build, generated artifact, commit, push, or PR.
- Reconciled draft PR #20 (CI-only) and draft PR #17 (arbitrary-N IC references); no card duplicates them.

### High-signal cards

1. **LongCat continuation KV Jensen-bias trace.** [arXiv:2605.26266v1](https://arxiv.org/abs/2605.26266v1) derives a correction for historical keys stealing attention after cache quantization. Forge has an exact target in the 48-layer resident/offloaded BF16 continuation cache. First capture bounded Q/K ranges and attention mass without changing pixels, then replay naive/corrected INT4/INT2 offline. Promote only with unchanged RGB/routing hashes, >=2x lower cache/H2D bytes, >=50% lower naive-quant attention JSD/output MSE, and later full identity/mouth/routing/SyncNet gates.
2. **Identity-bind LTX performance sidecars.** Extend the existing comparison plan/result hash tests so an opt-in Forge row binds exact build/model/device identity plus `forge_video_perf_report`, while Official/Comfy rows remain telemetry-free and quality ranking never consumes speed fields. This is CPU-testable before the missing real workflow/assets are supplied.
3. **RotateAttention remains trace-first.** LTX's warm 832x480x81 call is now 83% denoise, but attention is only part of that budget. Use the existing `Ltx2Dit::attention` q/k/norm/RoPE debug seam to require a projected >=1.15x end-to-end gain before native INT4 kernel work.

### Durable artifacts and spend

- Added `wiki/raw/papers/quantized-keys-steal-attention-2605-26266v1.md` and `wiki/papers/quantized-keys-steal-attention-bias-correction-kv-cache-video-diffusion.md`.
- Updated `wiki/queries/forge-research-digest-2026-07-13-noon.md` and this journal; index/overview/graph rebuild and lint follow this entry.
- No local GPU generation or remote `gpu run`; GPU spend **$0**.
- Next action: approve the byte-inert LongCat continuation KV trace/replay card. It is the cheapest new discriminating experiment and directly resolves the port plan's open cache-tier decision.

## 2026-07-14T00:49:50-06:00 — Forge-targeted research digest

### Forge state

- Safely fetched and verified pristine `/home/aegisfang666/workspace/forge` on clean `main == origin/main@16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Used clean `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260713`, branch `research/forge-digest-20260713`, at the same SHA. No Forge source write, build, generated artifact, commit, push, or PR.
- Reconciled draft PR #17 (arbitrary-N IC references and teacher data) and draft PR #20 (CI infrastructure); no duplicate implementation was started.

### High-signal cards

1. **Xema trace-only LTX memory planning.** [arXiv:2607.11136v1](https://arxiv.org/abs/2607.11136v1) uses request-template memory traces, interval-local mitigation, static layouts, and offline plan lookup; it reports up to `3.7x` higher SLO attainment and explicitly evaluates LTX-2. Forge already exposes transient/VMM/stage/ring evidence, so first replay resident-cap choices offline for 24/32/48 GiB without changing output bytes or importing continuous-serving policy.
2. **Harden existing PR #17 before new identity work.** The draft owns arbitrary-N references but remains `UNSTABLE` without independent review. Current hosted failures are Linux `forge_os_shim_test`, six `forge-graph` missing-doc items in `capability.rs`, and SBOM license metadata; none is in PR #17's listed changed files, but the branch still needs a clean merge boundary plus checked-in N=0/N=1/invalid-array/overflow and 2/3/4-reference identity/garment gates.

### Durable artifacts and spend

- Added `wiki/raw/papers/xema-2607-11136v1.md`, `wiki/papers/xema-efficient-diffusion-serving.md`, and `wiki/queries/forge-research-digest-2026-07-14.md`.
- No local GPU generation or remote `gpu run`; cycle GPU spend **$0**.
- Next action: update and independently review PR #17's existing branch; approve the byte-inert Xema/LTX memory trace only after that hardening boundary is owned.

## 2026-07-14T04:12:19-06:00 — wiki/Forge reflection

- Forge stayed clean and synchronized at `main == origin/main@16b5d7d`; open drafts are #17 (`UNSTABLE`, arbitrary-N IC references) and #20 (`CLEAN`, CI checkpoints).
- Highest-value synthesis: bind the existing LTX comparison plan/run hashes to independent perf, memory, and all-eight-sigma trace sidecars. The measured 83% warm denoise share now justifies one byte-inert capture for offline RoPE-INT4, sparse-head, cache, and CFG analyses without composing interventions.
- Xema should remain an offline 24/32/48 GiB capacity replay; strict identity remains PR #17 hardening plus the separate subject-LoRA path; LongCat keeps its own cache-versus-residual trace and avatar gates.
- Reflection: `site/wiki-forge-reflections.md#2026-07-14t041219-0600--one-ltx-evidence-identity-several-independent-decisions`.
- Updated `wiki/queries/forge-research-digest-2026-07-14.md`, `wiki/index.md`, and `wiki/log.md`. No Forge write, local generation, remote job, or spend.

## 2026-07-14T06:54:29-06:00 — Forge-targeted research digest

### Forge state

- Safely fetched and verified pristine `/home/aegisfang666/workspace/forge` on clean `main == origin/main@16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Used clean read-only worktree `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260713`, branch `research/forge-digest-20260713`, at the same SHA. No Forge implementation, build, artifact, commit, push, or PR.
- Reconciled draft PR #17 (`UNSTABLE`, arbitrary-N references) and PR #20 (CI-only). PR #17's current failures are now grounded from job logs: Linux `forge_os_shim_test`, six Windows missing-doc items in `capability.rs`, and absent SBOM license metadata.

### High-signal cards

1. **HALO-style LTX head trace.** [arXiv:2607.11081v1](https://arxiv.org/abs/2607.11081v1), accepted to ECCV 2026, reports training-free motion transfer from motion- versus structure-specialized video-DiT attention heads. Forge's LTX attention seam already exposes Q/K/V, post-RoPE Q/K, SDPA, per-head gates, and outputs. First run a byte-inert head-statistics trace and reject the port unless rankings remain stable across three prompts/seeds and beat a random-head control without identity/structure/latency regression.
2. **Harden PR #17 before new identity work.** Fix or classify its three hosted gate families, then add N=0/N=1 compatibility, invalid-array/overflow, deterministic N=2/3/4, and held-out identity/garment evidence on the existing branch. Do not open a competing identity PR.

### Durable artifacts and spend

- Added `wiki/raw/papers/controlling-motion-transfer-attention-heads-2607-11081v1.md` and `wiki/papers/controlling-motion-transfer-attention-heads-video-dit.md`; updated `wiki/queries/forge-research-digest-2026-07-14.md` and this journal.
- No local GPU generation or remote `gpu run`; GPU spend **$0**.
- Next action: harden/review PR #17 first; then approve the local, trace-only HALO/LTX head-specialization control.

## 2026-07-14T09:00:33-06:00 — daily GitHub project watch

- Forge was clean and remained synchronized at `main == origin/main@16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Best new lead: `koala-penguin/ltx23-toolkit`, an MIT LTX-2.3 toolkit claiming character-consistent seamless-long-video workflows plus CLI QC; best minute-level reference: Apache-2.0 `smthemex/ComfyUI_JoyAI_Echo`, which claims multi-shot A/V generation with cross-modal memory and story consistency.
- These are later manual-inspection candidates, not verified implementations. Keep orchestration app-side, keep strict identity separate from seam/subject continuity, and harden Forge PR #17 before competing identity work.
- Full report: `site/github-project-watch.md`; durable note: `wiki/sources/github-project-watch-2026-07-14.md`; raw capture: `outputs/github-watch/search-20260714T090138-0600.json`.
- Eight authenticated repository searches; no code search, cloning, local GPU run, remote GPU job, or spend.

## 2026-07-14T10:33:58-06:00 — wiki/Forge reflection

- Forge remained clean and synchronized at `main == origin/main@16b5d7d`; PR #17 is still `UNSTABLE` and PR #20 `CLEAN`.
- Highest-value synthesis: add a versioned shot ledger above the existing LTX comparison identity so Forge and external long-video workflows can share ordered-shot, reference, continuation, A/V, QC, performance, and capacity evidence without importing their runtimes or conflating verdicts.
- Connected Xema capacity replay to per-shot Forge plans and HALO head tracing to motion-ROI plus strict identity negative controls; PR #17 remains the first implementation-hardening boundary.
- Reflection: `site/wiki-forge-reflections.md#2026-07-14t103358-0600--a-shot-ledger-connects-workflow-references-to-forge-evidence`.
- Corrected `site/experiments.md`. No local generation, remote GPU job, or spend.

## 2026-07-14T22:42:00-06:00 — Reflection: decoded quant trajectory contradicts fixed-latent ranking

- Forge was clean and synchronized at `main == origin/main @ dc383a05cbc03dd07eeb865018d53a6cd3e177e1`; no Forge write or GPU run occurred in this reflection.
- Highest-value synthesis: the first matched decoded BF16/direct-RTN/CFG-AWQ local triad reverses the fixed-latent ranking—RTN is 1.289 dB closer to BF16 by pixel PSNR—so guided cosine/MSE must remain a diagnostic covariate, not a recipe selector. Blind review and a non-duplicate 512×320×49 replication are now the gate.
- PR #26's scale-slab cache and PR #27's LongCat graph slice are complementary but independent: each has passing CPU CI and deferred real-model/media gates. PR #17 is CI-clean and now blocked on assignment-aware product evidence, not infrastructure.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-14T22:42:00-06:00`; durable updates: `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md`, `wiki/queries/forge-research-digest-2026-07-14.md`, and indexed `wiki/experiments/ltx23-decoded-bf16-rtn-awq-smoke.md`.
- No remote GPU job or spend. Current blockers are blind review/replication and the missing Official/Forge/Comfy external inputs.

## 2026-07-15T01:47:51-06:00 — Forge-targeted research digest

### Forge state

- Safely fetched and verified pristine `/home/aegisfang666/workspace/forge` on clean `main == origin/main@dc383a05cbc03dd07eeb865018d53a6cd3e177e1`.
- Used clean read-only worktree `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260714-afternoon`, branch `research/forge-digest-20260714-afternoon`, at the same SHA. No Forge source write, build, artifact generation, commit, push, or PR.
- Open drafts #17, #26, and #27 are mergeable with Linux/Windows hosted checks passing and no approving review; no initiative was duplicated.

### High-signal cards

1. **Blind-review the decoded quant reversal first.** The matched local GB10 `320x192x17` BF16/RTN/CFG-AWQ triad put RTN `1.289 dB` closer to BF16 by pixel PSNR, reversing the fixed-latent trace ranking. Independently review the retained filmstrip/frames before any new generation; only a decisive result promotes one new `512x320x49` prompt/seed replication.
2. **Harden draft PR #26 at its existing boundary.** Its NVFP4 scale-slab cache has green hosted compile checks, but still needs independent lifetime/fallback review and a real LTX cold-load A/B with byte-compatible output and bounded multi-engine/device cache behavior.
3. **ACID remains the strongest new trace-only cache lead.** `arXiv:2607.12358v1` reports adaptive low/high thresholds from drift-rate changes. First replay per-block LTX residual traces against fixed and equal-skip random controls; require stable critical steps, cosine `>=0.995`, and projected warm gain `>=10%` before native cache work.

### Durable artifacts and spend

- Added `wiki/queries/forge-research-digest-2026-07-15.md`; wiki index/overview/graph rebuild and lint follow this entry.
- No local generation or remote `gpu run`; GPU spend **$0**.
- Next action: assign an independent reviewer for the retained quant media and PR #26. Approve ACID trace-only instrumentation only after those review boundaries are owned.

## 2026-07-15T04:48:38-06:00 — Reflection: bind blind quant review to strict identity evidence

- Forge remained clean/current at `main == origin/main@dc383a05cbc03dd07eeb865018d53a6cd3e177e1`; drafts #17/#26/#27 are mergeable with executed Linux/Windows checks passing and no approving review.
- Highest-value synthesis: the retained 17-frame BF16/RTN/AWQ triad can screen preference/artifacts but cannot satisfy Forge's >=24-measurable-face strict identity gate. The next 49-frame row should combine existing quant generation, comparison-run hashes, randomized opaque labels, and an independent pinned YuNet/SFace anchor.
- Forge currently has labeled capture/contact-sheet tooling but no blind randomize/unblind helper; a CPU-only hash-bound review bundle is the cheapest next card. Aura/PACR contribute rubric axes, not drop-in identity mechanisms.
- Full reflection: `site/wiki-forge-reflections.md` § `2026-07-15T04:48:38-06:00`; durable update: `wiki/queries/forge-research-digest-2026-07-15.md`. No Forge write, GPU generation, remote job, or spend.

## 2026-07-15T07:53:30-06:00 — Forge-targeted research digest refresh

### Forge state

- Safely fetched and verified pristine `/home/aegisfang666/workspace/forge` on clean `main == origin/main@dc383a05cbc03dd07eeb865018d53a6cd3e177e1`.
- Used clean read-only worktree `/home/aegisfang666/workspace/worktrees/forge-research-digest-20260714-afternoon`, branch `research/forge-digest-20260714-afternoon`, at the same SHA.
- Reconciled draft PRs #17/#25/#26/#27. No Forge source write, build, generated artifact, commit, push, or new PR.

### High-signal cards

1. **Seriality Gap (`2607.13031v1`)** — controlled Wan2.1-style video-DiT experiments find that extra denoising steps do not repair long dependent-event chains, while temporal blockwise/autoregressive factorization does. Forge can test this through its existing LTX latent-tail path: CPU-validate a collision-trajectory scorer, then run one local matched bidirectional-vs-blockwise smoke with a one-ball control.
2. **PR #25 evidence gap** — its GB10 Canny row shows structural adherence but only quality `2/5`, prompt `1/5`, artifacts `4/5`; the GPU matrix also predates final head `c6bfc14`. Re-run disabled/zero/Canny on the exact final head and require byte identity plus acceptable human/VLM quality before promotion.
3. **ACID remains orthogonal** — trace LTX block residual drift and replay adaptive/fixed/equal-skip-random thresholds offline. Require stable critical steps, cosine `>=0.995`, and projected warm gain `>=10%` before native caching.

### Durable artifacts and spend

- Added `wiki/raw/papers/seriality-gap-2607-13031v1.md` and `wiki/papers/seriality-gap-video-diffusion.md`.
- Updated `wiki/queries/forge-research-digest-2026-07-15.md` and this journal; wiki index/overview/graph rebuild and lint follow.
- No local generation or remote `gpu run`; GPU spend **$0**.
- Next action: assign independent reviewers for PR #25/#26, then approve the CPU scorer plus one small local Seriality Gap smoke.

