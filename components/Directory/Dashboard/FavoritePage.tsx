// /components/Directory/Dashboard/FavoritePage.tsx
"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import ListingsCard from "../Listings/ListingsCard";
import Pagination from "@/components/Pagination"; // Ensure this import path is correct based on your project structure

const FavoritePage = () => {
  const [favoriteListings, setFavoriteListings] = useState<DisplayListingTypes[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Adjust if necessary
  const supabaseClient = createClient();

  useEffect(() => {
    // Fetch the user ID
    const fetchUserId = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (!userId) return; // Ensure userId is not null

      const { data, error } = await supabaseClient.rpc("projects_favorites_fetch_all_at_once", { user_id: userId });

      if (!error && data) {
        setFavoriteListings(data);
      }
    };

    fetchFavorites();
  }, [userId]);

  // Calculate the number of pages
  const totalPages = Math.ceil(favoriteListings.length / itemsPerPage);

  // Get current listings to display
  const indexOfLastListing = currentPage * itemsPerPage;
  const indexOfFirstListing = indexOfLastListing - itemsPerPage;
  const currentListings = favoriteListings.slice(indexOfFirstListing, indexOfLastListing);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentListings.map((listing) => (
          <ListingsCard key={listing.id} listing={listing} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default FavoritePage;
