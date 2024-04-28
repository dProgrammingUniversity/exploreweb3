// ExploreSol/app/dashboard/create-listings/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "../../dashboard/dashboard.css"; 
import CreateListings from "@/components/dashboard/CreateListings";
import DashboardMenu from "@/components/dashboard/DashboardMenu";

export default async function DashboardPage() {
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
        <h1 className="content-heading">CREATE LISTINGS DASHBOARD PAGE</h1>
        <CreateListings />
      </div>
    </div>
  );
}
