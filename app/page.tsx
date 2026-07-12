import fs from 'node:fs';
import path from 'node:path';

export default function HomePage() {
  const source = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  const withoutInlineScript = body.replace(/<script\s+src=["']script\.js["']\s*><\/script>/i, '');

  return <div dangerouslySetInnerHTML={{ __html: withoutInlineScript }} />;
}
