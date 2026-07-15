---
title: "Auto-research process improvements after the x-Prediction/TJS win"
description: "The x-Prediction/TJS thread was unusually productive because it combined four loops tightly:"
date: "2026-07-08T22:24:55.538Z"
kind: experiment
status: published
tags: []
---

# Auto-research process improvements after the x-Prediction/TJS win

## Why this run worked

The x-Prediction/TJS thread was unusually productive because it combined four loops tightly:

1. **Discovery and triage** — identify a paper that matched the current research profile and had a concrete, testable claim.
2. **Parallel investigation** — split paper/code scouting, local feasibility, and harness design into subagents.
3. **Local-first execution** — validate on Spark before any remote GPU spend.
4. **Durable capture** — write code, benchmark outputs, wiki notes, reports, and Slack-facing summaries.

The key meta-pattern is: **paper claim → smallest executable hypothesis → local smoke → expanded benchmark → porting brief**.

## Proposed upgraded research loop

For every promising paper/method, use this standard pipeline.

### Stage 0 — Candidate intake

Inputs:

- arXiv/recent papers
- HF model releases
- GitHub repos
- user-supplied links/screenshots
- blog/RSS discoveries

Filter for:

- desktop/server diffusion or LLM relevance
- video generation, character consistency, inference acceleration, quantization, distillation
- concrete measurable claim
- runnable code, pseudocode, or implementable algorithm
- local Spark feasibility or clear remote-GPU path

Output:

- `wiki/papers/<slug>.md`
- a short experiment hook section
- score against `research_profile.yaml`

### Stage 1 — Three-subagent fanout

For any candidate above threshold, dispatch three independent workers:

1. **Paper/code scout**
   - paper formulas
   - implementation details
   - released repo/model/checkpoints
   - exact claims and baselines
   - missing-code risks

2. **Feasibility scout**
   - local Spark requirements
   - dependency stack
   - model size / VRAM / disk
   - whether `gpu` remote path is needed
   - possible proxy/tiny smoke path

3. **Harness designer**
   - baseline vs intervention variants
   - prompt/seed/dataset matrix
   - metrics
   - output layout
   - success/failure criteria
   - report template

Output:

- `.hermes/plans/<date>-<method>-harness.md`
- `wiki/experiments/<method>.md`

### Stage 2 — Local Spark smoke

Before remote GPUs:

- create isolated env when heavyweight deps are needed
- verify CUDA and model class availability
- run tiny/proxy test first
- run one real primary-model smoke
- save outputs and a contact sheet

Output:

- `outputs/<experiment>/<run_id>/`
- `metrics.jsonl`, `summary.json`, images/contact sheet
- update `site/research-journal.md`

### Stage 3 — Expanded benchmark

If smoke passes:

- run prompt/seed/variant matrix
- include negative-control/canary variants where useful
- compute basic metrics and visual sheets
- include human-readable interpretation

Output:

- `site/experiments/<method>-benchmark.md`
- `wiki/experiments/<method>.md`
- artifacts under `outputs/`

### Stage 4 — Porting / implementation brief

If the result is promising:

- write agent-ready implementation brief
- include pseudocode, exact conventions, failure modes, validation checklist
- attach to Slack

Output:

- `site/experiments/<method>-implementation-agent-brief.md`

### Stage 5 — Remote GPU promotion when `gpu` works

Only after local Spark smoke or a strong reason:

1. Run:

```bash
gpu prime
gpu doctor --json
gpu config show --json
gpu run --help
```

2. Gate on budget/approval.
3. Run remote jobs with `uv`, synced outputs, and no inline secrets.
4. Pull outputs into `outputs/`, publish a report, update wiki/journal.

## Needed toolkit upgrades

### 1. Experiment queue

Add a structured queue file:

```text
experiments/queue.yaml
```

Fields:

```yaml
- id: x-prediction-z-image-tjs
  status: completed-smoke | benchmarked | porting | remote-candidate
  paper: 2607.06114v1
  priority: high
  owner: hermes
  local_status: passed
  remote_status: not-needed
  next_action: port to Windows engine
  report: site/experiments/x-prediction-tjs-z-image-turbo-extensive-benchmark.md
```

### 2. Standard benchmark schema

Use the same schema across methods:

```text
metrics.jsonl
summary.json
variant_stats.csv
contact_sheet.png
BENCHMARK_REPORT.md
IMPLEMENTATION_BRIEF.md
```

### 3. Promotion rubric

A method graduates from paper to benchmark if:

- claim is measurable
- local smoke is feasible
- expected speed/quality/consistency gain matters
- implementation complexity is bounded
- failure would still teach us something

### 4. Scheduled discovery should emit experiments, not just papers

Periodic research should not only say “interesting paper.” It should output:

```text
candidate experiment cards
estimated local cost
needed dependencies
baseline command
success metric
```

### 5. GPU-ready remote lane

Once `gpu` works, add two remote lanes:

- **small remote validation**: one GPU, one-hour cap, exact synced outputs
- **expanded benchmark**: only after small remote passes

Remote lane must always record:

- command
- GPU type/count
- budget cap
- output path
- result summary
- whether local Spark reproduced the direction first

## Near-term experiment ideas from current wiki focus

1. **Video TJS feasibility**
   - Apply TJS endpoint decode to a small video diffusion/DiT pipeline.
   - Measure flicker, identity, motion smoothness.
   - Start with conservative exits: 60%, 80%, then 40%.

2. **Character-consistency benchmark harness**
   - Prompt matrix around the same character across scene/action/reflection changes.
   - Score with face/CLIP/DINO embedding consistency if available.
   - Useful for Z-Image, video, and LoRA methods.

3. **Quantized Z-Image-Turbo + TJS interaction**
   - Test whether Q4/Q5/GGUF or lower precision preserves TJS gains.
   - Important for desktop/server deployment.

4. **Step-distillation/pruning paper reproduction triage**
   - Bridge pruning + teacher-aligned repair paper has concrete speed/quality claims.
   - Start with tiny proxy before any remote train.

## Operating rule of thumb

The best research unit for us is not “a paper summary.” It is:

```text
one paper claim + one executable hypothesis + one benchmark artifact + one implementation brief
```

That is what made x-Prediction/TJS valuable and repeatable.
