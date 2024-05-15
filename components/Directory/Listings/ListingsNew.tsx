// /components/Directory/Listings/ListingsNew.tsx

import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import ListingsCard from './ListingsCard';
import Pagination from '@/components/Pagination';

export const ListingsNew = () => {
  const [newListings, setNewListings] = useState<DisplayListingTypes[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;  // Updated from 6 to 9
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchNewListings = async () => {
      const { data, error } = await supabaseClient
        .from('listings')
        .select('*')
        .order('created_at', { ascending: false })
        .eq('moderation_status', 'approved');

      if (error) {
        console.error('Error fetching new listings:', error);
      } else {
        setNewListings(data);
      }
    };

    fetchNewListings();
  }, [currentPage]);

  // Calculate the number of pages
  const totalPages = Math.ceil(newListings.length / itemsPerPage);

  // Get current listings to display
  const indexOfLastListing = currentPage * itemsPerPage;
  const indexOfFirstListing = indexOfLastListing - itemsPerPage;
  const currentListings = newListings.slice(indexOfFirstListing, indexOfLastListing);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentListings.map((listing) => (
          <ListingsCard key={listing.id} listing={listing} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ListingsNew;