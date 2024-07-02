// /components/Blinks/Listings/ListingCard.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";

type Props = {
  listing: DisplayListingBlinksTypes; // Using the type from /globalTypes.ts
};

const ListingsCard: React.FC<Props> = ({ listing }) => {
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  const [platformNames, setPlatformNames] = useState<string[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchCategoryNames = async () => {
      const categoryIds = [
        listing.category_1,
        listing.category_2,
        listing.category_3,
        listing.category_4,
        listing.category_5,
      ].filter(Boolean);
      const { data, error } = await supabaseClient
        .from('categories')
        .select('name')
        .in('id', categoryIds);

      if (!error) {
        setCategoryNames(data.map((category) => category.name));
      }
    };

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

    fetchCategoryNames();
    fetchPlatformNames();
  }, [listing]);

  return (
    <tr>
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
        <div className="text-sm text-gray-900">{listing.status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{platformNames.join(', ')}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{listing.year_created}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{categoryNames.join(', ')}</div>
      </td>
    </tr>
  );
};

export default ListingsCard;
