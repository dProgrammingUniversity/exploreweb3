// ExploreSol/app/dashboard/page.tsx
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="dashboard-layout">

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">DASHBOARD HOME PAGE</h1>
        <div className="content-links">
          <Link href="/dashboard/user" className="content-link content-link-blue">
            Am A USER
          </Link>
          <br/>
          <Link href="/dashboard/moderator" className="content-link content-link-green">
            Am A MODERATOR
          </Link>
          <br/>
          <Link href="/dashboard/admin" className="content-link content-link-red">
            Am An ADMIN
          </Link>    
        </div>
        {/* Add more content here */}
      </div>
    </div>
  );
}
