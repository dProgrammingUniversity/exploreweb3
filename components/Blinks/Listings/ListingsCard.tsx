// /components/Blinks/Listings/ListingCard.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";

type Props = {
  listing: DisplayListingBlinksTypes; // Using the type from /globalTypes.ts
};

// default listings image when no image logo_url found
const defaultImageUrl =
  "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";

const ListingsCard: React.FC<Props> = ({ listing }) => {
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
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

    fetchCategoryNames();
  }, [listing]);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <Link 
        href={`/blinks/${listing.slug}`} 
        passHref
        className="text-sm font-medium text-blue-600 hover:text-blue-900">{listing.name}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{listing.year_created}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{listing.status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{listing.pricing}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{categoryNames.join(', ')}</div>
      </td>
    </tr>
  );
};

export default ListingsCard;
