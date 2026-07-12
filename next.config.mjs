const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '';

const nextConfig = {
  output: 'export',
  basePath,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
