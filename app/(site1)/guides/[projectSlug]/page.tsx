// /app/(site1)/guides/[projectSlug]/page.tsx
import { createClient } from "@/utils/supabase/server";
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({ params }: { params: { projectSlug: string } }, resolve: ResolvingMetadata): Promise<Metadata> {
  const supabase = createClient();
  const { projectSlug } = params;

  // Fetch the project details
  const { data: project } = await supabase
    .from("listings")
    .select("name")
    .eq("slug", projectSlug)
    .single();

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.name} Guides - Explore Web3`,
    description: `Explore comprehensive guides for ${project.name} and enhance your knowledge in the Web3 ecosystem.`,
    openGraph: {
      title: `${project.name} Guides - Explore Web3`,
      description: `Explore comprehensive guides for ${project.name} and enhance your knowledge in the Web3 ecosystem.`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} Guides - Explore Web3`,
      description: `Explore comprehensive guides for ${project.name} and enhance your knowledge in the Web3 ecosystem.`,
    },
  };
}

const ProjectGuidesPage = async ({ params }) => {
  const supabase = createClient();
  const { projectSlug } = params;

  // Fetch the project ID using the projectSlug
  const { data: project, error: projectError } = await supabase
    .from("listings")
    .select("id, name")
    .eq("slug", projectSlug)
    .single();

  if (projectError || !project) {
    console.error("Project not found:", projectError);
    return notFound();
  }

  // Fetch guides for the current project
  const { data: guides, error: guidesError } = await supabase
    .from("guides")
    .select("slug, title, short_title, summary_content, image_url, project")
    .eq("project", project.id)
    .eq("moderation_status", "approved");

  if (guidesError) {
    console.error("Error fetching guides:", guidesError);
    return <div>Error loading guides</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-40 pb-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-500">{project.name} Guides</h1>
        <p className="text-xl mb-8 text-gray-300">
          Welcome to the comprehensive guide collection for {project.name}. Dive into detailed tutorials and resources designed to enhance your expertise in the Web3 ecosystem. Whether you're a beginner or an expert, explore the innovative solutions and insights {project.name} offers to empower your journey in the decentralized world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link href={`/guides/${projectSlug}/${guide.slug}`} key={guide.slug} className="block">
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <Image
                  src={guide.image_url}
                  alt={guide.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{guide.short_title}</h2>
                  <p className="text-gray-400 mb-4">{guide.summary_content.substring(0, 100)}...</p>
                  <span className="text-blue-500 hover:underline">Read more</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGuidesPage;