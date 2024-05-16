// ExploreSol/app/dashboard/profile/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import UsernamesForm from "@/components/Directory/Dashboard/UsernamesForm";

export default async function ProfilePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="dashboard-layout">

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">PROFILE DASHBOARD PAGE</h1>
        <UsernamesForm />
      </div>
    </div>
  );
}
