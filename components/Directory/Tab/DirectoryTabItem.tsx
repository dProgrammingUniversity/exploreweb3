// /components/Directory/Tab/DirectoryTabItem.tsx
import React from "react";
import ListingsUpcoming from "../Listings/ListingsUpcoming";
import ListingsLive from "../Listings/ListingsLive";
import ListingsNew from "../Listings/ListingsNew";

const DirectoryTabItem = ({ featureTab }: { featureTab: directoryTabTypes }) => {
  const { title } = featureTab;

     const renderContent = () => {
       switch (title) {
         case "What Are The Upcoming Solana Projects":
           return <ListingsUpcoming />;
         case "How To Access The Live Solana Projects":
           return <ListingsLive />;
         case "Where Are The Newly Added Solana Projects":
           return <ListingsNew />;
         default:
           return null;
       }
     };

  return (
    <>
      <div className="flex-col items-center gap-8 lg:gap-19">
        <div className="w-full">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default DirectoryTabItem;
