// ExploreSol/app/dashboard/admin/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import "../../dashboard/dashboard.css";

export default function AdminPage() {
  const [pendingListings, setPendingListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchPendingListings = async () => {
      const { data: user } = await supabase.auth.getUser();

      if (!user) {
        // Handle user not logged in or not admin
        window.location.href = "/login";
        return;
      }

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

    fetchPendingListings();
  }, [supabase]);

  if (loading) {
    return <div>Loading...</div>;
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
              <Link key={listing.id} href={`/admin/listings/${listing.id}`} passHref>
                <div className="card bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer">
                  <img src={listing.logo_url} alt={listing.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">{listing.name}</h3>
                    <p className="text-gray-400">{listing.short_description}</p>
                    {/* Additional info and actions */}
                    <div className="mt-4">
                      <Link href={`/admin/edit/${listing.id}`} className="text-blue-500 hover:underline">Edit</Link>
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
