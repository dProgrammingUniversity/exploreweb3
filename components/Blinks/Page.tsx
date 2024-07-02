// /components/Blinks/Page.tsx

"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ListingsCard from "./Listings/ListingsCard";

const BlinksPage = () => {
  const [listings, setListings] = useState<DisplayListingBlinksTypes[]>([]);
  const [categories, setCategories] = useState<{ name: string; count: number }[]>([]);
  const [totalListings, setTotalListings] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPlatform, setFilterPlatform] = useState("All");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [statuses, setStatuses] = useState([]);
  const [platforms, setPlatforms] = useState<{ id: number; name: string }[]>([]);
  const [categoryNamesById, setCategoryNamesById] = useState<CategoryNamesById>({});
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const supabaseClient = createClient();

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

  const fetchTotalListings = async () => {
    setLoading(true);
    const { count, error } = await supabaseClient
      .from("blinks")
      .select("*", { count: "exact" })
      .eq("moderation_status", "approved");

    if (error) {
      console.error("Error fetching total listings:", error);
      setLoading(false);
      return;
    }

    setTotalListings(count ?? 0);
    setLoading(false);
  };

  const fetchListingData = async () => {
    setLoading(true);
    const { data, error } = await supabaseClient
      .from("blinks")
      .select("*")
      .eq("moderation_status", "approved");

    if (error) {
      console.error("Error fetching listings:", error);
      setLoading(false);
      return;
    }

    setListings(data);
    setLoading(false);
  };

  const fetchStatuses = async () => {
    const { data, error } = await supabaseClient.rpc("enum_status_values");

    if (error) {
      console.error("Error fetching statuses:", error);
    } else {
      setStatuses(data);
    }
  };

  const fetchPlatforms = async () => {
    const { data, error } = await supabaseClient
      .from("blinks_platforms")
      .select("id, name");

    if (error) {
      console.error("Error fetching platforms:", error);
    } else {
      setPlatforms(data);
    }
  };

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
    setCategoryNamesById(fetchedCategoryNamesById);
  };

  useEffect(() => {
    fetchListingData();
    fetchCategories();
    fetchTotalListings();
    fetchStatuses();
    fetchPlatforms();
    initCategoryNamesById();
  }, []);

  const sortListings = (column: string) => {
    const direction = sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(direction);
    setSortColumn(column);
    setListings((prevListings) =>
      [...prevListings].sort((a, b) => {
        if (a[column] < b[column]) {
          return direction === "asc" ? -1 : 1;
        }
        if (a[column] > b[column]) {
          return direction === "asc" ? 1 : -1;
        }
        return 0;
      }),
    );
  };

  const filteredListings = listings.filter((listing) => {
    const searchMatch = listing.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch =
      filterCategory === "All" ||
      categoryNamesById[listing.category_1] === filterCategory ||
      categoryNamesById[listing.category_2] === filterCategory ||
      categoryNamesById[listing.category_3] === filterCategory ||
      categoryNamesById[listing.category_4] === filterCategory ||
      categoryNamesById[listing.category_5] === filterCategory;

    const statusMatch = filterStatus === "All" || listing.status === filterStatus;
    const platformMatch = filterPlatform === "All" || listing.platform_ids.includes(parseInt(filterPlatform));

    return searchMatch && categoryMatch && statusMatch && platformMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListings = filteredListings.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mb-4 flex flex-col justify-between md:flex-row">
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
        <select
          className="rounded border bg-purple-800 p-2"
          value={filterPlatform}
          onChange={(e) => setFilterPlatform(e.target.value)}
        >
          <option value="All">All Platforms</option>
          {platforms.map((platform, idx) => (
            <option key={idx} value={platform.id}>
              {platform.name}
            </option>
          ))}
        </select>
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
        <input
          type="text"
          className="mb-4 w-full rounded border bg-purple-800 p-2 md:mb-0"
          placeholder="Search for Solana Blinks, Airdrop, Recovery, Security tools etc..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => sortListings("index")}
              >
                #
              </th>
              <th
                className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => sortListings("name")}
              >
                Name
              </th>
              <th
                className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => sortListings("status")}
              >
                Status
              </th>
              <th
                className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => sortListings("platforms")}
              >
                Platforms
              </th>
              <th
                className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => sortListings("year_created")}
              >
                Year Created
              </th>
              <th
                className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 cursor-pointer"
                onClick={() => sortListings("categories")}
              >
                Categories
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {currentListings.map((listing, index) => (
              <ListingsCard key={listing.id} listing={listing} index={index + 1 + (currentPage - 1) * itemsPerPage} />
            ))}
          </tbody>
        </table>
      </div>

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
