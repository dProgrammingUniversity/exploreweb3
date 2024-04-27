// Exploresol/components/FavoritesButton.tsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

const FavoritesButton = ({ userId, listingId }: FavoritePageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const supabase = createClient();

  const checkFavorite = async () => {
    const { data, error } = await supabase.rpc('favorites_fetch', { user_id: userId });
    if (data) {
      setIsFavorite(data.some((favorite: { listing_id: string | null; }) => favorite.listing_id === listingId));
    }
  };

  const toggleFavorite = async () => {
    //check if user loggedin or not
    if (!userId) {
      // Redirect non-authenticated users to login
      window.location.href = "/login";
      return;
    }

    if (isFavorite) {
      await supabase.rpc('favorites_delete', { user_id: userId, listing_id: listingId });
    } else {
      await supabase.rpc('favorites_add', { user_id: userId, listing_id: listingId });
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    checkFavorite();
  }, [userId, listingId]);

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

export default FavoritesButton;