// Exploresol/components/ListingCard.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from "next/link";

type Props = {
  listing: DisplayListingTypes; // Using the type from /globalTypes.ts
  isListView?: boolean; // Optional prop to determine view type
};

// default listings image when no image logo_url found
const defaultImageUrl =
  "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";

const ListingsCard: React.FC<Props> = ({ listing, isListView = false }) => {
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchCategoryNames = async () => {
      const categoryIds = [listing.category_1, listing.category_2, listing.category_3, listing.category_4, listing.category_5].filter(Boolean);
      const { data, error } = await supabaseClient
        .from('categories')
        .select('name')
        .in('id', categoryIds);
      
      if (!error) {
        setCategoryNames(data.map(category => category.name));
      }
    };

    fetchCategoryNames();
  }, [listing]);

  return (
    <Link
      href={`/directory/${listing.slug}`}
      // target="_blank"
      passHref
      className={`border rounded-lg p-4 shadow-lg ${
        isListView ? "flex flex-row items-center" : "flex flex-col"
      }`}
    >
      <img
        src={listing.logo_url || defaultImageUrl}
        alt={listing.name}
        className={
          isListView
            ? "w-20 h-20 object-cover mr-4"
            : "w-full h-32 object-cover rounded-t-lg"
        }
      />
      <div>
        {/* card content */}
        <h2 className="text-xl font-bold text-purple-700">{listing.name}</h2>
        <h5 className="text-l font-semibold text-purple-300">
          {/* Display category names */}
          {categoryNames.join(', ')}
        </h5>
        <p className="text-sm text-gray-400">
        {listing.year_founded} || {listing.moderation_status} || {listing.pricing}
        </p>
        <p className="text-sm text-green-500">{listing.status}</p>
        {/* ...other listing details... */}
      </div>
    </Link>
  );
};

export default ListingsCard;
