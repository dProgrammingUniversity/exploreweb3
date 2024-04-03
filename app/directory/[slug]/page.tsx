// ExploreSol/app/directory/[slug]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

const ListingDetailPage = () => {
  const [listing, setListing] = useState<ListingType | null>(null); // used pre-define type Listing Types in globalTypes.ts
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const supabaseClient = createClient();

  // Function to fetch listing data
  const fetchListingData = async (slug: string) => {
    setLoading(true);
    const { data, error } = await supabaseClient
      .from('listings')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching listing:', error);
    } else {
      setListing(data);
    }
    setLoading(false);
  };

  // Effect to fetch data on mount and when pathname changes
  useEffect(() => {
    const slug = pathname.split('/').pop(); // Get the last segment of the pathname which is the slug
    if (slug) {
      fetchListingData(slug);
    }
  }, [pathname]);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error state
  if (!listing) {
    return <div>Listing not found</div>;
  }

  // Display the listing details
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-100 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">{listing.name}</h2>
          <img src={listing.logo_url} alt={listing.name} className="w-full h-auto" />
          <p>{listing.short_description}</p>
          <p>{listing.full_description}</p>
          <p>{listing.website}</p>
          {/* Add other listing details as needed */}
        </main>
      </div>
    </div>
  );
};

export default ListingDetailPage;
