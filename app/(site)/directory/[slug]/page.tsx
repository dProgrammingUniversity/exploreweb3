// /directory/[slug]/page.tsx
"use client";
import React, { useState } from "react";
import ListingsFullDetailsPage from "@/components/Directory/Listings/FullDetailsPage";

const ListingDetailPage = () => {
  const [listingData, setListingData] = useState<DisplayListingTypes | null>(
    null,
  );

  const handleListingData = (data: DisplayListingTypes) => {
    setListingData(data);
  };

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <ListingsFullDetailsPage onListingDataLoaded={handleListingData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDetailPage;
