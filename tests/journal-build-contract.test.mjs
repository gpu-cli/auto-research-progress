import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('static build exposes an initial journal batch and a cursor manifest', async () => {
  const homepage = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const renderedHomepage = homepage.split('<template id="journal-row-template">')[0];
  const initialRows = renderedHomepage.match(/<article class="journal-row"/g) ?? [];

  assert.equal(initialRows.length, 12);
  assert.match(homepage, /data-next-cursor="2"/);
  assert.match(homepage, /class="journal-sentinel"/);

  const response = JSON.parse(await readFile(new URL('../dist/journal/2.json', import.meta.url), 'utf8'));
  assert.equal(response.cursor, '2');
  assert.equal(response.nextCursor, null);
  assert.ok(response.entries.length > 0 && response.entries.length <= 12);
  assert.ok(response.entries.every((entry) => entry.url.startsWith('/progress/')));
});
