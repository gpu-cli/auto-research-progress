---
title: "LTX-2.3 Continuous Experiment Program"
description: "Updated: 2026-07-15\nTarget: /home/aegisfang666/workspace/forge at dc383a05cbc03dd07eeb865018d53a6cd3e177e1"
date: "2026-07-15T13:12:28.997Z"
kind: experiment
status: published
tags: []
---

# LTX-2.3 Continuous Experiment Program

Updated: 2026-07-15
Target: `/home/aegisfang666/workspace/forge` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`

## Live capability

- Local: NVIDIA GB10 (DGX Spark), CUDA 13.0, cuDNN 9.24, Forge CUDA architecture 121.
- Remote: RunPod through `gpu-cli`; healthy auth, no active pods at setup time.
- Autonomous budget: at most **$5 per experiment** and **$30 per day**, serial rentals only.
- Local artifacts:
  - LTX-2.3 BF16 distilled source: 43 GiB.
  - LTX-2.3 FP8: 28 GiB.
  - LTX-2.3 direct NVFP4: 18 GiB.
  - LTX-2.3 CFG-AWQ NVFP4: 18 GiB.
  - Gemma 3 12B NVFP4: 7.8 GiB.
  - Ingredients IC-LoRA: 1.3 GiB.

## Verified starting point

The current Forge main branch was rebuilt locally with CUDA + cuDNN and passed the direct artifact-specific DiT smoke:

```text
loaded LTX-2.3 video DiT (48 layers) in 1.8 s (weights 16.73 GiB)
small fwd: deterministic; batch isolation bit-identical
warm T=6144 step: 2121 ms; projected 8-step DiT: 16.96 s
CFG sequential: 4306 ms; batched: 4715 ms; 0.91x
ltx2 dit: all checks passed
```

This establishes the control. CFG batching is not a speed win on GB10 and should not be promoted without target-hardware evidence.

## Experiment conveyor

Each cycle selects one unresolved row, starts with the cheapest discriminating control, writes structured evidence under `outputs/ltx23-continuous/`, and updates this report plus `wiki/experiments/`. No experiment may claim quality from synthetic traces alone.

### Queue state

- **PASS — current-main direct DiT control:** direct RTN NVFP4 and CFG-AWQ NVFP4 both clear the artifact-specific correctness/performance harness on local GB10 at current main.
- **PASS — public Comfy RTX 5090 screening control:** the remediated 80 GB staging run completed the fixed 512×320×49, eight-NFE audio-video workflow on an actual RTX 5090; both MP4s decode and a contact sheet is retained. This is one-clip screening evidence, not a quality verdict.
- **PASS — public Comfy RTX 4090/Ada fit control:** a CUDA-12.4-pinned retry completed a new clockmaker prompt/seed at 512×320×49 and eight NFE on an actual 24 GiB RTX 4090. Both MP4s decode; this establishes mechanics/fit only, not a quality tier.
- **PARTIAL — quantized render quality / CFG-aware quantization:** two matched 320×192×17 decoded BF16-vs-RTN-vs-CFG-AWQ controls are retained alongside the earlier RTN-vs-CFG-AWQ 512×320×49 A/B. Direct RTN was closer to BF16 by decoded PSNR than CFG-AWQ on both small clips, reversing the all-sigma trace ranking, but this remains pixel-divergence evidence. Blinded local Qwen3.6 VLM reviews now cover every frame of both small triads and tie all variants at 5/5 visual quality, prompt adherence, and identity consistency with 1/5 artifact severity. Because the same judge family produced both ties, independent human/different-model confirmation and a full 512×320×49 triad remain unresolved; no recipe promotion is justified, and the conveyor advances to a bounded endpoint probe rather than scaling the tied recipes.
- **UNRESOLVED:** training-free acceleration, streaming/residency, conditioning, long-form continuity, character consistency, joint A/V, and official parity remain behind the short decoded quant gate.

| Priority | Lane | Local GB10 experiment | Remote experiment | Promotion gate |
|---:|---|---|---|---|
| 1 | Correctness/perf control | Rebuild and run `forge_ltx2_dit_test`; track warm-step, CFG sequential/batched, determinism, batch isolation | Repeat exact-source control on RTX 5090 and RTX 4090/Ada where compatible | No correctness regression; actual GPU recorded; warmed medians |
| 2 | Quantized render quality | Matched AWQ NVFP4 vs direct NVFP4 vs FP8 at smoke geometry, then 512p | RTX 5090 full 6 prompts × 4 seeds at 512p; hard 1024p subset | NFE, latency, VRAM, QA, contact sheets, VLM + human review; no tier inferred from trace-only metrics |
| 3 | CFG-aware quantization | Same-artifact control, then all-eight-sigma prompt-conditioned conditional/unconditional/gap/guided traces | Scale matched candidates if local trajectory evidence is sound | Same-source artifacts; guided metrics plus decoded trajectory; warmed baseline matrix |
| 4 | Training-free acceleration | Endpoint/TJS exits at conservative sigma indices; exact internal block/attention caching; deterministic traces | RTX 5090 matched A/B at practical resolution | Fewer executed NFEs/forwards and wall time with identity/quality floor; generation-bound history; fail-closed unsupported modes |
| 5 | Streaming/residency | Ring uploads/forward, block-prefetch, host peak, utilization, idle fraction | RTX 5090 and RTX 4090/Ada architecture matrix | Measured throughput gain without workspace/lifetime regressions; explicit architecture dispatch |
| 6 | Conditioning | T2V, first-frame I2V, start/end keyframes, clip conditioning, tail+anchor+RIFLEx | 4090 fit-tier and 5090 quality-tier comparisons | Endpoint PSNR, actual quant, seams, prompt/identity checks |
| 7 | 22-second shorts continuity | One ~22 s clip, then two-clip and three-clip chaining with stable character/location | RTX 5090 long-form stress when local smoke passes | Boundary MSE/sheets, motion/detail/exposure, face identity, narrative continuity, no hidden scene cuts |
| 8 | Character consistency | Ingredients IC-LoRA multi-shot reference tests and strict YuNet/SFace gate | 5090 6-prompt × 4-seed identity matrix | Dense face detect/match evidence plus human/VLM review; report extra-model dependency explicitly |
| 9 | Joint A/V | Native LTX joint transformer/audio decoder/vocoder smoke and short clip | A100/H100 for BF16/FP8 capacity; 5090 where full path fits | Audio present, playable, A/V-sync metric, no video-quality regression |
| 10 | Official parity | Repair/materialize the official/Forge/Comfy comparison config, then matched dry run and one clip | Large-memory A100/H100 for official BF16 reference if needed | Checkpoint/sampler/RNG differences declared; no false parity claims |

## Backend policy

- **GB10 local:** free correctness, smoke renders, quant diagnostics, harness development, and small matched A/Bs.
- **RTX 5090 remote (~$0.69/h observed):** primary Blackwell performance and 32 GiB practical render lane.
- **RTX 4090 remote (~$0.34/h observed):** required Ada/24 GiB fit-tier portability lane; NVFP4 Tensor Core features must remain disabled and Forge should use supported FP8/INT8/W4 paths.
- **A100 80 GB remote (~$1.39/h observed):** large-memory BF16/FP8 reference lane, not NVFP4 target evidence.
- **H100/H200:** only when A100 capacity/performance is insufficient and the experiment still fits the per-run cap.

## Continuous-loop rules

1. Never alter the clean main checkout for an experiment; use an isolated worktree if code changes are needed.
2. Do not duplicate active PRs or existing experiment branches.
3. Local lane may run automatically when the GPU is idle.
4. Remote lane checks `gpu prime`, `gpu doctor --json`, `gpu status --json`, inventory, and cumulative daily spend before provisioning.
5. At most one rental at a time. Preserve the project choice to leave `docker_image` unset.
6. Every rental captures status before teardown, explicitly stops only its own pod, and verifies zero running pods afterward.
7. A setup failure is not an experiment result. Preserve logs and label it BLOCKED.
8. Product changes only become verified draft PRs after matched A/B, focused tests, `uv run pytest -q` in auto-research when it changes, independent review, and real CI links. Never auto-merge.

## Cycle 20260714T211353Z — CFG-AWQ current-main DiT control

**Status: PASS.** Forge main was clean, fetched, and already synchronized at `1cf23ef9a93c4de0910a4fa1031917851277ac91`. Open PRs #24 and #17 do not duplicate this artifact-specific control. The local NVIDIA GB10 was idle, so the current-source focused target was rebuilt and run against the matched CFG-AWQ artifact.

```bash
cmake --build build-eng --target forge_ltx2_dit_test -j2
LD_LIBRARY_PATH=/home/aegisfang666/tools/cudnn-9.24.0.43/lib:${LD_LIBRARY_PATH:-} \
  /usr/bin/time -v ./build-eng/forge_ltx2_dit_test \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.cfg-awq-nvfp4.safetensors
```

- Requested/actual quant: `nvfp4-awq-recipe` / `nvfp4-awq-recipe`; 420 AWQ sidecars; artifact SHA-256 `57571a567f9d8cc85efb369823ab755b9f02a7c41e983f79650642ba321d3d19`.
- Load: 48 layers in 1.4 s, 16.74 GiB weights.
- Correctness: finite small forward; rerun byte-identical; batch isolation bit-identical; both batched slots differed from corresponding single forwards in `0/24576` elements.
- Warm `T=6144`: 2169 ms per DiT forward (mean of four after warmup), projecting 17.36 s for eight DiT forwards.
- CFG: sequential 4368 ms vs batched 4387 ms (`1.00x`); batching remains a correctness/residency surface, not a GB10 speed win.
- Harness execution: no scheduler trajectory, no decoded media, and therefore production steps/NFE are `0`; the eight-step number is a projection, not an executed render. Wall time 47.93 s; max host RSS 2,136,148 KiB. Unified-memory FB total/used is unavailable from `nvidia-smi`; full snapshots are retained.
- Spend: local `$0`; no remote run.

Artifacts: `outputs/ltx23-continuous/20260714T211353Z-cfg-awq-dit-control/` (`metrics.json`, `config.yaml`, exact command/build logs, hashes, validation manifest, timing, and GPU snapshots).

**Next cheapest gate:** one matched short decoded BF16-vs-RTN-vs-CFG-AWQ control on a second prompt/seed, with actual quant, executed 8-step NFE/forwards, latency/memory, media/contact and boundary sheets, QA metrics, and independent VLM/human review. Do not promote from this synthetic DiT control.

## Cycle 20260714T211852Z — CFG-AWQ all-sigma second-prompt replication

**Status: PASS (diagnostic only).** Forge main was clean, fetched, and already synchronized at `1cf23ef9a93c4de0910a4fa1031917851277ac91`. Open draft PRs #24 and #17 did not duplicate the experiment. The local NVIDIA GB10 had no active compute process, so the current-source focused diagnostic was rebuilt and run against BF16 and its matched CFG-AWQ artifact using a second, ceramic-artist prompt.

```bash
cmake --build build-eng --target forge_ltx2_cfg_quant_diag -j2
LD_LIBRARY_PATH=/home/aegisfang666/tools/cudnn-9.24.0.43/lib:${LD_LIBRARY_PATH:-} \
  /usr/bin/time -v ./build-eng/forge_ltx2_cfg_quant_diag \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b-distilled-1.1.safetensors \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.cfg-awq-nvfp4.safetensors \
  /home/aegisfang666/models/forge/gemma-3-12b \
  "A locked-off medium-wide shot of an elderly Japanese ceramic artist in a blue linen apron shaping a clay bowl at a sunlit wooden workbench, consistent face and hands, stable pottery studio background" \
  "identity drift, face distortion, malformed hands, extra fingers, duplicate person, camera shake, flicker, blur" \
  /home/aegisfang666/auto-research/outputs/ltx23-continuous/20260714T211852Z-cfg-awq-all-sigma-prompt2/metrics.json 3.0
```

- Requested/actual candidate quant: `nvfp4-awq-recipe` / `nvfp4-awq-recipe`; 420 AWQ sidecars; artifact SHA-256 `57571a567f9d8cc85efb369823ab755b9f02a7c41e983f79650642ba321d3d19`. The BF16 file SHA-256 was `b33b7fe4bbfe084f484be4aaf90b0f1d95dca20d403ac4c0e037eb8c4f0af7cc`; the candidate validation manifest points to that BF16 source path and records canonical source ID `sha256:008d126c...15e89`.
- Aggregate conditional cosine/MSE: `0.938096 / 0.181315`; unconditional: `0.939119 / 0.208952`; CFG gap: `0.753216 / 0.379022`; guided: **`0.817387 / 2.400175`**.
- Worst guided point: sigma index 6, `sigma=0.725000`, cosine `0.483222`, MSE `9.848169`. The earlier prompt also had its worst guided MSE at this sigma, so the failure concentration replicated across prompts.
- Execution: eight sigmas × two branches × two artifacts = 32 DiT forwards. This was not a scheduler trajectory: scheduler steps/NFE were `0`, and no media was decoded. Wall time `74.02 s`; max host RSS `5,003,852 KiB`; sampled utilization peaked at 94% and temperature at 63°C. A live process query reported 30,902 MiB, while unified-memory framebuffer totals remained unavailable.
- Spend: local `$0`; no `gpu run` and no remote resources.
- Interpretation: numerical PASS for the replicated diagnostic, **not** a recipe promotion or perceptual verdict. No contact/VLM artifact applies because the harness emitted traces only.

Artifacts: `outputs/ltx23-continuous/20260714T211852Z-cfg-awq-all-sigma-prompt2/` (`cycle-summary.json`, `metrics.json`, config, commands, current-source build log, checksums/manifests, GPU samples, timing, and environment evidence). Durable note: `wiki/experiments/ltx23-cfg-awq-all-sigma-prompt2.md`.

**Next cheapest gate:** run direct RTN against BF16 on this identical second prompt and fixture to complete the replicated trace ranking. Then run the short decoded BF16-vs-direct-RTN-vs-CFG-AWQ A/B with contact sheets and independent VLM/human review; do not promote from traces alone.

## Cycle 20260714T212800Z — remote Comfy LTX-2.3 RTX 5090 acceptance

**Status: BLOCKED (setup/storage; no model evidence).** Remote readiness passed (`gpu doctor` healthy, RunPod key present, zero active pods, account historical spend `$0.625358` before launch). Inventory advertised an RTX 5090 at `$0.69/h`; the actual RunPod quote was `$0.99/h`, still within the `$5` experiment cap and shared `$30/day` cap. Forge remained clean at `1cf23ef9a93c4de0910a4fa1031917851277ac91`; open draft PRs #24 and #17 did not overlap the runner.

The first launch from the large auto-research checkout provisioned cycle-owned pod `88gd224p6dak6v` but stalled before job submission while preparing workspace sync. It was cancelled as setup-only evidence after about eight minutes and explicitly stopped. A minimal staging project then synchronized the exact same runner (`sha256:194d4fa4dee5ae9f367112a599e2f18e07a023df4a76cdba171e83206aeb701e`) and launched cycle-owned pod `5ofnvzk0a9qds8`:

```bash
gpu run -y --gpu-type "NVIDIA GeForce RTX 5090" --sync \
  -o outputs/comfy-ltx23-real \
  uv run python scripts/run_comfy_ltx23_real.py \
  --bootstrap-timeout 3600 --generation-timeout 1800
```

- Actual device: `NVIDIA GeForce RTX 5090`, `32607 MiB`; RunPod status reported one RTX 5090 in `EU-RO-1` at `$0.99/h`. The failed setup path did not capture compute capability, a telemetry gap that must be corrected before the next accepted run.
- Pinned ComfyUI and three custom-node repositories cloned successfully. The isolated runtime installed 124 packages and passed `torch.cuda.is_available()`.
- Public Gemma FP4 download completed; the public LTX-2.3 FP8 transformer download then failed with `OSError: [Errno 122] Disk quota exceeded` at 2026-07-14 21:49:12 UTC.
- No Comfy server started, workflow was not submitted, scheduler steps/NFE were `0`, and no media, QA sheet, generation latency, or quality result exists. This is a setup failure, not LTX-2.3 model evidence.
- Attempt spend deltas from account accounting: `$0.130350` (large-checkout sync attempt) + `$0.207075` (minimal staging retry) = **`$0.337425`**. Historical spend after teardown was `$0.962783`; both per-attempt and shared daily caps remained clear.
- Teardown: both cycle-owned pods were stopped explicitly; final `gpu status --json` and account-wide `gpu status --billing --json` showed `running_pods: 0` / `live_pods: 0`.

Evidence: `outputs/ltx23-continuous/20260714T212800Z-remote-comfy-ltx23-rtx5090/` and `outputs/ltx23-continuous/20260714T213600Z-remote-comfy-ltx23-rtx5090-retry/`. Failure-preserving synchronized outputs include `runner.log` and `workflow.json`.

Late reconciliation found an exact-current-runner **H100** control already preserved at `/home/aegisfang666/comfy-ltx23-gpu-run/outputs/comfy-ltx23-real/` with the same runner hash, seed, prompt, 512×320×49 geometry, eight-step schedule, output MP4/audio MP4/contact sheet, and a logged Comfy execution time of `137.30 s` (2026-07-13). Its `runner.log` identifies `NVIDIA H100 80GB HBM3`; it is **not RTX 5090 hardware evidence**. Therefore the failed same-seed RTX 5090 retry remains an unresolved target-hardware control, although the H100 media should be reused as a cross-hardware reference rather than regenerated on H100. The earlier cycle conclusion that this was an RTX 5090 control was a reconciliation defect.

**Next gate:** the auto-research gpu-cli config now requests an 80 GB workspace to fix the observed quota failure. Re-run the current runner once on RTX 5090 with hardware compute-capability and model-checksum telemetry; then parameterize a non-duplicate prompt/seed for RTX 4090/Ada 24 GiB fit/compatibility using supported FP8/INT8/W4 paths (no Blackwell/NVFP4 assumptions). Preserve the existing H100 control as a large-memory reference.

## Cycle 20260714T215720Z — remote Comfy LTX-2.3 RTX 5090 workspace-80 retry

**Status: BLOCKED (provider capacity; no model evidence).** Forge was clean on `main` and was fast-forwarded to current `origin/main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`; the only open PR was draft #17 and did not duplicate this gate. Remote readiness was healthy, the RunPod key passed, and there were zero pods before launch.

The required setup remediations were applied before provisioning: the exact current runner was copied into the dedicated 204 KiB staging project; `[tool.setuptools] py-modules = []` prevented flat-layout package discovery; `workspace_size_gb` was set to `80`; runtime/models/partial downloads remained workspace-relative; and local `uv sync`, import, and runner CLI checks passed. The staging and source runner hashes matched at `194d4fa4dee5ae9f367112a599e2f18e07a023df4a76cdba171e83206aeb701e`. `docker_image` remained unset (`docker_image_explicit=false`).

```bash
gpu run -y --gpu-type "NVIDIA GeForce RTX 5090" --sync \
  -o outputs/comfy-ltx23-real -- \
  bash -lc 'nvidia-smi --query-gpu=name,memory.total,compute_cap --format=csv,noheader; timeout 4500 uv run python scripts/run_comfy_ltx23_real.py --bootstrap-timeout 3600 --generation-timeout 1800'
```

- Inventory advertised RTX 5090 at `$0.69/h`; provisioning accepted a `$0.99/h` quote, with the 4500-second remote bound comfortably below the `$5` experiment cap.
- RunPod exhausted RTX 5090 capacity after two provisioning attempts. No pod was created, no actual GPU/compute capability existed to record, and no install, asset download, Comfy server, workflow submission, NFE, timing, history, media, contact sheet, or decode evidence was produced.
- Attempt spend delta: **`$0.000000`**; historical account spend remained `$0.9627833333`. Prior setup retries remain `$0.337425` and are not erased by this no-charge attempt.
- Teardown: there was no cycle pod to stop. Final account status showed `running_pods: 0`, `provisioning_pods: 0`, and `live_pods: 0`.

Evidence: `outputs/ltx23-continuous/20260714T215720Z-remote-comfy-ltx23-rtx5090-workspace80/` (`gpu-run.log`, exact command and runner hash, before/after status and billing, cycle summary, and retry wrapper). Durable note: `wiki/experiments/ltx23-remote-comfy-rtx5090-workspace80-blocked.md`.

**Next gate:** retry this identical RTX 5090 control when provider capacity is available. Keep the existing H100 clip as a cross-hardware reference and do not advance to the RTX 4090/Ada matrix until the target-hardware control completes.

## Cycle 20260715T002053Z — direct-RTN all-sigma second-prompt control

**Status: PASS (diagnostic only).** Forge main was clean, fetched, and already synchronized at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`. The only open PR was draft #17 and did not duplicate this matched trace control. The local NVIDIA GB10 had no active compute process, so the current-source focused target was rebuilt and run against BF16 and direct-RTN NVFP4 with the identical second-prompt fixture used for CFG-AWQ.

```bash
cmake --build build-eng --target forge_ltx2_cfg_quant_diag -j2
LD_LIBRARY_PATH=/home/aegisfang666/tools/cudnn-9.24.0.43/lib:${LD_LIBRARY_PATH:-} \
  /usr/bin/time -v ./build-eng/forge_ltx2_cfg_quant_diag \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b-distilled-1.1.safetensors \
  /home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors \
  /home/aegisfang666/models/forge/gemma-3-12b \
  "A locked-off medium-wide shot of an elderly Japanese ceramic artist in a blue linen apron shaping a clay bowl at a sunlit wooden workbench, consistent face and hands, stable pottery studio background" \
  "identity drift, face distortion, malformed hands, extra fingers, duplicate person, camera shake, flicker, blur" \
  /home/aegisfang666/auto-research/outputs/ltx23-continuous/20260715T002053Z-direct-rtn-all-sigma-prompt2/metrics.json 3.0
```

- Requested/actual candidate quant: `nvfp4-rtn` / `nvfp4-rtn`; no AWQ sidecars. BF16 file SHA-256: `b33b7fe4bbfe084f484be4aaf90b0f1d95dca20d403ac4c0e037eb8c4f0af7cc`; direct-RTN SHA-256: `5fa67764fb4b9866bc5eb8a4ee0529eb1c666b9fa2f4a8a8a4c11a07f01ec3a6`. Both validation records identify canonical BF16 source `sha256:008d126c...15e89`.
- Aggregate conditional cosine/MSE: `0.911847 / 0.261834`; unconditional: `0.934305 / 0.226640`; gap: `0.693862 / 0.465337`; guided: **`0.766968 / 3.124245`**.
- Worst guided point: sigma index 6, `sigma=0.725000`, cosine `0.393976`, MSE `11.831713`. This matches CFG-AWQ's worst-sigma location on the identical fixture.
- Matched ranking: CFG-AWQ guided cosine/MSE was `0.817387 / 2.400175`, a cosine delta of `+0.050419` and guided-MSE reduction of `23.18%` relative to direct RTN.
- Execution: eight sigmas × two CFG branches × two artifacts = 32 DiT forwards. This was not a scheduler trajectory: steps/NFE were `0`, and no media/contact/VLM artifact applies. Wall time `71.08 s`; max host RSS `5,000,608 KiB`; sampled process memory peaked at `30,951 MiB`, utilization at `95%`, and temperature at `63°C`.
- Spend: local `$0`; no `gpu run` and no remote resources.
- Interpretation: the second-prompt matched trace ranking is complete and numerically favors CFG-AWQ, but it remains trace-only evidence—not a generated-media or perceptual promotion verdict.

Artifacts: `outputs/ltx23-continuous/20260715T002053Z-direct-rtn-all-sigma-prompt2/` (`cycle-summary.json`, `comparison.json`, `metrics.json`, config, exact commands, current-source build log, binary/model hashes, validation manifests, GPU samples, timing, and environment evidence). Durable note: `wiki/experiments/ltx23-direct-rtn-all-sigma-prompt2.md`.

**Next cheapest gate:** run one short decoded BF16-vs-direct-RTN-vs-CFG-AWQ matched A/B with actual quant, executed eight-step NFE/forwards, latency/memory, media/contact sheet, QA metrics, and independent VLM/human review. Do not promote from traces alone.

## Cycle 20260715T004623Z–20260715T005000Z — remote Comfy LTX-2.3 RTX 5090 control

**Status: PASS (single-clip screening evidence only).** Forge remained clean on `main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`; draft PR #17 did not duplicate the public Comfy control. Readiness passed, there were zero pods before launch, placement quoted an RTX 5090 at `$0.99/h`, `workspace_size_gb` remained 80, and `docker_image` remained unset. The exact current runner hash was `194d4fa4dee5ae9f367112a599e2f18e07a023df4a76cdba171e83206aeb701e`.

Two cheap setup failures were repaired before the accepted run: the implicit base image lacked `uv` on `PATH`, then the staging sync copied the local ARM `.venv` and caused an x86_64 `Exec format error`. A pinned stdlib uv bootstrap was added and `.venv`/bytecode were excluded from sync; the accepted workspace sync fell from 70.51 MB to 50.49 KB. Both setup-only pods were explicitly stopped and remain labeled setup failures, not model evidence.

```bash
gpu run -y --gpu-type "NVIDIA GeForce RTX 5090" --sync \
  -o outputs/comfy-ltx23-real -- \
  bash -lc 'nvidia-smi --query-gpu=name,memory.total,compute_cap --format=csv,noheader; python3 scripts/bootstrap_uv.py; timeout 4500 .comfy-ltx23-runtime/uv-bin/uv run python scripts/run_comfy_ltx23_real.py --bootstrap-timeout 3600 --generation-timeout 1800'
```

- Actual device: `NVIDIA GeForce RTX 5090`, 32,607 MiB, compute capability `12.0`; PyTorch `2.13.0+cu130`, ComfyUI `0.27.0`, dynamic VRAM with two-stream async weight offload.
- Workflow: fixed seed 9606, 512×320×49 at 24 fps, CFG 1.0, eight-sigma distilled schedule, **8 executed NFE**. Comfy history records success in **210.354 s**; full provisioning/bootstrap/download/render/sync took 18m25s.
- Media: synchronized H.264 video and H.264/AAC mux. Independent PyAV decoding produced 49/49 video frames and 95 AAC frames at 48 kHz; an eight-frame 2048×640 contact sheet and SHA-256 manifest are retained. This proves mechanics only, not identity consistency or a quality tier.
- Source identity: pinned ComfyUI/custom-node commits and all five public model URLs are retained. Hugging Face `x-linked-etag` identities and content lengths were captured after the run; they are not independently computed full-file hashes.
- Warning: optional `ComfyUI-LTXVideo` import failed against Kornia 0.8.3 (`pad` missing), but the required core/KJ/VHS classes loaded and the submitted graph completed. Pin this compatibility surface before broader LTXVideo-node workflows.
- Spend: successful attempt **`$0.306900`**; two current setup retries **`$0.024750`**; this cycle **`$0.331650`**. Prior setup retries were `$0.337425`, so all setup retries to date are **`$0.362175`**, and prior setup retries plus this accepted control total **`$0.669075`**. Final staging historical spend: `$1.2944333333`.
- Teardown: cycle pod `n1vfi6ny6uyn10` and both setup-only pods were stopped explicitly. Final staging-project status: `running_pods: 0`, `provisioning_pods: 0`.

Evidence: `outputs/ltx23-continuous/20260715T005000Z-remote-comfy-ltx23-rtx5090-clean-sync/`; setup failures: the immediately preceding `20260715T004623Z-*` and `20260715T004811Z-*` directories. Durable note: `wiki/experiments/ltx23-remote-comfy-rtx5090-pass.md`.

**Next gate:** advance to a non-duplicate RTX 4090/Ada 24 GiB fit/compatibility control with a parameterized new prompt/seed and supported FP8/INT8/W4 paths. Do not repeat the fixed prompt/seed absent a code or hardware change. The 6-prompt×4-seed 512p matrix, hard 1024p subset, and 22-second continuity gates remain queued behind that compatibility control.

## Cycle 20260715T031626Z — local decoded BF16 vs direct-RTN vs CFG-AWQ smoke

**Status: PASS (diagnostic only; perceptual gate still open).** Forge main was clean, fetched, and already synchronized at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`. Draft PR #17 concerns Z-Image multi-reference conditioning and did not duplicate this LTX quant control. The local NVIDIA GB10 had no consequential compute process, so current-source `ltx2_ab_eval` was rebuilt and run locally; no `gpu run` or remote spend occurred.

```bash
cmake --build build-eng --target ltx2_ab_eval -j2
FORGE_LTX_AB_STREAMING=1 FORGE_LTX_AB_HOST_BUDGET_MIB=1536 \
FORGE_LTX_AB_A=/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors \
FORGE_LTX_AB_B=/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.cfg-awq-nvfp4.safetensors \
FORGE_LTX_AB_C=/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b-distilled-1.1.safetensors \
FORGE_LTX_GEMMA_DIR=/home/aegisfang666/models/forge/gemma-3-12b \
FORGE_LTX_AB_SIZE=320x192x17 FORGE_LTX_AB_SEED=7121 \
FORGE_LTX_AB_PROMPT="A locked-off medium-wide shot of an elderly Japanese ceramic artist ..." \
FORGE_LTX_AB_DUMP=outputs/ltx23-continuous/20260715T031626Z-decoded-quant-ab-smoke/media \
LD_LIBRARY_PATH=/home/aegisfang666/tools/cudnn-9.24.0.43/lib:${LD_LIBRARY_PATH:-} \
/usr/bin/time -v ./build-eng/ltx2_ab_eval
```

- Requested/actual variants: direct `nvfp4-rtn` / `nvfp4-rtn`; CFG-AWQ `nvfp4-awq-recipe` / `nvfp4-awq-recipe` with 420 AWQ sidecars; BF16 master / BF16 master path. SHA-256 values were respectively `5fa67764...ec3a6`, `57571a56...3d19`, and `b33b7fe4...af7cc`; full hashes and validation manifests are retained.
- Execution: one prompt, seed 7121, 320×192×17 at 24 fps, eight distilled steps/NFE/DiT forwards per variant; **24 DiT forwards total**. All three outputs were finite/non-degenerate; 17 tri-column decoded BMPs and a six-timepoint filmstrip were written.
- Same-seed decoded divergence: CFG-AWQ vs direct RTN PSNR `15.064 dB`; direct RTN vs BF16 `14.946 dB`; CFG-AWQ vs BF16 `13.656 dB`. Thus direct RTN was `1.289 dB` closer to BF16 than CFG-AWQ on this clip, reversing the all-sigma trace ranking. This is not proof that RTN looks better.
- QA proxies: mean adjacent-frame MSE was RTN `96.02`, CFG-AWQ `122.57`, BF16 `98.43`; clipped-pixel fraction was `1.63%`, `2.43%`, and `1.80%`. CFG-AWQ had higher Laplacian variance (`1287.6`) than RTN (`975.7`) and BF16 (`858.0`), which may represent detail or artifacts and requires visual review.
- Runtime: accepted attempt wall time `282.75 s`; max host RSS `5,236,808 KiB`; sampled utilization peaked at `88%` and temperature at `65°C`. GB10 unified-memory framebuffer usage remained unavailable from `nvidia-smi`. Ring cache retained 289.4 MiB (RTN), 289.8 MiB (AWQ), and 1025.4 MiB (BF16) under a 1536 MiB host budget.
- Two setup-only attempts are preserved: resident mode found only 6334 MiB largest reservable, then a 1024 MiB ring budget missed the BF16 requirement by 1 MiB. The corrected 1536 MiB run passed. These are setup failures, not model results.
- Spend: local `$0`; no remote resources. No Forge or auto-research source code changed.

Artifacts: `outputs/ltx23-continuous/20260715T031626Z-decoded-quant-ab-smoke/` (`cycle-summary.json`, `metrics.json`, exact commands, build/run/setup-failure logs, hashes/manifests, GPU telemetry, 17 decoded tri-column frames, and `media/p00_filmstrip.bmp`). Durable note: `wiki/experiments/ltx23-decoded-bf16-rtn-awq-smoke.md`.

**Next cheapest gate:** conduct an independent blind human/VLM review of the retained tri-column filmstrip/frames. Only if it yields a decisive preference, repeat the triad at 512×320×49 on one non-duplicate prompt/seed with encoded playable media and per-variant timing. Do not promote either quant recipe from trace or pixel metrics alone.

## Cycle 20260715T061710Z — blind local VLM review of decoded quant triad

**Status: PASS (review completed), INCONCLUSIVE (no preference).** Forge `main` was clean, fetched, and already synchronized with `origin/main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`. Open draft PRs #27, #26, and #17 do not duplicate this review. The local NVIDIA GB10 had no consequential compute process, so the current-source `ltx2_ab_eval` target was rebuilt (`ninja: no work to do`) and a blinded local Qwen3.6 VLM review was run against the retained 320×192×17 BF16/direct-RTN/CFG-AWQ smoke. No `gpu run` or remote spend occurred.

```bash
cmake --build build-eng --target ltx2_ab_eval -j2
/usr/bin/time -v python3 scripts/qwen36_vlm_score_sweep.py \
  --image outputs/ltx23-continuous/20260715T061710Z-blind-vlm-review/blind-contact-sheet.bmp \
  --output-dir outputs/ltx23-continuous/20260715T061710Z-blind-vlm-review/vlm \
  --variants A,B,C \
  --prompts 'frame0|frame3|frame6|frame9|frame12|frame16' \
  --ctx 8192 --n-predict 1024 --temp 0.1 --image-min-tokens 1024 --timeout 900
```

- Source execution retained from cycle `20260715T031626Z`: one prompt, seed 7121, 320×192×17 at 24 fps, eight executed steps/NFE/DiT forwards per variant and 24 total. This review cycle did not rerun generation.
- Requested/actual source variants: direct `nvfp4-rtn` / `nvfp4-rtn`; CFG-AWQ `nvfp4-awq-recipe` / `nvfp4-awq-recipe` with 420 sidecars; BF16 master / BF16 master. Full model SHA-256 values and validation manifests were copied into the review run.
- Blind sheet: columns A/B/C, rows frames 0/3/6/9/12/16; sheet SHA-256 `9448367117b509319805d21fcb5f5994902bfd3c72b1fa90cbb63e9e67af6e05`. The evaluator saw only A/B/C; reveal mapping was A = CFG-AWQ, B = direct RTN, C = BF16.
- Judge: local Qwen3.6-35B-A3B `UD-Q4_K_M` via `llama-mtmd-cli`. All three variants received visual quality `5/5`, prompt adherence `5/5`, identity consistency `5/5`, artifact severity `1/5`, and `usable_for_short=true`. The judge called differences minimal and selected all variants as safe.
- Verdict: the blind review executed successfully but yielded **no decisive preference**. This is not a recipe promotion and does not make the earlier pixel metrics a perceptual verdict.
- Runtime: 27.94 s wall; max host RSS 21,972,356 KiB; sampled GPU utilization peaked at 95% and temperature at 53°C. Spend: local `$0`.

Artifacts: `outputs/ltx23-continuous/20260715T061710Z-blind-vlm-review/` (`cycle-summary.json`, `metrics.json`, blind sheet/mapping manifest, raw and parsed VLM output, exact command, current-source build evidence, source and VLM model hashes, validation manifests, timing, and GPU telemetry). Durable note: `wiki/experiments/ltx23-blind-vlm-quant-review.md`.

**Next cheapest gate:** independent blind human or second-judge review of the retained full 17-frame triad. Because this judge tied all variants, do not scale to 512×320×49 yet. If the full review remains tied, run one second small non-duplicate prompt/seed triad before scaling.

## Cycle 20260715T064847Z — remote Comfy LTX-2.3 RTX 4090 fit control

**Status: BLOCKED (setup driver/runtime compatibility; no model evidence).** Forge `main` remained clean and synchronized with `origin/main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`; open draft PRs #27, #26, and #17 did not duplicate this public Comfy compatibility gate. Remote readiness passed, the RunPod key was available, there were zero pods before launch, and inventory advertised an RTX 4090. The dedicated staging project was 112 KiB excluding local venv/outputs, retained `[tool.setuptools] py-modules = []`, used an 80 GB workspace, and left `docker_image` unset.

The runner was first parameterized and covered by a new test so this cycle did not repeat the RTX 5090 prompt/seed. The full auto-research suite passed (`43 passed`). The exact source and staging runner SHA-256 matched at `319b5eaf2ef44ecbbd5fb8ab590bd562746f79f0263abd1f09a5eec7b4d7b32c`.

```bash
gpu run -y --gpu-type "NVIDIA GeForce RTX 4090" --sync \
  -o outputs/comfy-ltx23-real -- \
  bash -lc 'nvidia-smi --query-gpu=name,memory.total,compute_cap --format=csv,noheader; python3 scripts/bootstrap_uv.py; timeout 4500 .comfy-ltx23-runtime/uv-bin/uv run python scripts/run_comfy_ltx23_real.py --bootstrap-timeout 3600 --generation-timeout 1800 --seed 18427 --output-slug clockmaker --prompt "<clockmaker prompt>" --negative-prompt "<artifact exclusions>"'
```

- Actual device: `NVIDIA GeForce RTX 4090`, 24,564 MiB, compute capability `8.9`, in `EU-RO-1`; accepted rate `$0.69/h`, safely below the per-experiment cap under the 4500-second bound.
- The pinned ComfyUI/custom-node repositories cloned and 124 packages installed. Unpinned requirements selected PyTorch `2.13.0` and CUDA 13 packages.
- CUDA setup then failed because the provider host exposed NVIDIA driver version `12040` (CUDA 12.4 compatibility). PyTorch warned that the driver was too old, `torch.cuda.is_available()` was false, and the runner failed closed.
- No public model asset was downloaded, ComfyUI never started, the workflow was not submitted, executed scheduler steps/NFE were `0`, and no history, media, timing, contact sheet, decode, or quality evidence exists. This is a setup failure, not RTX 4090 LTX-2.3 fit evidence.
- Cycle spend delta: **`$0.106567`**. Prior setup retries were `$0.362175`, making all setup retries `$0.468742`; setup retries plus the accepted RTX 5090 control now total `$0.775642`. Historical staging-project spend after teardown was `$1.401000`.
- Teardown: cycle pod `s188r55qs6du29` was explicitly stopped. Final status reported `running_pods: 0`, `provisioning_pods: 0`, and account billing reported `live_pods: 0`.

Evidence: `outputs/ltx23-continuous/20260715T064847Z-remote-comfy-ltx23-rtx4090-fit/` (readiness/config/inventory, exact source hashes, GPU run and runner logs, generated workflow, accounting, stop receipt, and cycle summary). Durable note: `wiki/experiments/ltx23-remote-comfy-rtx4090-driver-blocked.md`.

**Next gate:** keep `docker_image` unset, pin a CUDA-12.4/driver-550-compatible PyTorch stack in the runner, verify the pin locally, and retry this same non-duplicate RTX 4090 fit control. Do not advance to the 6-prompt×4-seed matrix until the 24 GiB control reaches inference.

## Cycle 20260715T091647Z — second local decoded quant triad

**Status: PASS (diagnostic only; perceptual gate open).** Forge `main` was clean, fetched, and already synchronized with `origin/main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`. Open draft PRs #27, #26, and #17 did not duplicate this experiment. The local NVIDIA GB10 had no active compute process. Current-source `ltx2_ab_eval` was rebuilt (`ninja: no work to do`) and run on a new clockmaker prompt/seed; no `gpu run` or remote spend occurred.

```bash
cmake --build build-eng --target ltx2_ab_eval -j2
FORGE_LTX_AB_STREAMING=1 FORGE_LTX_AB_HOST_BUDGET_MIB=1536 \
FORGE_LTX_AB_A=/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.nvfp4.safetensors \
FORGE_LTX_AB_B=/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b.cfg-awq-nvfp4.safetensors \
FORGE_LTX_AB_C=/home/aegisfang666/models/forge/ltx-2.3/ltx-2.3-22b-distilled-1.1.safetensors \
FORGE_LTX_GEMMA_DIR=/home/aegisfang666/models/forge/gemma-3-12b \
FORGE_LTX_AB_SIZE=320x192x17 FORGE_LTX_AB_SEED=18427 \
FORGE_LTX_AB_PROMPT="A locked-off medium-wide shot of an elderly Swiss clockmaker ..." \
FORGE_LTX_AB_DUMP=/home/aegisfang666/auto-research/outputs/ltx23-continuous/20260715T091647Z-decoded-quant-ab-prompt2/media \
LD_LIBRARY_PATH=/home/aegisfang666/tools/cudnn-9.24.0.43/lib:${LD_LIBRARY_PATH:-} \
/usr/bin/time -v ./build-eng/ltx2_ab_eval
```

- Requested/actual variants: direct `nvfp4-rtn` / `nvfp4-rtn`; CFG-AWQ `nvfp4-awq-recipe` / `nvfp4-awq-recipe` with 420 sidecars; BF16 master / BF16 master. SHA-256 values were `5fa67764...ec3a6`, `57571a56...3d19`, and `b33b7fe4...af7cc`; full hashes and validation manifests are retained.
- Execution: one non-duplicate prompt, seed 18427, 320×192×17 at 24 fps, eight distilled steps/NFE/DiT forwards per variant; **24 DiT forwards total**. All outputs were finite/non-degenerate; 17 tri-column frames and a filmstrip/contact sheet were written.
- Decoded same-seed PSNR: direct RTN vs BF16 **17.324 dB**; CFG-AWQ vs BF16 **15.310 dB**; CFG-AWQ vs direct RTN 14.514 dB. Direct RTN was 2.013 dB closer to BF16, replicating the first clip's decoded-proximity ordering. This does not establish perceptual preference.
- QA proxies: mean adjacent-frame MSE was RTN `33.58`, CFG-AWQ `22.95`, and BF16 `20.16`; clipped-pixel fractions were `4.25%`, `4.15%`, and `3.66%`. RTN's largest adjacent-frame change was at boundary 16; CFG-AWQ and BF16 peaked at boundary 10. Contact/boundary frames are retained for review.
- Runtime: accepted attempt wall time `299.00 s`; max host RSS `4,351,332 KiB`; sampled GPU utilization peaked at `86%` and temperature at `60°C`. Per-variant warmed timing was not emitted by this harness; unified-memory framebuffer use was unavailable from `nvidia-smi`. BF16 ring staging retained 1025.4 MiB under the 1536 MiB budget.
- One setup-only attempt found 4.7 GiB free RAM after model page cache and failed with largest reservable 3952 MiB versus 7693 MiB needed. `POSIX_FADV_DONTNEED` evicted only the current model files, raised free RAM to 61 GiB, and the exact retry passed. The failed attempt is not model evidence.
- Spend: local `$0`; no Forge or auto-research source code changed.

Artifacts: `outputs/ltx23-continuous/20260715T091647Z-decoded-quant-ab-prompt2/` (`cycle-summary.json`, `metrics.json`, exact command/build/run/setup-failure logs, hashes/manifests, GPU telemetry, 17 tri-column boundary frames, and `media/p00_filmstrip.bmp`). Durable note: `wiki/experiments/ltx23-decoded-quant-ab-prompt2.md`.

**Next cheapest gate:** blind independent second-judge or human review across both complete 17-frame triads. If it remains tied, do not scale either quant recipe from pixel metrics; move to one bounded training-free endpoint/cache probe. A 512×320×49 triad remains gated on perceptual evidence.

## Cycle 20260715T121644Z — blind full-frame review of both local quant triads

**Status: PASS (review execution), INCONCLUSIVE (preference).** Forge `main` was clean, fetched, and synchronized with `origin/main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`. Open draft PRs #27, #26, #25, and #17 did not duplicate this evaluation. The local NVIDIA GB10 had no active compute process. Current-source `ltx2_ab_eval` was rebuilt (`ninja: no work to do`) before a local-only blinded Qwen3.6 VLM sweep; no `gpu run` or remote spend occurred.

```bash
cmake --build build-eng --target ltx2_ab_eval -j2
python3 outputs/ltx23-continuous/20260715T121644Z-blind-vlm-full-triads/make_blind_sheets.py
/usr/bin/time -v python3 scripts/qwen36_vlm_score_sweep.py \
  --image outputs/ltx23-continuous/20260715T121644Z-blind-vlm-full-triads/blind-prompt1-all17.bmp \
  --output-dir outputs/ltx23-continuous/20260715T121644Z-blind-vlm-full-triads/vlm-prompt1 \
  --variants A,B,C --prompts 'ceramic-artist frames 0 through 16; all rows are sequential frames' \
  --ctx 8192 --n-predict 1024 --temp 0.1 --image-min-tokens 4096 --timeout 900
/usr/bin/time -v python3 scripts/qwen36_vlm_score_sweep.py \
  --image outputs/ltx23-continuous/20260715T121644Z-blind-vlm-full-triads/blind-prompt2-all17.bmp \
  --output-dir outputs/ltx23-continuous/20260715T121644Z-blind-vlm-full-triads/vlm-prompt2 \
  --variants A,B,C --prompts 'clockmaker frames 0 through 16; all rows are sequential frames' \
  --ctx 8192 --n-predict 1024 --temp 0.1 --image-min-tokens 4096 --timeout 900
```

- Sources: the complete retained ceramic-artist seed 7121 and clockmaker seed 18427 triads, each 320×192×17 at 24 fps. Source generation executed eight distilled steps/NFE/DiT forwards per variant, 24 forwards per triad and 48 total. This review cycle executed `0` scheduler steps/NFE/DiT forwards.
- Requested/actual source variants remained direct `nvfp4-rtn` / `nvfp4-rtn`, CFG-AWQ `nvfp4-awq-recipe` / `nvfp4-awq-recipe` with 420 sidecars, and BF16 master / BF16 master. Full SHA-256 values and validation manifests are retained.
- Blind evidence: each sheet contains every frame 0–16 as rows and shuffled A/B/C columns. The evaluator saw labels only. Sheet SHA-256 values are `5d773789...33f1a` and `0fa826db...e9103`.
- Judge: local Qwen3.6-35B-A3B `UD-Q4_K_M` via `llama-mtmd-cli`. On both prompts, every variant scored visual quality `5/5`, prompt adherence `5/5`, identity consistency `5/5`, artifact severity `1/5`, and `usable_for_short=true`; all A/B/C variants were selected as equally safe.
- Verdict: both complete-triad reviews tied. This successfully closes the cheapest full-frame VLM gate but does **not** promote either quant recipe. It used the same VLM family as the earlier sparse-frame review, so human or different-model confirmation remains absent.
- Runtime: `93.28 s` total VLM wall time; max host RSS `21,972,140 KiB`; peak sampled GPU utilization `96%` and temperature `70°C`. GB10 unified-memory framebuffer usage remained unavailable from `nvidia-smi`. Spend: local `$0`.

Artifacts: `outputs/ltx23-continuous/20260715T121644Z-blind-vlm-full-triads/` (cycle/config/metrics JSON, exact commands, current-source build evidence, two full-frame blind sheets and mappings, all 34 source-frame hashes, raw/parsed judge outputs, source/model validation manifests, timing, and GPU telemetry). Durable note: `wiki/experiments/ltx23-blind-full-frame-quant-review.md`.

**Next cheapest gate:** do not scale the tied quant recipes. Run one bounded current-main training-free endpoint-decodability probe at conservative sigma index 5, preserving matched baseline-versus-exit latents/decoded sheets, actual NFE/forwards and wall time, and blind review. Keep the 512×320×49 quant triad gated absent a decisive perceptual signal.

## Cycle 20260715T125500Z — remote Comfy LTX-2.3 RTX 4090 CUDA-12.4 retry

**Status: PASS (24 GiB fit/mechanics screening only).** Forge `main` remained clean and synchronized with `origin/main` at `dc383a05cbc03dd07eeb865018d53a6cd3e177e1`; open draft PRs #27, #26, #25, and #17 did not duplicate this public Comfy gate. Remote readiness passed with zero pods before launch. The dedicated staging project was 116 KiB excluding local venv/outputs, retained `[tool.setuptools] py-modules = []`, used an 80 GB workspace, and left `docker_image` unset.

The runner was repaired to pin the official PyTorch 2.6.0 CUDA-12.4 wheel set and constrain the subsequent Comfy requirements resolution. A new regression test covers the pin; the full auto-research suite passed (`44 passed`). Exact source and staging runner SHA-256 matched at `c34989beeeb942cc62e2563b31191cf851115630fbbcbc10f2f63bf573db587f`.

```bash
gpu run -y --gpu-type "NVIDIA GeForce RTX 4090" --sync \
  -o outputs/comfy-ltx23-real -- \
  bash -lc 'nvidia-smi --query-gpu=name,memory.total,compute_cap,driver_version --format=csv,noheader; python3 scripts/bootstrap_uv.py; timeout 4500 .comfy-ltx23-runtime/uv-bin/uv run python scripts/run_comfy_ltx23_real.py --bootstrap-timeout 3600 --generation-timeout 1800 --seed 18427 --output-slug clockmaker --prompt "<clockmaker prompt>" --negative-prompt "<artifact exclusions>"'
```

- Actual device: `NVIDIA GeForce RTX 4090`, 24,564 MiB, compute capability `8.9`, driver `580.159.04`, region `EU-RO-1`; accepted rate `$0.69/h`.
- Runtime: Python 3.11.10, PyTorch `2.6.0+cu124` / CUDA 12.4, ComfyUI 0.27.0. The pin passed `torch.cuda.is_available()` and repaired the prior CUDA-13/old-driver setup failure.
- Workflow: new clockmaker prompt, seed 18427, 512×320×49 at 24 fps, CFG 1.0, official distilled schedule, **8 executed NFE**. Comfy history records success in **219.34 s**; the remote job was 1,152 s and end-to-end CLI time was 20m20s including fresh installs/downloads/sync.
- Fit: the 22B FP8 model loaded partially with 22,360.40 MB resident and 2.05 MB offloaded, then completed all eight denoising iterations. PyTorch 2.6 forced legacy ModelPatcher because current DynamicVRAM requires >=2.8, so this is compatibility proof rather than an optimized Ada performance baseline.
- Media: H.264 video and H.264/AAC mux synchronized. Independent PyAV decode produced 49/49 frames for both MP4s and 95 AAC frames at 48 kHz for the mux; an eight-frame contact sheet and SHA-256 manifest are retained.
- Source identity: four repository commits, five public model URLs, response ETags/content lengths, runner hash, workflow, history, and logs are retained. ETags are source identities, not independently computed full-file hashes.
- Warnings: optional `ComfyUI-LTXVideo` still fails on Kornia 0.8.3's missing `pad`; optional KJNodes TritonVAE lacked `setuptools`. Required core/KJ/VHS classes loaded and the submitted graph completed.
- Spend: this accepted retry cost **`$0.235942`**. Prior setup retries total `$0.468742`; accepted RTX 5090 control cost `$0.306900`; setup retries plus both accepted controls total **`$1.011583`**. Historical staging spend after teardown was `$1.636942`.
- Teardown: cycle pod `xmfuqadnndrhrm` was explicitly stopped. Final status showed `running_pods: 0`, `provisioning_pods: 0`, and billing `live_pods: 0`.

Evidence: `outputs/ltx23-continuous/20260715T125500Z-remote-comfy-ltx23-rtx4090-cu124/`. Durable note: `wiki/experiments/ltx23-remote-comfy-rtx4090-cu124-pass.md`.

**Next remote gate:** parameterize the 6-prompt×4-seed 512p matrix and hard 1024p subset, but launch it only after the current local endpoint-decodability probe supplies a promotion signal and the matrix has explicit stop criteria. Do not infer a quality tier from this single clip.
