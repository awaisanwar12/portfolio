import { access, cp, mkdir, rm } from 'node:fs/promises';

async function exists(file) {
  try { await access(file); return true; } catch { return false; }
}

if (await exists('out')) {
  await rm('dist', { recursive: true, force: true });
  await cp('out', 'dist', { recursive: true });
}

await mkdir('dist/server', { recursive: true });
await cp('server/index.js', 'dist/server/index.js');
await mkdir('dist/.openai', { recursive: true });
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
