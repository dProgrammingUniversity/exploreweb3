// Exploresol/components/dashboard/favoritePage.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import ListingsCard from '@/components/ListingsCard';

const FavoritePage = ({ userId }: FavoritePageProps) => {
  const [favoriteListings, setFavoriteListings] = useState([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchFavorites = async () => {
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