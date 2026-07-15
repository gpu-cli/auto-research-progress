---
title: "Auto Research LLM Wiki Overview"
description: "Team-shareable status for the Karpathy-style LLM wiki maintained by Hermes."
date: "2026-07-15T13:58:08.026Z"
kind: note
status: published
tags: []
---

# Auto Research LLM Wiki Overview

Team-shareable status for the Karpathy-style LLM wiki maintained by Hermes.

## What this is
- A persistent, compounding markdown knowledge base, not throwaway RAG.
- Raw sources stay immutable; Hermes maintains synthesis pages and cross-links.
- Query it through Hermes, `wiki/index.md`, or `auto-research wiki query`.

## Current counts
- Comparisons: 0
- Concepts: 2
- Entities: 0
- Experiments: 20
- Papers: 38
- Queries: 13
- Sources: 15
- Total pages: 88
- Graph edges: 261

## How to query now
```bash
uv run python -m auto_research.cli wiki query --wiki wiki "diffusion llm benchmark"
```

Or ask Hermes in Slack; Hermes will orient on `SCHEMA.md`, `index.md`, recent `log.md`, search relevant pages, and cite wiki paths.

## Recent activity
- [2026-07-15] query | Forge research digest
- [2026-07-15] lint | 6 issue(s) found
- [2026-07-15] lint | 0 issue(s) found
- [2026-07-15] update | Forge reflection: blind quant review becomes an identity-bound evidence row
- [2026-07-15] lint | 0 issue(s) found
- [2026-07-15] lint | 0 issue(s) found
- [2026-07-15] lint | 0 issue(s) found
- [2026-07-15] ingest | Seriality Gap and Forge digest refresh
- [2026-07-15] lint | 7 issue(s) found
- [2026-07-15] lint | 0 issue(s) found

## Key files
- `wiki/SCHEMA.md` — operating rules and page conventions.
- `wiki/index.md` — content catalog.
- `wiki/log.md` — append-only activity log.
- `site/wiki-graph.md` — extracted wikilink graph.
