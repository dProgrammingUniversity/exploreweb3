// /components/Category/CategoryDetailsPage.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ListingsCard from "../Directory/Listings/ListingsCard";
import Pagination from "@/components/Pagination";

const CategoryDetailsPage = ({ slug }: { slug: string }) => {
  const [category, setCategory] = useState<{ id: number; name: string } | null>(null);
  const [listings, setListings] = useState<DisplayListingTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalListings, setTotalListings] = useState(0);
  const itemsPerPage = 9;
  const supabaseClient = createClient();


  useEffect(() => {
    const fetchCategoryAndListings = async () => {
      setLoading(true);

      // Fetch category
      const { data: categoryData, error: categoryError } = await supabaseClient
        .from('categories')
        .select('id, name')
        .eq('slug', slug)
        .single();

      if (categoryError) {
        console.error('Error fetching category:', categoryError);
        setLoading(false);
        return;
      }

      setCategory(categoryData);

      // Fetch total count of listings for this category
      const { count, error: countError } = await supabaseClient
        .from('listings')
        .select('*', { count: 'exact', head: true })
        .or(`category_1.eq.${categoryData.id},category_2.eq.${categoryData.id},category_3.eq.${categoryData.id},category_4.eq.${categoryData.id},category_5.eq.${categoryData.id}`)
        .eq('moderation_status', 'approved');

      if (countError) {
        console.error('Error fetching listings count:', countError);
      } else {
        setTotalListings(count || 0);
      }

      // Fetch paginated listings for this category
      const { data: listingsData, error: listingsError } = await supabaseClient
        .from('listings')
        .select('*')
        .or(`category_1.eq.${categoryData.id},category_2.eq.${categoryData.id},category_3.eq.${categoryData.id},category_4.eq.${categoryData.id},category_5.eq.${categoryData.id}`)
        .eq('moderation_status', 'approved')
        .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1)
        .order('created_at', { ascending: false });

      if (listingsError) {
        console.error('Error fetching listings:', listingsError);
      } else {
        setListings(listingsData);
      }

      setLoading(false);
    };

    fetchCategoryAndListings();
  }, [slug, currentPage, supabaseClient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!category) {
    return <div>Category not found</div>;
  }

  const totalPages = Math.ceil(totalListings / itemsPerPage);
  const categoryDescription = `Explore the latest ${category.name} projects in the Web3/Solana ecosystem.`;
  const categoryDescription2 = `Discover innovative dApps, tools, and resources that are shaping the future of blockchain technology.`;
  const categoryDescription3 = `Our curated list of ${category.name} projects offers in-depth information, user ratings, reviews, and direct links to help you navigate and engage with the most promising web3-based initiatives.`;
  const categoryDescription4 = `Whether you're a developer, investor, or blockchain enthusiast, find the cutting-edge ${category.name} solutions that are driving the Web3/Solana blockchain forward.`;       

  return (
    <div>
      <h1 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
        Web3/Solana {category.name} Projects ({totalListings})
      </h1>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
        {categoryDescription}
      </p>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
        {categoryDescription2}
      </p>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
        {categoryDescription3}
      </p>
      <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
        {categoryDescription4}
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing) => (
          <ListingsCard key={listing.id} listing={listing} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default CategoryDetailsPage;