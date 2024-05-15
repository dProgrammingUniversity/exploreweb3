// exploresol/components/ListingsLive.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; 
import ListingsCard from './ListingsCard';

export const ListingsLive = () => {
  const [liveListings, setLiveListings] = useState<DisplayListingTypes[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchLiveListings = async () => {
      const { data, error } = await supabaseClient
        .from('listings')
        .select('*')
        .order('created_at', { ascending: true })
        .filter("status", "eq", "Live")
        .limit(6)
        .eq('moderation_status', 'approved'); // filter for approved listings only

      if (error) {
        console.error('Error fetching live listings:', error);
      } else {
        setLiveListings(data);
      }
    };

    fetchLiveListings();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {liveListings.map((listing) => (
        <ListingsCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsLive;