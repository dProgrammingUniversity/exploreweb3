// /components/Blinks/Page.tsx

"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ListingsCard from "./Listings/ListingsCard";

const BlinksPage = () => {
  const [listings, setListings] = useState<DisplayListingTypes[]>([]); // used pre-define type Listing Types in globalTypes.ts
  const [categories, setCategories] = useState<{ name: string, count: number }[]>([]); // State to hold categories with counts from database
  const [totalListings, setTotalListings] = useState(0); // State to hold total number of listings
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPricing, setFilterPricing] = useState("All");
  const [isListView, setIsListView] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [statuses, setStatuses] = useState([]); // State to hold statuses from database
  const [categoryNamesById, setCategoryNamesById] = useState<CategoryNamesById>({}); // State to hold category names by ID

  // Initialize Supabase client
  const supabaseClient = createClient();

  // Define the pricing plans
  const pricings = ["Free", "Freemium", "Premium"]; //... add all your pricing plans

  // Function to fetch category data with counts from the 'categories_counting' view
  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabaseClient
      .from("categories_counting")
      .select("category_name, total_listings");

    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data.map((category) => ({
        name: category.category_name,
        count: category.total_listings
      })));
    }
    setLoading(false);
  };

  // Function to fetch the total number of unique approved listings
  const fetchTotalListings = async () => {
    setLoading(true);
    const { count, error } = await supabaseClient
      .from("listings")
      .select("*", { count: "exact" })
      .eq("moderation_status", "approved");

    if (error) {
      console.error("Error fetching total listings:", error);
      setLoading(false);
      return;
    }

    setTotalListings(count ?? 0); // Ensure count is a number
    setLoading(false);
  };

  // Function to fetch listing data
  const fetchListingData = async () => {
    setLoading(true);

    // Query only for listings with moderation_status set to 'approved'
    const { data, error } = await supabaseClient
      .from("listings")
      .select("*")
      .eq("moderation_status", "approved"); // filter for approved listings only

    // Check for errors
    if (error) {
      console.error("Error fetching listings:", error);
      setLoading(false);
      return;
    }

    setListings(data);
    setLoading(false);
  };

  // Function to Fetch statuses from the database
  const fetchStatuses = async () => {
    const { data, error } = await supabaseClient.rpc("enum_status_values");

    if (error) {
      console.error("Error fetching statuses:", error);
    } else {
      setStatuses(data);
    }
  };

  // Function to fetch all categories with their IDs
  const fetchAllCategoryNames = async () => {
    const { data, error } = await supabaseClient
      .from("categories")
      .select("id, name");
    if (error) {
      console.error("Error fetching categories:", error);
      return {};
    }
    return data.reduce(
      (acc, category) => ({ ...acc, [category.id]: category.name }),
      {},
    );
  };

  const initCategoryNamesById = async () => {
    const fetchedCategoryNamesById = await fetchAllCategoryNames();
    // Use categoryNamesById to enrich listings or for filtering
    setCategoryNamesById(fetchedCategoryNamesById);
  };

  // Effect to fetch data on mount
  useEffect(() => {
    fetchListingData();
    fetchCategories();
    fetchTotalListings(); // Fetch total listings separately
    fetchStatuses();
    initCategoryNamesById();
  }, []);

  // Filtered listings based on search, category, and status
  const filteredListings = listings.filter((listing) => {
    const searchMatch = listing.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Check for category match in any of the five category fields
    const categoryMatch =
      filterCategory === "All" ||
      categoryNamesById[listing.category_1] === filterCategory ||
      categoryNamesById[listing.category_2] === filterCategory ||
      categoryNamesById[listing.category_3] === filterCategory ||
      categoryNamesById[listing.category_4] === filterCategory ||
      categoryNamesById[listing.category_5] === filterCategory;

    // check status match
    const statusMatch =
      filterStatus === "All" || listing.status === filterStatus;
    const pricingMatch =
      filterPricing === "All" || listing.pricing === filterPricing;

    // Return true if all conditions are met
    return searchMatch && categoryMatch && statusMatch && pricingMatch;
  });

  // Paginated listings based on filtered results
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListings = filteredListings.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Function to handle pagination click
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // <div className="container mx-auto px-4">
    <>
      {/* Search and filter controls */}
      <div className="mb-4 flex flex-col justify-between md:flex-row">
        
        {/* Grid/List View */}
        <button
          onClick={() => setIsListView(!isListView)}
          className={`rounded border p-2 ${isListView ? "bg-gray-700 text-white" : "bg-purple-800 text-white"}`}
        >
          {isListView ? "GridView" : "ListView"}
        </button>

        {/* All Categories Filter */}
        <select
          className="rounded border bg-gray-700 p-2"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All Categories ({totalListings})</option>
          {categories.map((category, idx) => (
            <option key={idx} value={category.name}>
              {category.name} ({category.count})
            </option>
          ))}
        </select>

        {/* All Pricing Filter */}
        <select
          className="rounded border bg-purple-800 p-2"
          value={filterPricing}
          onChange={(e) => setFilterPricing(e.target.value)}
        >
          <option value="All">All Pricing</option>
          {pricings.map((pricing, idx) => (
            <option key={idx} value={pricing}>
              {pricing}
            </option>
          ))}
        </select>

        {/* All Statuses Filter */}
        <select
          className="rounded border bg-gray-700 p-2"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          {statuses.map((status, idx) => (
            <option key={idx} value={status}>
              {status}
            </option>
          ))}
        </select>
        
        {/* Search bar */}
        <input
          type="text"
          className="mb-4 w-full rounded border bg-purple-800 p-2 md:mb-0"
          placeholder="Search for Solana dApps, Airdrop, Recovery, Security tools etc..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
      </div>

      {/* Display listings Card*/}
      {/* Display listings with conditional rendering based on view type */}
      <div
        className={isListView ? "flex flex-col" : "grid gap-4 md:grid-cols-3"}
      >
        {currentListings.map((listing) => (
          <ListingsCard
            key={listing.id}
            listing={listing}
            isListView={isListView}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from(
          Array(Math.ceil(filteredListings.length / itemsPerPage)),
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 rounded border p-2 ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
            >
              {index + 1}
            </button>
          ),
        )}
      </div>
    </>
  );
};

export default BlinksPage;
