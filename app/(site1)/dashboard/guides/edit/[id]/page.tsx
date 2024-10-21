// /app/(site1)/dashboard/guides/edit/[id]/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import GuidesEditForm from "@/components/Dashboard/Guides/Edit/GuidesEditForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Guide - Explore Web3",
  description: "Edit a guide for Explore Web3",
};

const EditGuidePage = async ({ params }: { params: { id: string } }) => {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/login");
  }

  const { data: userRole } = await supabase
    .from("user_role_manager")
    .select("user_role_level")
    .eq("id", user.id)
    .single();

  if (userRole?.user_role_level !== "moderator" && userRole?.user_role_level !== "admin") {
    return redirect("/dashboard");
  }

  const { data: guide } = await supabase
    .from("guides")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!guide) {
    return redirect("/dashboard/guides/edit");
  }

  const { data: projects } = await supabase
    .from("listings")
    .select("id, name")
    .order("name");

  return (
    <div className="flex-grow pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto w-full max-w-none px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {projects && <GuidesEditForm guide={guide} projects={projects} />}
      </div>
    </div>
  );
};

export default EditGuidePage;