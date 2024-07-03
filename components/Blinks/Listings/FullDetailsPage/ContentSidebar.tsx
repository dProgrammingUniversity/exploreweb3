// /components/Blinks/Listings/FullDetailsPage/ContentSidebar.tsx
"use client";
import React from "react";
import Link from "next/link";
import { AppendSiteUrlToExternalLink } from "@/utils/AppendSiteUrlToExternalLink";

const ContentSidebar: React.FC<{ listing: DisplayListingBlinksTypes }> = ({
  listing,
}) => {
  return (
    <div className="md:w-1/2 lg:w-[32%]">
      
      {/* Blinks Platforms */}
      <div className="animate_top mb-10 rounded-md border border-stroke bg-transparent p-9 shadow-solid-13 dark:border-strokedark dark:bg-transparent">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          {listing.name} Blinks Platforms:
        </h4>
        {listing.platforms && listing.platforms.length > 0 ? (
          <ul>
            {listing.platforms.map((platform, index) => (
              <li key={index} className="block text-gray-500">
                {platform}
              </li>
            ))}
          </ul>
        ) : (
          <span className="block text-gray-500">
            No platforms available
          </span>
        )}
      </div>
      
      {/* Blinks URL */}
      <div className="animate_top mb-10 rounded-md border border-stroke bg-transparent p-9 shadow-solid-13 dark:border-strokedark dark:bg-transparent">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          {listing.name} Blinks Website:
        </h4>
        {listing.blinks_url ? (
          <Link
            href={AppendSiteUrlToExternalLink(listing.blinks_url)}
            target="_blank"
            className="block text-blue-400 hover:text-blue-300"
          >
            {listing.name} Blinks URL
          </Link>
        ) : (
          <span className="block text-gray-500">
            {listing.name} Blinks Website link not available
          </span>
        )}
      </div>

      {/* Repository URL */}
      <div className="animate_top mb-10 rounded-md border border-stroke bg-transparent p-9 shadow-solid-13 dark:border-strokedark dark:bg-transparent">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          {listing.name} Blinks Repo URL:
        </h4>
        <span className="block text-green-600">
          {listing.name} Source Code Accessibility:
        </span>
        <span className="block">{listing.source_code_access}</span>
        {listing.blinks_actions_repo_url ? (
          <Link
            href={AppendSiteUrlToExternalLink(listing.blinks_actions_repo_url)}
            target="_blank"
            className="block text-blue-400 hover:text-blue-300"
          >
            {listing.name} Blinks Repository URL
          </Link>
        ) : (
          <span className="block text-gray-500">
            {listing.name} Blinks Repository link not available
          </span>
        )}
      </div>

      {/* Blinks Creator */}
      <div className="animate_top mb-10 rounded-md border border-stroke bg-transparent p-9 shadow-solid-13 dark:border-strokedark dark:bg-transparent">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          {listing.name} Blinks Creator:
        </h4>
        <span className="block text-gray-500">
          {listing.name} Blinks was created by{" "}
          <Link
            href={`/projects/${listing.project_slug}`}
            className="text-blue-400 hover:text-blue-300"
          >
            {listing.project_name}
          </Link>{" "}
          (Click to See the full project details, team, grants, jobs, bounty and
          more on Explore Solana Project Explorer)
        </span>
      </div>
    </div>
  );
};

export default ContentSidebar;

