// /app/(site1)/dashboard/guides/edit/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import GuidesEditIndex from "@/components/Dashboard/Guides/Edit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Guides - Explore Web3",
  description: "Edit guides for Explore Web3",
};

const EditGuidesPage = async () => {
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

  const { data: guides } = await supabase
    .from("guides")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="flex-grow pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="relative z-1 mx-auto w-full max-w-none px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
        {guides && <GuidesEditIndex guides={guides} />}
      </div>
    </div>
  );
};

export default EditGuidesPage;