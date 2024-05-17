// /components/Donate/index.tsx
"use client";
import React, { useState } from 'react';

const Donate = () => {
  const [walletAddress] = useState('63t6dZ78VFW1yX7uFJV678qFbZweDpUDenjLYEsq2J7q');

  const copyToClipboard = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(walletAddress);
        alert('Wallet address copied to clipboard!');
      } catch (err) {
        console.error('Copy failed:', err);
        fallbackCopyTextToClipboard(walletAddress);
      }
    } else {
      fallbackCopyTextToClipboard(walletAddress);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
      alert('Wallet address copied to clipboard!');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      alert('Failed to copy wallet address. Please try manually.');
    }

    document.body.removeChild(textArea);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6 text-purple-400">
        Kindly Donate to Keep ExploreSolana Project Going
      </h1>
      <p className="text-md mb-4">
        You can support by donating SOL and SOL tokens to the following wallet address - THANKS!:
      </p>
      <p className="break-words text-lg mb-2 p-2 border rounded-md bg-gray-800 text-white" style={{ userSelect: 'text' }}>
        {walletAddress}
      </p>
      <button onClick={copyToClipboard} className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-300">
        Copy Wallet Address
      </button>
    </>
  );
};

export default Donate;
