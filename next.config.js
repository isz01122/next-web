/** @type {import('next').NextConfig} */

const env = process.env.WEB_NODE_ENV;

const nextConfig = {
  distDir: './.next',
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    WEB_API_URL: process.env.WEB_API_URL,
    WEB_NODE_ENV: process.env.WEB_NODE_ENV,
  },
  compiler: {
    styledComponents: true,
    removeConsole: env === 'production',
  },

  async rewrites() {
    const targetUrl = '';
    return [
      {
        source: '/v1/:path*',
        destination: `${targetUrl}/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
