// /app/(site1)/guides/page.tsx
import { createClient } from "@/utils/supabase/server";
import GuidesIndex from "@/components/Guides";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Web3 Guides",
  description: "Discover the latest guides and resources in the Web3 ecosystem. Explore guides by project and enhance your knowledge.",
};

const GuidesHomePage = async () => {
  const supabase = createClient();

  // Fetch latest guides with project slug
  const { data: latestGuides, error: latestGuidesError } = await supabase
    .from("guides")
    .select("slug, title, short_title, summary_content, image_url, project, listings!inner(slug)")
    .eq("moderation_status", "approved")
    .order('created_at', { ascending: false });

  if (latestGuidesError) {
    console.error("Error fetching latest guides:", latestGuidesError);
    return <div>Error loading latest guides</div>;
  }

  // Fetch projects with approved guides
  const { data: guidesWithProjects, error: guidesError } = await supabase
    .from("guides")
    .select("project")
    .eq("moderation_status", "approved");

  if (guidesError) {
    console.error("Error fetching guides:", guidesError);
    return <div>Error loading guides</div>;
  }

  const projectIds = guidesWithProjects.map(guide => guide.project);

  // Fetch project details for those with approved guides
  const { data: projects, error: projectsError } = await supabase
    .from("listings")
    .select("id, name, slug")
    .in("id", projectIds);

  if (projectsError) {
    console.error("Error fetching projects:", projectsError);
    return <div>Error loading projects</div>;
  }

  return (
    <div className="pt-20 pb-10">
      <GuidesIndex latestGuides={latestGuides} projects={projects} />
    </div>
  );
};

export default GuidesHomePage;