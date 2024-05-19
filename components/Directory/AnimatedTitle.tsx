// Exploresol/components/AnimatedTitle.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const AnimatedTitle = () => {
  const [currentWord, setCurrentWord] = useState("dApps");
  const words = [
    "dApps",
    "Tools",
    "Contents",
    "Features",
    "Protocols",
    "Communities",
  ];
  const largestWordLength = Math.max(...words.map((word) => word.length));
  const widthOfLargestWord = `${largestWordLength}ch`;

  useEffect(() => {
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
    <>
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold text-green-500 md:text-4xl">
          {/* Main title section */}
          <div className="flex items-center justify-center gap-1">
            <span>Search 25/1,000+ Solana Projects</span>
            <span>{"=>"}</span>
            <span
              className="inline-block text-center text-purple-400"
              style={{ minWidth: widthOfLargestWord, padding: "0 0.5rem" }}
            >
              {currentWord}
            </span>
          </div>
        </h1>

        {/* Earn title section */}
        <div>
          <label className="text-l my-6 font-bold text-purple-500">
            Earn Using & Exploring Solana Projects
          </label>
          <span className="text-white-400  text-center">
            {" "}
            {"=>"} <Link href="/earn">Learn More!</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default AnimatedTitle;
