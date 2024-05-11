// ExploreSol/app/dashboard/page.tsx
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import "../dashboard/dashboard.css"; 
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
        <h1 className="content-heading">DASHBOARD HOME PAGE</h1>
        <div className="content-links">
          <Link href="/dashboard/user" className="content-link content-link-blue">
            Am A USER
          </Link>
          <Link href="/dashboard/moderator" className="content-link content-link-green">
            Am A MODERATOR
          </Link>
          <Link href="/dashboard/admin" className="content-link content-link-red">
            Am An ADMIN
          </Link>    
        </div>
        {/* Add more content here */}
      </div>
    </div>
  );
}
