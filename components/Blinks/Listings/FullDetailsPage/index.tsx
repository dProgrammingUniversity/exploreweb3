// /components/Blinks/Listings/FullDetailsPage/index.tsx
"use client";
import React from "react";
import ContentSidebar from "./ContentSidebar";
import ContentMain from "./ContentMain";

const BlinksListingsFullDetailsPage: React.FC<{
  listing: DisplayListingTypes;
  userId: string | null;
}> = ({ listing, userId }) => {

  return (
    <div className="flex flex-wrap">
      <ContentMain listing={listing} userId={userId} />
      <ContentSidebar listing={listing} />
    </div>
  );
};

export default BlinksListingsFullDetailsPage;


