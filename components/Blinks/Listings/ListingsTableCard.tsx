// /components/Blinks/Listings/ListingTableCard.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";

// Define the Props type, expecting listing data and an index
type Props = {
  listings: DisplayListingBlinksTypes[];
};

const ListingsTableCard: React.FC<Props> = ({ listings }) => {
  const [categoryNames, setCategoryNames] = useState<{ [key: number]: string[] }>({});
  const [platformNames, setPlatformNames] = useState<{ [key: number]: string[] }>({});
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchCategoryNames = async (listing) => {
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
        setCategoryNames(prevState => ({
          ...prevState,
          [listing.id]: data.map((category) => category.name),
        }));
      }
    };

    const fetchPlatformNames = async (listing) => {
      const platformIds = listing.platform_ids;
      const { data, error } = await supabaseClient
        .from('blinks_platforms')
        .select('name')
        .in('id', platformIds);

      if (!error) {
        setPlatformNames(prevState => ({
          ...prevState,
          [listing.id]: data.map((platform) => platform.name),
        }));
      }
    };

    listings.forEach((listing) => {
      fetchCategoryNames(listing);
      fetchPlatformNames(listing);
    });
  }, [listings]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-500">
        <thead>
          <tr>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              #
            </th>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Name
            </th>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </th>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Registry
            </th>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Platforms
            </th>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Year Created
            </th>
            <th className="cursor-pointer bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              Categories
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {listings.map((listing, index) => (
            <tr key={listing.id}>
              <td className="px-6 py-4 whitespace-nowrap text-white">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={`/blinks/${listing.slug}`} passHref className="text-sm font-medium text-blue-600 hover:text-blue-900">
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
                <div className="text-sm text-white">{platformNames[listing.id]?.join(', ')}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">{listing.year_created}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">{categoryNames[listing.id]?.join(', ')}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTableCard;
