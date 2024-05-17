// ExploreSol/app/directory/[slug]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { AppendSiteUrlToExternalLink } from '@/utils/AppendSiteUrlToExternalLink';

const ListingDetailPage = () => {
  const [listing, setListing] = useState<DisplayListingTypes | null>(null); // used pre-define type ListingType in globalTypes.ts
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
      setLoading(false);
    } else {
      // Check if the fetched listing has 'pending" or 'approved' or 'rejected' moderation status
      if (data && data.moderation_status === 'pending') {
        setListing(data);
      } else {
        setListing(null); // Don't set listing if not approved
      }
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
    return <div>Listing not found <br/>OR<br/> You might need to login to view the listings</div>;
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
            
            {/* Image */}
            <img src={listing.logo_url} alt={listing.name} className="w-full h-auto rounded-lg shadow-lg" />
            
            <div className="mt-4">
              {/* Author */}
              <p className="text-gray-400">Author - {listing.author_id}</p>
              {/* Pricing/category */}
              <p className="text-gray-400">{listing.pricing} - {listing.category}</p>
              {/* short description */}
              <h2 className="text-xl font-bold text-purple-500">{listing.name} Summary</h2>
              <p className="text-gray-300 mt-2">{listing.short_description}</p>
              {/* long description */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-purple-500">{listing.name} Description</h2>
                <p>{listing.full_description}</p>                
              </div>
              {/* pros description */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-purple-500">{listing.name} Pros</h2>
                <p>{listing.pros}</p>               
              </div>
              {/* cons description */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-purple-500">{listing.name} Cons</h2>
                <p>{listing.cons}</p>                
              </div>
              {/* Use Cases */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-purple-500">{listing.name} Use Case</h2>
                <p>{listing.use_case}</p>                
              </div>
              {/* Demo video */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-purple-500">{listing.name} Demo</h2>
              <p><Link href={AppendSiteUrlToExternalLink(listing.demo_url)} target="_blank" className="text-blue-400 hover:text-blue-300">Demo Video/Guide</Link></p>               
              </div>
              {/* Project Team */}
              <div className="mt-4 space-y-2">
                <h2 className="text-xl font-bold text-purple-500">{listing.name} Team</h2>
                <p>{listing.team}</p>                
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
              <h2 className="text-xl font-semibold mb-2">Tokenomic</h2>
              <p>Has Token: {listing.tokenomic}</p>
              <p>Token Ticker: {listing.token_name}</p>              
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">NFT Collection</h2>
              <p>NFT: {listing.nft_collection}</p>
              <p><Link href={AppendSiteUrlToExternalLink(listing.nft_collection_url)} target="_blank" className="text-blue-400 hover:text-blue-300">NFT Collection URL</Link></p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Website</h2>
              <p><Link href={AppendSiteUrlToExternalLink(listing.website)} target="_blank" className="text-blue-400 hover:text-blue-300">Website</Link></p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Social Media</h2>
              <p><Link href={AppendSiteUrlToExternalLink(listing.twitter)} target="_blank" className="text-blue-400 hover:text-blue-300">Twitter</Link></p>
              <p><Link href={AppendSiteUrlToExternalLink(listing.discord)} target="_blank" className="text-blue-400 hover:text-blue-300">Discord</Link></p>
              <p><Link href={AppendSiteUrlToExternalLink(listing.telegram)} target="_blank" className="text-blue-400 hover:text-blue-300">Telegram</Link></p>
              <p><Link href={AppendSiteUrlToExternalLink(listing.solarplex)} target="_blank" className="text-blue-400 hover:text-blue-300">Solarplex</Link></p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Roadmap</h2>
              <p><Link href={AppendSiteUrlToExternalLink(listing.roadmap_url)} target="_blank" className="text-blue-400 hover:text-blue-300">Roadmap</Link></p>
            </div>

            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Whitepaper</h2>
              <p><Link href={AppendSiteUrlToExternalLink(listing.whitepaper_url)} target="_blank" className="text-blue-400 hover:text-blue-300">Whitepaper</Link></p>
            </div>

            {/* Edit Moderation Status "pending" or "approved" or "rejected" */}
            <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Moderation Status</h2>
              <p>{listing.moderation_status}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailPage;
