// /app/(site)/support/page.tsx
import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

// Define fixed metadata values
const title = "Contact Support - Explore Solana";
const description = "Earn Using and Exploring Solana Projects";
const ogImage = "https://ExploreSolana.com/images/opengraph-image.png";
const siteUrl = "https://ExploreSolana.com"; // Replace with your actual site URL

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

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
