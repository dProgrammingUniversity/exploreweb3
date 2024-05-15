// exploresol/components/ListingsUpcoming.tsx
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import ListingsCard from "./ListingsCard";

export const ListingsUpcoming = () => {
  const [upcomingListings, setUpcomingListings] = useState<
    DisplayListingTypes[]
  >([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchUpcomingListings = async () => {
      const { data, error } = await supabaseClient
        .from("listings")
        .select("*")
        .filter("status", "eq", "Upcoming")
        .eq('moderation_status', 'approved'); // filter for approved listings only
        
      if (error) {
        console.error("Error fetching upcoming listings:", error);
      } else {
        setUpcomingListings(data);
      }
    };

    fetchUpcomingListings();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {upcomingListings.map((listing) => (
        <ListingsCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingsUpcoming;
