// /components/Blinks/Listings/ListingCard.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";

// Define the Props type, expecting listing data and an index
type Props = {
  listing: DisplayListingBlinksTypes;
  index: number;
};

const ListingsCard: React.FC<Props> = ({ listing, index }) => {
  // State to hold category names
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  // State to hold platform names
  const [platformNames, setPlatformNames] = useState<string[]>([]);
  // Initialize Supabase client
  const supabaseClient = createClient();

  // Fetch category names based on category IDs
  useEffect(() => {
    const fetchCategoryNames = async () => {
      const categoryIds = [
        listing.category_1,
        listing.category_2,
        listing.category_3,
        listing.category_4,
        listing.category_5,
      ].filter(Boolean); // Filter out any undefined or null values

      const { data, error } = await supabaseClient
        .from('categories')
        .select('name')
        .in('id', categoryIds);

      if (!error) {
        setCategoryNames(data.map((category) => category.name));
      }
    };

    // Fetch platform names based on platform IDs
    const fetchPlatformNames = async () => {
      const platformIds = listing.platform_ids;
      const { data, error } = await supabaseClient
        .from('blinks_platforms')
        .select('name')
        .in('id', platformIds);

      if (!error) {
        setPlatformNames(data.map((platform) => platform.name));
      }
    };

    // Call the fetch functions
    fetchCategoryNames();
    fetchPlatformNames();
  }, [listing]);

  // Render the table row with listing details
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-white">{index}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link 
          href={`/blinks/${listing.slug}`} 
          passHref
          className="text-sm font-medium text-blue-600 hover:text-blue-900"
        >
          {listing.name}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">{listing.status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">{listing.blinks_registry_status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">{platformNames.join(', ')}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">{listing.year_created}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-white">{categoryNames.join(', ')}</div>
      </td>
    </tr>
  );
};

export default ListingsCard;

