// ExploreSol/app/directory/page.tsx
"use client";
import React from 'react';
import DirectoryPage from '@/components/DirectoryPage'; 

export default function Page() {
  return (
    <div>
      {/* Top text section with highlighted text */}
      <div className="bg-black py-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore <span className="text-purple-400">Solana Ecosystem</span></h1>
          <h2 className="text-xl md:text-2xl font-semibold text-white">& Discover Opportunities!</h2>
          <p className="text-sm md:text-base text-purple-300 mt-2 px-4">
            Handpicked <span className="text-pink-600">"S"</span>, exclusive dApps/tools/resources updates, insights and opportunities await you:
          </p>
        </div>
      </div>
      
      {/* Directory Page */}
      <DirectoryPage />
    </div>
  );
}