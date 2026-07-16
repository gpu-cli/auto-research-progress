import test from 'node:test';
import assert from 'node:assert/strict';
import { paginateJournal } from '../src/lib/journal-pagination.mjs';

test('paginateJournal emits stable cursor pages without losing entries', () => {
  const entries = Array.from({ length: 25 }, (_, index) => ({ id: `entry-${index + 1}` }));

  const pages = paginateJournal(entries, 10);

  assert.equal(pages.length, 3);
  assert.deepEqual(pages.map((page) => page.cursor), ['1', '2', '3']);
  assert.deepEqual(pages.map((page) => page.nextCursor), ['2', '3', null]);
  assert.deepEqual(pages.map((page) => page.entries.length), [10, 10, 5]);
  assert.deepEqual(pages.flatMap((page) => page.entries), entries);
});
