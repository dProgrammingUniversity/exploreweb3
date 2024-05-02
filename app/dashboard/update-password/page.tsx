// ExploreSol/app/dashboard/update-password/page.tsx
import "../../dashboard/dashboard.css";
import SetNewPassword from "@/components/supabase-auth/UpdatePassword";
import DashboardMenu from "@/components/dashboard/DashboardMenu";

export default async function SetNewPasswordPage() {
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
