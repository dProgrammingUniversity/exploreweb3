// ExploreSol/app/directory/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

const DirectoryPage = () => {
  const [listings, setListings] = useState<ListingType[]>([]); // used pre-define type Listing Types in globalTypes.ts
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPricing, setFilterPricing] = useState('All');
  const [isListView, setIsListView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const supabaseClient = createClient();

  // Categories and statuses for filtering (assuming these are predefined)
  const categories = [
    'Finance', 'Game', 'Analytics', 'Wallet', 'Exchange', 
    'Multichain', 'Development Tool', 'NFT', 'Marketplace', 'Social', 
    'DAO', 'Infrastructure', 'Identity', 'Privacy', 'Storage', 
    'Oracle', 'Education', 'Content', 'Metaverse', 'Other'
  ];
  const statuses = ['Live', 'Maintenance', 'Upcoming', 'Rugged']; //... add all your statuses
  const pricings = ['Free', 'Freemium', 'Premium']; //... add all your pricing plans


  // Function to fetch listing data
  const fetchListingData = async () => {
    setLoading(true);
    const { data, error } = await supabaseClient.from('listings').select('*');
    if (error) {
      console.error('Error fetching listings:', error);
      setLoading(false);
    } else {
      setListings(data);
      setLoading(false);
    }
  };

  // Effect to fetch data on mount
  useEffect(() => {
    fetchListingData();
  }, []);

  // Filtered listings based on search, category, and status
const filteredListings = listings.filter((listing) => {
  const searchMatch = listing.name.toLowerCase().includes(searchTerm.toLowerCase());
  const categoryMatch = filterCategory === 'All' || listing.category === filterCategory; // Check for categories match
  const statusMatch = filterStatus === 'All' || listing.status === filterStatus; // Check for status match
  const pricingMatch = filterPricing === 'All' || listing.pricing === filterPricing; // Check for pricing match
  return searchMatch && categoryMatch && statusMatch && pricingMatch;
});

// Function to handle category button click
const handleCategoryClick = (category: string) => {
  setFilterCategory(category);
  setCurrentPage(1); // Reset pagination to page 1 when a new category is selected
};

// Paginated listings based on filtered results
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentListings = filteredListings.slice(indexOfFirstItem, indexOfLastItem);

// Function to handle pagination click
const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

// Display loading state
if (loading) {
  return <div>Loading...</div>;
}


  return (
    <div className="container mx-auto px-4">

      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded mb-4 md:mb-0 bg-purple-800"
          placeholder="Search for Solana dApps, Airdrop, Recovery, Security tools etc..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* All Categories Filter */}
        <select
          className="p-2 border rounded bg-gray-700"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map((category, idx) => (
            <option key={idx} value={category}>{category}</option>
          ))}
        </select>
        {/* All Pricing Filter */}
        <select
          className="p-2 border rounded bg-purple-800"
          value={filterPricing}
          onChange={(e) => setFilterPricing(e.target.value)}
        >
          <option value="All">All Pricing</option>
          {pricings.map((pricing, idx) => (
            <option key={idx} value={pricing}>{pricing}</option>
          ))}
        </select>
        {/* All Statuses Filter */}
        <select
          className="p-2 border rounded bg-gray-700"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          {statuses.map((status, idx) => (
            <option key={idx} value={status}>{status}</option>
          ))}
        </select>
        {/* grid/List View */}
        <button
          onClick={() => setIsListView(!isListView)}
          className={`p-2 border rounded ${isListView ? 'bg-gray-700 text-white' : 'bg-purple-800 text-white'}`}
        >
          {isListView ? 'GridView' : 'ListView'}
        </button>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => handleCategoryClick('All')}
          className={`p-2 border rounded ${filterCategory === 'All' ? 'bg-purple-700 text-white' : 'bg-black-400'}`}
        >
          All Categories
        </button>
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(category)}
            className={`p-2 border rounded ${filterCategory === category ? 'bg-purple-700 text-white' : 'bg-gray-500'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display listings Card*/}
      {/* Display listings with conditional rendering based on view type */}
      <div className={isListView ? 'flex flex-col' : 'grid md:grid-cols-3 gap-4'}>
        {currentListings.map((listing) => (
          <Link key={listing.slug} href={`/directory/${listing.slug}`} 
            passHref
            className={`border p-4 rounded-lg shadow mb-4 cursor-pointer transition duration-500 ease-in-out ${
              isListView ? 'hover:scale-105' : 'hover:scale-110'
            }`} // Add hover effect
            >
              {/* Conditional rendering for list vs grid view */}
              {isListView ? (
                <div className="flex items-center">
                  <img
                    src={listing.logo_url}
                    alt={listing.name}
                    className="w-20 h-20 object-cover object-center mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{listing.name}</h3>
                    {/* ...other listing details... */}
                  </div>
                </div>
              ) : (
                <div>
                  {/* card images */}
                  <img
                    src={listing.logo_url}
                    alt={listing.name}
                    className="w-full h-24 object-cover object-center mb-4" // Adjust size for thumbnails
                    style={{ maxHeight: "120px" }}
                  />
                  {/* card content */}
                  <h2 className="text-xl font-bold text-purple-700">{listing.name}</h2>
                  <h5 className="text-l font-semibold text-purple-300">{listing.category}</h5>
                  <p className="text-sm text-gray-400">{listing.year_founded} || {listing.keyword}</p>
                  <p className="text-sm text-green-500">{listing.status}</p>
                  {/* ...other listing details... */}
                </div>
              )}
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from(Array(Math.ceil(filteredListings.length / itemsPerPage)), (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`p-2 border rounded mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default DirectoryPage;
