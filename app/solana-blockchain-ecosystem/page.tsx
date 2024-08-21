// /app/solana-blockchain-ecosystem/page.tsx
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Directory from "@/components/Directory";
import DirectoryTab from "@/components/Directory/Tab";
import { Metadata } from "next";
import TitleStaticSolana from "@/components/Header/TitleStaticSolana";
import BlinksTab from "@/components/Blinks/Tab";
import TitleAnimatedSolana from "@/components/Header/TitleAnimatedSolana";

// Define fixed metadata values
const title = "Explore Solana Ecosystem Projects - Explore Web3";
const description = "Explore WSolana Blockchains Ecosystems Projects (dApps, tools, content, artists, communities etc)";
const ogImage = "https://ExploreWeb3.xyz/images/opengraph-image.png";
const siteUrl = "https://ExploreWeb3.xyz"; // Replace with your actual site URL

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

export default function Home() {
  return (
    <main>
      <Hero />
      <TitleStaticSolana />
      <Brands />
      {/* <Feature /> */}
      <TitleAnimatedSolana />
      <BlinksTab />
      {/* <Directory /> */}
      <DirectoryTab />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
      {/* <Testimonial /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
      {/* <Blog />  */}
    </main>
  );
}
