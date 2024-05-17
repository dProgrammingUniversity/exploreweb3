// /components/Donate/index.tsx
"use client"
import React, { useState } from 'react';

const Donate = () => {
  const [walletAddress] = useState('63t6dZ78VFW1yX7uFJV678qFbZweDpUDenjLYEsq2J7q');
  
  const copyToClipboard = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      // Try to use the Clipboard API
      try {
        await navigator.clipboard.writeText(walletAddress);
        alert('Wallet address copied to clipboard!');
      } catch (err) {
        console.error('Copy failed:', err);
        fallbackCopyTextToClipboard(walletAddress);
      }
    } else {
      // Fallback if Clipboard API is not available
      fallbackCopyTextToClipboard(walletAddress);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    // Create a text area element dynamically
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
        Kindly Donate to Keep ExploreSol Project Going
      </h1>
      <p className="text-md mb-4">
        You can support by donating SOL and SOL tokens to the following wallet address - THANKS!:
      </p>
      <p className="input-address" style={{ userSelect: 'text' }}>
        {walletAddress}
      </p>
      <button onClick={copyToClipboard} className="btn mt-2">
        Copy Wallet Address
      </button>
    </>
  );
};



export default Donate;
