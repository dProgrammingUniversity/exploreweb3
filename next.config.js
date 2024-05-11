/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'exploresol.xyz',
            },
          ],
          destination: 'https://exploresolana.com/:path*',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  