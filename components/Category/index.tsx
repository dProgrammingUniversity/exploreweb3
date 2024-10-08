// /components/Category/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import CategoryCard from "./CategoryCard";
import Pagination from "@/components/Pagination";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 30;
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from("categories")
        .select("*")
        .order("name");

      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        setCategories(data as React.SetStateAction<never[]>);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);
  
  const filteredCategories = categories.filter((category) =>
    (category as { name: string }).name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
        Explore Web3/Solana Projects By Categories
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full rounded-md border p-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentCategories.map((category: { id: string | number }) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCategories.length / itemsPerPage)}
        onPageChange={paginate}
      />
    </div>
  );
};

export default CategoryPage;