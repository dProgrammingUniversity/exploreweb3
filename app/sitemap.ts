// app/(site)/sitemap.ts
import { MetadataRoute } from "next";
import { createClient } from "@/utils/supabase/server";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

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
    priority: 0.8,
  }));


  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/directory`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/earn`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/s`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/roadmap`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/support`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...listingSitemapEntries,
    // Add more static URLs here
  ];
}
