import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles.css';
import '../overrides.css';

export const metadata: Metadata = {
  title: 'Awais Anwar — Full-stack engineer for AI products',
  description: 'Awais Anwar builds production AI systems, automation platforms, and real-time products.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '';

  return (
    <html lang="en" data-theme="dark">
      <body>{children}<Script src={`${basePath}/script.js`} strategy="afterInteractive" /></body>
    </html>
  );
}
