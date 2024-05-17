import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Home - Explore Solana",
  description: "Earn Using and Exploring Solana Projects",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      {/* <Feature /> */}
      <Directory />
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
