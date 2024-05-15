// exploresol/components/ListingsNew.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; 
import ListingsCard from './ListingsCard'; 

export const ListingsNew = () => {
  const [newListings, setNewListings] = useState<DisplayListingTypes[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchNewListings = async () => {
      const { data, error } = await supabaseClient
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6) // Adjust the criteria as needed
        .eq('moderation_status', 'approved'); // filter for approved listings only


      if (error) {
        console.error('Error fetching new listings:', error);
      } else {
        setNewListings(data);
      }
    };

    fetchNewListings();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {newListings.map((listing) => (
        <ListingsCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsNew;