// /app/projects/page.tsx
import Directory from "@/components/Directory";
import TitleAnimated from "@/components/Header/TitleAnimated";
import { Metadata } from "next";
import TitleStaticProjects from "@/components/Header/TitleStaticProjects";

// Define fixed metadata values
const title = "Explore 1,000+ Web3 Projects Directory - Explore Web3";
const description = "Earn Using and Exploring Web3 Projects";
const ogImage = "https://ExploreWeb3.xyz/images/opengraph-image.png";
const siteUrl = "https://ExploreWeb3.xyz/projects"; // Replace with your actual site URL

// Create metadata object
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: siteUrl,
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [ogImage],
  },
};

const DirectoryHomePage = () => {
  
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-7.5">
            {/* Top text section with highlighted text */}
            <TitleStaticProjects />

            {/* Animated text component */}
            <TitleAnimated />

            {/* Directory Page */}
            <Directory />
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectoryHomePage;
