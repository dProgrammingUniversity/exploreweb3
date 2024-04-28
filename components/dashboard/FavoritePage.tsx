// Exploresol/components/dashboard/FavoritePage.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import ListingsCard from '@/components/ListingsCard';

const FavoritePage = () => {
  const [favoriteListings, setFavoriteListings] = useState<DisplayListingTypes[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
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
      const { data, error } = await supabaseClient
        .rpc('favorites_fetch_all_at_once', { user_id: userId });

      if (!error && data) {
        setFavoriteListings(data);
      }
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div>
      {favoriteListings.map(listing => (
        <ListingsCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default FavoritePage;