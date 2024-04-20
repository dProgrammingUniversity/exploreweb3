// ExploreSol/app/directory/page.tsx
"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';

const DirectoryPage = () => {
  const [listings, setListings] = useState<ListingType[]>([]); // used pre-define type Listing Types in globalTypes.ts
  const [categories, setCategories] = useState([]); // State to hold categories from database
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPricing, setFilterPricing] = useState('All');
  const [isListView, setIsListView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Define the default image URL
  const defaultImageUrl = "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";
  const [statuses, setStatuses] = useState([]); // State to hold statuses from database

  // Initialize Supabase client
  const supabaseClient = createClient();

  // Define the pricing plans
  const pricings = ['Free', 'Freemium', 'Premium']; //... add all your pricing plans


// Function to fetch category data from the 'categories' table
const fetchCategories = async () => {
  setLoading(true);
  const { data, error } = await supabaseClient
    .from('categories')
    .select('id, name');

  if (error) {
    console.error('Error fetching categories:', error);
  } else {
    setCategories(data.map(category => category.name));
  }
  setLoading(false);
};

// Helper function to fetch a single category name by ID
const fetchCategoryName = async (categoryId: any) => {
  const { data, error } = await supabaseClient
    .from('categories')
    .select('name')
    .eq('id', categoryId)
    .single();

  if (error) {
    console.error('Error fetching category name:', error);
    return 'N/A'; // or any default value you want to use
  }

  return data.name;
};


// Function to fetch all categories with their IDs
const fetchAllCategoryNames = async () => {
  const { data, error } = await supabaseClient
    .from('categories')
    .select('id, name');
  if (error) {
    console.error('Error fetching categories:', error);
    return {};
  }
  // Convert array of categories to an object where the key is the category ID and the value is the category name
  return data.reduce((acc, category) => ({ ...acc, [category.id]: category.name }), {});
};


  // Function to fetch listing data
  const fetchListingData = async () => {
    setLoading(true);

    const categoryNamesById = await fetchAllCategoryNames(); // Fetch all category names at once
    
    // Query only for listings with moderation_status set to 'approved'
    const { data, error } = await supabaseClient
    .from('listings')
    .select('*')
    .eq('moderation_status', 'approved'); // filter for approved listings only
    
    // Check for errors
    if (error) {
      console.error('Error fetching listings:', error);
      setLoading(false);
      return;
    }

    // Map over the listings and assign category names using the previously fetched category names by ID
  const listingsWithCategoryNames = data.map(listing => ({
    ...listing,
    category_1_name: categoryNamesById[listing.category_1],
    category_2_name: categoryNamesById[listing.category_2],
    category_3_name: categoryNamesById[listing.category_3],
    category_4_name: categoryNamesById[listing.category_4],
    category_5_name: categoryNamesById[listing.category_5],
  }));

  setListings(listingsWithCategoryNames);
  setLoading(false);

  };


  // Function to Fetch statuses from the database
  const fetchStatuses = async () => {
    const { data, error } = await supabaseClient
      .rpc('enum_status_values');

    if (error) {
      console.error("Error fetching statuses:", error);
    } else {
      setStatuses(data);
    }
  };


  // Effect to fetch data on mount
  useEffect(() => {
    fetchListingData();
    fetchCategories();
    fetchStatuses();
  }, []);

  // Filtered listings based on search, category, and status
const filteredListings = listings.filter((listing) => {
  const searchMatch = listing.name.toLowerCase().includes(searchTerm.toLowerCase());

  // Check for category match in any of the five category fields
  const categoryMatch = filterCategory === 'All' ||
    listing.category_1_name === filterCategory ||
    listing.category_2_name === filterCategory ||
    listing.category_3_name === filterCategory ||
    listing.category_4_name === filterCategory ||
    listing.category_5_name === filterCategory; // Adjust these as per your actual data structure
  
  // check status match
  const statusMatch = filterStatus === 'All' || listing.status === filterStatus; 
  const pricingMatch = filterPricing === 'All' || listing.pricing === filterPricing; 
  
  // Return true if all conditions are met
  return searchMatch && categoryMatch && statusMatch && pricingMatch;
  
});


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
        {/* Grid/List View */}
        <button
          onClick={() => setIsListView(!isListView)}
          className={`p-2 border rounded ${isListView ? 'bg-gray-700 text-white' : 'bg-purple-800 text-white'}`}
        >
          {isListView ? 'GridView' : 'ListView'}
        </button>
      </div>

      {/* Display listings Card*/}
      {/* Display listings with conditional rendering based on view type */}
      <div className={isListView ? 'flex flex-col' : 'grid md:grid-cols-3 gap-4'}>
        {currentListings.map((listing) => (
          <Link key={listing.slug} href={`/directory/${listing.slug}`} target='_blank'
            passHref
            className={`border p-4 rounded-lg shadow mb-4 cursor-pointer transition duration-500 ease-in-out ${
              isListView ? 'hover:scale-105' : 'hover:scale-110'
            }`} // Add hover effect
            >
              {/* Conditional rendering for list vs grid view */}
              {isListView ? (
                <div className="flex items-center">
                  <img
                    src={listing.logo_url || defaultImageUrl}
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
                    src={listing.logo_url || defaultImageUrl} // Use default image URL if listing logo_url is not available
                    alt={listing.name}
                    className="w-full h-24 object-cover object-center mb-4" // Adjust size for thumbnails
                    style={{ maxHeight: "120px" }}
                  />
                  {/* card content */}
                  <h2 className="text-xl font-bold text-purple-700">{listing.name}</h2>
                  <h5 className="text-l font-semibold text-purple-300">{listing.category_1_name}</h5>
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
