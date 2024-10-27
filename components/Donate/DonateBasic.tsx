// /components/Donate/DonateBasic.tsx
"use client";
import React, { useState } from "react";

const DonateBasic = () => {
  const [walletAddress] = useState(
    "63t6dZ78VFW1yX7uFJV678qFbZweDpUDenjLYEsq2J7q",
  );

  // Wallet copy function starts
  const copyToClipboard = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(walletAddress);
        alert("Wallet address copied to clipboard!");
      } catch (err) {
        console.error("Copy failed:", err);
        fallbackCopyTextToClipboard(walletAddress);
      }
    } else {
      fallbackCopyTextToClipboard(walletAddress);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
      alert("Wallet address copied to clipboard!");
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
      alert("Failed to copy wallet address. Please try manually.");
    }

    document.body.removeChild(textArea);
  };
  // Wallet copy function ends

  return (
    <>
      <h1 className="my-6 text-center text-2xl font-bold text-purple-400">
        Kindly Donate to Keep ExploreSolana Project Going
      </h1>
      <p className="text-md mb-4">
        You can support by donating SOL and SOL tokens to the following wallet
        address - THANKS!:
      </p>
      <p
        className="mb-2 break-words rounded-md border bg-gray-800 p-2 text-lg text-white"
        style={{ userSelect: "text" }}
      >
        {walletAddress}
      </p>
      <button
        onClick={copyToClipboard}
        className="mb-5 mt-2 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Copy Wallet Address
      </button>

      

    </>
  );
};

export default DonateBasic;
