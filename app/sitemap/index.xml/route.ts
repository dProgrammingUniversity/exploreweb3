// /app/sitemap/index.xml/route.ts

import { getServerSideSitemapIndex } from 'next-sitemap';

export async function GET(request: Request) {
  // Define the static sitemap URLs
  const sitemaps = [
    `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/projects-listings.xml`,
    `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/blinks-listings.xml`,
    // `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/projects-category.xml`,
  ];

  // Generate and return the sitemap index
  return getServerSideSitemapIndex(sitemaps);
}
