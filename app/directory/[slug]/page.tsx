// ExploreSol/app/directory/[slug]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

const ListingDetailPage = () => {
  const [listing, setListing] = useState<ListingType | null>(null); // used pre-define type ListingType in globalTypes.ts
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
    const slug = pathname.split('/').pop();
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
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8 bg-purple-900">
          <h1 className="text-6xl font-bold mb-2">{listing.name}</h1>
          <p className="text-l font-semibold text-gray-400">{listing.category} | Founded: {listing.year_founded} | {listing.status}</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Image & Details */}
          <div className="md:col-span-2">
            <img src={listing.logo_url} alt={listing.name} className="w-full h-auto rounded-lg shadow-lg" />
            <div className="mt-4">
            <p className="text-gray-400">{listing.pricing} - {listing.category}</p>
              <h2 className="text-xl font-bold text-purple-500">{listing.name} Summary</h2>
              <p className="text-gray-300 mt-2">{listing.short_description}</p>
              <div className="mt-4 space-y-2">
              <h2 className="text-xl font-bold text-purple-500">{listing.name} Full Description</h2>
                <p>{listing.full_description}</p>                
              </div>
            </div>
          </div>
          
          {/* Right Column - Additional Info */}
          <div className="space-y-4">
                        
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Blockchain</h2>
              <p>{listing.blockchain}</p>
            </div>
            
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Governance</h2>
              <p>{listing.governance}</p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Keyword</h2>
              <p>{listing.keyword}</p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Use Case</h2>
              <p>{listing.use_case}</p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Tokenomics</h2>
              <p>{listing.tokenomic}</p>
              <a href={listing.whitepaper_url} target="_blank" className="text-blue-400 hover:text-blue-300">Whitepaper</a>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Website | Social Media</h2>
              <p><Link href={listing.website} target="_blank" className="text-blue-400 hover:text-blue-300">Website</Link></p>
              <p><Link href={listing.twitter} target="_blank" className="text-blue-400 hover:text-blue-300">Twitter</Link></p>
              <p><Link href={listing.discord} target="_blank" className="text-blue-400 hover:text-blue-300">Discord</Link></p>
              <p><Link href={listing.telegram} target="_blank" className="text-blue-400 hover:text-blue-300">Telegram</Link></p>
              <p><Link href={listing.solarplex} target="_blank" className="text-blue-400 hover:text-blue-300">Solarplex</Link></p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Project Team</h2>
              <p>{listing.team}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
