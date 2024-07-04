// /components/Blinks/Favorites/BlinksPage.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ListingsTableCard from "../../Blinks/Listings/ListingsTableCard";

const FavoritesBlinksPage = () => {
  const [listings, setListings] = useState<DisplayListingBlinksTypes[]>([]);
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [totalListings, setTotalListings] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPlatform, setFilterPlatform] = useState("All");
  const [filterRegistry, setFilterRegistry] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [statuses, setStatuses] = useState([]);
  const [platforms, setPlatforms] = useState<{ id: number; name: string }[]>([]);
  const [registryStatuses, setRegistryStatuses] = useState<string[]>([]);
  const [categoryNamesById, setCategoryNamesById] = useState<CategoryNamesById>({});
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const supabaseClient = createClient();

  useEffect(() => {
    const fetchFavorites = async () => {
      setLoading(true);
      const { data: { user } } = await supabaseClient.auth.getUser();

      if (!user) {
        console.error("User not authenticated");
        setLoading(false);
        return;
      }

      const { data, error } = await supabaseClient
        .from('blinks_favorites')
        .select('blinks_id')
        .eq('user_id', user.id);

      if (error) {
        console.error("Error fetching favorite blinks:", error);
        setLoading(false);
        return;
      }

      const blinksIds = data.map((favorite) => favorite.blinks_id);

      const { data: blinks, error: blinksError } = await supabaseClient
        .from('blinks')
        .select('*')
        .in('id', blinksIds)
        .eq('moderation_status', 'approved');

      if (blinksError) {
        console.error("Error fetching blinks:", blinksError);
        setLoading(false);
        return;
      }

      setListings(blinks);
      setTotalListings(blinks.length);
      setLoading(false);
    };

    fetchFavorites();
  }, []);

  // Fetch categories from the database
  const fetchCategories = async () => {
    const { data, error } = await supabaseClient
      .from("blinks_categories_count")
      .select("category_name, total_blinks");

    if (!error) {
      setCategories(data.map((category) => ({
        name: category.category_name,
        count: category.total_blinks,
      })));
    } else {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch statuses from the database
  const fetchStatuses = async () => {
    const { data, error } = await supabaseClient.rpc("enum_status_values");
    if (!error) setStatuses(data);
  };

  // Fetch platforms from the database
  const fetchPlatforms = async () => {
    const { data, error } = await supabaseClient.from("blinks_platforms").select("id, name");
    if (!error) setPlatforms(data);
  };

  // Fetch registry statuses from the database
  const fetchRegistryStatuses = async () => {
    const { data, error } = await supabaseClient.rpc("enum_blinks_registry_status_values");
    if (!error) setRegistryStatuses(data);
  };

  // Fetch all category names from the database
  const fetchAllCategoryNames = async () => {
    const { data, error } = await supabaseClient.from("categories").select("id, name");
    if (!error) {
      setCategoryNamesById(data.reduce((acc, category) => ({ ...acc, [category.id]: category.name }), {}));
    } else {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchStatuses();
    fetchPlatforms();
    fetchRegistryStatuses();
    fetchAllCategoryNames();
  }, []);

  const sortListings = (column) => {
    const direction = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(direction);
    setSortColumn(column);
    setListings(prevListings =>
      [...prevListings].sort((a, b) => {
        if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
        if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  const filteredListings = listings.filter((listing) => {
    const searchMatch = listing.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = filterCategory === "All" ||
      categoryNamesById[listing.category_1] === filterCategory ||
      categoryNamesById[listing.category_2] === filterCategory ||
      categoryNamesById[listing.category_3] === filterCategory ||
      categoryNamesById[listing.category_4] === filterCategory ||
      categoryNamesById[listing.category_5] === filterCategory;

    const statusMatch = filterStatus === "All" || listing.status === filterStatus;
    const platformMatch = filterPlatform === "All" || listing.platform_ids.includes(parseInt(filterPlatform));
    const registryMatch = filterRegistry === "All" || listing.blinks_registry_status === filterRegistry;

    return searchMatch && categoryMatch && statusMatch && platformMatch && registryMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListings = filteredListings.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-4 flex flex-col justify-between md:flex-row">
        {/* Category Filter */}
        <select className="rounded border bg-gray-700 p-2 text-white" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All Categories ({totalListings})</option>
          {categories
            .filter((category) => category.count > 0) // Only show categories with at least 1 blink
            .map((category, idx) => (
              <option key={idx} value={category.name}>
                {category.name} ({category.count})
              </option>
            ))}
        </select>
        {/* Platform Filter */}
        <select className="rounded border bg-purple-800 p-2 text-white" value={filterPlatform} onChange={(e) => setFilterPlatform(e.target.value)}>
          <option value="All">All Platforms</option>
          {platforms.map((platform, idx) => (
            <option key={idx} value={platform.id}>
              {platform.name}
            </option>
          ))}
        </select>
        {/* Status Filter */}
        <select className="rounded border bg-gray-700 p-2 text-white" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          {statuses.map((status, idx) => (
            <option key={idx} value={status}>
              {status}
            </option>
          ))}
        </select>
        {/* Registry Filter */}
        <select className="rounded border bg-purple-800 p-2 text-white" value={filterRegistry} onChange={(e) => setFilterRegistry(e.target.value)}>
          <option value="All">All Registry Status</option>
          {registryStatuses.map((registry, idx) => (
            <option key={idx} value={registry}>
              {registry}
            </option>
          ))}
        </select>
        {/* Search box Filter */}
        <input type="text" className="mb-4 w-full rounded border bg-purple-800 p-2 text-white md:mb-0" placeholder="Search for Solana Blinks, Airdrop, Recovery, Security tools etc..." onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

       {/* Blinks Table */}
       <ListingsTableCard
  listings={currentListings}
  currentPage={currentPage}
  itemsPerPage={itemsPerPage}
  sortListings={sortListings}
/>


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

export default FavoritesBlinksPage;
