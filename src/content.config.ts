import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mediaItem = z.object({
  type: z.enum(['image', 'video', 'stream', 'comparison']),
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  poster: z.string().optional(),
  before: z.string().optional(),
  after: z.string().optional(),
});

const progress = defineCollection({
  loader: glob({ base: './src/content/progress', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    kind: z.enum(['report', 'experiment', 'paper', 'note']).default('report'),
    status: z.enum(['published', 'running', 'planned', 'blocked']).default('published'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    media: z.array(mediaItem).default([]),
  }),
});

export const collections = { progress };
