// /components/Category/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import CategoryCard from "./CategoryCard";
import Pagination from "@/components/Pagination";

const CategoryPage = () => {
  const [categories, setCategories] = useState<{ id: number; name: string; projectCount: number }[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalProjects, setTotalProjects] = useState(0);
  const itemsPerPage = 12;
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from("categories")
        .select("id, name, slug");
  
      if (error) {
        console.error("Error fetching categories:", error);
      } else {
        // Sort categories alphabetically by name
        const sortedCategories = data.sort((a, b) => a.name.localeCompare(b.name));
  
        const categoriesWithCount = await Promise.all(
          sortedCategories.map(async (category) => {
            const { count } = await supabaseClient
              .from("listings")
              .select("*", { count: "exact", head: true })
              .or(`category_1.eq.${category.id},category_2.eq.${category.id},category_3.eq.${category.id},category_4.eq.${category.id},category_5.eq.${category.id}`)
              .eq("moderation_status", "approved");
  
            return { ...category, projectCount: count || 0 };
          })
        );
  
        setCategories(categoriesWithCount);
      }
  
      // Fetch total number of projects
      const { count: totalProjectsCount, error: projectsError } = await supabaseClient
        .from("listings")
        .select("*", { count: "exact", head: true })
        .eq("moderation_status", "approved");
  
      if (projectsError) {
        console.error("Error fetching total projects:", projectsError);
      } else {
        setTotalProjects(totalProjectsCount || 0);
      }
  
      setLoading(false);
    };
  
    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
        Explore {totalProjects}+ Web3/Solana Projects In Over {categories.length} Categories
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
        {currentCategories.map((category) => (
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