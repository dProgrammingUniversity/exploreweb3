// ExploreSol/app/dashboard/user/page.tsx 
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import "../../dashboard/dashboard.css"; 
import DashboardMenu from "@/components/dashboard/DashboardMenu";

export default async function moderatorDashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (

    <div className="dashboard-layout">
      
      {/* Sidebar */}
      <DashboardMenu />

      {/* Content */}
      <div className="content">
      <h2 className="font-bold text-4xl mb-4">USER DASHBOARD PAGE</h2>
        
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
            <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
              <main className="flex-1 flex flex-col gap-6">                
                <div className="w-full max-w-4xl flex justify-between items-center p-3">
                  <div className="flex-1 flex justify-center">
                    <div className="btn">Welcome To Your MODERATOR Page</div>
                    <Link href="/dashboard" className="btn"> &lt;&lt; Back To Main Dashboard </Link>    
                  </div>
                </div>
              </main>
            </div>
          </div>
      
      </div>
    
    </div>

  );
}