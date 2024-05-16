// ExploreSol/app/earn/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EarnPage() {
  const [isOpen, setIsOpen] = useState(Array(6).fill(false));


  // Toggle selection function
  const toggleSection = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6 text-purple-500">
        HOW TO EARN ON EXPLORESOL PLATFORM
      </h1>

      {/* Introduction Section */}
      <h2 className="text-2xl font-bold my-6 text-purple-500">
        A. INTRODUCTION:
      </h2>
      <p className="text-md mb-4 text-justify">
        If you are new here, I will suggest you start with getting to know about
        this platform first to understand this earning opportunities better.
      </p>
      <p className="text-md mb-4 text-justify">
        <Link href="/about">Click here to learn more about ExploreSol</Link>
      </p>
      <h3 className="text-xl font-bold my-6 text-purple-500">🔔 Hint:</h3>
      <p className="text-md mb-4 text-justify">
        The term "Solana project(s)" throughout this content refers to dApps,
        tools, content, protocols, features, communities, DAOs, and much more in
        the Solana ecosystem.
      </p>

      {/* Earn Path/Amount Section */}
      <h2 className="text-2xl font-bold my-6 text-purple-500">
        B. EARN PATHS OFFERED BY EXPLORESOL:
      </h2>
      <p className="text-md mb-4 text-justify">
        See the existing earning paths and amount of dPUT reward each can earn
        you on ExploreSol platform below:
      </p>
      <div>
        {problemsAndSolutions.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left py-2 px-4 bg-gray-900 text-white font-medium rounded hover:bg-gray-700"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-xl font-bold my-6 text-purple-500">
                {item.title}
              </h3>
              <p className="text-md mb-4 text-justify">
                Click Here To Expand or Hide This Earn Path/Amount
              </p>
            </button>
            <div
              className={`p-4 border-l-2 border-b-2 border-r-2 border-yellow-500
              ${isOpen[index] ? "block" : "hidden"}`}
            >
              <p>{item.description}</p>
            </div>
            <div
              className={`p-4 border-l-2 border-b-2 border-r-2 border-green-500
                ${isOpen[index] ? "block" : "hidden"}`}
            >
              <h3 className="text-xl font-bold my-6 text-purple-500">
                Reward Amount (in dPUT):
              </h3>
              <p className="text-md mb-4 text-justify">{item.reward}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Earning rewards calculations Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold my-6 text-purple-500">
          C. dPUT REWARD TOKEN CALCULATION:
        </h2>
        <p className="text-md mb-4 text-justify">
          Considering the dPUT used for reward is pegged to SOL not stable coin
          like USDT/USDC, The SOL is pegged to USDT.
        </p>
        <p className="text-md mb-4 text-justify">
          So, for example, today's SOL price is $140, then the dPUT reward is
          calculated as follows:
        </p>
        <p className="text-md mb-4 text-justify">
          $2(USDT) = 0.014289027SOL = 400,000 dPUT (dPUT amount is based on
          current exchange rate to SOL)
        </p>
        <p className="text-md mb-4 text-justify">
          dPUT amount you get per reward payment cycle changes from time to time
          to reflect the current exchange rate of dPU to SOL at time of the
          reward payment. it may be more or less.
        </p>
      </div>

      {/* Earning rewards payment Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold my-6 text-purple-500">
          D. EXPLORESOL dPUT PAYMENT CYCLE:
        </h2>
        <p className="text-md mb-4 text-justify">
          The dPUT earned reward payment is done on weekly bases every Monday.
        </p>
        <p className="text-md mb-4 text-justify">
          You get payment for the previous week (Monday to Sunday)
        </p>
        <p className="text-md mb-4 text-justify">Minimum Payment Threshold?</p>
        <p className="text-md mb-4 text-justify">
          No minimum threshold, you get your dPUT sent to your wallet on
          ExploreSol.xyz based on the amount you have earn through the week.
        </p>
        <p className="text-md mb-4 text-justify">
          For example if you get 5 Solana projects listings approved within 1
          week. When payment for the week will be done, you get dPUT for all the
          5 approved listings.
        </p>
        <p className="text-md mb-4 text-justify">
          If you don't have any listing approved in the week, you will get 0
          dPUT.
        </p>
      </div>

      {/* Earning Opportunities Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold my-6 text-purple-500">
          E. WHAT IS EXPLORESOL dPUT REWARD TOKEN:
        </h2>
        <p className="text-md mb-4 text-justify">
          The dPUT earned is the official utility token of dProgramming
          University (dPU) ecosystem and ExploreSol is one of the project in the
          dPU ecosystem that qualify to reward users with dPUT.
        </p>
        <p className="text-md mb-4 text-justify">
          Want to learn more and how to exchange your earned dPUT for SOL?
        </p>
        <p className="text-md mb-4 text-justify">Then check out the: </p>
        <p className="text-md mb-4 text-justify">
          <Link
            href="https://dProgrammingUniversity.com/dPUT"
            target="_blank"
            className="text-l font-bold my-6 text-purple-400"
          >
            dPUT Whitepaper
          </Link>
        </p>
      </div>
    </div>
  );
}

// Earn Path/Amount Content Items
const problemsAndSolutions = [
  {
    title: "Earn Path 1: Submit Listings",
    description:
      "Earn dPUT (utility token) reward for approved project submissions.",
    reward: "$2(USDT)SOL worth of dPUT (see section C below for details)",
  },
  {
    title: "Earn Path 2: Participate in Social Campaigns",
    description:
      "Earn dPUT (utility token) reward for engaging with project-specific campaigns.",
    reward: "$1(USDT)SOL worth of dPUT (see section C below for details)",
  },
  {
    title: "Earn Path 3: Referral Program",
    description:
      "Earn dPUT (utility token) reward for referring others to subscribe to the ExploreSol 'S' Newsletter..",
    reward: "$0.10(USDT)SOL worth of dPUT (see section C below for details)",
  },
  {
    title: "Earn Path 4: Stay Tuned for More",
    description:
      "Earn dPUT (utility token) reward for Future opportunities are on the horizon, ensuring our community remains vibrant and rewarded.",
    reward:
      "More dPUT is planned towards community rewards for users and contributors to Solana projects across dProgramming University (dPU) ecosystem",
  },
  // More earning paths and amount
];
