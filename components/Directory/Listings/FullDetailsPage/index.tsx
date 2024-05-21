// /components/Directory/Listings/FullDetailsPage/index.tsx
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import ContentSidebar from "./ContentSidebar";
import ContentMain from "./ContentMain";

const ListingsFullDetailsPage: React.FC<{
  onListingDataLoaded?: (data: DisplayListingTypes) => void;
}> = ({ onListingDataLoaded }) => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const [listing, setListing] = useState<DisplayListingTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const supabaseClient = useMemo(() => createClient(), []);

  useEffect(() => {
    const fetchListingData = async () => {
      const { data, error } = await supabaseClient
        .from("listings")
        .select("*")
        .eq("slug", slug)
        .eq("moderation_status", "approved")
        .single();

      if (error) {
        console.error("Error fetching listing:", error);
        setLoading(false);
      } else {
        const categoryIds = [
          data.category_1,
          data.category_2,
          data.category_3,
          data.category_4,
          data.category_5,
        ].filter(Boolean);
        const { data: categoriesData, error: categoriesError } =
          await supabaseClient
            .from("categories")
            .select("id, name")
            .in("id", categoryIds);

        if (categoriesError) {
          console.error("Error fetching categories:", categoriesError);
        } else {
          const categoryNamesWithId = categoriesData.reduce(
            (acc, category) => ({ ...acc, [category.id]: category.name }),
            {}
          );
          const updatedListing = {
            ...data,
            category_1_name:
              categoryNamesWithId[data.category_1 as keyof CategoryNamesWithId],
            category_2_name:
              categoryNamesWithId[data.category_2 as keyof CategoryNamesWithId],
            category_3_name:
              categoryNamesWithId[data.category_3 as keyof CategoryNamesWithId],
            category_4_name:
              categoryNamesWithId[data.category_4 as keyof CategoryNamesWithId],
            category_5_name:
              categoryNamesWithId[data.category_5 as keyof CategoryNamesWithId],
          };
          setListing(updatedListing);
          onListingDataLoaded && onListingDataLoaded(updatedListing);
        }
        setLoading(false);
      }
    };

    if (slug) {
      fetchListingData();
    }
  }, [slug]);

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
        error,
      } = await supabaseClient.auth.getUser();
      if (user) {
        setUserId(user.id);
      } else {
        console.error("Error fetching user data (user id):", error);
      }
    };

    if (slug) {
      fetchUserData();
    }
  }, [supabaseClient]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="flex flex-wrap">
      <ContentSidebar listing={listing} />
      <ContentMain listing={listing} userId={userId} />
    </div>
  );
};

export default ListingsFullDetailsPage;
