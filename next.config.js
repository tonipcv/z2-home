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
        source: '/:path*', // General catch-all for other paths
        headers: [
          {
            key: 'Cache-Control',
            // Default cache policy for most assets
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 