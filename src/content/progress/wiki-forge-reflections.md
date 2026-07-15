---
title: "Wiki ↔ Forge Reflections"
description: "Periodic synthesis comparing accumulated auto-research wiki knowledge with the current Forge codebase."
date: "2026-07-15T10:52:08.176Z"
kind: note
status: published
tags: []
---

# Wiki ↔ Forge Reflections

> Periodic synthesis comparing accumulated auto-research wiki knowledge with the current Forge codebase.

## 2026-07-13T03:41:51-06:00 — One evidence envelope for LTX references, PR #15 A/V, and later quant rows

### Forge git state
- Primary Forge is on `main @ 33f3974979aa9a13dcb5958b54e8610ae1d428aa`, one commit ahead and 41 behind the locally known `origin/main @ adfa4c35e4d2e53bc5909854c8f5f8bc1e0da0df`, with tracked modification `.beads/interactions.jsonl`.
- Per policy, the primary checkout remained read-only: no fetch, pull, reset, stash, checkout, build, or Forge write. Current-main inspection used the existing clean `origin/main` research worktree.
- Open drafts now include PR #16 (LTX reference comparison suite), PR #15 (LongCat multi-speaker + LTX Ingredients/joint A/V), and PR #14 (Rust IC-reference propagation). PR #16 is mergeable but marked unstable because hosted jobs failed before executing steps; its focused local suite reports 29 passing tests.

### Top synthesized insights
1. **PR #16 is the missing evaluation envelope, not another model feature.** Its normalized plan/result hashes, independently decoded MP4s, long-form QA, contact sheets, and explicit effective-profile differences are the right common substrate for the wiki's LTX quality, CFG-quant, identity, and reference-comparison work. Do not create another comparison harness.
2. **The first real use should harden PR #15 by separating modality from implementation.** PR #16 currently compares official joint A/V with Forge video-only and correctly labels that causal mismatch. Add a matched official video-only row and, only after PR #15's clear-speech gate passes, a Forge joint-A/V row. This yields a 2×2 modality/implementation attribution instead of a misleading three-way quality ranking.
3. **Character identity must be an explicit comparison dimension.** PR #15 records only `11/112` strict studio-sheet and `31/112` resting-anchor Ingredients matches. The comparison suite already calls `ltx_longform_quality.py`; extend its result join with the versioned Ingredients identity dataset output rather than treating whole-subject CLIP, SSIM, or a pleasing contact sheet as biometric continuity.
4. **Native INT8 should become a later Forge implementation row, not be inferred from synthetic GEMMs.** The 4090/5090 full-path matrix is strong kernel evidence, but Forge still truthfully marks Z-Image/LTX INT8 unsupported. After one real-weight projection clears dispatch, lifetime, cosine, and warm-speed gates, add an INT8 Forge row beside BF16/FP8/NVFP4 using the same plan and output contract. This directly realizes PR #16's documented `Forge BF16/FP8/AWQ` diagnosis ladder.
5. **SyncCache now has a cleaner prerequisite and evidence identity.** Its LongCat trace/replay remains sequenced after PR #15, but the same plan-hash/run-hash discipline should identify baseline media, evaluator protocol, and trace sidecars. Trace-only mode must preserve media hash; a later cache row must receive a distinct effective profile and preserve speaker, identity, join, and matched-PCM SyncNet gates.
6. **Queue hygiene is still a safety defect.** `site/experiments.md` continues to advertise an obsolete remote Diffusion-LLM command. It was not executed; current actionable work is local/read-only and remote spend requires separate approval.

### Concrete Forge touchpoints
- Comparison envelope: PR #16 `tools/capture/run_ltx_reference_comparison.py`, `docs/LTX_REFERENCE_COMPARISON_SUITE.md`, `examples/ltx_reference_comparison.json`, and `tools/tests/test_ltx_reference_comparison.py`.
- PR #15 A/V and identity: `engine/src/pipelines/pipeline_video_audio.cpp`, `tools/capture/evaluate_ltx_joint_av_sync.py`, `tools/capture/ltx_character_dataset_gate.py`, and `tools/capture/ltx_ingredients_multishot_quality.py`.
- Existing quality join: `tools/capture/ltx_longform_quality.py` and `tools/capture/run_ltx_native_quality_gate.py`.
- INT8 integration: `engine/tests/int8_test.cpp`, LTX/Z-Image linear dispatch, `docs/EIGHT_BIT_QUANT_PLAN.md`, `docs/QUANT_BATCHING_CAPABILITY_MATRIX.md`, and `engine/src/core/perf_monitor.*`.
- LongCat cache trace: `engine/src/models/longcat_avatar/dit_core.cpp`, `pipeline_longcat_avatar.cpp`, and the certified LongCat identity/SyncNet protocol.

### Suggested next experiments/cards
1. **PR #16 × PR #15 dry-run card (CPU-only):** extend a local manifest to four explicit rows—official joint A/V, official video-only, Forge video-only, and Forge joint A/V—with the same prompt/seed/geometry and machine-visible modality differences. Dry-run only until PR #15 supplies a >=51-frame clear-speech human fixture.
2. **PR #15 evidence card:** run that clear-speech fixture; require valid face/mouth tracks, matched-PCM SyncNet, deterministic RGB+PCM, duration alignment, and strict Ingredients identity accounting. Update PR #15 rather than opening another PR.
3. **Real-weight INT8 card:** replay one captured LTX or Z-Image projection on RTX 4090/5090; require >=1.15x warm projection speed, cosine >=0.9999, safe workspace/fallback retirement, and an explicit dispatch record before adding a rendered comparison row.
4. **SyncCache trace card (later):** request-local pixel-inert residual trace and offline replay; require unchanged media bytes and >=25% predicted removable visual work before any skip implementation.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-13.md` and its index summary; no duplicate query page was created.
- Appended this reflection, the wiki log entry, and a pointer in `site/research-journal.md`.
- Kept `site/experiments.md` unchanged but explicitly marked its sole remote command stale and unsafe to execute.

### Confidence and risks
- **High:** primary checkout state, open-PR ownership, PR #16's comparison contract/local 29-test result, PR #15's stated evidence limits, and the native-INT8 microbenchmark boundary.
- **Medium:** one comparison envelope will reduce duplicated evaluation work; adapters still need real model assets and implementation-specific commands.
- **Low until executed:** joint-A/V quality ranking, guided-error-to-identity correlation, real-model INT8 gain, and LongCat cache speedup.
- Hosted checks on PRs #15/#16 are infrastructure/account failures with zero executed steps, not hosted CI success. No GPU run, remote job, or spend occurred.

## 2026-07-12T13:37:53-06:00 — Resource-quality frontier for LTX deployment controls

### Forge git state
- Forge is clean on `main @ 33f3974979aa9a13dcb5958b54e8610ae1d428aa`, but it is one metadata-only commit ahead and five commits behind fetched `origin/main @ bc12d68abe9e67fd1ab4f834ac487c3e571da558`.
- Because a fast-forward is impossible, the checkout remained read-only. Active tiling/artifact worktrees were reconciled; no duplicate branch or PR was created.

### Top synthesized insights
1. **Unify deployment optimization evidence, not implementations.** Residency policy, runtime-native quant layout/scale slabs, request-scoped VAE tiling, and later sparse/cache controls should emit one identity-addressed evidence bundle with independent typed axes.
2. **Measure a Pareto frontier rather than a single speed number.** Every row should bind semantic/config identity to cold/warm stage time, peak arena/scratch/resident bytes, ring traffic, decoded parity, temporal/identity QA, and exact control provenance.
3. **Tiling is the first concrete consumer of this contract.** Forge already has an active request-scoped LTX decoder-tiling lane (`kanban/forge-gpu-creator-controls@13e2d47`) and artifact-integration worktrees. The next work is default-identity, fail-closed, peak-memory, and quality certification—not another implementation.
4. **The monitor remains the admission gate for method-level acceleration.** The recorded `45.2 s` cold versus `1.67 s` warm LTX run shows why residency/layout gains must be separated from denoiser gains. Add sparse/cache traces only if exact-profile warm denoise is material.
5. **Keep LongCat family-specific.** Its five-position continuation KV cache is a valuable cache-risk benchmark, but join identity, matched-PCM SyncNet, and resident/offload parity cannot be replaced by the LTX tiling/CFG rubric.

### Concrete Forge touchpoints
- Monitor/residency: `engine/src/core/perf_monitor.*`, `engine/src/pipelines/pipeline_video.cpp`, `docs/VIDEO_PERF_MONITOR_PLAN.md`.
- LTX decode controls: `engine/src/models/ltx2/vae.*`, `engine/include/forge.h`, Rust graph lowering/cache identity, active tiling branch/worktrees.
- Runtime layout: `docs/EXTERNAL_MODEL_IO_PLAN.md`, `StreamLoader`, converter recipe metadata, model content identity.
- Quality: `tools/capture/run_ltx_quant_quality_matrix.py`, `tools/capture/ltx_longform_quality.py`, contact sheets and full-resolution review.

### Suggested next experiments/cards
1. **CPU/default contract:** verify zero/default tiling preserves historical graph bytes/cache identity; enabled tiling has distinct identity; unsupported modes fail before execution.
2. **Host-only layout card:** report scale-slab manifest identity, stored/runtime bytes, padding/swizzle cost, and expected synchronous-upload removal.
3. **Local Pareto A/B:** exact LTX profile, cold and immediate warm, untiled versus tiled decode; persist stage timing, peak bytes, ring traffic, PSNR/SSIM/MS-SSIM/LPIPS, temporal QA, and contact sheets.
4. **Conditional trace expansion:** only after warm attribution clears the existing denoise-materiality gate, attach pixel-inert block/head/cache traces; do not compose output-changing methods yet.

### Wiki maintenance actions
- Updated the existing `wiki/queries/forge-research-digest-2026-07-12.md`; no duplicate query page was created.
- The stale `site/experiments.md` remote Diffusion-LLM command remains a separate queue-hygiene defect and must not be executed.

### Confidence and risks
- **High:** Forge divergence, active implementation lanes, monitor/residency evidence, and the need for independently attributable controls.
- **Medium:** useful peak-memory benefit from LTX tiling until a model-backed A/B is recorded.
- **Low:** sparse/cache end-to-end value before exact-profile warm attribution.
- No local/remote GPU run or spend; no Forge source write, commit, push, or PR.

## 2026-07-12T07:34:01-06:00 — Certified LongCat continuation as the cache-risk benchmark

### Forge git state
- Forge was clean on `main`, fetched and fast-forwarded safely, and is synchronized with `origin/main @ 0185b84f20102d5ff4764b47ffbebd61104c5d25`.
- No Forge source was edited.

### Top synthesized insights
1. **The prior LongCat blocker is obsolete.** Forge certifies official-INT8 AI2V, AT2V, and in-call continuation on both the RTX 5090 and 5070 Ti. Two-segment outputs retain 100% face detection, no frozen mouths/QA flags, canonical SSIM means 0.88418/0.88329, and unique-join SSIM 0.95245/0.95401; a three-segment 5090 stress run also completed.
2. **Build the first identity-addressed evidence bundle from completed LongCat artifacts.** Join Forge's semantic key/config namespace with existing capture manifests, QA JSON/CSV, matched-PCM SyncNet settings, overlap restoration, and join metrics. This CPU-only step is more valuable than another generator run.
3. **TetherCache now has a concrete Forge target.** LongCat's five-position continuation K/V cache is 5.71 GiB BF16 and has resident-5090 and host-offloaded-5070-Ti policies. Diverse/trusted cache selection can be trace-replayed while preserving the certified default and resident/offload parity.
4. **NaviCache/TaoCache need a monitor-first LongCat gate, not an immediate port.** Use the completed three-segment trajectory to determine whether DiT compute or K/V movement dominates. Promotion requires identity-at-joins, matched-PCM SyncNet deltas, restored-overlap parity, and latency—not SSIM alone.
5. **Quantization conclusions remain family-specific.** LongCat's naive NVFP4, row-FP8, and W8A8 paths failed quality or speed; official INT8 is the sole shipped tier. This does not contradict LTX CFG-aware AWQ because released LongCat uses guidance 1.0/no CFG.

### Concrete Forge touchpoints
- Evidence identity/cache: `bindings/rust/forge-graph/src/cache/key.rs`, `bindings/rust/forge-graph/src/cache/content_id.rs`, `bindings/rust/forge-graph/src/identity.rs`.
- LongCat ABI/runtime: `engine/include/forge.h`, `engine/src/models/longcat_avatar/`, `engine/src/pipelines/pipeline_avatar*`.
- Capture/evaluation: `tools/capture/capture_longcat_avatar.py`, `tools/capture/longcat_avatar_quality.py`, `tools/capture/ltx_longform_quality.py`.
- Performance attribution: `engine/src/core/perf_monitor.*`, with an avatar-stage extension only after normalizing the evidence manifest.

### Suggested next experiments/cards
1. **CPU-only evidence manifest:** normalize existing LongCat reports under model/input/seed/geometry/segments/quant/device/build/evaluator hashes; mark compact-text artifacts superseded. Gate on deterministic schema output and unchanged media semantic identity.
2. **Continuation cache trace replay:** compare the current five-position cache with relevance-only and relevance+diversity selection; report selected anchors, bytes, replay coverage, and expected transfer savings.
3. **Only if monitoring warrants it:** one matched two-segment A/B with a conservative cache policy, preserving resident/offload controls and frozen join/identity/SyncNet gates.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-12.md` and its index summary to remove the stale LongCat external-artifact blocker.
- Updated the existing digest rather than creating a duplicate query page.
- Future cleanup should mark older compact-text LongCat measurements as superseded wherever cited; Forge's plan already does so.

### Confidence and risks
- **High:** Forge git state, certified modes, measured QA values, and file touchpoints.
- **Medium:** TetherCache/NaviCache/TaoCache transfer hypotheses until trace replay exists.
- **Risk:** deterministic or high-SSIM cache results can still damage lip sync or identity at joins; matched audio, evaluator hashes, and human review remain mandatory.
- No GPU run, remote spend, implementation, commit, push, or PR occurred.

## 2026-07-12T01:30:49-06:00 — Forge/wiki reflection

### Forge git state
- Local Forge is `main @ aa60918275977110002a445682a901095db5edd9`, 58 commits behind the already-known `origin/main @ 896faebdff6484275712e238e2b19dba72e4d6c2`.
- The worktree has a tracked modification at `.beads/interactions.jsonl`; per policy, no fetch, pull, checkout, reset, or Forge write was attempted. This cycle inspected the current tree plus the existing remote-ref synthesis.

### Top synthesized insights
1. **The next combined artifact should be an identity-addressed evidence bundle, not another method-specific harness.** Forge graph already derives a semantic key from lowered controls/model/input identity and a config namespace from build/CUDA/device/fold shape. Use that identity tuple to join the video performance report, eight-sigma trace, CFG guided-error summary, and decoded QA. This makes warm-profile, sparse/cache, quant, and identity evidence comparable without pretending telemetry is a generated-media cache hit.
2. **Diagnostics must be sidecars, not semantic inputs.** Performance/trace verbosity should not change graph bytes, media cache identity, or denoising. Store sidecars under `{semantic_key}/{config_namespace}/{trace_schema_version}` with artifact/corpus hashes; an output-changing Spectrum/TJS/cache control must remain a typed request attribute and therefore receive a distinct semantic key.
3. **Cold/warm attribution is the admission gate for all accumulated acceleration ideas.** ScalingAttention/HyperVAttention, NaviCache/TaoCache, LongCat KV compression, and CFG-aware quantization become actionable only after the merged coarse monitor shows where warm time and bytes go. Require denoise/attention >=15% of warm wall time before trace/kernel work; do not rank methods on a cold residency-dominated call.
4. **LongCat and LTX can share evaluator primitives but not thresholds.** The LongCat plan now records a canonical single-segment identity baseline, full 36.9k-token attention, 5.728-GiB continuation K+V, and avatar-specific lip-sync gates. Factor SFace eligibility/trajectory and join-window sheets from LTX tooling, but preserve avatar portrait-reference, audio, per-segment, and SyncNet fields as a versioned LongCat section.
5. **The stale experiment queue now creates a safety contradiction.** `site/experiments.md` still advertises an obsolete remote Diffusion-LLM command while the active evidence queue is local/read-only and this job forbids spend. Regenerate it in a dedicated maintenance cycle; do not execute the listed remote command.

### Concrete Forge touchpoints
- `bindings/rust/forge-graph/src/cache/key.rs` and `cache/mod.rs` — semantic/config identity and hash-on-produce substrate for evidence provenance.
- `bindings/rust/forge-graph/src/lower.rs` and denoise-control tests — output-changing controls must alter semantic identity and fail closed where unsupported.
- `engine/src/core/perf_monitor.*`, `engine/src/pipelines/pipeline_video.cpp`, and `engine/src/models/ltx2/dit.cpp` on current `origin/main` — coarse monitor first, optional trace sidecar second.
- `tools/capture/ltx_longform_quality.py`, `tools/capture/longcat_avatar_quality.py`, and `docs/LONGCAT_AVATAR_PORT_PLAN.md` — shared face evaluator with family-specific schemas/gates.
- `engine/tools/ltx2_cfg_quant_diag.cpp` and `tools/capture/run_ltx_quant_quality_matrix.py` — guided-error and decoded QA join points.

### Suggested next experiments/cards
1. **Evidence-bundle schema card (CPU-only):** define a v1 manifest keyed by semantic key + config namespace and referencing perf, trace, CFG, media, and QA sidecars. Test that trace verbosity leaves graph/media cache identity unchanged while TJS/Spectrum controls change it.
2. **Exact-profile monitor card (local after safe sync):** one cold + immediate warm LTX run; only promote attention/cache tracing if warm attribution clears the 15% gate.
3. **LongCat continuation identity card (offline):** score the existing 253-frame artifact where it lives; emit portrait→frame and first-frame→frame trajectories, per-segment coverage, and ±8-frame join sheets without regeneration.
4. **CFG artifact card (separate):** obtain a matched CFG-aware AWQ artifact, then join fixed-latent guided error to one matched decoded identity/contact-sheet run. Do not compose with sparse/cache/anchor changes.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-12.md` with the durable evidence-bundle synthesis; no duplicate query page was created.
- Appended `wiki/log.md`, this reflection, and a pointer in `site/research-journal.md`.
- Deferred the stale `site/experiments.md` rewrite because this reflection cycle should not silently redefine the execution queue.

### Confidence and risks
- High confidence in the graph identity/cache model and current local LongCat/TJS metadata surfaces from direct code/docs inspection.
- Medium confidence that a shared evidence bundle will reduce duplicated capture work; the merged monitor code is 58 commits ahead and was not built in this dirty checkout.
- SFace remains pose/detector-sensitive; performance telemetry is not quality evidence; fixed-latent CFG scans are not trajectory evidence.
- Blocker: dirty, stale Forge checkout. No local generation, remote GPU job, or spend.

## 2026-07-11T19:26:19-06:00 — Forge/wiki reflection

### Forge git state
- Local reference: `main @ aa60918275977110002a445682a901095db5edd9`, dirty only at `.beads/interactions.jsonl`; no checkout, merge, or source write was attempted.
- Fetched remote: `origin/main @ 31e0af11b446ba887d79ebe17b2ba39a4b375b7b` (PR #7, video performance monitor), 42 files / 1,921 insertions ahead. Inspected from the remote ref because policy forbids fast-forwarding a dirty tree.

### Top synthesized insights
1. **Profile first, method second.** The new opt-in LTX report exposes stage wall time, NVML SM/memory/power/PCIe, ring uploads, and DiT core loads. It is the coarse parent of the proposed eight-sigma trace: run it first, then instrument heads/blocks only if denoise is material.
2. **The measured bottleneck can be residency, not diffusion math.** At 320x192x17, per-call text/residency consumed 94.8% of a 19.5 s first call; pinning text reduced the call to 1.389 s. The graph Resident fix measured 45.2 s cold versus 1.67 s warm at 512x320x49. Sparse attention, NaviCache, and KV quantization should not be evaluated against a cold/load-dominated baseline.
3. **One manifest can now connect runtime attribution to research interventions.** Extend the performance report manifest with profile/artifact/corpus hashes and the existing immutable eight sigmas. Conditional additions—attention occupancy, block deltas, guided error—should be versioned attachments, not separate harnesses.
4. **LongCat continuation identity remains an artifact-access problem, not a generation problem.** Forge docs record two-segment seam/SyncNet passes and a completed 253-frame three-segment run, but its `D:\\forge-goldens` media is absent on this Linux host. `longcat_avatar_quality.py` still lacks SFace, portrait reference, per-segment trajectories, and join sheets. Score the existing Windows artifact where it resides; do not regenerate here.
5. **Metrics must stay task-specific.** LongCat continuation SSIM/YuNet/SyncNet establish backend similarity, face presence, and lip-sync—not portrait identity. Likewise, LTX utilization traces establish cost attribution—not quality. Promotion still joins SFace coverage/trajectory and human review to the runtime manifest.

### Concrete Forge touchpoints
- `engine/include/forge.h`, `engine/src/core/perf_monitor.*`, `engine/src/os/gpu_telemetry.cpp`, `engine/src/pipelines/pipeline_video.cpp` on `origin/main` — new coarse attribution surface.
- `docs/VIDEO_PERF_MONITOR_PLAN.md` and `docs/LTX2.md` on `origin/main` — measured resident/staged behavior and interpretation contract.
- `engine/src/models/ltx2/dit.cpp` — only add per-block/head eight-sigma instrumentation after coarse attribution passes.
- `tools/capture/longcat_avatar_quality.py` and `tools/capture/ltx_longform_quality.py` — factor SFace/reference/segment identity logic without changing the existing LTX schema.
- `docs/LONGCAT_AVATAR_PORT_PLAN.md` — authoritative external artifact paths and continuation/seam evidence.

### Suggested next experiments/cards
1. **LTX attribution baseline:** after safely syncing a clean checkout, run the perf monitor on the exact 49/145-frame target in Resident and Staged modes, cold and warm. Persist stage time, SM/PCIe, ring bytes, core loads, arena peak, artifact hash, and profile.
2. **Conditional trace expansion:** only if denoise is >=15% of warm E2E, add eight-sigma block timing/deltas; only if attention is material, add head occupancy/top-k topology and masked replay.
3. **LongCat offline identity QA:** run portrait→frame and first-frame→frame SFace trajectories on the existing 253-frame Windows artifact, with per-segment summaries and ±8-frame join sheets.
4. **Keep CFG quant attribution independent:** join guided-error fields to the same manifest, but do not compose quantization, sparsity, cache, or anchor changes before separate decoded gates.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-11-noon.md`, `wiki/index.md`, and `wiki/log.md`; no duplicate query page was created.
- `site/experiments.md` remains stale with an obsolete remote Diffusion-LLM command; it should be regenerated in a dedicated queue-maintenance cycle.

### Confidence and risks
- High confidence in the new performance-monitor surface and reported measurements: inspected directly from fetched `origin/main` docs/code.
- High confidence that the local LongCat QA lacks identity scoring and that the referenced three-segment artifact is not present under `/home/aegisfang666`.
- Medium confidence that per-head sparse-attention tracing will be worthwhile; the new coarse monitor may reject it for the selected profile.
- Blocker: dirty Forge reference prevented fast-forward, so new code was not built locally. No local generation, remote GPU job, or spend.

## 2026-07-11T13:23:19-06:00 — Forge/wiki reflection

### Forge git state
- Clean `main @ aa60918275977110002a445682a901095db5edd9`, exactly matching `origin/main`.
- Safe sync completed (`git fetch origin main` and `git pull --ff-only origin main`); Forge was already up to date. No Forge source was modified.

### Top synthesized insights
1. **LongCat identity work should target continuation boundaries, not re-prove the single-segment baseline.** `docs/LONGCAT_AVATAR_PORT_PLAN.md` already records 100% sampled-face detection and SFace identity cosine `0.9304` for the canonical 93-frame clip, plus passing native/canonical clear-speech gates. The remaining question is whether the fixed portrait anchor plus four prior-tail latents preserves identity across the two joins in the 253-frame/three-segment path.
2. **The avatar QA script and documented contract are misaligned.** `longcat_avatar_quality.py` emits YuNet persistence/jitter and mouth/audio diagnostics, but does not accept the portrait as an identity reference, run SFace, segment results, or emit boundary sheets. `ltx_longform_quality.py` already implements YuNet quality filtering and SFace first-frame trajectories. Factor that evaluator into a shared module, then add portrait-to-frame, first-frame-to-frame, per-segment, and join-window scores to LongCat QA.
3. **LongCat may be a stronger sparse-attention profiling target than LTX—but only after continuation certification.** The canonical 480p path has roughly 36.9k video tokens, full attention (`enable_bsa=false`), and about eight times LTX-2.3's token count at comparable output shape. First capture attention time/top-k mass/topology churn on one 8-NFE segment; require attention >=15% of warm time, projected work reduction >=30%, and dense masked-replay cosine >=0.995 before kernel work.
4. **Continuation KV optimization is distinct from denoiser caching.** Canonical LongCat continuation stores about `5.728 GiB` of BF16 K+V across 48 blocks. Forge already supports resident 5090 and host-offloaded 5070 Ti policies with byte-exact parity. TetherCache/NaviCache ideas may inform offline KV sensitivity/compression only; they must not be confused with skipping denoiser evaluations or weaken the exact resident/offload gate.
5. **The next combined artifact should be one continuation certification manifest.** Join portrait hash, model/revision, segment geometry, anchor/tail policy, KV residency/bytes, per-segment SFace coverage/cosine, join-window identity deltas, seam/motion metrics, SyncNet protocol, and human-review sheets. This makes later attention/KV experiments attributable without another evaluation stack.

### Concrete Forge touchpoints
- `tools/capture/longcat_avatar_quality.py` — add shared SFace reference/trajectory and segment/join reporting.
- `tools/capture/ltx_longform_quality.py` — source of existing YuNet quality filters and SFace trajectory implementation to factor, not copy.
- `engine/src/pipelines/pipeline_longcat_avatar.cpp` — fixed portrait anchor, four-tail continuation state, and segment provenance.
- `engine/src/models/longcat_avatar/dit_core.*` / `engine/src/ops/kernels_longcat_dit.cu` — later request-scoped attention timing/topology trace seam.
- `docs/LONGCAT_AVATAR_PORT_PLAN.md` — single-segment identity baseline, 253-frame continuation contract, KV accounting, and release gates.

### Suggested next experiments/cards
1. **Offline continuation identity:** score the existing three-segment raw RGB/MP4 if available; compare portrait→frame and first-frame→frame SFace trajectories, detection coverage, and ±8-frame join windows. Generate nothing unless absent.
2. **Shared face-evaluator refactor:** extract YuNet/SFace selection, frontal/eye-quality filtering, and trajectory summaries from `ltx_longform_quality.py`; preserve old LTX schema behavior and add a versioned LongCat identity section.
3. **LongCat attention trace (after identity):** one segment, all eight sigmas, per-block/head timing and top-k mass/topology churn; no output-changing kernel.
4. **KV sensitivity (later, independent):** offline BF16→FP8/blockwise-KV replay on captured continuation K/V with per-layer output cosine; preserve resident/offloaded BF16 as exact control.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-11-noon.md`; no new page was needed.
- `site/experiments.md` remains stale with the obsolete remote Diffusion-LLM command; cleanup remains a dedicated queue-maintenance task.

### Confidence and risks
- High confidence that single-segment identity is already evidenced and the missing gate is continuation-specific.
- High confidence that current LongCat QA lacks SFace/reference/segment outputs.
- Medium confidence that LongCat sparse attention offers more leverage than LTX; attribution/topology is unmeasured.
- SFace is pose/detection sensitive; report eligible coverage and full-resolution review. KV quantization remains an isolated hypothesis.
- No local generation, remote GPU job, or spend.

## 2026-07-11T07:19:53-06:00 — Forge/wiki reflection

### Forge git state
- `main @ eee7c1d2c9b55c01f105f4451334037df81a3dd8`, matching `origin/main`.
- Worktree has untracked `.hermes/`; per policy it was treated as dirty, so no fetch/pull or Forge write was performed. Current tree was inspected read-only.

### Top synthesized insights
1. **One shared eight-sigma LTX trace should replace three separate probes.** CFG-aware quantization already enumerates positive/negative branches at all production sigmas; ScalingAttention/HyperVAttention need per-head occupancy, and NaviCache needs per-block delta/error traces. Capture these together under one versioned, corpus/artifact-hashed manifest, then make sparse-mask, cache, and guided-error decisions offline.
2. **The trace is only useful if it closes into Forge's decoded identity gate.** `run_ltx_quant_quality_matrix.py` and `ltx_longform_quality.py` already provide fixed scenarios, YuNet/SFace, subject CLIP, seam, motion, detail, and exposure. Join trace summaries to those outputs rather than creating another quality harness. Fixed-latent guided error is sensitivity evidence, not a trajectory or perceptual verdict.
3. **Profile attribution comes before kernel work.** LTX certification shows dev-HQ can be dominated by 69 DiT forwards and 1,794 ring uploads, while other profiles may expose attention. Use existing manifests plus shared trace timing to require a component to occupy at least 15% of warm end-to-end time and project at least 30% attention-work reduction before writing sparse CUDA.
4. **Quantization, sparsity, caching, and identity anchors must stay independently attributable.** Run BF16/direct RTN/CFG-aware AWQ first under fixed controls; separately replay sparse masks and NaviCache schedules; separately test first-anchor + prior-tail memory. Compose only after each clears decoded 49/145-frame gates.
5. **Strict face identity remains the product blocker hidden by whole-subject metrics.** Forge's certified clips score 40% and 0% SFace match despite strong subject CLIP. The two-slot first-anchor + previous-tail ablation is therefore higher value than importing training-heavy UnityShots, but SFace must be paired with detection coverage and human/VLM review.

### Concrete Forge touchpoints
- `engine/src/quant/ltx2_awq_capture_plan.h` and `engine/tools/ltx2_cfg_quant_diag.cpp` — exact eight-sigma, two-branch plan and guided-error provenance.
- `engine/src/models/ltx2/dit.cpp` — request-scoped attention occupancy, block delta, elapsed-time, and replay instrumentation seam.
- `tools/capture/run_ltx_quant_quality_matrix.py` — immutable scenario/artifact matrix and manifest join point.
- `tools/capture/ltx_longform_quality.py` and `docs/LTX23_QUALITY_CERTIFICATION.md` — decoded identity, seam, motion, detail, exposure, and certification gates.
- `engine/tests/ltx2_longform_chain.cpp` / `docs/LONGFORM_CONSISTENCY_PLAN.md` — bounded first-anchor + prior-tail identity ablation.

### Suggested next experiments/cards
1. **LTX eight-sigma observability capture (local, pixels unchanged):** one 512x320x17 run, 2-3 prompts, fixed seeds; record branch/sigma/block/head occupancy, delta norms, residual prediction error, attention/block timing, and ring uploads. Output: `outputs/forge-ltx-eight-sigma-trace/`.
2. **Offline decision bundle:** produce topology churn/projected CTA fill, NaviCache uncertainty/recompute replay, and Sol-style component attribution from the same trace. Reject kernel/cache work if projected attention reduction is `<30%`, replay cosine is `<0.995`, or the target is `<15%` of warm time.
3. **Decoded CFG artifact gate:** exact self-control, BF16→direct RTN, BF16→CFG-aware AWQ, then one fixed 49/145-frame scenario joined to guided worst-sigma error and SFace/visual metrics.
4. **Two-slot identity ablation:** fixed opening anchor, prior tail, and combined mode; require improvement over recorded 40%/0% strict-face baselines without seam/motion/prompt regressions.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-11.md` with the shared-trace synthesis; no low-value new page was created.
- `site/experiments.md` remains stale (obsolete remote Diffusion-LLM command) and should be regenerated in a dedicated queue-maintenance pass.
- Appended this reflection, the research-journal pointer, and a wiki log entry.

### Confidence and risks
- Confidence: high that the instrumentation can be unified; the required sigma/branch plan and decoded QA surfaces are already in Forge main.
- Confidence: medium that sparse attention or NaviCache will produce an end-to-end win; LTX profile costs and eight-step dynamics may reject either idea.
- Risk: untracked `.hermes/` prevented safe Forge synchronization. This cycle did not build, generate, or run GPU tests.
- Spend: no remote GPU job and no spend; no local generation was run.

## 2026-07-08T16:42:02-06:00 — Forge/wiki reflection

### Forge git state
- `main @ f871af9 (clean; fetched origin/main and pull --ff-only reported already up to date)`
- Safe sync performed: `git fetch origin main && git pull --ff-only origin main`.
- No Forge files were modified by this reflection cycle.

### Top synthesized insights
1. **TJS is now a concrete Forge sampler feature, not just a paper lead.** The wiki's completed Z-Image-Turbo Spark benchmark shows scheduler-consistent TJS at 5 NFE gives ~1.88× speedup with SSIM 0.9785 vs 10-NFE baseline, and Forge already has the exact Z-Image sampler/spec touchpoints in `docs/ZIMAGE.md` and `engine/src/models/zimage/README.md`. The highest-value next Forge card is an optional `sampler=tjs_scheduler` mode in the z-image pipeline with explicit NFE metadata and a literal-formula canary.
2. **Endpoint/sign conventions are the implementation risk to encode as a gate.** The Spark run found `x0 = x + sigma * velocity` works for Diffusers/Z-Image while the literal paper-looking formula produced colored noise. Forge's Z-Image spec says the pipeline negates model output before Euler update and uses FlowMatch Euler sigmas, so the port should add a parity/negative-control test rather than relying on paper notation.
3. **Character consistency should use existing outputs before more generation.** The wiki has ORACLE as a weak metric/method anchor, and Forge has `docs/LONGFORM_CONSISTENCY_PLAN.md` plus Qwen3-VL-style evaluation in the create loop. Before another Spark run, run metric-only identity/CLIP-style scoring over the existing `outputs/tjs_z_image_turbo_spark/20260708-152535-zimage-extensive-512-benchmark/` images and convert the prompt/seed matrix into a Forge benchmark fixture.
4. **Video long-form work connects MobileWan, Forge LTX plans, and TJS.** MobileWan's useful part for James is not mobile deployment; it is recurrence/chunking, constant-memory attention, head pruning, step distillation, and memory-optimized VAE decoding. Forge already has `docs/LONGFORM_CONSISTENCY_PLAN.md` and `docs/VIDEO_QUALITY_PLAN.md` focused on clip/latent handoff, AWQ, and A/B quality. The combined experiment should be: LTX chained clip baseline + clip-conditioning/latent-tail handoff + optional TJS-like endpoint early exit only after still-image Z-Image TJS lands.
5. **ProxyPose suggests an evaluation/capture primitive, not a model port.** Its "video-to-proxy-video then classical solver" framing maps to Forge tooling as a capture/eval script for motion/pose consistency or seam drift, especially near `tools/capture/vfi_quality_gate.py`, `vfi_postprocess.py`, and SAM2/video plans. Treat it as inspiration for diagnostics rather than a high-priority diffusion model training task.
6. **Diffusion compression should be sequenced after sampler and quant gates.** Teacher-aligned repair and MobileWan compression both reinforce Forge's AWQ/NVFP4 quality work, but they require training/distillation. Current Forge docs show z-image/LTX quant support is partial with open AWQ/SVDQ verdicts; implement/evaluate sampler-level TJS and quant-quality gates first, then revisit pruning/step-distillation if code appears.

### Concrete Forge touchpoints
- `docs/ZIMAGE.md` — sampler sigmas, velocity/sign convention, VAE decode, quant matrix.
- `engine/src/models/zimage/README.md` — planned `sampler.cpp` location for FlowMatch Euler / TJS integration.
- `tools/capture/capture_zimage.py` — golden capture can be extended to include baseline/TJS latents, endpoint sigma/timestep, and negative-control formula output.
- `docs/LONGFORM_CONSISTENCY_PLAN.md` — app-side character/video consistency plan; use existing identity loop and Qwen3-VL scoring before adding training-free attention hooks.
- `docs/VIDEO_QUALITY_PLAN.md` — clip-conditioning and LTX A/B quality harness; best place to connect MobileWan-style chunking with Forge's current LTX work.
- `docs/QUANT_SUPPORT_MATRIX.md` and `docs/NVFP4.md` — keep sampler speedups distinct from quant speedups and avoid claiming default recipe wins before AWQ/SVDQ verdicts.
- `tools/capture/vfi_quality_gate.py`, `tools/capture/vfi_postprocess.py`, and SAM2 capture scripts — possible home for video/motion consistency diagnostics inspired by ProxyPose/VFI/SAM work.

### Suggested next experiments/cards
1. **Forge card: Z-Image TJS sampler mode.** Add optional TJS fields to the Z-Image generation params or internal sampler config: `sampler`, `gamma`, `k_star`, `executed_nfe`, `endpoint_sigma`, `endpoint_formula`. Gate with the six-prompt/four-seed matrix from `site/experiments/x-prediction-tjs-implementation-agent-brief.md`.
2. **Forge card: Z-Image TJS golden capture.** Extend `tools/capture/capture_zimage.py` to emit baseline 10-NFE latents/images plus TJS 3/5/9-NFE endpoint latents/images and the known-bad literal formula canary for sign regression.
3. **Benchmark card: character-consistency metric pass.** Without new generation, score existing TJS benchmark images for same-character consistency across the Mira prompts/seeds; produce a report that separates prompt adherence, identity similarity, and TJS-vs-baseline drift.
4. **Video card: MobileWan-to-LTX transfer note.** Add a short Forge architecture note mapping recurrent chunking/constant-memory attention/head pruning/step distillation to current LTX loop-engine and quant-roadmap phases; explicitly mark mobile/NPU-specific claims out of scope.
5. **Diagnostics card: proxy-video/motion gate.** Prototype a small capture/eval script that converts generated/chained clips into simple motion tracks or proxy overlays, then reports seam velocity drop and drift. This is lower risk than trying to port ProxyPose itself.

### Wiki maintenance actions
- Created durable query page: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Updated `wiki/index.md` to include the query page and bump total pages to 26.
- Appended this reflection to `site/wiki-forge-reflections.md` and a short pointer to `site/research-journal.md`.
- Appended a wiki log entry for the query synthesis.
- Existing weak source: `wiki/sources/oracle-consistent-character-generation-lora-paper.md` is still only a thin source note. It should become a fuller paper/query page only if the next metric pass actually uses ORACLE's mutual-information framing.

### Confidence and risks
- Confidence: high that TJS maps cleanly to Forge Z-Image sampler work because the local Spark experiment used the same model family and exposed the scheduler/sign convention.
- Confidence: medium for transferring TJS to LTX/video; video temporal coherence and per-token sigma behavior need dedicated tests.
- Risk: wiki paper pages for MobileWan/ProxyPose/teacher-aligned repair still have `code: unknown`; do not plan compute-heavy reproduction from them yet.
- Risk: Forge is Windows/MSVC/CUDA-first; this reflection did not build or run Forge gates on the Linux cron host.
- Spend: no remote GPU jobs were run; no spend incurred.

## 2026-07-08T22:44:48-06:00 — Forge/wiki reflection

### Forge git state
- Preflight status before sync: clean `main...origin/main` at `f871af9`.
- Safe sync performed because the tree was clean and on `main`: `git fetch origin main && git pull --ff-only origin main`.
- Forge fast-forwarded to `main @ 1060ac0`; new upstream changes included `docs/ZIMAGE_TJS.md`, `engine/tests/zimage_tjs_gate.cpp`, image pipeline TJS fields/metadata, and graph/runtime exposure.
- No Forge files were modified by this reflection cycle.

### Top synthesized insights
1. **The highest-value wiki→Forge loop closed: TJS is now landed product code.** The previous reflection's top recommendation, a Z-Image `tjs_scheduler` sampler with sign/canary gates, now exists in Forge. `docs/ZIMAGE_TJS.md` documents baseline vs scheduler TJS, `gamma` tiers, NFE metadata, graph/runtime serialization, cache-key participation, and rejection of unvalidated img2img/inpaint/outpaint/video paths. The reflection target should shift from implementation to benchmark fixtures, regression protection, and user-facing defaults.
2. **Forge measurements reinforce the Spark result and refine default tiers.** Spark established scheduler-formula TJS 5-NFE as the practical speed/quality point. Forge's RTX 5090/cudNN gate reports 1024² speedups of 1.72× at 5-NFE and 2.48× at 3-NFE, plus a 512² 6-prompt×4-seed matrix with 1.79× at 5-NFE and 2.51× at 3-NFE. The combined evidence suggests `tjs_fast(gamma=0.4)` is a credible preview/interactive default candidate, while final renders should keep baseline or `tjs_quality` until identity/video metrics pass.
3. **The next combined experiment should evaluate a creator workflow, not another isolated sampler.** Forge now has a fast keyframe sampler (`ZIMAGE_TJS.md`), a no-training long-form plan (`LONGFORM_CONSISTENCY_PLAN.md`), clip-conditioning/quality gates (`VIDEO_QUALITY_PLAN.md`), SAM2 video masklet propagation (`SAM2_VIDEO_PLAN.md`), and SeedVR2 upscaling plans. A single experiment card can connect them: generate hero/keyframes baseline vs TJS → animate with LTX first/last or clip conditioning → track identity/masks with SAM2 or VFI/proxy diagnostics → optionally upscale with SeedVR2 once the low-res clip is stable.
4. **Cache/forecast probes should not distract from the landed win.** The wiki's Z-Image runtime cache/forecast page found whole-velocity reuse/forecasting and the initial TeaCache body-residual hook did not produce an additive quality-preserving win over TJS. That weakens the case for rushing cache/forecast ports into Forge. If revisited, it should be exact internal block/attention broadcast with per-layer traces, not top-level velocity reuse.
5. **Quant/runtime findings become compatibility watch items around TJS, not substitutes for it.** `QUANT_SUPPORT_MATRIX.md` shows Z-Image and LTX quant legs are strong but still have AWQ/SVDQ/default-verdict follow-ups. HF/ComfyUI int8-convrot artifacts and PyTorch/FlashAttention/diffusers release movement matter as ecosystem compatibility signals, but they should be evaluated separately from sampler NFE reductions.
6. **Video transfer remains medium-confidence and must start conservatively.** `ZIMAGE_TJS.md` explicitly keeps TJS image-only and warns that video needs temporal-coherence gates. For LTX/video, start with conservative gamma values and score flicker, identity consistency, motion smoothness, and seam quality before treating endpoint early-exit as final-render quality.

### Concrete Forge touchpoints
- `docs/ZIMAGE_TJS.md` — new product-level sampler documentation and measured results.
- `engine/tests/zimage_tjs_gate.cpp` — current home for TJS smoke/full-matrix gates and optional dumps.
- `engine/src/pipelines/pipeline_image.cpp` and `pipeline_image_stages.*` — landed image sampler execution path and metadata plumbing.
- `bindings/rust/forge-graph/src/verbs.rs`, `node.rs`, `lower.rs`, and tests such as `denoise_controls.rs` — graph/runtime exposure, serialization, validation, and cache/resource integration.
- `tools/capture/capture_zimage.py` — still a likely home for paper-to-product golden capture datasets and sign canaries.
- `docs/LONGFORM_CONSISTENCY_PLAN.md`, `docs/VIDEO_QUALITY_PLAN.md`, `docs/SAM2_VIDEO_PLAN.md`, `docs/SEEDVR2_UPSCALE_PLAN.md` — combined video/identity/upscale evaluation context.

### Suggested next experiments/cards
1. **Benchmark card: TJS character-consistency matrix.** Reuse existing Spark images and/or Forge gate dumps to score identity and prompt drift across baseline, TJS 3/5/9, fixed seeds, and same-character prompt pairs. Output contact sheets plus metrics; no remote GPU required.
2. **Capture card: TJS golden/canary corpus.** Extend Forge capture/gate outputs to include metadata (`sampler`, `gamma`, `k_star`, `executed_nfe`, endpoint sigma) and the literal-formula sign canary so scheduler drift fails visibly.
3. **Workflow card: fast keyframes → LTX → SAM2/VFI diagnostics.** Use TJS 5-NFE for candidate keyframes, animate a short LTX clip with first/last or clip conditioning, then use SAM2 masklet propagation or simple VFI/proxy tracks to quantify seam/motion/identity drift.
4. **Video research card: conservative endpoint early-exit for LTX.** Only after the workflow metrics are in place, test TJS-like early exit on video latent tensors at gamma 0.5/0.6/0.8 and gate on flicker and identity, not just per-frame SSIM.
5. **Quant compatibility card: TJS × quant matrix.** Verify TJS behavior on the current Z-Image quant artifacts and keep speedup claims separated from NVFP4/AWQ/int8-convrot claims.

### Wiki maintenance actions
- Updated durable query page: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Appended wiki log entry for the reflection update.
- Appended this reflection report section and a short journal pointer.
- No new wiki page was created because the existing synthesis page was the right durable home.

### Confidence and risks
- Confidence: high that scheduler-consistent TJS is now implementable/actionable in Forge because it has landed and has gate data.
- Confidence: medium that `tjs_fast(gamma=0.4)` should become an interactive/default-fast option; identity and workflow-level metrics are still needed.
- Confidence: low-to-medium for direct LTX/video endpoint early exit until temporal coherence gates exist.
- Blocker/risk: this cron host did not build or run Forge's Windows/MSVC/CUDA gates; it relied on synced code/docs and recorded Forge gate results.
- Spend: no remote GPU jobs were run; no spend incurred.


## 2026-07-09T04:46:52-06:00 — Forge/wiki reflection

### Forge git state
- Preflight status before sync: clean `main...origin/main`.
- Safe sync performed because the tree was clean and on `main`: `git fetch origin main && git pull --ff-only origin main`.
- Forge remained at `main @ 1060ac0`; no upstream changes were pulled this cycle.
- No Forge files were modified by this reflection cycle.

### Top synthesized insights
1. **The next high-value card is no longer “does TJS work?”; it is “does TJS preserve creator identity across the full Forge workflow?”** The wiki’s Spark and Qwen/VLM records plus Forge’s `docs/ZIMAGE_TJS.md` agree that scheduler-consistent TJS 5-NFE is the safe fast still-image tier, while 3-NFE is preview-quality. Forge now needs a character/workflow benchmark that pairs baseline/TJS keyframes with same-character prompts, not more isolated sampler work.
2. **RhymeFlow is the right abstraction for video-side TJS, but LTX needs a trace/simulation card before an engine sampler.** The paper’s keyframe/non-keyframe asynchronous denoising maps to Forge’s LTX latent sequence and `docs/VIDEO_QUALITY_PLAN.md`, but Forge’s own docs warn TJS is image-only and video must gate flicker, identity, motion smoothness, and seams. Start with an LTX latent-trace schedule simulator or disabled experimental branch, not a default sampler.
3. **TaoCache/cache work should be reframed as an exact internal-feature experiment, not top-level velocity reuse.** The wiki’s `z-image-runtime-cache-forecast-probes` shows whole-velocity cache/forecast can look coherent but is not reliable enough; the TeaCache body-residual attempt failed unless safety-gated into no skips. If Forge revisits cache acceleration, it should use exact block/attention-output traces with forced recompute and VLM/contact-sheet review, not broad latent/velocity reuse.
4. **OrbitQuant connects directly to Forge’s unresolved quant-default decision.** Forge already has Z-Image/LTX AWQ/SVDQ/NVFP4 coverage in `docs/QUANT_SUPPORT_MATRIX.md`, but default quality verdicts are still partial. OrbitQuant’s data-agnostic rotations/codebook idea is useful as a microbench beside `ops/nvfp4_cast.*`, `engine/src/quant/*`, and AWQ capture outputs before any product format decision.
5. **Forge already has the pieces for a non-training long-form diagnostic loop.** `ZIMAGE_TJS.md` supplies fast keyframes; `LONGFORM_CONSISTENCY_PLAN.md` supplies the no-training recipe; `SAM2_VIDEO_PLAN.md` supplies masklet tracking; `FRAME_INTERPOLATION_PLAN.md` supplies RIFE/VFI timing and temporal metrics; `SEEDVR2_UPSCALE_PLAN.md`/SeedVR2 docs supply postprocess/upscale. The missing artifact is a small “creator workflow coverage” run that reports identity, seam/motion drift, mask consistency, and upscale readiness.
6. **Wiki maintenance signal: the experiment page still has non-taxonomy tags.** Recent lint logs repeatedly flag `experiments/z-image-runtime-cache-forecast-probes.md` for `z-image`, `acceleration`, `teacache`, `taylorseer`, and `tjs`; merge these into allowed tags (`diffusion`, `inference`, `optimization`, `experiment`, `systems`, `evaluation`) or extend `SCHEMA.md` deliberately.

### Concrete Forge touchpoints
- `/home/aegisfang666/workspace/forge/docs/ZIMAGE_TJS.md` and `/home/aegisfang666/workspace/forge/engine/tests/zimage_tjs_gate.cpp` — existing TJS tiers, metadata, negative-control/sign gate, and optional dumps.
- `/home/aegisfang666/workspace/forge/tools/capture/capture_zimage.py` — extendable golden capture path for baseline/TJS images, metadata, endpoint sigma, and sign canaries.
- `/home/aegisfang666/workspace/forge/docs/VIDEO_QUALITY_PLAN.md`, `/home/aegisfang666/workspace/forge/engine/tests/ltx2_ab_eval.cpp`, and LTX capture tools — natural place for LTX async-schedule/TJS-like trace tests.
- `/home/aegisfang666/workspace/forge/docs/QUANT_SUPPORT_MATRIX.md`, `/home/aegisfang666/workspace/forge/engine/src/quant/`, and `/home/aegisfang666/workspace/forge/tools/quant/quality_metrics.py` — OrbitQuant/AWQ/SVDQ comparison lane.
- `/home/aegisfang666/workspace/forge/docs/SAM2_VIDEO_PLAN.md` and `/home/aegisfang666/workspace/forge/docs/FRAME_INTERPOLATION_PLAN.md` — video diagnostics for masks, seam/motion drift, and interpolation quality.

### Suggested next experiments/cards
1. **Forge benchmark card: TJS creator identity matrix.** Use Forge TJS gate dumps or existing Spark outputs to score baseline vs TJS 3/5/9 on same-character prompt pairs; report identity similarity, prompt adherence, artifact severity, and usable-for-short verdicts.
2. **Forge capture card: TJS golden/canary corpus.** Extend `capture_zimage.py` or the TJS gate dump format to preserve image+metadata fixtures for 3/5/9-NFE and the known-bad literal formula canary.
3. **Forge video research card: RhymeFlow-style LTX async schedule simulator.** On an LTX latent trace, mark pivotal frames vs non-keyframes and estimate NFE savings/failure points before implementing any sampler branch.
4. **Forge quant card: OrbitQuant microbench.** Compare direct RTN NVFP4, AWQ, SVDQ/AWQ+SVDQ, and a small rotation/codebook proxy on captured Z-Image/LTX linears; success metric is step parity/visual preference per overhead, not just reconstruction error.
5. **Workflow diagnostic card: keyframes → LTX → SAM2/VFI → SeedVR2.** Build one short, local, no-training creator-workflow coverage run before remote spend or new model ports.

### Wiki maintenance actions
- Updated durable query page: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md` with the OrbitQuant/RhymeFlow/TaoCache/creator-workflow synthesis.
- Appended this reflection report and a short journal pointer.
- Appended wiki log entry for the reflection update.
- Did not create a new wiki page; the existing synthesis page is still the right durable home.

### Confidence and risks
- Confidence: high for the TJS still-image tiering because both Spark and Forge measurements agree directionally.
- Confidence: medium for the combined creator-workflow card; it composes shipped/planned Forge surfaces but still needs a small measured run.
- Confidence: low-to-medium for direct LTX/video async/TJS transfer until temporal gates exist.
- Risk/blocker: this Linux cron host did not build/run Forge’s Windows/MSVC/CUDA gates; synthesis is based on synced code/docs and recorded results.
- Spend: no remote GPU jobs were run; no spend incurred.

## 2026-07-09T10:50:26-06:00 — Forge/wiki reflection

### Forge git state
- Preflight status: `main...origin/main` with untracked `engine/models/`.
- Safe sync was **not** performed because the Forge worktree is not clean. This cycle used the current tree at `main @ 5cc9b3a` (`graph: execute denoise schedules in runtime`).
- The untracked model directory appears intentional/useful for local LTX work (`engine/models/ltx-2.3/...`) but it is still a worktree hygiene blocker for scheduled fast-forwards.
- No Forge files were modified by this reflection cycle.

### Top synthesized insights
1. **The LTX blocker has shifted from “missing model” to “make the now-local artifact useful safely.”** The wiki now records a passed Forge LTX-2.3 DiT smoke with the local NVFP4 artifact under `engine/models/ltx-2.3/` and an 8-step estimate of ~17.4 s at the tested shape. That clears the artifact/build gap for local LTX endpoint-decoding experiments, but the same untracked `engine/models/` directory dirties Forge and prevents scheduled sync. Treat the model path as a local cache prerequisite, not source code.
2. **Forge has enough graph/media plumbing for a real creator-workflow artifact, not just screenshots.** Since `5cc9b3a`, Forge executes denoise schedules in runtime; the docs now include graph-level creator-workflow coverage and native media/export primitives. The best combined experiment should produce a small playable MP4/report: Z-Image TJS keyframes → LTX clip conditioning or first/last conditioning → media export → SAM2/VFI/Qwen-style diagnostics.
3. **RhymeFlow should be tested as an LTX schedule simulator before any sampler branch.** LTX is already an 8-step distilled video model with exact sigmas in `docs/LTX2.md`; the smoke note suggests starting conservatively around sigma index 4/5. A dry-run schedule table or trace harness can estimate keyframe/non-keyframe NFE savings and failure points without changing engine defaults or running remote GPUs.
4. **PACR/Aura/Gen4U now combine into one evaluation rubric.** PACR contributes story/entity/style/transition axes; Aura contributes multi-subject, copy-paste, oversaturation, and global-vs-fine identity checks; Gen4U suggests cheap LTX DiT activation summaries. Together they imply a Forge evaluation card, not three model ports.
5. **OrbitQuant should become an ablation against Forge’s landed AWQ/NVFP4 path, not a replacement proposal.** Forge’s LTX docs now record AWQ capture/convert/load and AWQ-vs-direct real-output divergence. OrbitQuant’s rotation/codebook idea is still useful, but the next action is a microbench beside existing AWQ/direct RTN/SVDQ candidates with step parity, activation overhead, and visual preference metrics.
6. **The stale `site/experiments.md` remote-gpu plan is now misleading.** It still contains an old `Diffusion LLM Training Benchmark` remote `gpu run` line, while current policy and context say no remote spend and gpu-cli auth has been a blocker. It should either be archived, regenerated from current experiment cards, or clearly marked stale.

### Concrete Forge touchpoints
- `/home/aegisfang666/workspace/forge/docs/LTX2.md` — exact LTX sigmas, velocity convention, quant matrix, AWQ status, and encoder/conditioning details.
- `/home/aegisfang666/auto-research/wiki/experiments/ltx23-forge-tjs-smoke.md` — local artifact and DiT smoke proof.
- `/home/aegisfang666/workspace/forge/docs/ZIMAGE_TJS.md` and `engine/tests/zimage_tjs_gate.cpp` — TJS tiers and sign/canary pattern to preserve.
- `/home/aegisfang666/workspace/forge/docs/CREATOR_WORKFLOW_COVERAGE_MATRIX.md` — existing fixture map for video keyframe/upscale, restyle/cond-clip, segmentation, VFI/SR, and workflow gaps.
- `/home/aegisfang666/workspace/forge/docs/MEDIA.md` and `media/README.md` — MP4/NVENC/export path for turning research runs into shareable artifacts.
- `/home/aegisfang666/workspace/forge/engine/tests/ltx2_ab_eval.cpp` and `tools/capture/capture_ltx.py` — baseline for A/B metrics, dumps, golden/reference capture, and future activation-trace hooks.

### Suggested next experiments/cards
1. **Forge hygiene card: local model cache policy.** Add/verify `.gitignore` or documentation for `engine/models/` and record the local LTX artifact path as a cache prerequisite so scheduled sync can resume safely.
2. **Local experiment card: LTX endpoint/TJS trace harness.** Use the existing NVFP4 LTX artifact and exact 8-step sigmas to compare baseline vs conservative endpoint exits at indices 4/5/6 on latents/contact sheets; keep it disabled/test-only and score flicker/identity/seams.
3. **Workflow benchmark card: playable creator-loop artifact.** Generate TJS keyframes, run a short LTX clip-conditioning path, export MP4 through native media, and produce a report with PACR/Aura-inspired Qwen/VLM rubric plus simple seam/motion metrics.
4. **Instrumentation card: Gen4U-style LTX activation summaries.** Add a test-only hook to dump norms/cosines for early/mid/late LTX layers across sigmas, then correlate with direct-vs-AWQ or first-frame-vs-clip-conditioning visual failures.
5. **Quant card: OrbitQuant ablation.** Compare rotation/codebook proxy against direct RTN NVFP4 and the existing AWQ recipe on captured linears; do not change defaults until visual/perceptual A/B beats the current AWQ/direct evidence.
6. **Report hygiene card: regenerate `site/experiments.md`.** Replace the stale remote-gpu line with current local cards and explicit “remote requires auth + approval” policy.

### Wiki maintenance actions
- Updated durable synthesis page: `wiki/queries/forge-zimage-tjs-video-consistency-synthesis.md`.
- Appended this reflection report and a journal pointer.
- Appended wiki log entry for the reflection update.
- No new wiki page was created; the existing Forge/Z-Image/TJS/video synthesis page remains the right durable home.

### Confidence and risks
- Confidence: high that local LTX experiments are now unblocked at the DiT-smoke level because the wiki records a passed direct `forge_ltx2_dit_test` with the local NVFP4 artifact.
- Confidence: medium that a graph/media creator-workflow artifact is the best next benchmark; the code/docs support the shape, but the full run still needs execution.
- Confidence: low-to-medium for direct LTX endpoint early-exit quality until decoded video/contact sheets and temporal metrics exist.
- Blocker: Forge is dirty due untracked `engine/models/`, so scheduled sync was skipped.
- Spend: no remote GPU jobs were run; no spend incurred.

## 2026-07-09T18:54:32-06:00 — Forge/wiki reflection

### Forge git state
- Forge is on `main @ bc6cdcc` tracking `origin/main`, but the worktree is actively dirty with a Spectrum hidden-state forecasting spike. Safe sync was **not** performed.
- Observed source changes: `engine/CMakeLists.txt`, `engine/src/models/zimage/dit.{h,cpp}`, `engine/src/ops/{ops.h,kernels.cu}`, new `engine/src/models/zimage/spectrum_forecast.{h,cpp}`, and new `engine/tests/spectrum_forecast_test.cpp`.
- No Forge source was edited by this reflection. The existing `engine/build-spectrum` host target was rebuilt; `forge_spectrum_forecast_test` passed.

### Top synthesized insights
1. **The research→implementation loop has closed again: the wiki's top-ranked Spectrum card is now active Forge code.** `wiki/queries/forge-research-digest-2026-07-09.md` ranked a Z-Image Spectrum spike first; the current worktree now contains the forecast-weight solver, BF16 history mixer, environment-gated DiT state, and a host test. This changes the job from “recommend Spectrum” to “define the minimum honest completion gate.”
2. **Current evidence proves scaffolding, not a speed/quality win.** The rebuilt host test validates constant/linear forecast behavior and skip boundaries, but there is no verified full-engine build or Z-Image render in this cycle. No end-to-end timing, image dump, SSIM/PSNR, identity score, artifact review, or history-memory figure is yet recorded. Do not describe the spike as successful beyond its host unit test.
3. **The prior cache/forecast experiment supplies the exact safety rubric Spectrum needs.** `wiki/experiments/z-image-runtime-cache-forecast-probes.md` showed that whole-output forecasts can remain coherent while shifting identity/composition or introducing prompt-specific artifacts. Spectrum's finer hidden-state seam is more promising, but it must use the same contact-sheet plus human/VLM rubric; SSIM alone cannot promote it.
4. **Test one skipped interior step before schedule search or TJS composition.** The code already supports explicit skip lists and protects boundary steps. The cheapest attributable experiment is baseline/no-forecast vs one forecast after two or more full observations, with full-block count, latency, forecast trace, image metrics, and identity/artifact labels. Only after that passes should the work expand to multiple skips or Spectrum × landed TJS.
5. **The playable creator-workflow artifact remains the product-level priority.** Spectrum is a useful local engine probe, but it should not displace the accumulated TJS-keyframe → LTX conditioning → native MP4/AAC → PACR/Aura/Qwen identity/transition card. A Spectrum win should eventually be evaluated inside that workflow, not only on isolated still-image similarity.
6. **Two maintenance debts are now actionable rather than theoretical.** `site/experiments.md` still advertises an obsolete remote Diffusion-LLM run despite current no-spend/auth policy, and `wiki/log.md` exceeds the schema skill's 500-entry rotation threshold. Regenerate/archive the stale queue and rotate the log in a dedicated maintenance change, rather than mixing either with the active Forge spike.

### Concrete Forge touchpoints
- `engine/src/models/zimage/dit.{h,cpp}` — active experiment state, trajectory reset, skip selection, hidden-state capture/forecast seam.
- `engine/src/models/zimage/spectrum_forecast.{h,cpp}` — Chebyshev/ridge plus first-order Taylor coefficient logic.
- `engine/src/ops/kernels.cu` and `engine/src/ops/ops.h` — BF16 history mixing with FP32 accumulation.
- `engine/tests/spectrum_forecast_test.cpp` — host algebra/boundary gate; passed after rebuild in `engine/build-spectrum`.
- `engine/tests/zimage_tjs_gate.cpp` — best existing same-model matrix/golden pattern for the eventual visual and timing gate.
- `docs/ZIMAGE_TJS.md` — keep Spectrum claims and metadata distinct from the already validated TJS tiers.

### Suggested next experiments/cards
1. **Complete the local Spectrum single-skip gate:** full CUDA engine build; baseline identity control; one forecasted interior step; same prompt/seed image dumps; trace full-vs-forecast calls and history bytes; report end-to-end latency, SSIM/PSNR, and human/VLM identity/artifact verdicts. Promotion threshold: ≥10% latency improvement without systematic visual regression.
2. **Add failure controls before schedule expansion:** no-forecast byte/parity path, trajectory reset across generations, shape-change/history reallocation, batch/CFG rejection behavior, malformed skip-list behavior, and final-step forced recompute.
3. **Only after Spectrum-alone passes, run a small composition matrix:** baseline, TJS-5, Spectrum, and TJS-5+Spectrum. Keep NFE reduction and block-skipping savings separately attributed.
4. **Keep the product proof queued:** Z-Image 5-NFE TJS hero/keyframes → LTX conditioning → native MP4/AAC → identity/transition and arena/workspace report.
5. **After the active Forge worktree is clean, start the trace-only LTX cache lane:** NaviCache/EasyCache replay across the fixed eight sigmas without changing pixels first.

### Wiki maintenance actions
- Updated the existing durable digest `wiki/queries/forge-research-digest-2026-07-09.md`; no low-value new page was created.
- Appended this reflection and a pointer in `site/research-journal.md`; appended the required wiki log entry.
- Deferred `site/experiments.md` cleanup and `wiki/log.md` rotation to a dedicated maintenance pass so this reflection does not obscure or conflict with active experiment work.

### Confidence and risks
- Confidence: high that Spectrum is now the active Forge experiment, based on direct worktree inspection and a rebuilt passing host test.
- Confidence: medium that the chosen internal hidden-state seam is more promising than prior whole-velocity forecasts; no rendered output verifies this yet.
- Confidence: low on speedup and creator-quality until full CUDA build/render/timing/contact-sheet evidence exists.
- Blocker/risk: active concurrent Forge edits make the tree unsafe to sync or modify from cron; this report used the current tree only.
- Spend: no remote GPU jobs were run; no spend incurred.

## 2026-07-10T00:54:59-06:00 — Forge/wiki reflection

### Forge git state
- Forge remains on `main @ bc6cdccb91afc3d344c46fdf0176ebf45629a371`, tracking `origin/main`, with an active dirty Spectrum forecasting spike. No fetch, pull, reset, stash, clean, or Forge source write was attempted.
- Current tracked diff: 160 insertions / 9 deletions across `engine/CMakeLists.txt`, `engine/src/models/zimage/dit.{h,cpp}`, `engine/src/ops/{ops.h,kernels.cu}`, and `engine/tests/zimage_tjs_gate.cpp`; untracked `spectrum_forecast.{h,cpp}` and `spectrum_forecast_test.cpp` are also part of the spike.
- Rebuilt and ran the existing host target: `forge_spectrum_forecast_test` passed (`linear forecast 16.108545`, target 17). `git diff --check` was clean.

### Top synthesized insights
1. **The current A/B card is more aggressive than the wiki's agreed falsification gate.** The accumulated cache/forecast evidence says to forecast exactly one interior step after two full observations, but `zimage_tjs_gate.cpp` currently enables `spectrum_4skip` at steps `2,4,6,8`. A four-skip result would confound first-failure attribution. The first CUDA/render run should use one skip (prefer step 4), then expand only after that row passes.
2. **The implementation has a real capability boundary that must be explicit in results: Spectrum currently works only for `batch == 1`.** Batched CFG disables the path, while sequential CFG repeats the same timestep and intentionally resets history between conditional/unconditional calls. The current gate zero-initializes guidance and is therefore an appropriate no-CFG proof, but a successful row must not be generalized to guided generation until CFG history semantics are designed and tested.
3. **Memory accounting is now the clearest productization blocker.** Spectrum stores as many as ten BF16 image-token hidden states with raw `cudaMalloc`, outside Forge's arena/broker/fail-soft accounting. This directly conflicts with the recently landed workspace-accounting discipline. The trace already prints history MiB; the completion report should record peak history bytes, then move persistent history under an arena/accounted slot before any shipping claim.
4. **The strongest combined evaluation reuses the TJS gate matrix but changes the promotion signal.** The gate already contains Mira identity, multi-character, and reflection prompts plus SSIM/PSNR and optional dumps. The wiki's prior whole-velocity forecast sweep shows those similarity metrics are insufficient. Add contact sheets and Qwen/human labels for prompt adherence, identity preservation, and artifacts before testing Spectrum × TJS.
5. **Do not let the active still-image spike displace the creator-workflow proof.** If Spectrum passes alone, its next meaningful product test is as an optional keyframe accelerator inside the already-prioritized Z-Image → LTX conditioning → native MP4/AAC workflow. LTX NaviCache trace-replay and SAGA seam diagnostics remain independent, read-only follow-ups; neither should become competing Forge source work while this checkout is dirty.

### Concrete Forge touchpoints
- `engine/tests/zimage_tjs_gate.cpp` — change the first Spectrum variant from four skips to one attributable interior skip; retain the six-prompt/four-seed matrix and dumps.
- `engine/src/models/zimage/dit.cpp` — batch/CFG boundary, trajectory reset, hidden-state capture/forecast seam, trace fields, and raw history allocation.
- `engine/src/models/zimage/spectrum_forecast.{h,cpp}` and `engine/tests/spectrum_forecast_test.cpp` — host algebra/boundary proof; passed this cycle, but does not prove CUDA render quality or speed.
- `engine/src/core/device_ctx.h` / Forge arena APIs — eventual home for accounted persistent history and fail-soft allocation.
- `tools/quant/quality_metrics.py` plus `scripts/qwen36_vlm_score_sweep.py` in auto-research — reusable objective and visual/VLM review pieces for dumped baseline/forecast images.
- `bindings/rust/forge-graph/examples/production_validation.rs` and `docs/CREATOR_WORKFLOW_COVERAGE_MATRIX.md` — later workflow-level proof after Spectrum-alone passes.

### Suggested next experiments/cards
1. **Spectrum one-skip CUDA/render gate:** baseline vs no-forecast control vs step-4 forecast, same prompt/seed, full CUDA build, trace, image dumps, latency, full/forecast counts, history MiB, SSIM/PSNR, contact sheet, and identity/artifact verdict. Promote only at ≥10% warm end-to-end speedup without systematic visual regression.
2. **Failure controls:** trajectory reset between generations; shape/history reallocation; malformed skip list; last-step forced compute; explicit no-CFG labeling; batch/CFG rejection or disable telemetry; allocation-failure behavior.
3. **Only after card 1 passes:** baseline vs TJS-5 vs Spectrum vs TJS-5+Spectrum, separately reporting NFE reduction and skipped-transformer savings.
4. **Product proof remains queued:** TJS/Spectrum candidate keyframes → LTX clip conditioning → native MP4/AAC → PACR/Aura/Qwen identity/transition report plus arena/workspace peaks.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-09.md` with the one-skip/CFG/accounting synthesis; no new low-value page was created.
- Updated `wiki/index.md` date and appended the required `wiki/log.md` entry.
- `wiki/log.md` has 289 action entries, below the 500-entry rotation threshold; no rotation was needed.
- Existing debt remains: `site/experiments.md` still advertises an obsolete remote Diffusion-LLM run and should be regenerated in a dedicated queue-maintenance pass.

### Confidence and risks
- Confidence: high on the host-test result and the one-skip/CFG/accounting gaps because they come from direct code and gate inspection.
- Confidence: medium that hidden-state forecasting can beat prior whole-output forecasts; no end-to-end render exists yet.
- Confidence: low on speedup, identity preservation, and Spectrum × TJS composition until CUDA/render evidence exists.
- Blocker: active dirty Forge worktree prevented safe sync and source edits by this cron cycle.
- Spend: no remote GPU jobs were run; no spend incurred.

## 2026-07-10T06:59:24-06:00 — Forge/wiki reflection

### Forge git state
- Preflight found `experiment/zimage-spectrum-tjs-stack @ 36e6e12ba994c101eed861b3da04d4b161b1cdd2`, not `main`, with tracked edits in `engine/src/pipelines/pipeline_image_stages.cpp` and `engine/tests/zimage_tjs_gate.cpp`. No fetch, pull, reset, stash, clean, or Forge source write was attempted.
- Commit `36e6e12` is the opt-in Spectrum implementation; the dirty diff enables an experimental Spectrum × TJS stack and adds a gate row. `git diff --check` passed.
- Rebuilt focused targets from the current tree: `forge_zimage_tjs_gate` and `forge_spectrum_forecast_test`; the host forecast test passed.

### Top synthesized insights
1. **The previously queued Spectrum × TJS composition now has real local evidence.** Logs under `outputs/spectrum-stack/` show baseline 10-NFE versus 9-NFE TJS with Spectrum forecasting four calls. At 1024px over five prompts/one seed, latency was `36.8279 s → 19.2772 s` (`1.91x`), mean SSIM `0.9562` (minimum `0.9343`). The 256px smoke was `1.95x`, but mean SSIM fell to `0.8679`, reinforcing that resolution and perceptual review matter.
2. **NFE is no longer an adequate compute label for stacked acceleration.** Metadata reports nine NFEs and one TJS endpoint forward, while Spectrum telemetry reports only five full transformer evaluations plus four forecast evaluations. Forge reports should expose both `executed_nfe` and `{full_transformer_evals, forecast_evals}` so the stack is not mistaken for ordinary 9-NFE TJS.
3. **The current A/B cannot establish additivity.** It compares only baseline and the stack. A same-process four-way matrix—baseline, TJS-9 alone, Spectrum alone, Spectrum × TJS-9—is needed to attribute the extra speed and quality change. This is now cheaper and more informative than starting another Z-Image method.
4. **The stack gate currently has a quality blind spot.** `zimage_tjs_gate.cpp` disables both the Spectrum SSIM floor and the ordinary 9-NFE TJS sign/quality floor when the stacked row is active; non-degeneracy is the only image-quality assertion. A collapsed but nonblank stack could therefore pass. Restore a conservative numeric floor and keep contact-sheet/Qwen/human identity and artifact review as the real promotion gate.
5. **The current five-image run omits the hardest stored identity prompt.** Stack mode forces `prompt_count = 5`, excluding the sixth reflection/duplicate-identity prompt, and the recorded 1024px run used seed 0 only. Before a PR claim, include all six prompts and at least the four established seeds, especially the three-character and reflection rows.
6. **This composition is still an image-only experimental lane, not a video shortcut.** The stack remains no-CFG, batch-1, plain text-to-image, environment-gated, and branch-local. Its best product use remains fast creator-workflow keyframes; LTX NaviCache tracing and long-clip identity/seam evaluation stay separate until the still-image stack has a fully attributed gate.

### Concrete Forge touchpoints
- `engine/src/pipelines/pipeline_image_stages.cpp` — experimental environment gate that allows Spectrum history during TJS.
- `engine/tests/zimage_tjs_gate.cpp` — stacked row, prompt-count override, full/forecast counters, metadata checks, and the missing stack quality floor.
- `engine/src/models/zimage/dit.{h,cpp}` and `spectrum_forecast.{h,cpp}` — schedule-owned history and full/forecast telemetry.
- `docs/ZIMAGE_TJS.md` — eventual documentation home; keep NFE and transformer-evaluation accounting distinct.
- `tools/quant/quality_metrics.py` and auto-research `scripts/qwen36_vlm_score_sweep.py` — reusable objective/perceptual scoring for the four-way matrix.

### Suggested next experiments/cards
1. **Finish the local four-way attribution matrix:** baseline 10-NFE, TJS-9, Spectrum four-forecast, and Spectrum × TJS-9; six prompts × four seeds at 512px, then only hard rows at 1024px. Record latency, NFE, full/forecast evaluations, history bytes, SSIM/PSNR, and VLM/human identity/artifact preference.
2. **Harden the stack gate before review:** remove the five-prompt override, restore a conservative SSIM/sign floor, assert explicit no-CFG/batch/mask failure behavior, and preserve the endpoint formula canary.
3. **Evaluate schedule conservatism after attribution:** compare four forecasts against a smaller forecast subset on multi-subject/reflection rows; require `>=1.10x` over TJS-9 alone, not merely over baseline.
4. **Only then decide PR shape:** keep Spectrum and Spectrum × TJS typed, opt-in, separately metered, and fail-closed. Do not promote the stack to default or to LTX/video from this evidence.

### Wiki maintenance actions
- Updated the existing `wiki/queries/forge-research-digest-2026-07-10.md`; the newly created stack experiment page remains the detailed evidence record, so no additional page was created.
- Updated the query summary in `wiki/index.md`, appended `wiki/log.md`, and added a short journal pointer.
- Existing maintenance debt remains: `site/experiments.md` still contains an obsolete remote Diffusion-LLM command and should be regenerated separately.

### Confidence and risks
- Confidence: high in the logged 1024px latency/SSIM figures and five-full/four-forecast accounting; artifacts and logs exist locally and focused targets rebuilt.
- Confidence: medium that stacking is a useful opt-in win; the current matrix lacks TJS-only and Spectrum-only controls in the same run.
- Confidence: low for default-quality, CFG, multi-seed identity, or video transfer until the hardened four-way gate is run.
- Blocker: Forge is on a dirty experiment branch, so safe scheduled sync was skipped.
- Spend: local-only evidence; no remote GPU job or spend.

## 2026-07-10T13:04:32-06:00 — Forge/wiki reflection

### Forge git state
- Clean `main @ d5b04a7fbd7d4cb7d28335b3b0f392ce54fb187d`, tracking `origin/main`; fetch and `pull --ff-only origin main` reported already up to date.
- The fresh clone is not missing the composition gate as the previous journal addendum inferred: current `engine/tests/zimage_tjs_gate.cpp` contains the four rows `baseline_10nfe`, `spectrum_4skip`, `tjs_scheduler_9nfe`, and `spectrum_tjs_9nfe`, all six hard prompts, four benchmark seeds, exact full/forecast accounting, and an explicit Spectrum SSIM floor.
- No Forge source was modified. No local or remote GPU run was performed.

### Top synthesized insights
1. **The highest-value correction is provenance, not reconstruction.** The wiki said the Spectrum × TJS implementation was absent after the reclone and should be recovered from a patch. Direct inspection shows current clean main already contains the composed four-way gate and runtime permits typed Spectrum during scheduler TJS when the ordinary no-CFG/batch/mask constraints pass. Do not reconstruct or reapply the old dirty diff blindly; first document and certify current-main behavior.
2. **The measured matrix maps to a real current-main regression surface, but not yet a documented product promise.** The gate restores six prompts, four seeds in benchmark mode, `SSIM >= 0.65` for Spectrum rows, exact five-full/four-forecast accounting for the stack, and state-leakage checks. However, `docs/ZIMAGE_TJS.md` describes TJS but not Spectrum composition. The next card is documentation plus hosted/current-main certification, not more image generation.
3. **Long-form video has advanced beyond the wiki's older “creator-workflow planned” framing.** `docs/LONGFORM_CONSISTENCY_PLAN.md` and `engine/tests/ltx2_longform_chain.cpp` record landed latent-tail extension, AdaIN, negative-index anchors, RIFLEx, native two-stage quality, MP4/QA artifacts, and 30-second acceptance runs. `engine/tests/ltx2_seedvr2_quality_chain.cpp` already composes chained LTX with segment-wise SeedVR2 while bounding host memory.
4. **Strict face identity is now the highest-value video-quality gap.** Existing long-form runs pass seams, subject/clothing continuity, and general QA, yet SFace matches only 40% of eligible samples in the continuous dance and 0% in the multi-scene story. This turns PACR/Aura/BachVid/CharaConsist into a focused rubric: preserve one hero identity across the working latent-tail chain, scoring face identity separately from whole-frame CLIP and VLM judgments.
5. **NaviCache should remain independent of the identity intervention.** First add trace-only block residual/replay instrumentation against exact long-form segments; do not combine caching with a new identity hook until each clears separate gates.
6. **Queue hygiene remains misleading.** `site/experiments.md` contains only an obsolete remote Diffusion-LLM command. Current work is local: current-main Spectrum × TJS certification/docs, strict-face-identity long-form evaluation, CFG-aware quant traces, and NaviCache replay.

### Concrete Forge touchpoints
- `engine/tests/zimage_tjs_gate.cpp` — current-main four-way gate, six identity-risk prompts, benchmark seeds, SSIM floor, and full/forecast/NFE accounting.
- `engine/src/pipelines/pipeline_image_stages.cpp` and `engine/src/models/zimage/dit.cpp` — scheduler-TJS execution and request-scoped Spectrum lifecycle/fail-closed constraints.
- `docs/ZIMAGE_TJS.md` — documentation gap: standalone TJS is covered, composition/accounting is not.
- `engine/tests/ltx2_longform_chain.cpp` and `tools/capture/run_ltx_native_quality_gate.py` — landed long-form generation, media, seam, utilization, and QA surface.
- `engine/tests/ltx2_seedvr2_quality_chain.cpp` — existing bounded-memory LTX → SeedVR2 workflow artifact.
- `docs/LONGFORM_CONSISTENCY_PLAN.md` — current strict-face-identity limitation and CharaConsist/hero-frame lane.

### Suggested next experiments/cards
1. **Current-main composition certification:** run focused host/CPU gates and hosted CI against `d5b04a7`; rerun the GPU four-way matrix only if current-main output equivalence to the measured branch cannot be established. Document composition counters, unsupported modes, and quality-floor semantics in `docs/ZIMAGE_TJS.md`.
2. **Strict identity long-form card:** use the existing LTX latent-tail harness with one hero face and matched prompt/seed schedule; report SFace eligible-frame pass rate, face-detection coverage, subject-first CLIP, seam MSE, and full-resolution human review. Baseline first, then one time-boxed CharaConsist-style intervention.
3. **LTX NaviCache trace-only card:** record per-block/per-sigma residual deltas and projected avoided ring uploads over an existing segment; offline replay before any pixel-changing skip.
4. **CFG-aware quant trace:** compare branch, gap, and guided-output cosine/MSE across current BF16/RTN/AWQ artifacts.
5. **Maintenance card:** replace the stale `site/experiments.md` remote command with the current local queue and explicit remote approval policy.

### Wiki maintenance actions
- Corrected `wiki/experiments/spectrum-tjs-stack-zimage-turbo-forge-spark.md` and `wiki/queries/forge-research-digest-2026-07-10.md` to reflect the current clean-main gate rather than assuming composition vanished.
- Appended this reflection, a journal pointer, and a wiki log entry. No new wiki page was created because the existing experiment and digest are the durable homes.

### Confidence and risks
- High confidence in current-main gate presence and safeguards from direct source inspection.
- High confidence that long-form stitching/upscale plumbing is implemented and previously certified in current Forge docs/harnesses.
- Medium confidence that strict face identity is the highest-value video gap; the 40%/0% SFace figures are recorded evidence, but detector eligibility and pose bias need careful interpretation.
- Medium confidence in Spectrum × TJS product readiness: measured artifacts exist, but current-main GPU byte/parity was not rerun here and composition remains undocumented.
- No worktree blocker. No remote GPU job or spend.

## 2026-07-10T19:10:44-06:00 — CFG-aware quantization loop closes on Forge main

### Forge git state
- Clean `main @ eee7c1d2c9b55c01f105f4451334037df81a3dd8`, tracking `origin/main`.
- Safely fetched and fast-forward checked `origin/main`; Forge was already up to date.
- Main now includes PR #2, `feat(quant): evaluate CFG diagnostics across production sigmas` (`bfd8f25`). No Forge source was modified by this reflection.

### Top synthesized insights
1. **The previous all-sigma instrumentation blocker is obsolete.** Forge main now builds real positive/negative Gemma contexts through the BF16 reference connector and evaluates conditional, unconditional, gap, and guided error for both artifacts at all eight production sigmas. The next action is execution, not another diagnostic implementation or golden-trace design.
2. **Calibration and evaluation now cover the same CFG support.** `ltx2_awq_capture_plan.h` schedules every corpus prompt across eight sigmas and both branches, while `ltx2_cfg_quant_diag` evaluates those same branch/sigma dimensions. This creates a coherent experiment: direct RTN versus a newly generated CFG-aware AWQ artifact, with guided error as a first-class outcome.
3. **The v2 scan is still not a trajectory or perceptual verdict.** Its JSON explicitly says `trajectory: false`: every sigma sees the same deterministic latent. This isolates sigma sensitivity and shared branch drift, but cannot establish accumulated scheduler error or render preference. A separate matched Euler trajectory plus decoded contact-sheet/human/VLM gate remains mandatory.
4. **The smallest honest matrix is now three-stage.** Run v2 same-artifact control; then BF16→direct RTN and BF16→CFG-aware AWQ across at least three prompts; only then run matched decoded A/B. Reuse Forge's existing long-form quant-quality tooling and report conditional/unconditional/gap/guided metrics alongside SSIM/PSNR, SFace/subject consistency where applicable, and visual review.
5. **Strict identity and quantization can now be tested without conflating interventions.** Forge long-form video already passes seam/subject gates but records 40%/0% strict-face SFace baselines. Keep anchor/CharaConsist experiments fixed while comparing quant artifacts; otherwise identity changes cannot be attributed to quantization versus memory/conditioning policy.

### Concrete Forge touchpoints
- `engine/tools/ltx2_cfg_quant_diag.cpp` — prompt-conditioned fixed-latent, all-eight-sigma artifact comparison.
- `engine/src/quant/cfg_diagnostics.{h,cpp}` — per-signal aggregate and worst-sigma metrics/provenance.
- `engine/src/quant/ltx2_awq_capture_plan.h` and `engine/tests/ltx2_awq_capture_gate.cpp` — CFG-aware AWQ calibration coverage.
- `engine/tests/data/awq_calib_prompts.txt` and `docs/VIDEO_QUALITY_PLAN.md` — frozen corpus, artifact creation, and decoded A/B procedure.
- `docs/QUANT_SUPPORT_MATRIX.md` — still correctly marks LTX quality/parity partial; do not change the default from trace evidence alone.

### Suggested next experiments/cards
1. **Run the merged v2 control:** direct NVFP4 versus itself, preserving the JSON and confirming exact metrics over all eight sigmas.
2. **Generate a CFG-aware AWQ candidate:** use the merged positive+negative eight-sigma capture plan against the same BF16 master; record corpus hash and artifact hash.
3. **Run the matched trace matrix:** BF16→direct RTN and BF16→AWQ for at least three identity/motion prompts; compare guided ranking and worst sigma.
4. **Run the promotion gate:** matched real denoise trajectories and decoded outputs, with contact sheets and human/VLM review. For long-form clips, retain SFace eligibility/pass rate, subject-first CLIP, seam MSE, and motion/detail metrics.
5. **Keep sparse-attention work independent:** the previously proposed ScalingAttention occupancy trace remains useful, but it should not compete with or be composed into this quant attribution matrix.

### Wiki maintenance actions
- Updated `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md` to replace the stale missing-instrumentation/golden-capture blocker with the current main state and remaining execution/perceptual gates.
- Updated the experiment summary in `wiki/index.md`; no new low-value page was created.
- Appended this reflection, a journal pointer, and a wiki log entry.

### Confidence and risks
- High confidence that the fixed-latent prompt-conditioned eight-sigma instrumentation and CFG-aware capture plan are on main, based on direct source and commit inspection.
- Medium confidence that CFG-aware AWQ will improve guided metrics; it has not been executed in this cycle.
- Low confidence in perceptual/default-artifact ranking until matched trajectory and decoded review exist.
- No Forge blocker. No local generation, remote GPU job, or spend in this reflection.

## 2026-07-11T01:13:25-06:00 — quantization × strict-identity reflection

### Forge git state
- Forge is `main @ eee7c1d2c9b55c01f105f4451334037df81a3dd8`; `origin/main` resolves to the same commit.
- The worktree has untracked `.hermes/`, so it was treated as dirty: no fetch/pull/reset/clean or Forge source write was attempted. The current tree was inspected read-only.

### Top synthesized insights
1. **Forge already has both halves of one high-value attribution experiment, but they are not joined.** `engine/tools/ltx2_cfg_quant_diag.cpp` isolates conditional, unconditional, gap, and guided error across all eight production sigmas; `tools/capture/run_ltx_quant_quality_matrix.py` and `engine/tests/ltx2_longform_chain.cpp` already standardize matched quant artifacts, prompts, seeds, anchors, long-form outputs, and QA. The next card should use one immutable manifest to connect trace ranking to decoded strict-face identity, rather than building another harness.
2. **Strict face identity is the decisive perceptual endpoint for CFG-aware quantization.** Forge's current long-form evidence passes seams and whole-subject continuity but records only 40%/0% SFace first-identity match on the continuous/multi-scene clips. Guided-output improvements are therefore most actionable if they predict SFace eligible-frame/pass-rate changes while anchor mode, latent tail, AdaIN, RIFLEx, prompt, and seed remain fixed.
3. **This must be a paired attribution matrix, not a composition experiment.** Run BF16, direct RTN NVFP4, and CFG-aware AWQ under identical long-form controls; do not change anchor selection or add CharaConsist in the same matrix. Otherwise an identity gain cannot be assigned to quantization. Anchor-diversity and CharaConsist remain later independent interventions against the winning artifact.
4. **The fixed-latent v2 diagnostic is a screening stage only.** Its JSON explicitly records `trajectory: false`; it can reject a bad artifact cheaply but cannot predict accumulated Euler drift. Promotion requires a real denoise trajectory and decoded clip, with guided worst-sigma metrics correlated against SFace, detection coverage, subject-first CLIP, seam MSE, motion/detail metrics, and contact-sheet/human review.
5. **The cheapest useful run order is now clear.** First rerun v2 same-artifact control; then BF16→RTN and BF16→CFG-aware AWQ on three prompts; promote only the best candidate to one short 49/145-frame matched long-form scenario before any 721-frame acceptance clip.
6. **Two maintenance debts remain visible.** `site/experiments.md` still advertises an obsolete remote Diffusion-LLM command, and the old Forge synthesis page contains stale planned-state language alongside later landed-state updates.

### Concrete Forge touchpoints
- `engine/tools/ltx2_cfg_quant_diag.cpp` and `engine/src/quant/cfg_diagnostics.cpp` — fixed-latent all-sigma screening and guided-error summaries.
- `engine/src/quant/ltx2_awq_capture_plan.h` and `engine/tests/ltx2_awq_capture_gate.cpp` — matched positive/negative CFG calibration support.
- `tools/capture/run_ltx_quant_quality_matrix.py` — existing artifact/scenario orchestration; natural owner for a shared manifest and staged 49f→145f→721f promotion.
- `engine/tests/ltx2_longform_chain.cpp` — fixed prompt/seed/anchor/latent-tail controls and quant provenance.
- `tools/capture/ltx_longform_quality.py` — YuNet/SFace identity coverage and pass-rate gate plus seam/motion/detail QA.

### Suggested next experiments/cards
1. **CFG-quant identity correlation card:** one manifest containing artifact hashes, prompt/negative prompt, seed, guidance, eight sigmas, anchor mode, tail/AdaIN/RIFLEx settings, trace JSON, decoded output, and QA JSON. Compare BF16, direct RTN, and CFG-aware AWQ.
2. **Staged local gate:** exact v2 self-control → three-prompt fixed-latent trace → one 49f/145f decoded identity clip → only then 721f acceptance. Stop if AWQ does not improve guided worst-sigma error or if SFace/detection/visual review regresses.
3. **Independent identity intervention card:** after selecting the artifact, replay diverse negative-index anchors offline and then one matched regeneration. Do not mix this with quant artifact selection.
4. **Independent sparse-attention card:** keep the LTX occupancy trace read-only and separate until quant/identity attribution is complete.

### Wiki maintenance actions
- Updated `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md` with the durable trace-to-identity promotion design.
- Updated `wiki/index.md` date/summary and appended `wiki/log.md`.
- No new wiki page was created; the existing experiment page is the correct durable home.
- Deferred stale `site/experiments.md` regeneration because this reflection is not an execution-queue rewrite.

### Confidence and risks
- High confidence that the required trace, artifact matrix, long-form harness, and SFace QA surfaces already exist, based on direct source/doc inspection.
- Medium confidence that guided-error ranking will correlate with strict identity; that relationship is the experiment, not an established claim.
- Risk: SFace is pose/detection sensitive, so report eligible-frame coverage and full-resolution human review; never interpret pass rate alone.
- Blocker: untracked `.hermes/` prevented safe Forge sync, although local `HEAD` and `origin/main` matched.
- Spend: no local generation, remote GPU job, or spend.

## 2026-07-13T09:46:49-06:00 — certified LongCat baseline makes SyncCache traceable

### Forge git state
- Clean `main @ 42ecadde32d43143b178e860c2a9de773d0136a9`, exactly tracking `origin/main`; fetch and fast-forward reported already up to date.
- Open drafts remain PR #15 (`3b5331c`, LongCat multi-speaker + LTX joint A/V/Ingredients) and PR #16 (`9799ff7`, LTX reference comparison). PR #15's latest hosted jobs again contain zero steps; this is infrastructure-only failure evidence, not a source verdict.
- No Forge source was modified and no GPU job or spend occurred.

### Top synthesized insights
1. **SyncCache no longer depends on PR #15 to obtain a valid baseline.** Current main already certifies single-person LongCat official-INT8 AI2V, AT2V, and continuation on the RTX 5090 and 5070 Ti, with frozen face, mouth, matched-PCM SyncNet, continuation, and same-seed quality surfaces. Use that landed single-person path for the first cache trace; PR #15's multi-speaker routing should remain an independent later stress row.
2. **Forge has a useful trace seam, but not yet the seam needed to claim modality-decoupled reuse.** `LongCatAvatarDitCore::LayerHook` observes only each complete block output. `dit_block.cpp` already has internal `post_self_state`, `post_text_state`, audio-attention, and FFN boundaries through its debug surface. A pixel-inert experiment should capture norms/deltas and CUDA time at those boundaries, split human/background token regions, and always execute audio attention. Whole-block residual similarity alone cannot validate SyncCache's audio-preservation mechanism.
3. **Combine residual stability with measured cost, not with a fixed skip count.** LongCat has 48 blocks, high token counts, streamed official-INT8 weights, and continuation KV traffic. Rank candidate reuse by predicted milliseconds and bytes avoided (base/DMD load, self/text/FFN work, cache traffic), not only residual cosine. Report trace overhead separately and require trace mode to preserve final media hashes.
4. **The generic native-INT8 follow-up should target Z-Image or LTX—not LongCat.** The architecture matrix shows strong synthetic linear speedups on RTX 4090/5090, but current LongCat end-to-end evidence already rejects W8A8, row-FP8, and naive NVFP4 for trajectory/visual quality and retains official W8A16 reconstruction as its sole shipped tier. Reusing LongCat as proof of mechanics is valid; treating it as the next W8A8 promotion target is not.
5. **PR #16 remains the right LTX evidence envelope, while LongCat caching needs its own manifest.** Do not mix LTX joint-A/V modality comparisons with LongCat cache attribution. A LongCat cache manifest should pin model/input hashes, segment, sigma/step, continuation policy, layer/stage, token mask, residual metric, predicted saved work, media hash, face/identity/mouth/SyncNet results, and warm timing.
6. **Queue hygiene is now corrected.** The obsolete unapproved remote Diffusion-LLM command in `site/experiments.md` has been replaced by the three current local/trace-first cards and an explicit remote-approval rule.

### Concrete Forge touchpoints
- `engine/src/models/longcat_avatar/dit_core.{h,cpp}` — existing request-local layer hook across ordinary and continuation paths.
- `engine/src/models/longcat_avatar/dit_block.cpp` — `post_self_state`, `post_text_state`, audio cross-attention, and FFN boundaries required for modality-aware trace attribution.
- `engine/src/pipelines/pipeline_longcat_avatar.cpp` and `docs/LONGCAT_AVATAR_PORT_PLAN.md` — certified single-person profiles, continuation policy, quality gates, and performance manifest.
- `tools/capture/longcat_avatar_quality.py` — face/identity/mouth/SyncNet-compatible acceptance surface.
- PR #15's `longcat_avatar_multi_quality.py` and routing capture — later held-out multi-speaker stress row, not the initial implementation base.
- PR #16's `run_ltx_reference_comparison.py` — LTX-only evidence envelope; keep separate from LongCat cache claims.

### Suggested next experiments/cards
1. **LongCat SyncCache trace v0 (local, pixel-inert):** one certified 93-frame clear-speech single-person run plus one continuation segment; collect per-step/layer internal-stage residual norms, human/background token summaries, CUDA timings, load/upload bytes, and media hashes. Stop if trace mode changes bytes.
2. **Offline replay:** choose schedules on one fixture and evaluate predicted saved milliseconds on the other. Require at least 25% predicted removable heavy work and stable human/audio-sensitive deltas before implementing skips.
3. **Matched cache A/B only after replay:** require at least 1.20x warm speedup with no face-detection, identity, mouth-motion, continuation-join, or matched-PCM SyncNet regression; add PR #15 multi-speaker only after its own base gates pass.
4. **Real-weight INT8 control:** capture one Z-Image or LTX projection on RTX 4090/5090, retaining the existing cosine, workspace-lifetime, fallback, dispatch, and later decoded-quality gates. Exclude LongCat W8A8 from this card.
5. **PR #15 hardening:** continue in the existing draft; replace zero-step hosted checks with explicit local evidence and keep strict Ingredients identity and clear-speech A/V verdicts fail-closed.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-13.md` and its `wiki/index.md` summary with the landed-baseline/inner-hook/INT8-target correction; no duplicate page was created.
- Updated `site/experiments.md`, appended `wiki/log.md`, and added this journal pointer.

### Confidence and risks
- High confidence in current-main LongCat certification and hook locations from direct docs/source inspection.
- High confidence that current LongCat W8A8/FP8/NVFP4 evidence is a rejection, not a promotion signal.
- Medium confidence that SyncCache will find useful reuse on LongCat; paper speedups have no verified official code and do not transfer automatically.
- Risk: a post-block or whole-frame residual score can hide audio/human-region changes; internal-stage and mask-aware traces are mandatory.
- No blocker in the Forge checkout. External blockers remain zero-step hosted CI and PR #16's three unresolved reference inputs.

## 2026-07-13T15:51:38-06:00 — LTX VAE win promotes measured denoiser research

### Forge git state
- Forge was clean on `main`; `git fetch origin main && git merge --ff-only origin/main` reported already up to date at `16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- No Forge files were modified. No local generation, remote GPU job, or spend occurred.

### Top synthesized insights
1. **The bottleneck gate has changed.** Forge's accumulated production profile reduced LTX VAE decode from 2,185 ms to 447 ms and warm end-to-end from 4,803 ms to 3,057 ms at 832×480×81, while retaining a 52.41 dB official-frame gate. Denoise is now ~2,534 ms / 83% of the call, so measured denoiser work is no longer premature.
2. **RotateAttention should be evaluated against Forge's component budget, not the paper headline.** Start with byte-inert pre/post-RoPE Q/K traces and offline INT4 Q/K/probability simulation. Attribute fallback coverage against the recorded attention, NVFP4 GEMM, row-bias, and cast/amax costs; require a projected and later measured warm end-to-end gain, not only kernel speed.
3. **Join evidence by identity, not by score.** Attach Forge performance-report/build/device sidecars to comparison-suite run hashes, while keeping decoded quality, strict SFace identity, and A/V SyncNet as independent verdicts. Official and Comfy rows have no Forge telemetry; faster does not imply better.
4. **The comparison suite remains the cheapest ready action.** Its CPU-only plan is blocked by the Comfy API export, official Gemma repository, and spatial upsampler. Do not run or rank GPU rows until `plan.json` exposes accepted requested/effective profiles and hashes.
5. **Strict identity and runtime acceleration are separate lanes.** Subject-specific video I2V LoRA plus first-frame conditioning is the strongest current strict recurring-character path; Ingredients/first-frame alone failed certification. RotateAttention and SyncCache must preserve default-off media/evaluator identity and cannot substitute for identity training.

### Concrete Forge touchpoints
- Evidence/performance: `docs/VIDEO_PERF_MONITOR_PLAN.md`, `docs/LTX_REFERENCE_COMPARISON_SUITE.md`, `tools/capture/run_ltx_reference_comparison.py`.
- Denoiser trace: `engine/src/models/ltx2/dit.cpp` and the split 3D-RoPE/cuDNN attention path.
- Quality/identity: `tools/capture/ltx_longform_quality.py`, `tools/capture/ltx_character_dataset_gate.py`, `docs/LTX23_CHARACTER_IDENTITY_PATHS.md`.

### Suggested next experiments/cards
1. **CPU plan unblock:** supply the three external paths and inspect `plan.json`; no GPU work until hashes/effective profiles pass review.
2. **LTX RoPE INT4 trace:** one request-local, byte-inert production-profile capture plus offline simulation/fallback map; stop if tracing changes bytes or projected end-to-end value is immaterial.
3. **Evidence-sidecar join:** bind Forge perf report and QA paths to run identity without merging their verdicts or changing media cache identity.
4. **Later strict-identity card:** subject-specific I2V LoRA dataset/checkpoint sweep under the existing held-out multi-shot SFace gate, separate from runtime interventions.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-13-noon.md` and its index summary; no duplicate query page was created.
- The older `wiki/queries/forge-research-digest-2026-07-13.md` now overlaps heavily and should eventually be marked superseded rather than receiving further operational updates.

### Confidence and risks
- **High:** Forge git state, measured LTX stage timings/parity, comparison contract, and current identity evidence.
- **Medium:** RotateAttention transfer until traces quantify sensitive calls and projected end-to-end value.
- **Low until executed:** native INT4 speed/quality and subject-LoRA strict identity gain.
- External blocker: comparison plan still lacks the Comfy API export, official Gemma path, and spatial-upscaler path.

## 2026-07-13T22:07:39-06:00 — One LongCat trace to choose cache bytes versus block compute

### Forge git state
- Forge was clean on `main`; `git fetch origin main && git merge --ff-only origin/main` reported already up to date at `16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- No Forge files were modified. No local generation, remote GPU job, or spend occurred.

### Top synthesized insights
1. **Unify two LongCat prerequisites.** SyncCache residual reuse and Jensen-corrected continuation-KV quantization both need a request-local, pixel-inert capture at LongCat's self-attention/cache boundary. Capture once, then select the intervention from measured compute versus host-ring cost.
2. **Let attribution choose the first implementation.** Record per-layer time, resident/offloaded cache bytes, Q/K ranges, historical-attention mass, and self/text/audio/FFN residual deltas. Transfer-dominated continuation favors corrected KV compression; visual-block-compute dominance favors residual reuse. If neither is material, stop.
3. **Preserve a strict modality boundary.** Only historical self-attention keys receive Jensen correction; only measured-stable visual residuals are reuse candidates. Current Q/K/V, text cross-attention, audio cross-attention, and human/audio-sensitive regions remain recomputed in the first native A/B.
4. **TetherCache and NaviCache are analysis modes, not more product branches.** Replay fixed history, relevance+diversity, uncertainty-triggered recompute, and naive/corrected INT4/INT2 from the same sidecar. Keep projected bytes/work, trace error, and rendered quality as separate evidence.
5. **Reuse certified avatar gates.** Trace mode must preserve RGB/routing/evaluator hashes. A later native row retains identity trajectories, join-window review, mouth motion, same-PCM SyncNet, speaker attribution, resident/offloaded controls, and determinism; SSIM or attention error cannot promote it alone.
6. **Do not disturb the independent LTX queue.** The LTX comparison plan still needs the Comfy API export, official Gemma path, and spatial upsampler. RotateAttention remains a separate denoiser trace justified by the measured 83% warm denoise share.

### Concrete Forge touchpoints
- Cache build/forward and resident/offloaded accounting: `engine/src/models/longcat_avatar/dit_core.cpp` (`build_continuation_cache_*`, `forward_continuation_*`).
- Internal modality boundary: `engine/src/models/longcat_avatar/dit_block.cpp`, especially `LongCatAvatarBlock::forward_with_options`, cached self-attention concatenation, and text/audio/FFN residual seams.
- Certified controls and gates: `docs/LONGCAT_AVATAR_PORT_PLAN.md`, `tools/capture/capture_longcat_avatar.py`, and LongCat identity/routing/SyncNet tooling.
- Independent LTX queue: `tools/capture/run_ltx_reference_comparison.py` and `engine/src/models/ltx2/dit.cpp`.

### Suggested next experiments/cards
1. **CPU schema card:** define `forge-longcat-continuation-intervention-trace` with model/input/seed/geometry/segment/cache-policy/evaluator hashes and bounded tensor summaries; verify diagnostics do not alter semantic media identity.
2. **Local trace-only card:** one certified two-segment continuation in resident and offloaded modes; capture timings, cache traffic/ranges, attention mass, and internal residual deltas while requiring identical RGB/routing hashes.
3. **Offline decision card:** compare naive/corrected INT4/INT2 historical KV, fixed/relevance/diverse history, and uncertainty-gated visual-residual schedules. Select at most one native intervention based on projected end-to-end value and stable held-out replay.
4. **Later isolated A/B:** preserve the shipped BF16 control and all avatar identity/A/V/join gates; do not compose KV quantization and residual reuse initially.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-13-noon.md` rather than creating another query page.
- Marked `wiki/queries/forge-research-digest-2026-07-13.md` superseded for current operations and refreshed both index summaries.

### Confidence and risks
- **High:** Forge state, direct cache/block seams, shared trace prerequisite, and modality-safe scope.
- **Medium:** one trace can identify a dominant cache-transfer or block-compute target without another generation baseline.
- **Low until executed:** corrected INT2/INT4 quality, reusable-work fraction, and native warm speedup.
- External LTX blocker remains the three comparison inputs; no Forge checkout blocker and no GPU spend.

## 2026-07-14T04:12:19-06:00 — One LTX evidence identity, several independent decisions

### Forge git state
- Forge was clean on `main`; `git fetch origin main && git merge --ff-only origin/main` reported already up to date at `16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Open drafts are PR #17 (arbitrary-N IC references, `UNSTABLE`) and PR #20 (CI checkpoints, `CLEAN`). No Forge source was modified, no GPU generation ran, and no remote spend occurred.

### Top synthesized insights
1. **Use one identity-addressed LTX evidence bundle, not another harness.** Bind comparison-suite plan/run hashes to opt-in performance, memory-event, and denoiser-trace sidecars. Keep speed, capacity, numerical error, decoded quality, strict identity, and A/V sync as independent verdicts; telemetry must not alter graph/media identity.
2. **A shared all-eight-sigma denoiser capture is now justified.** Forge's measured 832×480×81 warm call is 3.057 s with about 2.534 s/83% in denoise after the VAE fell to 447 ms. One byte-inert capture can support offline RoPE-INT4, sparse-head, block-cache, and CFG-error analyses, but each intervention must pass its own component-share and projected end-to-end gate before implementation.
3. **Adapt Xema as a capacity planner, not a serving scheduler.** Replay 24/32/48 GiB caps from existing transient/VMM/residency/ring/stage evidence and choose the smallest intervention that fits. Preserve Forge's sequential desktop policy and require deterministic identity-keyed plans, peak prediction within 5%, and unchanged output/QA.
4. **Arbitrary-N references do not certify recurring-character identity.** Harden draft PR #17 at its current boundary before new identity code, while retaining subject-specific I2V LoRA plus first-frame conditioning as the strongest documented path for a known character. Require N=0/N=1 compatibility, invalid-array/overflow gates, deterministic 2/3/4-reference runs, and held-out identity/garment evidence.
5. **Keep LongCat's shared trace family-specific.** Its pixel-inert internal-stage/cache capture should choose between Jensen-corrected historical-KV compression and SyncCache-style visual residual reuse from measured transfer versus compute cost. Do not fold avatar A/V/continuation gates into the LTX matrix or generalize LongCat's rejected generic W8A8 tiers.

### Concrete Forge touchpoints
- Evidence identity and rendered comparison: `tools/capture/run_ltx_reference_comparison.py`, `docs/LTX_REFERENCE_COMPARISON_SUITE.md`, and `tools/capture/ltx_longform_quality.py`.
- Performance/capacity: `engine/include/forge.h` (`forge_video_perf_report`, `transient_peak`, ring/core counters), `engine/src/core/perf_monitor.*`, `engine/src/core/device_memory.cpp`, and LTX residency/lowering in `bindings/rust/forge-graph/src/exec/`.
- Denoiser capture: `engine/src/models/ltx2/dit.cpp`, with the existing split 3D-RoPE/cuDNN attention path and immutable eight-sigma/CFG tooling in `engine/tools/ltx2_cfg_quant_diag.cpp`.
- Identity: `docs/LTX23_CHARACTER_IDENTITY_PATHS.md`, `tools/capture/ltx_character_dataset_gate.py`, and draft PR #17's ABI/runtime/teacher-data surfaces.
- LongCat: `engine/src/models/longcat_avatar/dit_core.cpp`, `dit_block.cpp`, and the certified capture/quality contract in `docs/LONGCAT_AVATAR_PORT_PLAN.md`.

### Suggested next experiments/cards
1. **CPU evidence-sidecar schema:** extend comparison plan identity with optional performance, memory, and trace references; test that diagnostics leave execution/media identity unchanged and output-changing controls receive distinct identity.
2. **Local LTX trace-only card:** one production-profile, all-eight-sigma capture with stage timing, memory lifetimes, pre/post-RoPE Q/K summaries, head occupancy, block residual deltas, and CFG branch/guided summaries. Reject lanes below the measured component-share/projected-gain thresholds.
3. **Offline Xema capacity replay:** produce deterministic 24/32/48 GiB candidate tables and validate predicted versus measured peak on existing profiles before any runtime policy change.
4. **PR #17 hardening:** update the existing draft only; complete CPU ABI/input gates and checked-in N=0/1/2/3/4 identity/garment evidence before another implementation.
5. **LongCat trace remains separate:** execute the already-defined resident/offloaded trace, then select at most one native intervention.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-14.md` and its index summary; no duplicate query page was created.
- Older dated digests remain historical; `forge-research-digest-2026-07-13.md` is already marked superseded for current operations. The large pre-landing TJS synthesis remains useful history but should not receive current queue updates.
- Appended this report, `wiki/log.md`, and a pointer in `site/research-journal.md`.

### Confidence and risks
- **High:** Forge git/PR state, comparison/performance contracts, measured 83% denoise share, and current strict-identity boundary.
- **Medium:** one trace can economically serve several offline decisions; trace overhead and tensor-volume caps still need design.
- **Low until executed:** RoPE-INT4/cache end-to-end gain, Xema replay prediction accuracy, arbitrary-N identity improvement, and LongCat intervention quality.
- Blockers: the real LTX comparison still lacks a Comfy API export, official Gemma path, and spatial-upscaler path. No checkout blocker and no spend.

## 2026-07-14T10:33:58-06:00 — A shot ledger connects workflow references to Forge evidence

### Forge git state
- Forge was clean on `main`; `git fetch origin main && git merge --ff-only origin/main` reported already up to date at `16b5d7d0e92738afbe20eaf8605a4ff6740ed1ad`.
- Open drafts remain PR #17 (arbitrary-N IC references, `UNSTABLE`) and PR #20 (CI checkpoints, `CLEAN`). PR #20's current checkpoint jobs passed; PR #17 still has executed CPU/SBOM failures and remains the existing identity-hardening boundary.
- No Forge source was modified, no local generation ran, no remote GPU job was launched, and no spend occurred.

### Top synthesized insights
1. **The newest workflow leads should become comparison inputs, not runtime dependencies.** The metadata-only `ltx23-toolkit` and JoyAI-Echo leads claim long/multi-shot consistency and A/V workflow features. Forge's `existing` comparison adapter can ingest their rendered clips, while the native long-form harness already supplies segments, prompt schedules, strict face identity, seams, motion, detail, and contact sheets. First inspect their manifests/QC vocabulary; do not import ComfyUI orchestration or JoyAI-Echo's separate distilled model.
2. **Add a sequence-level shot ledger above the existing per-run evidence envelope.** A canonical ledger should bind story ID, ordered shot ID, prompt, seed, requested/effective profile, references, duration/fps, continuation inputs, audio/subtitle spans, output hash, and evaluator sidecars. This lets Forge, official, Comfy, toolkit, and JoyAI outputs be compared as workflows without pretending their RNGs, samplers, models, or modalities are equivalent.
3. **The ledger also makes Xema useful for desktop generation.** Replay memory plans per shot and device class (24/32/48 GiB), then attach the selected deterministic capacity-plan hash to each Forge row. This is offline planning for a sequential creator workflow—not continuous-serving SLO policy—and speed/capacity remains independent of visual, identity, and A/V verdicts.
4. **HALO's first useful control is region-aware and identity-negative.** Reuse LTX motion-ROI/contact-sheet and YuNet/SFace surfaces to test whether candidate motion heads align with moving regions while avoiding face/structure-sensitive regions. Require prompt/seed-stable rankings and a random-head control before any feature injection; strict identity regression rejects the intervention even if motion alignment improves.
5. **Arbitrary-N references and recurring-character workflow quality remain separate claims.** PR #17 should still be hardened in place for ABI/lifetime/N=0..4 behavior and held-out identity/garment evidence. A workflow can pass seams and story continuity while failing strict face identity, and extra references alone do not close that gap.
6. **The published experiment queue is again inconsistent with the durable record.** `site/experiments.md` still contained the obsolete unapproved remote Diffusion-LLM command despite prior log claims that it had been corrected. This cycle replaced it with local/trace-only cards and an explicit remote-approval rule.

### Concrete Forge touchpoints
- Comparison identity and external clip ingestion: `tools/capture/run_ltx_reference_comparison.py`, `docs/LTX_REFERENCE_COMPARISON_SUITE.md`, and `examples/ltx_reference_comparison.json`.
- Native multi-shot generation and QA: `tools/capture/run_ltx_native_quality_gate.py`, `tools/capture/ltx_longform_quality.py`, `tools/capture/ltx_character_dataset_gate.py`, `docs/VIDEO_QUALITY_PLAN.md`, and `docs/LTX23_CHARACTER_IDENTITY_PATHS.md`.
- Performance/capacity sidecars: `engine/src/core/perf_monitor.*`, `engine/src/core/device_memory.cpp`, and graph residency/lowering under `bindings/rust/forge-graph/src/exec/`.
- HALO trace seam: `engine/src/models/ltx2/dit.cpp`, including Q/K/V, normalized/post-RoPE Q/K, SDPA output, learned per-head gates, and output projection.
- A/V family control: `docs/LTX_REFERENCE_COMPARISON_SUITE.md` for LTX modality differences and `docs/LONGCAT_AVATAR_PORT_PLAN.md` for avatar-specific speaker, mouth, SyncNet, continuation, and cache gates.

### Suggested next experiments/cards
1. **CPU-only workflow-schema card:** inspect the two new repositories read-only, extract only fields actually materialized by their workflow/QC code, and define a versioned shot-ledger fixture. Reject unsupported declared fields instead of recording them as executed state.
2. **Existing-output comparison card:** ingest one already-rendered clip/shot sequence per available implementation through `existing` adapters; generate plan/run hashes, independent RGB decodes, QA, and contact sheets without GPU generation.
3. **Shot-level capacity replay:** attach deterministic 24/32/48 GiB Xema-style candidate tables to Forge rows; require predicted peak within 5% of measured and unchanged output/QA identity.
4. **HALO region-aware trace:** three prompts/seeds, byte-inert head statistics, motion ROI plus face/structure masks, stability and random-head controls; no request control until the trace gate passes.
5. **PR #17 hardening remains first implementation work:** update the existing branch rather than opening a competing identity PR.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-14.md` and its index summary; no duplicate synthesis page was created.
- Corrected the stale `site/experiments.md` queue and appended `wiki/log.md` plus `site/research-journal.md`.
- Keep the two GitHub leads at `confidence: medium` until README/source inspection verifies their actual workflow fields, model dependencies, and QC behavior.

### Confidence and risks
- **High:** Forge git state, existing-adapter/evidence contracts, native long-form QA surfaces, measured 83% warm denoise share, and PR ownership/status.
- **Medium:** a shot ledger will make external workflows comparable without coupling their runtimes; exact fields await source inspection.
- **Low until executed:** toolkit/JoyAI strict identity or A/V quality, HALO head transfer on LTX, and Xema replay prediction accuracy.
- Existing blockers: the real three-row LTX reference run still lacks a Comfy API export, official Gemma path, and spatial upsampler. External workflow claims are metadata-only. No checkout blocker or GPU spend.

## 2026-07-14T16:38:58-06:00 — Graph-native Ingredients turns the shot ledger into an executable identity contract

### Forge git state
- Forge was clean on `main`; `git fetch origin && git merge --ff-only origin/main` reported already up to date at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`.
- Main advanced by 15 non-merge commits since the prior `e887a3a` reflection. The material product change is request-scoped LTX Ingredients reference support through the Rust graph/runtime, followed by ABI, CUDA-lifetime, evidence-integrity, and native-SDK hardening.
- Draft PR #17 is still the only open PR, now at `1dada5a845e123549b3b9ffcf540a38f69886743` and `UNSTABLE`; Linux CPU, Windows CPU, and SBOM checks fail while hygiene, Rust checks, sanitizers, and installed-SDK consumers pass.
- No Forge source was modified, no generation ran, no remote GPU job was launched, and spend was `$0`.

### Top synthesized insights
1. **The shot ledger can now bind an executable Forge identity request, not only an external workflow description.** Main exposes an Ingredients identity sheet as a typed `ReferenceControl`, lowers it into the native request, includes reference bytes in graph/cache identity, and preserves the zero/default path. A ledger row can therefore bind story/shot metadata to the exact graph semantic key, reference content, LoRA slot/scale, effective profile, media hash, and evaluator sidecars.
2. **Do not confuse graph reachability with recurring-character certification.** The graph v1 deliberately fail-closes to the certified Ingredients envelope (one identity sheet, adapter index 0 at scale 1.4, 768×448×121, required prompt/profile constraints). Existing evidence still rejects strict cross-shot identity for generic Ingredients and first-frame composition. This landing closes a control-surface gap, not the identity-quality gate.
3. **The cheapest next card is an A/A evidence fixture, not another render.** Serialize a graph-native Ingredients request and a matched direct-ABI request around an existing artifact, then prove effective-profile, reference hash, semantic key, output hash, and QA provenance agree. Also prove null-reference/default graphs retain historical bytes and that unsupported mixtures fail closed. This directly joins the new graph control to the comparison/shot-ledger envelope without GPU generation.
4. **Forge's evidence tools are now release-boundary code.** Main hardened non-finite threshold rejection in `ltx_longform_quality.py`, `ltx_ingredients_multishot_quality.py`, and `ltx_character_dataset_gate.py`, plus CUDA drain-before-reclaim and ABI exception containment. The shot ledger and PR #17 evidence should consume these strict reports rather than reimplementing identity acceptance or trusting unbound metrics.
5. **PR #17 must remain separate from LTX Ingredients.** PR #17 concerns Z-Image arbitrary-N reference conditioning/training. Its next gate is still CPU/ABI/lifetime/provenance hardening plus assignment-aware N=2/3/4 evidence. The newly landed single-sheet LTX graph control is a useful contract pattern, not evidence that PR #17's multi-reference semantics or identity quality are correct.
6. **HALO/Xema and LongCat remain downstream sidecars.** Attach their traces/plans to the same shot/run identity only after the graph/ABI A/A fixture is trustworthy. Keep performance, capacity, motion, strict identity, and A/V verdicts independent; no runtime composition is justified by this reflection.

### Concrete Forge touchpoints
- Typed reference and cache identity: `bindings/rust/forge-graph/src/node.rs`, `verbs.rs`, `lower.rs`, `cache/key.rs`, and `bindings/rust/forge-graph-rt/src/exec/rt.rs`.
- Native Ingredients contract: `engine/src/models/ltx2/ic_lora.{h,cpp}`, `engine/src/pipelines/pipeline_video.cpp`, and `docs/LTX23_INGREDIENTS_IC_LORA_PLAN.md`.
- Evidence envelope: `tools/capture/run_ltx_reference_comparison.py`, `tools/capture/ltx_longform_quality.py`, `tools/capture/ltx_ingredients_multishot_quality.py`, and `tools/capture/ltx_character_dataset_gate.py`.
- Safety boundary: `engine/src/abi/exception_boundary.h`, `engine/src/models/ltx2/audio_cuda_cleanup.h`, and the corresponding ABI/CUDA cleanup tests.
- Separate open identity lane: PR #17's `engine/include/forge.h`, Z-Image DiT/pipeline files, Rust layout bindings, and `scripts/teacher_gen/`.

### Suggested next experiments/cards
1. **CPU-only graph↔ABI A/A fixture:** materialize one Ingredients graph plan and one direct-ABI plan from the same checked-in/synthetic reference; compare requested/effective profile, reference digest, semantic/cache identity, lowered parameters, and fail-closed behavior. Use an existing output adapter for media/QA binding; do not generate.
2. **Shot-ledger v0 fixture:** add ordered story/shot IDs and bind each row to graph semantic key, comparison run hash, reference/LoRA provenance, output hash, and strict evaluator report. Reject non-finite thresholds, missing hashes, unsupported declared fields, and stale sidecars.
3. **PR #17 hardening in place:** inspect the executed Linux/Windows CPU and SBOM failures at head `1dada5a`; retain N=1 byte identity and assignment-aware N=2/3/4 evidence as independent gates. Do not open a duplicate PR.
4. **Only after cards 1–2:** attach HALO head statistics and Xema 24/32/48 GiB replay as optional sidecars; retain LongCat's modality/cache trace as a family-specific bundle.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-14.md` and its index summary rather than creating another dated query page.
- Appended this reflection, `wiki/log.md`, and `site/research-journal.md`.
- No duplicate wiki page was created. No outdated page needs an immediate merge beyond the already-superseded 2026-07-13 morning digest.

### Confidence and risks
- **High:** Forge git/PR state, the landed typed reference/control path, semantic-key participation, evidence-tool hardening, and the existing strict-identity failure boundary.
- **Medium:** a CPU graph↔ABI fixture will cover enough of the eventual shot-ledger contract without a new render; exact reusable fixture inputs still need selection.
- **Low until executed:** external workflow comparability, HALO transfer, Xema prediction accuracy, and PR #17's multi-reference identity gain.
- Blockers: PR #17 remains unstable; the real three-row LTX comparison still lacks the Comfy API export, official Gemma path, and spatial upsampler. The Forge checkout itself is clean and current.

## 2026-07-14T22:42:00-06:00 — Decoded trajectories overturn the trace-only quant ranking

### Forge git state
- Forge was clean on `main`; `git fetch origin main && git merge --ff-only origin/main` reported already up to date at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`.
- Open drafts are PR #17 (arbitrary-N Z-Image references), PR #26 (runtime-native NVFP4 scale slabs), and PR #27 (LongCat Rust/graph vertical slice). All currently report executed Linux and Windows checks passing and merge state `CLEAN`; each still has separate product/model evidence gates.
- No Forge source was modified, no generation was launched by this reflection, no remote GPU job ran, and spend was `$0`.

### Top synthesized insights
1. **Fixed-latent guided error is not a quant-recipe selector.** The new matched decoded BF16/direct-RTN/CFG-AWQ local smoke reverses the all-sigma ranking: direct RTN is 1.289 dB closer to BF16 by mean pixel PSNR than CFG-AWQ on the 320×192×17 clip, even though CFG-AWQ won guided cosine/MSE on the matched trace. Neither pixel distance nor trace error is a perceptual verdict; promotion now requires blind review and replication.
2. **Turn the contradiction into a calibration dataset, not another harness.** Reuse the LTX comparison run identity to join fixed-latent branch/gap/guided summaries with actual quant path, executed NFE, decoded hashes, temporal/detail proxies, strict identity where measurable, and blind human/VLM rankings. The next discriminating row is 512×320×49 on a new prompt/seed, not another synthetic-latent scan.
3. **PR #26 separates cold format cost from generated quality.** Its content/recipe-keyed scale slab can remove repeated NVFP4 scale derivation/upload across Gemma and LTX, but must pass real-model byte/parity, deterministic hit/miss, corruption-safe fallback, cold-load, and resident-byte gates. Do not explain the decoded RTN/AWQ divergence with scale-cache behavior.
4. **PR #27 makes the LongCat trace identity-addressable but does not certify media.** Typed portrait/A2V/continuation/two-speaker graph controls can bind the planned continuation cache-versus-residual trace to semantic identity. Native CUDA/model-backed generation, parity, VRAM, portrait identity, mouth/SyncNet, speaker routing, and join evidence remain deferred and family-specific.
5. **PR #17 has moved from CI repair to product evidence.** Hosted Linux/Windows checks now pass. The remaining gate is N=1 byte identity plus deterministic, assignment-aware N=2/3/4 identity/garment evidence and independent allocation/lifetime/provenance review—not more infrastructure work or a duplicate branch.
6. **ACID remains trace-first and lower risk than composition.** Its adaptive threshold idea may address prior fixed-aggressiveness cache failures, but abstract-only evidence and no verified formula/code keep confidence low. It must share the identity-addressed trace envelope and stay separate from quant-recipe selection.

### Concrete Forge touchpoints
- Quant trajectory/calibration: `engine/tools/ltx2_cfg_quant_diag.cpp`, `tools/capture/run_ltx_quant_quality_matrix.py`, `tools/capture/run_ltx_reference_comparison.py`, `tools/capture/ltx_longform_quality.py`, and the existing `ltx2_ab_eval` gate.
- Scale-slab draft: PR #26 `engine/src/io/nvfp4_scale_slab.{h,cpp}`, `model_dir.*`, Gemma/LTX text/audio/DiT bindings, and `engine/tests/nvfp4_scale_slab_cache_test.cpp`.
- LongCat graph draft: PR #27 `bindings/rust/forge-graph/src/families/longcat_avatar.rs`, LongCat validation/lowering/cache identity, `forge-rt` execution, and model-backed avatar QA in `docs/LONGCAT_AVATAR_PORT_PLAN.md`.
- Adaptive-cache trace: `engine/src/models/ltx2/dit.cpp`, `engine/src/core/perf_monitor.h`, and comparison-suite run identity.

### Suggested next experiments/cards
1. **Blind decoded-triad review (CPU/VLM):** randomize the retained RTN/AWQ/BF16 columns, score prompt adherence, identity, temporal artifacts, detail, and overall preference, then unblind. Do not treat the BF16-nearest row as automatically best.
2. **Replicated decoded triad (local):** one non-duplicate 512×320×49 prompt/seed with BF16, RTN, and AWQ; persist playable media, per-variant timing, actual quant provenance, trace covariates, and blind review. Stop recipe promotion if rankings remain inconsistent.
3. **PR #26 model gate:** same-source RTN/AWQ controls with slab miss/hit/corrupt-cache paths; require unchanged output/parity, deterministic cache identity, safe fallback, and measured cold-load/resident-byte value before merge.
4. **PR #27 model gate:** reuse certified LongCat fixtures through the graph/runtime and require graph↔direct-ABI semantic equivalence plus portrait, A2V, continuation, two-speaker, identity/mouth/SyncNet/join, VRAM, and teardown evidence.
5. **Later ACID replay:** no-cache/fixed-low/fixed-high/adaptive/random controls over a byte-inert LTX block trace; no native skip path until stable critical steps and projected warm gain clear thresholds.

### Wiki maintenance actions
- Indexed the durable decoded triad and updated `wiki/experiments/forge-cfg-quant-all-sigma-promotion.md` plus `wiki/queries/forge-research-digest-2026-07-14.md`; no duplicate synthesis page was created.
- Replaced the stale `site/experiments.md` remote command with the current local/read-only queue and explicit remote-approval rule.
- Appended `wiki/log.md` and `site/research-journal.md`.

### Confidence and risks
- **High:** Forge git/PR state, artifact hashes/existence, executed decoded dimensions/NFE, and the ranking reversal between fixed-latent guided metrics and BF16 pixel proximity.
- **Medium:** the contradiction will calibrate useful trace covariates after blind review and one replication.
- **Low until executed:** perceptual superiority of RTN or AWQ, PR #26 end-to-end cold-load value, PR #27 model-backed media correctness, and ACID transfer to LTX.
- Blockers: blind review is absent; the decoded triad is one tiny prompt/seed; the full Official/Forge/Comfy comparison still lacks an API export, official Gemma path, and spatial upsampler. No Forge checkout or spend blocker.

## 2026-07-15T04:48:38-06:00 — Blind quant review should become an identity-bound evidence row

### Forge git state
- Forge was clean on `main`; `git fetch origin && git merge --ff-only origin/main` reported already up to date at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`.
- Open drafts #17, #26, and #27 are mergeable at `0adc001a`, `94b4fc03`, and `e745fc5e`; each has executed Linux and Windows checks passing and no approving review.
- The current tree was used read-only. No Forge source/build/model/media was written, no GPU job ran, and spend was `$0`.

### Top synthesized insights
1. **The 17-frame quant triad is a preference screen, not identity certification.** Its RTN/AWQ/BF16 contradiction is valuable for blind artifact review, but 17 frames cannot meet Forge's strict minimum of 24 measurable faces per shot, and the smoke did not bind an independent pinned YuNet/SFace character anchor. Avoid describing an identity score from this artifact as a product gate.
2. **The next 49-frame replication should join existing tools, not add another quality harness.** Use `run_ltx_quant_quality_matrix.py` for matched generation/actual-quant identity, `run_ltx_reference_comparison.py` for hash-bound existing-output ingestion and independent decode, and `ltx_longform_quality.py` for temporal/detail/prompt plus pinned face-reference metrics.
3. **Forge lacks a review-only blinding layer.** Current capture tools emit labeled variants/contact sheets; source inspection found no shuffle/randomize/unblind helper. Add a tiny deterministic tool that binds source hashes, creates opaque randomized labels, records rubric scores before revealing the map, and rejects edited/missing rows. This is the cheapest concrete card and prevents confirmation bias without generation.
4. **Aura and PACR improve the rubric, not the runtime.** Their multi-subject swaps, copy-paste artifacts, scene/style persistence, causal progression, and transition-coherence axes belong in the blind score schema. Both require learned adapters or an auxiliary VLM bridge, so they remain evaluation references—not drop-in Forge identity fixes.
5. **Recurring-character work remains a separate mechanism lane.** Forge's current architecture note ranks subject-specific video I2V LoRA plus native first-frame conditioning as the strongest known path for a fixed character. Generic Ingredients and first-frame-only composition remain uncertified across shots. Quant choice should be evaluated under a fixed identity mechanism, not credited with creating identity.
6. **Keep cold, warm, and quality decisions orthogonal.** PR #26 is a cold-load/cache-lifetime gate; ACID is a warm-denoise adaptive-cache trace; RTN/AWQ is a trajectory/perceptual-quality gate. One evidence envelope can bind all three, but no result substitutes for another. PR #17 can reuse the blinded assignment-aware format for N=2/3/4, while routing correctness remains distinct from identity quality.

### Concrete Forge touchpoints
- Matched quant rows: `tools/capture/run_ltx_quant_quality_matrix.py` and `engine/tools/ltx2_cfg_quant_diag.cpp`.
- Evidence identity/ingest: `tools/capture/run_ltx_reference_comparison.py` and `docs/LTX_REFERENCE_COMPARISON_SUITE.md`.
- Identity and temporal QA: `tools/capture/ltx_longform_quality.py`, `ltx_ingredients_multishot_quality.py`, and `ltx_character_dataset_gate.py`.
- Character mechanism boundary: `docs/LTX23_CHARACTER_IDENTITY_PATHS.md` and typed Ingredients graph/runtime controls.
- Independent optimization lanes: PR #26 scale-slab files, LTX `dit.cpp`/`perf_monitor` for ACID tracing, and PR #17 arbitrary-N reference evidence.

### Suggested next experiments/cards
1. **CPU-only blind bundle now:** generate a deterministic opaque-label manifest and unlabeled filmstrip from the retained triad; bind all source hashes; collect prompt, anatomy/artifact, detail, temporal-coherence, and overall-preference scores; unblind only after the review JSON is complete.
2. **One local 49-frame replication only if card 1 is informative:** new prompt/seed, independent face anchor, at least 24 measurable faces, BF16/RTN/AWQ, actual-quant/artifact/build identity, timing, playable clips, and the same blind schema. Stop promotion if trace, pixel, perceptual, and identity rankings remain inconsistent.
3. **PR #26 stays cold-load-only:** independent lifetime/fallback review plus real model miss/hit/corrupt-cache A/B; do not mix its verdict into quant quality.
4. **ACID stays trace-only:** no-cache/fixed/adaptive/random replay with measured denoise attribution; no native skip until stability, cosine, and projected warm-gain gates pass.
5. **PR #17 stays on its branch:** N=1 byte identity, opaque assignment-aware N=2/3/4 review, and independent lifetime/provenance review; do not infer strict identity from routing success.

### Wiki maintenance actions
- Updated `wiki/queries/forge-research-digest-2026-07-15.md` and its `wiki/index.md` summary rather than creating a duplicate page.
- Appended this report, `wiki/log.md`, and `site/research-journal.md`.
- No page merge is urgent. Older dated digests remain useful provenance; current operational guidance is the 2026-07-15 query.

### Confidence and risks
- **High:** Forge git/PR state, absence of a blind helper in inspected capture scripts, the 17-frame/24-measurable-face mismatch, and existing tool contracts.
- **Medium:** the combined 49-frame evidence row will discriminate RTN/AWQ without requiring a larger matrix.
- **Low until executed:** perceptual or identity superiority of either quant recipe, ACID transfer to eight-step LTX, and arbitrary-N reference identity gains.
- Blockers: no completed blind review; current triad lacks strict identity coverage; full Official/Forge/Comfy comparison still lacks its API export, official Gemma path, and spatial upsampler. Forge itself is clean/current; no spend blocker applies to CPU-only review.
