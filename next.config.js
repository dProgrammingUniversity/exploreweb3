/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          // Redirect all paths to the new domain
          source: '/:path*',
          destination: 'https://exploresolana.com/:path*',
          permanent: true,
        }
      ];
    },
  };
  
  module.exports = nextConfig;
  