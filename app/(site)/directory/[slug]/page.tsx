// /directory/[slug]/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ListingsFullDetailsPage from "@/components/Directory/Listings/ListingsFullDetailsPage";


const ListingDetailPage = () => {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";
  const [listingData, setListingData] = useState<DisplayListingTypes | null>(
    null,
  );

  // Callback to update <Head> tag with listing data from the component
  const handleListingData = (data: DisplayListingTypes) => {
    // console.log("Received listing data:", data);  // Debugging output
    setListingData(data);
  };


  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <ListingsFullDetailsPage
              slug={slug}
              onListingDataLoaded={handleListingData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDetailPage;
