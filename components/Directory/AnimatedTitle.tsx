// Exploresol/components/AnimatedTitle.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

const AnimatedTitle = () => {
  const [currentWord, setCurrentWord] = useState("dApps");
  const words = ["dApps", "Tools", "Contents", "Features", "Protocols", "Communities"];
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
    <div className="text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-green-500 mb-2">
        {/* Main title section */}
        <div className="flex justify-center items-center gap-1">
          <span>Search 25/1,000+ Solana Projects</span>
          <span>{"=>"}</span>
          <span
            className="text-purple-400 inline-block text-center"
            style={{ minWidth: widthOfLargestWord, padding: "0 0.5rem" }}
          >
            {currentWord}
          </span>
        </div>
      </h1>

      {/* Earn title section */}
      <div>
        <label className="text-l font-bold my-6 text-purple-500">
          Earn Using & Exploring Solana Projects
        </label>
        <span
          className="text-white-400  text-center"
        >
          {" "} {"=>"} {" "}
          <Link href="/earn">
          Learn More!
          </Link>
        </span>
      </div>

    </div>
  );
};

export default AnimatedTitle;
