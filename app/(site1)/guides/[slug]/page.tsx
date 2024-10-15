// /app/(site1)/guides/[slug]/page.tsx
import { createClient } from "@/utils/supabase/server";
import GuidesIndex from "@/components/Guides";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }, resolve: ResolvingMetadata): Promise<Metadata> {
  const supabase = createClient();
  const { slug } = params;

  const { data: guide } = await supabase
    .from("guides")
    .select("title, summary_content, image_url")
    .eq("slug", slug)
    .eq("moderation_status", "approved")
    .single();

  if (!guide) {
    return {
      title: "Guide Not Found",
      description: "The requested guide could not be found.",
    };
  }

  return {
    title: `${guide.title} - Explore Web3`,
    description: guide.summary_content,
    openGraph: {
      title: `${guide.title} - Explore Web3`,
      description: guide.summary_content,
      images: [{ url: guide.image_url }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} - Explore Web3`,
      description: guide.summary_content,
      images: [guide.image_url],
    },
  };
}


const GuidePage = async ({ params }) => {
  const supabase = createClient();
  const { slug } = params;

  // Fetch the current guide
  const { data: guide, error } = await supabase
    .from("guides")
    .select("*")
    .eq("slug", slug)
    .eq("moderation_status", "approved")
    .single();

  if (error || !guide) {
    console.error("Error fetching guide:", error);
    return <div>Guide not found</div>;
  }

  // Fetch author details using author id/user id
  const { data: author, error: authorError } = await supabase
    .from("user_role_manager")
    .select("first_name, last_name, username")
    .eq("id", guide.author_id)
    .single();

  if (authorError || !author) {
    console.error("Error fetching author:", authorError);
    return <div>Author not found</div>;
  }

  const authorName = author.first_name || author.last_name
    ? `${author.first_name} ${author.last_name}`
    : author.username;

  // Fetch all approved guides with their project IDs
  const { data: guides, error: guidesError } = await supabase
    .from("guides")
    .select("slug, short_title, project")
    .eq("moderation_status", "approved");

  if (guidesError) {
    console.error("Error fetching guides:", guidesError);
    return <div>Error loading guides</div>;
  }

  // Fetch all projects
  const { data: projects, error: projectsError } = await supabase
    .from("listings")
    .select("id, name");

  if (projectsError) {
    console.error("Error fetching projects:", projectsError);
    return <div>Error loading projects</div>;
  }

  // Group guides by project
  const projectsMap = projects.reduce((acc, project) => {
    const projectGuides = guides.filter(guide => guide.project === project.id);
    if (projectGuides.length > 0) {
      acc[project.name] = projectGuides;
    }
    return acc;
  }, {});

  return (
    <div className="flex-grow pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto w-full max-w-none px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        <GuidesIndex
          guide={guide}
          authorName={authorName}
          projectsMap={projectsMap}
        />
      </div>
    </div>
  );
};

export default GuidePage;