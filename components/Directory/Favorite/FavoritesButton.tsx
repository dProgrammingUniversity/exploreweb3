// Exploresol/components/FavoritesButton.tsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { HeartIcon } from '@heroicons/react/24/outline'; // Import the icons


const FavoritesButton = ({ userId, listingId }: FavoritePageProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0); // State to hold the favorites count
  const supabase = createClient();

  // Check favorite status for user and listing
  const checkFavorite = async () => {
    if (!userId) return;
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', userId)
        .eq('listing_id', listingId);
  
      if (error) throw error;
  
      setIsFavorite(data.length > 0);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  // Toggle favorite button function
  const toggleFavorite = async () => {
    //check if user loggedin or not
    if (!userId) {
      // Redirect non-authenticated users to login
      window.location.href = "/auth/login";
      return;
    }

    if (isFavorite) {
      // RPC call to delete favorites
      const { data, error } = await supabase.rpc('favorites_delete', { 
        input_user_id: userId, 
        input_listing_id: listingId 
      });
      if (error) {
        console.error('Error deleting favorite:', error);
      } else {
        console.log('Favorite deleted successfully');
        setIsFavorite(!isFavorite);
      }
    } else {
      // RPC call to add favorites
      const { data, error } = await supabase.rpc('favorites_add', { 
        user_id: userId, 
        listing_id: listingId 
      });
      if (error) {
        console.error('Error adding favorite:', error);
      } else {
        console.log('Favorite added successfully');
        setIsFavorite(!isFavorite);
      }
    }
        
  };


  // Function to fetch the count of favorites for the listing
  const fetchFavoritesCount = async () => {
    try {
      const { data, error } = await supabase
        .rpc('favorites_listings_count', { input_listing_id: listingId });

      if (error) {
        throw error;
      }
      setFavoritesCount(data);
    } catch (error) {
      console.error('Error fetching favorites count:', error);
    }
  };


  //trigger functions when component mounts or updates
  useEffect(() => {
    checkFavorite();
    fetchFavoritesCount();
  }, [userId, listingId]);

  
  return (

    <button
      onClick={toggleFavorite}
      className={`px-4 py-2 rounded text-white font-semibold flex items-center ${
        isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {isFavorite ? (
        <>
          <HeartIcon className="w-5 h-5 mr-2" />
          Remove Favorite ({favoritesCount})
        </>
      ) : (
        <>
          <HeartIcon className="w-5 h-5 mr-2" />
          Add to Favorites ({favoritesCount})
        </>
      )}
    </button>

  );
};

export default FavoritesButton;