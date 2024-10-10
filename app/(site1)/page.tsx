// /app/(site)/page.tsx
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
import TitleStatic from "@/components/Header/TitleStatic";
import BlinksTab from "@/components/Blinks/Tab";
import TitleAnimated from "@/components/Header/TitleAnimated";
import CategoryTab from "@/components/Category/Tab";

// Define fixed metadata values
const title = "Explore 1,000+ Web3 Projects - Explore Web3";
const description = "Explore Web3 Blockchains Ecosystems Projects (dApps, tools, content, artists, communities etc)";
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
      <TitleStatic />
      <Brands />
      {/* <Feature /> */}
      <TitleAnimated />
      <BlinksTab />
      {/* <Directory /> */}
      <CategoryTab />
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
