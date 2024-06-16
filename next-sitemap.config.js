// /next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://exploresolana.com',
    generateRobotsTxt: false,
    sitemapSize: 500,
    generateIndexSitemap: true,
    exclude: ['/dashboard/*'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: [
            '/dashboard',
            '/dashboard/admin',
            '/dashboard/create-listings',
            '/dashboard/favorites',
            '/dashboard/moderator',
            '/dashboard/profile',
            '/dashboard/update-password',
            '/dashboard/user',
          ],
        },
      ],
      additionalSitemaps: [
        `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/index.xml`,
      ],
    },
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    },
  };
  

  