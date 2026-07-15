#!/usr/bin/env node
import { cp, mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const source = resolve(process.env.AUTO_RESEARCH_SOURCE ?? join(root, '..', 'auto-research', 'site'));
const contentTarget = join(root, 'src', 'content', 'progress');
const assetTarget = join(root, 'public', 'assets');

function truncate(text, maximum = 240) {
  if (text.length <= maximum) return text;
  const clipped = text.slice(0, maximum + 1);
  const boundary = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, boundary > maximum * 0.7 ? boundary : maximum).trim()}…`;
}

if (!existsSync(source)) {
  console.log(`[sync-content] Source not found at ${source}; using committed content.`);
  process.exit(0);
}

await mkdir(contentTarget, { recursive: true });
await mkdir(assetTarget, { recursive: true });

const files = [];
async function walk(dir) {
  const { readdir } = await import('node:fs/promises');
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, item.name);
    if (item.isDirectory()) await walk(full);
    else files.push(full);
  }
}
await walk(source);

const markdown = files.filter((file) => ['.md', '.mdx'].includes(extname(file)) && basename(file) !== 'index.md');
for (const file of markdown) {
  const rel = relative(source, file);
  const destination = join(contentTarget, rel);
  await mkdir(dirname(destination), { recursive: true });
  let body = await readFile(file, 'utf8');
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? basename(file, extname(file)).replaceAll('-', ' ');
  const paragraph = body.split(/\n\s*\n/).map((part) => part.replace(/[#*_`>\[\]]/g, '').replace(/\([^)]*\)/g, '').trim()).find((part) => part.length > 70 && !part.startsWith('|') && !part.startsWith('!')) ?? 'Research progress report and supporting evidence.';
  const gitDate = spawnSync('git', ['-C', source, 'log', '-1', '--format=%cI', '--', file], { encoding: 'utf8' }).stdout.trim();
  const modified = gitDate || (await stat(file)).mtime.toISOString();
  const kind = rel.startsWith('experiments/') || /experiment|benchmark|smoke/i.test(h1) ? 'experiment' : /paper/i.test(h1) ? 'paper' : /wiki|journal|notes?/i.test(h1) ? 'note' : 'report';
  if (!body.startsWith('---\n')) {
    body = `---\ntitle: ${JSON.stringify(h1)}\ndescription: ${JSON.stringify(truncate(paragraph))}\ndate: ${JSON.stringify(modified)}\nkind: ${kind}\nstatus: published\ntags: []\n---\n\n${body}`;
  }
  body = body
    .replace(/\]\((?:\.\.\/)?assets\//g, '](/assets/')
    .replace(/(src=["'])(?:\.\.\/)?assets\//g, '$1/assets/');
  await writeFile(destination, body);
}

const sourceAssets = join(source, 'assets');
if (existsSync(sourceAssets)) await cp(sourceAssets, assetTarget, { recursive: true, force: true });
console.log(`[sync-content] Imported ${markdown.length} Markdown entries; assets are append-only.`);
