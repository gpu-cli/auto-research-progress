import type { APIRoute, GetStaticPaths } from 'astro';
import { getJournal, JOURNAL_PAGE_SIZE, toJournalCard, type JournalCard } from '../../lib/journal';
import { paginateJournal } from '../../lib/journal-pagination.mjs';

interface JournalManifest {
  cursor: string;
  nextCursor: string | null;
  entries: JournalCard[];
}

export const getStaticPaths = (async () => {
  const { remaining } = await getJournal();
  const cards = remaining.map(toJournalCard);
  const pages = paginateJournal(cards, JOURNAL_PAGE_SIZE) as JournalManifest[];

  return pages.slice(1).map((page) => ({
    params: { cursor: page.cursor },
    props: { page },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const { page } = props as { page: JournalManifest };
  return new Response(JSON.stringify(page), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=31536000, immutable',
    },
  });
};
