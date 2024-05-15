// Exploresol/components/AnimatedTitle.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";

const AnimatedTitle = () => {
  const [currentWord, setCurrentWord] = useState("dApps");
  const words = ["dApps", "Tools", "Contents", "Features"];
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
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {/* Main title section */}
        <div className="flex justify-center items-center gap-1">
          <span>Search 10/1,000+ Solana Projects</span>
          <span>-</span>
          <span
            className="text-purple-400 inline-block text-center"
            style={{ minWidth: widthOfLargestWord, padding: "0 0.5rem" }}
          >
            {currentWord}
          </span>
        </div>

        {/* Earn title section */}
        <div>
          <label className="text-l font-bold my-6 text-purple-500">
            Earn Using & Supporting Solana Projects You Love/Hate
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
      </h1>
    </div>
  );
};

export default AnimatedTitle;
