// /components/Category/Tab/CategoryTabItem.tsx
import React from "react";
import CategoryPage from "..";
import Blinks from "..";

const CategoryTabItem = ({ featureTab }: { featureTab: directoryTabTypes }) => {
  const { title } = featureTab;

     const renderContent = () => {
       switch (title) {
         case "Explore Solana Projects By Categories":
           return <CategoryPage />;
        //  case "Explore Solana Blinks":
        //    return <Blinks />;
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

export default CategoryTabItem;
