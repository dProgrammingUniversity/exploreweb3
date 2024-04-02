// ExploreSol/app/dashboard/create-listings/page.tsx
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import "../../dashboard/dashboard.css"; 
import CreateListings from "@/components/CreateListings";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <Link href="/dashboard" className="sidebar-link">
            Dashboard
        </Link>
        <Link href="/dashboard/create-listings" className="sidebar-link">
            Create Listings
        </Link>
        <Link href="/dashboard/messages" className="sidebar-link">
            Messages
        </Link>
        <Link href="/dashboard/bookings" className="sidebar-link">
            Bookings
        </Link>
        {/* Add other sidebar links here */}
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">CREATE LISTINGS DASHBOARD PAGE</h1>
        <CreateListings />
        {/* Add more content here */}
      </div>
    </div>
  );
}
