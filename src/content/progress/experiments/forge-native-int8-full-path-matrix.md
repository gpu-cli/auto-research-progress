---
title: "Forge Native INT8 Full-Path Matrix"
description: "Completed 2026-07-13 UTC on Forge adfa4c35. Production-style BF16→INT8 cast, native cuBLASLt GEMM, and scaled BF16 output; 5 warmups + 20 measured iterations."
date: "2026-07-13T05:33:23.749Z"
kind: experiment
status: published
tags: []
---

# Forge Native INT8 Full-Path Matrix

> Completed 2026-07-13 UTC on Forge `adfa4c35`. Production-style BF16→INT8 cast, native cuBLASLt GEMM, and scaled BF16 output; 5 warmups + 20 measured iterations.

## Team verdict

**RTX 4090 and RTX 5090 are strong candidates for real-model W8A8 integration.** The complete current Forge linear path—not merely INT32 accumulation—was at least 2× faster than BF16 on every real LTX/Z-Image projection shape tested. A40 is useful but needs shape-aware dispatch. GB10 should stay on BF16/NVFP4 under this implementation.

| GPU | Six-shape full-path range | Weighted LTX proxy | Weighted Z-Image proxy | Numerical floor |
|---|---:|---:|---:|---:|
| GB10 | 0.77–0.91× | 0.86× | 0.88× | cosine ≥0.999992 |
| A40 | 1.03–1.48× | 1.25× | 1.38× | cosine ≥0.999991 |
| RTX 4090 | **2.02–2.63×** | **2.35×** | **2.20×** | cosine ≥0.999989 |
| RTX 5090 | **2.08–2.46×** | **2.26×** | **2.18×** | cosine ≥0.999992 |

The weighted proxies sum one attention projection plus FFN up/down. They are not whole-model forecasts.

## Why this matters for Forge

- **Ada is the practical target:** the 4090 delivered the best weighted result and cleared every gate without exposing unsupported Blackwell-only NVFP4 features.
- **Blackwell should not exclude INT8:** the 5090 full path remained above 2× for every shape, so future policy should compare actual INT8 and NVFP4 model evidence.
- **Ampere needs selective dispatch:** A40 FFNs and Z-Image projections cleared the 1.15× gate, while LTX attention was neutral.
- **Integrated overhead changes conclusions:** raw INT8 accumulation looked strong on GB10, but cast/dequant/chunking made the production sequence 13–16% slower in weighted proxies.

## Evidence boundary

This is verified native execution with exact INT8 accumulation and high-cosine BF16 output, but it is not decoded inference. The tensors are deterministic and synthetic; weights start as INT8 and are reconstructed for the BF16 baseline. The next gate must use real checkpoint weights and activations, warmed Forge stage attribution, unchanged NFE, and the established 6-prompts×4-seeds 512px plus hard-1024px VLM/human matrix.

## Cost and teardown

- Full-path remote matrix: **$0.12941389**
- Total including the earlier accumulation screen/setup attempts: **$0.25626667**
- Final provider state: **0 running pods, $0/hr**
- Rates: A40 `$0.44/hr`, RTX 4090 `$0.69/hr`, RTX 5090 `$0.99/hr`

## Reproducibility

- Durable record: `wiki/experiments/forge-native-int8-full-path-architecture-matrix.md`
- Machine results: `/home/aegisfang666/workspace/worktrees/forge-native-int8-matrix/results/native-int8-full-path-matrix/`
- Logs, stop receipts, source patch, manifest, local control: `artifacts/native-int8-full-path-matrix-2026-07-13/`
- Source manifest SHA-256: `0b765274e6701b99e763b9e5a335e0c7985621a278a06f10e00c9f9539587990`
