---
title: "Forge CFG-aware quantization diagnostic — LTX-2.3"
description: "Date: 2026-07-10  \nBackend: local DGX Spark GB10  \nGPU spend: $0  \nMode: trace-only; no scheduler updates or decoded pixels"
date: "2026-07-12T16:33:15.976Z"
kind: report
status: published
tags: []
---

# Forge CFG-aware quantization diagnostic — LTX-2.3

**Date:** 2026-07-10  
**Backend:** local DGX Spark GB10  
**GPU spend:** $0  
**Mode:** trace-only; no scheduler updates or decoded pixels

Forge now has a deterministic diagnostic that compares a reference and candidate LTX-2.3 DiT on identical conditional and unconditional inputs. It reports cosine and MSE for both branches, their CFG gap, and the final guided prediction.

## BF16 reference comparisons

| Candidate | Conditional cosine / MSE | Unconditional cosine / MSE | Gap cosine / MSE | Guided cosine / MSE |
|---|---:|---:|---:|---:|
| Direct NVFP4 | 0.860020 / 0.476275 | 0.872612 / 0.397973 | 0.472132 / 0.733718 | **0.591825 / 5.035187** |
| Official combined FP8 | 0.732365 / 0.902520 | 0.775624 / 0.721361 | 0.057683 / 0.949655 | **0.287222 / 6.962770** |

Guided error is much larger than either individual branch error. FP8 ranks worse than NVFP4 on this synthetic random-context trace even though prior prompt-conditioned render matrices favor combined FP8. The trace therefore exposes numerical behavior but must not be treated as a standalone perceptual-quality ranking.

## Control and caveat

The candidate-vs-itself control returned exact cosine `1.0` and MSE `0.0` for every signal. The evaluated fixture uses deterministic random latent/context tensors at one sigma; it is a numerical stress trace, not a production prompt or perceptual-quality verdict.

## Artifacts

- `outputs/forge-cfg-quant-guided-error/metrics.json`
- `outputs/forge-cfg-quant-guided-error/self-control.json`
- `outputs/forge-cfg-quant-guided-error/fp8-metrics.json`
- `outputs/forge-cfg-quant-guided-error/fp8-self-control.json`
- `wiki/experiments/forge-cfg-aware-quantization-trace-ltx23.md`

Next: run prompt-conditioned traces over all eight LTX sigmas for RTN/AWQ/recipe variants and correlate guided error with render review.

## Promotion status — 2026-07-12

The merged v2 diagnostic was revalidated locally: focused CFG/AWQ-plan tests passed 2/2 and a prompt-conditioned direct-NVFP4 same-artifact control was exact across all eight production sigmas for conditional, unconditional, CFG-gap, and guided output (`cosine=1`, `MSE=0`). The output is `outputs/forge-cfg-quant-strict-identity-20260712/self-control.json`.

Promotion remains **blocked**, not failed: matched RTN and CFG-aware AWQ artifacts from the same BF16 source and matched decoded trajectory/contact-sheet identity review are absent. No recipe ranking or perceptual claim is made from the trace-only (`trajectory:false`) control.
