// Exploresol/app/dashboard/favorite-listings/page.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import FavoritePage from '@/components/dashboard/FavoritePage';

const FavoriteListingsPage = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchUserId = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        setUserId(user.id);
      }
    };

    fetchUserId();
  }, []);

  return <FavoritePage userId={userId} />;
};

export default FavoriteListingsPage;