// ExploreSol/app/page.tsx 
"use client"
import React from 'react';
import { ListingsTop } from '@/components/ListingsTop'; 
import DirectoryPage from '@/components/DirectoryPage';
import { ListingsNew } from '@/components/ListingsNew';
import { ListingsUpcoming } from '@/components/ListingsUpcoming';
import { ListingsLive } from '@/components/ListingsLive';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
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


      {/* Directory Page component */}
      <DirectoryPage />

      {/* Top Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">Top Listings</h2>
        {/* Component to display top listings */}
        <ListingsTop />
      </section>

      {/* New Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">New Listings</h2>
        {/* Component to display new listings */}
        <ListingsNew />
      </section>

      {/* Upcoming Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">Upcoming</h2>
        {/* Component to display upcoming listings */}
        <ListingsUpcoming />
      </section>
      
      {/* Live Listings Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold">Live Listings</h2>
        {/* Component to display live listings */}
        <ListingsLive />
      </section>
      
    </div>
  );
}