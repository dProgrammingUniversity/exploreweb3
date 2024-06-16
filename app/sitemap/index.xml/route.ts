// /app/sitemap/index.xml/route.ts

import { getServerSideSitemapIndex } from 'next-sitemap';

export async function GET(request: Request) {
  // Define the static sitemap URLs
  const sitemaps = [
    `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/directory-listings.xml`,
    // `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap/directory-category.xml`,
  ];

  // Generate and return the sitemap index
  return getServerSideSitemapIndex(sitemaps);
}
