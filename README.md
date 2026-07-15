# Research Progress

A high-quality, append-only progress journal for the Forge auto-research loop. Built with [Astro](https://astro.build), project-local [Impeccable](https://github.com/pbakaus/impeccable) design guidance, and the owned [shadcn/typeset](https://ui.shadcn.com/docs/typeset) stylesheet.

## Local development

```bash
npm install
npm run sync
npm run dev
```

`npm run sync` imports Markdown and assets from `../auto-research/site` by default. Override it with `AUTO_RESEARCH_SOURCE=/path/to/site`. The sync is deliberately append-only: missing upstream entries are not deleted from this repository.

## Content

Plain Markdown works without frontmatter. The sync script adds inferred metadata to copied entries. For richer entries, add frontmatter:

```yaml
---
title: Spectrum + TJS full-stack comparison
description: Five matched 1024px visual comparisons.
date: 2026-07-15
kind: experiment
status: published
tags: [diffusion, z-image, performance]
featured: true
media:
  - type: comparison
    src: /assets/spectrum/reference.png
    before: /assets/spectrum/reference.png
    after: /assets/spectrum/candidate.png
    alt: Matched reference and candidate generations
    caption: Seed 0, 1024×1024, warmed runs.
  - type: video
    src: https://media.example.com/clip.mp4
    poster: /assets/posters/clip.webp
  - type: stream
    src: https://customer-CODE.cloudflarestream.com/VIDEO_ID/iframe
---
```

Standard Markdown images continue to work. HTML `<video controls>` also works in Markdown; use MDX when an entry needs custom Astro components.

## Cloudflare deployment

```bash
npm run build
npx wrangler deploy
```

Recommended split:

- **Workers static assets** for the Astro HTML/CSS/JS and small immutable images (25 MiB maximum per file).
- **Cloudflare Images** for generated image delivery, transformations, responsive variants, and direct uploads.
- **R2** for originals, downloadable artifacts, datasets, and large/numerous files without egress charges.
- **Cloudflare Stream** for review video: upload/encoding, adaptive bitrate playback, posters, captions, analytics, and signed URLs.

Keep stable media URLs in frontmatter. That decouples the permanent journal from where the artifact is stored.

## Quality gates

```bash
npm run check
npm run build
npm run design:audit
```
