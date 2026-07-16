const CANONICAL_HOST = 'auto-research-private.pages.dev';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname !== CANONICAL_HOST) {
      url.protocol = 'https:';
      url.host = CANONICAL_HOST;
      return Response.redirect(url.toString(), 307);
    }

    return env.ASSETS.fetch(request);
  },
};
