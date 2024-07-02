// /app/blinks/page.tsx
import BlinksPage from "@/components/Blinks/Page";
import AnimatedTitle from "@/components/Header/TitleAnimated";
import { Metadata } from "next";
import StaticTitle from "@/components/Header/TitleStatic";

// Define fixed metadata values
const title = "Explore Solana Blinks - Explore Solana";
const description = "Earn Using and Exploring Solana Projects& Blinks";
const ogImage = "https://ExploreSolana.com/images/opengraph-image.png";
const siteUrl = "https://ExploreSolana.com/directory"; // Replace with your actual site URL

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

const BlinksHomePage = () => {
  
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-7.5">
            {/* Top text section with highlighted text */}
            <StaticTitle />

            {/* Animated text component */}
            <AnimatedTitle />

            {/* Directory Page */}
            <BlinksPage />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlinksHomePage;
