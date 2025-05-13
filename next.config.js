/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: ['med1.app'],
  },
  // Properly handle favicons and static assets
  webpack: (config) => {
    config.plugins = config.plugins || [];
    
    // Disable the default favicon handling
    config.module.rules.push({
      test: /\.(ico|png)$/i,
      type: 'asset/resource',
    });
    
    return config;
  },
  // Ensure static assets are handled correctly with proper caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
      {
        source: '/:path*.ico',
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