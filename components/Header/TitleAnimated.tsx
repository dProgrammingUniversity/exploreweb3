// /components/Directory/AnimatedTitle.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

const AnimatedTitle = () => {
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
    const { count, error } = await supabaseClient
      .from("listings")
      .select("*", { count: "exact" })
      .eq("moderation_status", "approved");

    if (error) {
      console.error("Error fetching total listings:", error);
      return;
    }

    setTotalListings(count ?? 0); // Ensure count is a number
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

export default AnimatedTitle;
