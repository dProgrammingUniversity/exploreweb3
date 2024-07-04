// /components/Blinks/Favorites/Button.tsx
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
        .from('projects_favorites')
        .select('*')
        .eq('user_id', userId)
        .eq('listing_id', listingId);
  
      if (error) throw error;
  
      setIsFavorite(data.length > 0);
    } catch (error) {
      console.error('Error checking projects favorites status:', error);
    }
  };

  // Toggle favorite button function
  const toggleFavorite = async () => {
    // Check if user logged in or not
    if (!userId) {
      // Redirect non-authenticated users to login
      window.location.href = "/auth/login";
      return;
    }

    if (isFavorite) {
      // RPC call to delete favorites
      const { data, error } = await supabase.rpc('projects_favorites_delete', { 
        input_user_id: userId, 
        input_listing_id: listingId 
      });
      if (error) {
        console.error('Error deleting project from projects favorites:', error);
      } else {
        console.log('Project deleted from projects favorites successfully');
        setIsFavorite(!isFavorite);
        fetchFavoritesCount(); // Update the favorites count after deletion
      }
    } else {
      // RPC call to add favorites
      const { data, error } = await supabase.rpc('projects_favorites_add', { 
        user_id: userId, 
        listing_id: listingId 
      });
      if (error) {
        console.error('Error adding Project to projects favorites:', error);
      } else {
        console.log('Project added to projects favorites successfully');
        setIsFavorite(!isFavorite);
        fetchFavoritesCount(); // Update the favorites count after addition
      }
    }
  };

  // Function to fetch the count of favorites for the listing
  // Note: Unlike others, this is linked to view "projects_favorites_count" table not function
  const fetchFavoritesCount = async () => {
    try {
      const { data, error } = await supabase
        .from('projects_favorites_count')
        .select('projects_favorites_count')
        .eq('listing_id', listingId)
        .single();

      if (error) {
        throw error;
      }
      console.log('Favorites count:', data.projects_favorites_count);
      setFavoritesCount(data.projects_favorites_count);
    } catch (error) {
      console.error('Error fetching projects favorites count:', error);
    }
  };

  // Trigger functions when component mounts or updates
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