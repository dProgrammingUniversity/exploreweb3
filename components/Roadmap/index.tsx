// /components/Roadmap/index.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Roadmap = () => {
  return (
    <div className="relative">
      <h1 className="mb-10 text-center text-3xl font-semibold text-purple-500 dark:text-purple-500 xl:text-sectiontitle2">
        EXPLORE SOLANA ROADMAP
      </h1>
      <div className="relative space-y-8 before:absolute before:left-1/2 before:h-full before:w-1 before:-translate-x-1/2 before:bg-purple-500">
        {/* Stage 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative flex w-full items-center justify-start md:justify-center lg:justify-start"
        >
          <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-5 text-2xl font-bold text-purple-400">
              Stage 1 (Alpha): <br /> Pre-Launch Explore Solana Alpha Version
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li className="mb-7 text-lg text-gray-300">
                <strong>Alpha launched 5th May 2024:</strong>
                <p className="mb-3">
                  Alpha launched with just about 5 Solana projects listed.
                </p>
                <p>Received feedback on UX/UI and improved for beta launch.</p>
              </li>
              <li className="mb-5 text-lg text-gray-300">
                <strong>Launched X(Twitter) Threads "S Episodes":</strong>
                <p className="mb-5">
                  To showcase Solana projects on Social media on 8th May 2024.
                </p>
                <p className="mb-3">
                  The first S Ep1 tweet thread was:
                  <br />
                  <Link
                    href="https://x.com/ExploreSolana/status/1788256576182087861"
                    target="_blank"
                    className="text-blue-400 underline"
                  >
                    S Ep1: #ExploreSolana Projects & Discover Opportunities!
                  </Link>
                  .
                </p>
                <p>
                  This also means users engaging with the ExploreSolana x
                  tweet thread can also earn rewards as stated in the S Episodes threads.
                </p>
                <br />
              </li>
              <li className="mb-5 text-lg text-gray-300">
                <strong>Launched daily Solana 'S' Newsletter:</strong>
                <p className="mb-3">
                  The ExploreSolana 'S' Newsletter was launched On 8th May 2024.
                </p>
                <p>
                  The first S Ep1 newsletter was:
                  <br />
                  <Link
                    href="https://exploresolana.substack.com/p/s-ep1-explore-solflare-on-solana"
                    target="_blank"
                    className="text-blue-400 underline"
                  >
                    S Ep1: Explore Solflare on Solana! 🌟
                  </Link>
                  .
                </p>
              </li>
            </ol>
            <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-purple-500"></div>
          </div>
        </motion.div>

        {/* Stage 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex w-full items-center justify-end md:justify-center lg:justify-end"
        >
          <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-purple-400">
              Stage 2 (Beta): <br /> Launch Explore Solana Beta Version
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li className="text-lg text-gray-300">
                <strong>Beta launched 18th May 2024:</strong>
                <p className="mb-3">
                  The Explore Solana Beta version was launched with new design, improved UX/UI, and responsive mobile design in line with users feedback from Alpha launch.
                </p>
                <p className="mb-3">
                  About 15 Solana projects listed.
                </p>
                <p>
                  We continued to expect users feedback on UX/UI and improve to prepare for the full launch.
                </p>
              </li>
            </ol>
            <div className="absolute left-0 top-0 h-4 w-4 rounded-full bg-purple-500"></div>
          </div>
        </motion.div>

        {/* Stage 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative flex w-full items-center justify-start md:justify-center lg:justify-start"
        >
          <div className="w-full md:w-2/3 lg:w-1/2 rounded-lg bg-gray-800 p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-purple-400">
              Stage 3 (Full): <br /> Launch Explore Solana
            </h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li className="text-lg text-gray-300 mb-5">
                <strong>Full launch:</strong>
                <p>
                  This will come when we finally hit the 1,000 Solana projects
                  listed goal, making the platform robust enough to convince:
                </p>
                <ol className="mt-2 list-decimal space-y-2 pl-6">
                  <li className="text-lg text-gray-300">
                    <strong>Solana Projects Team/Developer:</strong>
                    <p>
                      Will want to feature their project before, during, and
                      after launching to connect with more users via this
                      platform.
                    </p>
                  </li>
                  <li className="text-lg text-gray-300 mb-5">
                    <strong>Solana Community:</strong>
                    <p>
                      For new and existing users to earn engaging with Solana
                      projects, use to bookmark their favorite Solana projects
                      for easy access anytime in the future, and rate/review
                      projects to send feedbacks to projects teams.
                    </p>
                  </li>
                </ol>
              </li>
              <li className="text-lg text-gray-300 mb-5">
                <strong>New features and projects:</strong>
                <p>New features will be added to ExploreSolana platform as we go.</p>
              </li>
              <li className="text-lg text-gray-300">
                <strong>S Episodes Newsletter and Twitter Thread:</strong>
                <p>Explore Solana 'S' Newsletter and X tweet threads will continue to be a medium to help connect Solana projects and users daily.</p>
              </li>
            </ol>
            <div className="absolute right-0 top-0 h-4 w-4 rounded-full bg-purple-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;
