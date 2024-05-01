// ExploreSol/app/dashboard/set-new-password/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "../../dashboard/dashboard.css"; 
import SetNewPassword from '@/components/supabase-auth/SetNewPassword';
import DashboardMenu from "@/components/dashboard/DashboardMenu";

export default async function SetNewPasswordPage() {
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
        <h1 className="content-heading">PASSWORD MANAGER DASHBOARD PAGE</h1>
        <SetNewPassword />
      </div>
    </div>
  );
}


