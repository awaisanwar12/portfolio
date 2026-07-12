export default {
  async fetch(request, env) {
    if (env?.ASSETS?.fetch) return env.ASSETS.fetch(request);
    return new Response('Awais Anwar portfolio', { status: 200 });
  },
};
