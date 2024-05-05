// ExploreSol/app/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { ListingsTop } from "@/components/ListingsTop";
import DirectoryPage from "@/components/DirectoryPage";
import { ListingsNew } from "@/components/ListingsNew";
import { ListingsUpcoming } from "@/components/ListingsUpcoming";
import { ListingsLive } from "@/components/ListingsLive";
import EmailSubscriptionForm from "@/components/EmailSubscriptionForm";
import AnimatedTitle from "@/components/AnimatedTitle";

export default function HomePage() {


  return (
    <>
    
      <div className="container mx-auto px-4">
        {/* Top text section with highlighted text */}
        <EmailSubscriptionForm />

        {/* Directory Page component */}
        <AnimatedTitle />
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
    </>
  );
}
