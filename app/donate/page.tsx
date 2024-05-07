// ExploreSol/app/donate/page.tsx
"use client";
import React, { useState } from "react";

const DonatePage = () => {
  const [walletAddress] = useState("61ya6wbs638ekdu768wo3TWtYHS738wyt7wg3645wy");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      alert("Wallet address copied to clipboard!");
    } catch (err) {
      alert("Failed to copy wallet address. Please try manually.");
      console.error("Copy failed:", err);
    }
  };


return (
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold text-center my-6 text-purple-400">
      Kindly Donate to Keep ExploreSol Project Going
    </h1>
    <p className="text-md mb-4 text-center">
      You can support by donating SOL and SOL tokens to the following wallet address:
    </p>
    <p className="input-address">
      {walletAddress}
    </p>
  </div>



);
};

export default DonatePage;

