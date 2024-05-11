// ExploreSol/app/dashboard/profile/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "../../dashboard/dashboard.css"; 
import UsernamesForm from "@/components/dashboard/UsernamesForm";
import DashboardMenu from "@/components/dashboard/DashboardMenu";

export default async function ProfilePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <DashboardMenu />

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">PROFILE DASHBOARD PAGE</h1>
        <UsernamesForm />
      </div>
    </div>
  );
}
