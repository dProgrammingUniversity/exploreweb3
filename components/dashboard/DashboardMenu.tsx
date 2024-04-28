// Exploresol/components/dashboard/DashboardMenu.tsx
import Link from "next/link";
import React from "react";

const DashboardMenu = () => {
  return (
    <div className="sidebar">
      <Link href="/dashboard" className="sidebar-link">
        Dashboard
      </Link>
      <Link href="/dashboard/create-listings" className="sidebar-link">
        Create Listings
      </Link><Link href="/dashboard/favorite-listings" className="sidebar-link">
        Favorites
      </Link>
      {/* Add other sidebar links here */}
    </div>
  );
};

export default DashboardMenu;