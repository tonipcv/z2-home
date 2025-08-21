/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  images: {
    domains: ['zuzz.org'],
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
  async redirects() {
    return [
      { source: '/home-2', destination: '/', permanent: true },
      { source: '/2backupt', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/demo', destination: '/', permanent: true },
      { source: '/partners', destination: '/', permanent: true },
      { source: '/pricing', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig 