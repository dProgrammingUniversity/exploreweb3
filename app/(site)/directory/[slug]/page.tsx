// ExploreSol/app/directory/[slug]/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
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

  // Force metadata update workaround
  // (may not be necessary only use to enforce if <Head> not reflecting on its own -)
  // useEffect(() => {
  //   const updateMetaTag = (name: string, content: string, property = false) => {
  //     let metaTag = document.querySelector(
  //       `${property ? 'meta[property="' : 'meta[name="'}${name}"]`,
  //     );
  //     if (!metaTag) {
  //       metaTag = document.createElement("meta");
  //       if (property) {
  //         metaTag.setAttribute("property", name);
  //       } else {
  //         metaTag.setAttribute("name", name);
  //       }
  //       document.getElementsByTagName("head")[0].appendChild(metaTag);
  //     }
  //     metaTag.setAttribute("content", content);
  //   };

  //   // This will update the document head only when listingData changes and is not null.
  //   if (listingData) {
  //     updateMetaTag("og:title", listingData.name, true);
  //     updateMetaTag("og:description", listingData.short_description, true);
  //     updateMetaTag("og:image", listingData.logo_url, true);
  //     updateMetaTag("og:url", window.location.href, true);
  //     updateMetaTag("og:type", "article", true);
  //     updateMetaTag("description", listingData.short_description);
  //     document.title = `${listingData.name} - ExploreSol`; // Update the title
  //   }
  // }, [listingData]);

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            {/* <RelatedPost /> */}
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
