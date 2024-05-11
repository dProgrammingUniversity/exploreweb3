// exploresol/components/ListingsTop.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; 
import ListingsCard from '@/components/ListingsCard'; 

export const ListingsTop = () => {
  const [topListings, setTopListings] = useState<DisplayListingTypes[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchTopListings = async () => {
      const { data, error } = await supabaseClient
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6)
        .eq('moderation_status', 'approved'); // filter for approved listings only

      if (error) {
        console.error('Error fetching top listings:', error);
      } else {
        setTopListings(data);
      }
    };

    fetchTopListings();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {topListings.map((listing) => (
        <ListingsCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsTop;