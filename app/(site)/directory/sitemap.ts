// /app/(site)/directory/sitemap.ts
import { MetadataRoute } from 'next';
import { createClient } from "@/utils/supabase/server";

export default async function directorySitemap(): Promise<MetadataRoute.Sitemap> {
  const supabaseClient = createClient();
  const { data: listings, count } = await supabaseClient
    .from('listings')
    .select('slug, updated_at', { count: 'exact' })
    .eq('moderation_status', 'approved');

  if (!listings) {
    return [];
  }

  // Sort listings by updated_at in descending order
  listings.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  const listingSitemapEntries: MetadataRoute.Sitemap = listings.map((listing) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/directory/${listing.slug}`,
    lastModified: listing.updated_at,
  }));

  return [
    ...listingSitemapEntries,
  ];
}
