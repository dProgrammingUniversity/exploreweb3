// /app/(site1)/category/[slug]/page.tsx
import { createClient } from "@/utils/supabase/server";
import CategoryDetailsPage from "@/components/Category/CategoryDetailsPage";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const supabase = createClient();

  const { data: category, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !category) {
    console.error('Error fetching category:', error);
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${category.name} Projects - Explore Web3`,
    description: category.description || `Explore ${category.name} projects on Explore Web3`,
    openGraph: {
      title: `${category.name} Projects - Explore Web3`,
      description: category.description || `Explore ${category.name} projects on Explore Web3`,
      images: [{ url: category.image_url || "/images/default-category-image.jpg" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} Projects - Explore Web3`,
      description: category.description || `Explore ${category.name} projects on Explore Web3`,
      images: [category.image_url || "/images/default-category-image.jpg"],
    },
  };
}

export default function CategoryProjectsPage({ params }) {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <CategoryDetailsPage slug={params.slug} />
      </div>
    </section>
  );
}