// Exploresol/app/dashboard/favorite-listings/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "../../dashboard/dashboard.css"; 
import FavoritePage from '@/components/dashboard/FavoritePage';
import DashboardMenu from "@/components/dashboard/DashboardMenu";


export default async function FavoriteListingsPage() {
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
        <h1 className="content-heading">FAVORITES LISTINGS DASHBOARD PAGE</h1>
        <FavoritePage/>
      </div>

    </div>
  );
}