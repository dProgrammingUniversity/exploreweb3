// /app/(site1)/category/page.tsx
import { Metadata } from "next";
import CategoryPage from "@/components/Category";

// Define fixed metadata values
const title = "Projects Categories - Explore Web3";
const description = "Browse all categories of Web3/Solana blockchain projects on Explore Web3";
const ogImage = "https://ExploreWeb3.xyz/images/category-opengraph-image.png";
const siteUrl = "https://ExploreWeb3.xyz";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: siteUrl,
    type: 'website',
    title: title,
    description: description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [ogImage],
  },
};

export default function CategoryHomePage() {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <CategoryPage />
      </div>
    </section>
  );
}
