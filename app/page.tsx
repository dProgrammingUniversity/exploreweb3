// ExploreSol/app/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import { ListingsTop } from "@/components/ListingsTop";
import DirectoryPage from "@/components/DirectoryPage";
import { ListingsNew } from "@/components/ListingsNew";
import { ListingsUpcoming } from "@/components/ListingsUpcoming";
import { ListingsLive } from "@/components/ListingsLive";
import Iframe from "react-iframe"; // import Iframe from react-iframe to render subscribe form


export default function HomePage() {
  // Animate words
  const [currentWord, setCurrentWord] = useState('dApps');
  const words = ['dApps', 'Tools', 'Contents']; // Add more words as needed

  // Calculate the width of the largest word
  const largestWordLength = Math.max(...words.map(word => word.length));
  const widthOfLargestWord = `${largestWordLength}ch`; // `ch` unit represents the width of the "0" character

  useEffect(() => {
    const wordIndex = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(wordIndex);
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Top text section with highlighted text */}
      <div className="bg-black py-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Explore <span className="text-purple-400">Solana Ecosystem</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            & Discover Opportunities!
          </h2>
          <p className="text-sm md:text-base text-purple-300 mt-2 px-4">
            Handpicked <span className="text-pink-600">"S"</span>, exclusive
            dApps/tools/resources updates, insights and opportunities await you:
          </p>
          <p>
            <em>
              Subscribe now and be part of the pioneering &quot;S&quot;
              community.
            </em>
          </p>

          <Iframe
            url="https://exploresol.substack.com/embed"
            width="480px"
            height="320px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            styles={{ border: "1px solid #EEE", background: "white" }}
          />
        </div>
      </div>

      {/* Directory Page component */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {/* Flex container for static and animated texts */}
          <div className="flex justify-center items-center gap-1"> {/* Adjusted gap */}
            {/* Static Text */}
            <span>Search 10/1,000+ Solana</span>
            <span>-</span>
            {/* Animated Word with fixed width and adjusted padding */}
            <span
              className="text-purple-400 inline-block text-center"
              style={{ minWidth: widthOfLargestWord, padding: '0 0.5rem' }} // Adjust padding as needed
            >
              {currentWord}
            </span>
          </div>
        </h1>
      </div>
      <DirectoryPage />

      {/* Top Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">Top Listings</h2>
        {/* Component to display top listings */}
        <ListingsTop />
      </section>

      {/* New Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">New Listings</h2>
        {/* Component to display new listings */}
        <ListingsNew />
      </section>

      {/* Upcoming Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">Upcoming</h2>
        {/* Component to display upcoming listings */}
        <ListingsUpcoming />
      </section>

      {/* Live Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">Live Listings</h2>
        {/* Component to display live listings */}
        <ListingsLive />
      </section>
    </div>
  );
}
