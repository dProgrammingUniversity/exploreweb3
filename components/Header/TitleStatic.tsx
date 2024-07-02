// /components/Header/StaticTitle.tsx
import React from "react";

const StaticTitle = () => {
  return (
    <div className="container mx-auto py-8"> {/* Added mx-auto to center the container */}
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          Explore <span className="text-purple-400">Solana Ecosystem</span>
        </h1>
        <h2 className="text-xl font-semibold text-white md:text-2xl">
          & Discover Opportunities!
        </h2>
        <p className="mt-2 px-4 text-sm text-purple-300 md:text-base">
          Experience Solana <span className="text-pink-600">"S"</span> ecosystem easily, exclusive
          dApps/tools/resources/blinks updates, insights and opportunities (jobs, grants, bounty etc.) await you:
        </p>
      </div>
    </div>
  );
};

export default StaticTitle;
