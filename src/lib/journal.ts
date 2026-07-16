import { getCollection, type CollectionEntry } from 'astro:content';

export const JOURNAL_PAGE_SIZE = 12;

type ProgressEntry = CollectionEntry<'progress'>;

export interface JournalCard {
  id: string;
  url: string;
  index: string;
  title: string;
  summary: string;
  kind: ProgressEntry['data']['kind'];
  status: ProgressEntry['data']['status'];
  date?: string;
  dateShort: string;
  image?: string;
}

export function titleOf(entry: ProgressEntry) {
  return entry.data.title ?? (entry.body ?? '').match(/^#\s+(.+)$/m)?.[1] ?? entry.id;
}

function truncateAtWord(value: string, limit: number) {
  if (value.length <= limit) return value;
  const candidate = value.slice(0, limit + 1);
  const boundary = candidate.lastIndexOf(' ');
  return `${candidate.slice(0, boundary > limit * 0.7 ? boundary : limit).trimEnd()}…`;
}

export function summaryOf(entry: ProgressEntry) {
  if (entry.data.description) return entry.data.description;
  const paragraphs = (entry.body ?? '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/[#*_`>\[\]]/g, '').replace(/\([^)]*\)/g, '').trim());
  const summary = paragraphs.find((paragraph) => paragraph.length > 70 && !paragraph.startsWith('|') && !paragraph.startsWith('!'));
  return summary ? truncateAtWord(summary, 210) : 'Research note and supporting evidence.';
}

export function imageOf(entry: ProgressEntry) {
  const media = entry.data.media.find((item) => item.type === 'image' || item.type === 'comparison');
  if (media) return media.src;
  const match = (entry.body ?? '').match(/!\[[^\]]*\]\(([^)]+\.(?:png|jpe?g|webp|avif|bmp))(?:\s+"[^"]*")?\)/i);
  if (!match) return undefined;
  return match[1].replace(/^\.\.\/assets\//, '/assets/').replace(/^assets\//, '/assets/');
}

export function dateOf(entry: ProgressEntry) {
  return entry.data.date ?? entry.data.updated;
}

export function toJournalCard(entry: ProgressEntry, index: number): JournalCard {
  const date = dateOf(entry);
  return {
    id: entry.id,
    url: `/progress/${entry.id}/`,
    index: String(index + 1).padStart(2, '0'),
    title: titleOf(entry),
    summary: summaryOf(entry),
    kind: entry.data.kind,
    status: entry.data.status,
    date: date?.toISOString(),
    dateShort: date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }) ?? 'Undated',
    image: imageOf(entry),
  };
}

export async function getJournal() {
  const entries = (await getCollection('progress')).sort((a, b) => {
    const ad = dateOf(a) ?? new Date(0);
    const bd = dateOf(b) ?? new Date(0);
    return bd.valueOf() - ad.valueOf();
  });
  const featured = entries.find((entry) => entry.data.featured) ?? entries.find((entry) => imageOf(entry)) ?? entries[0];
  const remaining = entries.filter((entry) => entry !== featured);
  return { entries, featured, remaining };
}
