import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../public/_worker.js';

const canonical = 'auto-research-private.pages.dev';

function assets() {
  return {
    ASSETS: {
      fetch: async (request) => new Response(`asset:${new URL(request.url).pathname}`),
    },
  };
}

test('canonical Pages hostname serves the requested static asset', async () => {
  const response = await worker.fetch(new Request(`https://${canonical}/journal/2.json`), assets());
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'asset:/journal/2.json');
});

test('deployment and branch hostnames redirect through the Access-protected canonical hostname', async () => {
  const response = await worker.fetch(
    new Request('https://c8f7dbf7.auto-research-private.pages.dev/progress/example/?view=full'),
    assets(),
  );
  assert.equal(response.status, 307);
  assert.equal(response.headers.get('location'), `https://${canonical}/progress/example/?view=full`);
});
