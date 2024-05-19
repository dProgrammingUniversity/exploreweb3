// /components/Roadmap/index.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Roadmap = () => {
  const roadmapData = [
    {
      stage: "Stage 1: Pre-Launch Explore Solana Alpha Version",
      details: [
        "Alpha launched 5th May 2024 with just about 5 Solana project listed and on ExploreSol.xyz domain. we got feedback on UX/UI and improve for beta launch",
        "Launched X(Twitter) Threads \"S Episodes\" to showcase Solana projects on Social media on 8th May 2024. The first S Ep1 thread is Solflare. This also means users engaging with the ExploreSolana x tweet thread can also earn rewards as stated in the thread.",
        "Launched daily Solana 'S' Newsletter on 8th May 2024. The first S Ep1 thread is Solflare."
      ]
    },
    {
      stage: "Stage 2: Launch Explore Solana Beta Version",
      details: [
        "Beta launched 18th May 2024 with new design with improved UX/UI and responsive mobile design and with just about 15 Solana projects listed. we continue to expect your feedbacks on UX/UI and improve for full launch."
      ]
    },
    {
      stage: "Stage 3: Launch Explore Solana",
      details: [
        "When full launch? This will come when we finally hit the 1,000 Solana projects listed goal which would have made the platform robust enough to convince:",
        "Solana Projects Team/Developer: Will want to feature their project before, during and after launching the project to connect with more users via this platform.",
        "Solana Community: For new and existing users to earn engaging with Solana projects, use to bookmark their favorite Solana projects for easy access anytime in future and rate/review projects.",
        "We will be adding new features and projects to ExploreSolana platform as we go.",
        "The Newsletter and Twitter Thread S Episode will also continue to connect Solana projects and users daily."
      ]
    }
  ];

  return (
    <div>
      <h1 className="mb-10 text-center text-3xl font-semibold text-purple-500 dark:text-purple-500 xl:text-sectiontitle2">
        EXPLORE SOLANA ROADMAP
      </h1>
      <div className="space-y-8">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold text-purple-400">{item.stage}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-lg text-gray-300">
                  {detail.includes("Solflare") ? (
                    <span>
                      {detail.split("Solflare")[0]}
                      <Link 
                        href="https://exploresolana.substack.com/p/s-ep1-explore-solflare-on-solana" 
                        target="_blank"
                        className="text-blue-400 underline"
                      >
                        Solflare
                      </Link>
                      {detail.split("Solflare")[1]}
                    </span>
                  ) : detail.includes("Twitter") ? (
                    <span>
                      {detail.split("Twitter")[0]}
                      <Link 
                        href="https://x.com/ExploreSolana/status/1788256576182087861" 
                        target="_blank"
                        className="text-blue-400 underline"
                      >
                        Twitter
                      </Link>
                      {detail.split("Twitter")[1]}
                    </span>
                  ) : (
                    detail
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
