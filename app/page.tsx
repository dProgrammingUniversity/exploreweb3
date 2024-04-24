// ExploreSol/app/page.tsx 
"use client"
import React from 'react';
import { TopListingsSection } from '@/components/ListingsTop'; // Adjust the import path as necessary

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="my-8">
        <h2 className="text-2xl font-bold">Top Listings</h2>
        {/* Component to display top listings */}
        <TopListingsSection />
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">New Listings</h2>
        {/* Component to display new listings */}
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Upcoming</h2>
        {/* Component to display upcoming listings */}
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold">Live Listings</h2>
        {/* Component to display live listings */}
      </section>
    </div>
  );
}