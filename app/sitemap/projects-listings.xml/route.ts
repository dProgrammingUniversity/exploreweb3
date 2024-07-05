// /app/sitemap/projects-listings.xml/route.ts

import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  // Parse query parameters from the request URL
  const { searchParams } = new URL(request.url);
  const sitemapIndex = searchParams.get('sitemapIndex');

  // Initialize the Supabase client
  const supabaseClient = createClient();

  // Fetch the listings data from the Supabase database
  const { data: listings } = await supabaseClient
    .from('listings')
    .select('slug, updated_at')
    .eq('moderation_status', 'approved');

  // Handle the case where no listings are found
  if (!listings) {
    return new Response('<error>No projects listings found</error>', {
      status: 404,
      headers: {
        'Content-Type': 'text/xml'
      }
    });
  }

  // Sort listings by updated_at in descending order to ensure the most recently updated listings appear first
  listings.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  // Map the listings to the ISitemapField format required by next-sitemap
  const sitemapEntries: ISitemapField[] = listings.map((listing) => ({
    loc: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${listing.slug}`,
    lastmod: listing.updated_at,
    changefreq: 'monthly',
    priority: 0.8,
  }));

  // Return the sitemap in the appropriate XML format
  return getServerSideSitemap(sitemapEntries);
}
