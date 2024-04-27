// Exploresol/components/ListingsRelatedSuggestion.tsx
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import ListingsCard from './ListingsCard';

type Props = {
  mainCategory: string;
};

const ListingsRelatedSuggestion: React.FC<Props> = ({ mainCategory }) => {
  const [relatedListings, setRelatedListings] = useState<DisplayListingTypes[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchRelatedListings = async () => {
      // First, fetch the category ID for the given category name
      const { data: categoryData, error: categoryError } = await supabaseClient
        .from('categories')
        .select('id')
        .eq('name', mainCategory)
        .single();

      if (categoryError || !categoryData) {
        console.error('Error fetching category ID:', categoryError);
        return;
      }

      // Use the fetched category ID to query for related listings
      const { data, error } = await supabaseClient
        .from('listings')
        .select('*')
        .eq('category_1', categoryData.id) // Use the category ID here
        .limit(6);

      if (!error && data) {
        setRelatedListings(data);
      }
    };

    fetchRelatedListings();
  }, [mainCategory, supabaseClient]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {relatedListings.map((listing) => (
        <ListingsCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsRelatedSuggestion;