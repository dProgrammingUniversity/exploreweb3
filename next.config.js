/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "exploreweb3.xyz", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/directory/:path*',
        destination: '/projects/:path*',
        permanent: true, // This indicates that the redirect is permanent (301)
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'exploresol.xyz' }],
        destination: 'https://exploreweb3.xyz/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'exploresolana.com' }],
        destination: 'https://exploreweb3.xyz/:path*',
        permanent: true,
      },
      {
        source: '/Discord',
        destination: 'https://dprogramminguniversity.com/discord',
        permanent: true,
      },
      {
        source: '/X',
        destination: 'https://x.com/ExploreWeb3xyz',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
