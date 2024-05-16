// ExploreSol/app/dashboard/update-password/page.tsx
import SetNewPassword from "@/components/Directory/SupabaseAuth/UpdatePassword";

export default async function SetNewPasswordPage() {
  return (
    <div className="dashboard-layout">
      {/* Content */}
      <div className="content">
        <h1 className="content-heading">PASSWORD MANAGER DASHBOARD PAGE</h1>
        <SetNewPassword />
      </div>
    </div>
  );
}
