// ExploreSol/app/directory/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import ListingsCard from './ListingsCard';

const DirectoryPage = () => {
  const [listings, setListings] = useState<DisplayListingTypes[]>([]); // used pre-define type Listing Types in globalTypes.ts
  const [categories, setCategories] = useState<string[]>([]); // State to hold categories from database
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

  // Function to fetch listing data
  const fetchListingData = async () => {
    setLoading(true);
    
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

  setListings(data);
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
          <ListingsCard key={listing.id} listing={listing} isListView={isListView} />
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
