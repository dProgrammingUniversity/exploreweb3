// ExploreSol/app/dashboard/admin/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import "../../dashboard/dashboard.css";

export default function AdminPage() {
  const [pendingListings, setPendingListings] = useState<ListingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      
      if (error || !user) {
        // If there is an error or no user, redirect to login
        window.location.href = "/login";
        return;
      }
      
      // Check if the user is an admin
      const { data: roles, error: roleError } = await supabase
        .from('user_role_manager')
        .select('*')
        .eq('user_role_level', 'admin') // Check if the user has an admin role
        .single();  

      if (roleError || !roles || roles.user_role_level !== 'admin') {
        // If there's an error, no role info, or the user is not an admin, redirect to login
        window.location.href = "/login";
        return;
      }
      
      setIsAdmin(true);  // Set admin state to true if the user is an admin
      fetchPendingListings();
    };

    const fetchPendingListings = async () => {
      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('moderation_status', 'pending');

      if (error) {
        console.error('Error fetching pending listings:', error);
      } else {
        setPendingListings(data);
      }
      setLoading(false);
    };

    checkAdmin();
  }, [supabase]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    // Show a loading or blank screen if not admin
    return <div>Checking permissions...</div>;
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
        {/* Add other sidebar links here */}
      </div>

      {/* Content */}
      <div className="content">
        <h1 className="content-heading">Pending Listings</h1>
        <div className="grid md:grid-cols-3 gap-4">
          {pendingListings.length > 0 ? (
            pendingListings.map((listing) => (
              <Link key={listing.slug} href={`/dashboard/admin/${listing.slug}`} target='_blank' passHref>
                <div className="card bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer">
                  <img src={listing.logo_url} alt={listing.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{listing.name}</h3>
                    <p className="text-gray-400">{listing.short_description}</p>
                    {/* Additional info and actions */}
                    <div className="mt-4">
                      Edit
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-white">No pending listings</p>
          )}
        </div>
      </div>
    </div>
  );
}
