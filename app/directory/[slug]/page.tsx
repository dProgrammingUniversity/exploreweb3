// ExploreSol/app/directory/[slug]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

const ListingDetailPage = () => {
  const [listing, setListing] = useState<ListingType | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const supabaseClient = createClient();

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

  useEffect(() => {
    const slug = pathname.split('/').pop();
    if (slug) {
      fetchListingData(slug);
    }
  }, [pathname]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  // UI Layout starts here
  return (
    <div className="flex-1 w-full px-4 py-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 bg-purple-900">
          <h1 className="text-4xl font-bold mb-2">{listing.name}</h1>
          <p className="text-lg">{listing.category} | {listing.status}</p>
        </header>
        <main className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <img src={listing.logo_url} alt={listing.name} className="w-full h-64 object-cover mb-6 rounded" />
            <div className="mb-6">
              <h2 className="text-2xl font-bold">About</h2>
              <p>{listing.short_description}</p>
              <p>{listing.full_description}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Details</h2>
              <p>Blockchain: {listing.blockchain}</p>
              <p>Use Case: {listing.use_case}</p>
              <p>Year Founded: {listing.year_founded}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Resources</h2>
              <p>Website: <a href={listing.website} className="text-blue-500">{listing.website}</a></p>
              <p>Roadmap: <a href={listing.roadmap_url} className="text-blue-500">{listing.roadmap_url}</a></p>
              <p>Whitepaper: <a href={listing.whitepaper_url} className="text-blue-500">{listing.whitepaper_url}</a></p>
            </div>
            {/* Add more sections based on the listing details */}
          </div>
          <aside>
            <div className="sticky top-8">
              <div className="mb-6 bg-gray-800 p-4 rounded">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p>Twitter: <a href={`https://twitter.com/${listing.twitter}`} className="text-blue-500">{listing.twitter}</a></p>
                <p>Discord: {listing.discord}</p>
                {/* Add more contact details */}
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h2 className="text-2xl font-bold mb-4">Contribute</h2>
                <p>If you have found any issues or would like to contribute to the project, please reach out or submit a pull request.</p>
                {/* Add contribution section */}
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default ListingDetailPage;
