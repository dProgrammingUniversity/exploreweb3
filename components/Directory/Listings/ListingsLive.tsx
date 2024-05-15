// /components/Directory/Listings/ListingsLive.tsx

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'; 
import ListingsCard from './ListingsCard';
import Pagination from '@/components/Pagination';

export const ListingsLive = () => {
  const [liveListings, setLiveListings] = useState<DisplayListingTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;  // Consistent with ListingsNew.tsx
  const [totalListings, setTotalListings] = useState(0);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchLiveListings = async () => {
      const { data, error } = await supabaseClient
        .from('listings')
        .select('*')
        .filter("status", "eq", "Live")
        .eq('moderation_status', 'approved');

      if (error) {
        console.error('Error fetching live listings:', error);
      } else {
        setLiveListings(data);
        setTotalListings(data.length);
      }
    };

    fetchLiveListings();
  }, [supabaseClient]);

  // Calculate the number of pages
  const totalPages = Math.ceil(totalListings / itemsPerPage);

  // Get current page listings
  const indexOfLastListing = currentPage * itemsPerPage;
  const indexOfFirstListing = indexOfLastListing - itemsPerPage;
  const currentListings = liveListings.slice(indexOfFirstListing, indexOfLastListing);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentListings.map((listing) => (
          <ListingsCard key={listing.id} listing={listing} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default ListingsLive;