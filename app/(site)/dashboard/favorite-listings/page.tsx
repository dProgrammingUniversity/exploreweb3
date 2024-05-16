// Exploresol/app/dashboard/favorite-listings/page.tsx
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import FavoritePage from '@/components/Directory/Dashboard/FavoritePage';


export default async function FavoriteListingsPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (

    <div className="dashboard-layout">

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">FAVORITES LISTINGS DASHBOARD PAGE</h1>
        <FavoritePage/>
      </div>

    </div>
  );
}