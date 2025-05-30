/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: ['cxlus.com'],
  },
  // Basic asset handling
  webpack: (config) => {
    return config;
  },
  // Optimized cache control with specific favicon handling
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
        ],
      },
      {
        source: '/favicon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/png',
          },
        ],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/png',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 