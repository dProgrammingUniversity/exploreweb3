// /app/sitemap/categories.xml/route.ts
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  // Initialize the Supabase client
  const supabaseClient = createClient();

  // Fetch the categories data from the Supabase database
  const { data: categories, error } = await supabaseClient
    .from("categories")
    .select("*")
    .order("name");

  // Handle the case where no categories are found or there's an error
  if (error || !categories || categories.length === 0) {
    console.error("Error fetching categories:", error);
    return new Response('<error>No categories found</error>', {
      status: 404,
      headers: {
        'Content-Type': 'text/xml'
      }
    });
  }

  // Map the categories to the ISitemapField format required by next-sitemap
  const sitemapEntries: ISitemapField[] = categories.map((category) => ({
    loc: `${process.env.NEXT_PUBLIC_BASE_URL}/category/${category.slug}`,
    lastmod: new Date().toISOString(), // Use current date if updated_at is not available
    changefreq: 'weekly',
    priority: 0.7,
  }));

  // Return the sitemap in the appropriate XML format
  return getServerSideSitemap(sitemapEntries);
}