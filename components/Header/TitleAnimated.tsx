// /components/Header/TitleAnimated.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const TitleAnimated = () => {
  const [currentWord, setCurrentWord] = useState("dApps");
  const [totalListings, setTotalListings] = useState(0); // State to hold total number of listings
  const words = [
    "dApps",
    "Tools",
    "Contents",
    "Features",
    "Protocols",
    "Communities",
    "Blinks",
  ];

  // Initialize Supabase client
  const supabaseClient = createClient();

  // Function to fetch the total number of unique approved listings
  const fetchTotalListings = async () => {
    try {
      // Fetch count of listings from 'listings' table
      const { count: listingsCount, error: listingsError } = await supabaseClient
        .from("listings")
        .select("*", { count: "exact" })
        .eq("moderation_status", "approved");

      if (listingsError) {
        throw listingsError;
      }

      // Fetch count of listings from 'blinks' table
      const { count: blinksCount, error: blinksError } = await supabaseClient
        .from("blinks")
        .select("*", { count: "exact" })
        .eq("moderation_status", "approved");

      if (blinksError) {
        throw blinksError;
      }

      // Sum the counts from both tables
      const totalCount = (listingsCount ?? 0) + (blinksCount ?? 0);

      setTotalListings(totalCount); // Update the state with the total count
    } catch (error) {
      console.error("Error fetching total listings:", error);
    }
  };

  useEffect(() => {
    fetchTotalListings(); // Fetch total listings on mount

    const wordIndex = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);

    return () => clearInterval(wordIndex);
  }, []);

  return (
    <div className="text-center">
      <motion.h1
        className="mb-2 text-2xl font-bold text-green-500 md:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center gap-1">
          <span>Search {totalListings}/1,000+ Solana Projects & Blinks</span>
          <span>{"=>"}</span>
          <motion.span
            className="inline-block text-center text-purple-400"
            style={{ padding: "0 0.5rem" }}
            key={currentWord}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {currentWord}
          </motion.span>
        </div>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <label className="text-l my-6 font-bold text-purple-500">
          Earn Using & Exploring Solana Projects
        </label>
        <span className="text-white-400 text-center">
          {" "}
          {"=>"} <Link href="/earn">Learn More!</Link>
        </span>
      </motion.div>
    </div>
  );
};

export default TitleAnimated;
