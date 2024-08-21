// /components/Pitch/index.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Pitch = () => {
  return (
    <div className="relative">
      <h1 className="mb-10 text-center text-3xl font-semibold text-purple-500 dark:text-purple-500 xl:text-sectiontitle2">
        EXPLORE SOLANA PITCH DECK
      </h1>
      <div className="mb-5 text-lg text-gray-300">
        <strong>GM,</strong>
        <p className="mb-3">
          Please find updates about the new project I have been working on
          FULL-TIME for about 3 months for the Solana ecosystem after concluding
          my previous project -
          <Link
            href="https://dprogramminguniversity.com/100-days-bootcamp-curriculum/"
            target="_blank"
            className="text-blue-400 underline"
          >
            100 Days dPU Solana Developers Bootcamp.
          </Link>
        </p>
        <strong>The discussion is split into 3 parts for clarity:</strong>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Intro to the platform</li>
          <li>
            Recommendations on Solana projects in your area of focus that need
            to be featured.
          </li>
          <li>
            Active search for funding/grant/donation to enable continued work on this project
            for 6 to 10 months to take it out of public beta.
          </li>
        </ol>
      </div>

      <div className="text-lg text-gray-300">
        <h2 className="mb-5 text-2xl font-bold text-purple-400">
          1. INTRO TO THE PLATFORM
        </h2>
        <p className="mb-3">
          As new Solana projects are being developed and launched almost daily,
          it is becoming difficult for Solana community users to keep an eye on
          them all. So, I developed Explore Solana platform from scratch to
          solve that!
        </p>

        <p className="mb-3 text-red-500">
        <strong>[A] PROBLEM:</strong>
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>A.1. FOR USERS:</strong>
            <p>
              Presently there is no central platform for the Solana community to
              easily hunt for Upcoming or Live Solana projects.
            </p>
          </li>
          <li>
            <strong>A.2. FOR SOLANA PROJECT TEAM/DEVELOPERS:</strong>
            <p>
              It is tough for the upcoming Solana projects to get across to the
              fast-growing Solana community ready to support them through their
              project launch and after.
            </p>
          </li>
        </ol>

        <br />

        <p className="mb-3 text-green-500">
        <strong>[B] SOLUTION:</strong>
        </p>
        <p className="mb-3">
          Introducing the "Explore Solana" FREE open-source platform that aims
          to help bridge the gap between Solana projects and the Solana users'
          community via the following medium:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>
              Explore Web3/Solana projects Website ({" "}
              <Link
                href="https://ExploreWeb3.xyz"
                target="_blank"
                className="text-blue-400 underline"
              >
                https://ExploreWeb3.xyz
              </Link>{" "}
              ):
            </strong>
            <p>
              Which aims to feature 1,000 Solana projects in the directory
              section in the public Beta phase.
            </p>
          </li>
          <li>
            <strong>
              Explore Solana 'S' Newsletter ({" "}
              <Link
                href="https://exploresolana.substack.com"
                target="_blank"
                className="text-blue-400 underline"
              >
                https://exploresolana.substack.com
              </Link>{" "}
              ):
            </strong>
            <p>
              Daily newsletter helping the Solana community discover and explore
              upcoming and existing Solana projects, their latest features,
              opportunities like job vacancies, grants, earnings and a lot more
              from Solana projects.
            </p>
          </li>
          <li>
            <strong>
              Explore Solana 'S' X(Twitter) Thread ({" "}
              <Link
                href="https://x.com/hashtag/ExploreSolana"
                target="_blank"
                className="text-blue-400 underline"
              >
                https://x.com/hashtag/ExploreSolana
              </Link>{" "}
              ):
            </strong>
            <p>
              Daily tweet thread with dedicated hashtag #ExploreSolana featuring
              Solana projects on social media to gain more exposure within and
              beyond the Solana community.
            </p>
          </li>
        </ol>

        <br />

        <p className="mb-3">
        <strong>B.2. BENEFITS TO SOLANA ECOSYSTEM:</strong>
        </p>
        <p className="mb-3">
          Some of Explore Solana platform's immediate and future benefits to the
          overall growth and adoption of Solana are as follows:
        </p>
        <p className="mb-3">
        <strong>B.2.1. FOR USERS:</strong>
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Access "Explore Solana", a central platform for the Solana community
            to easily hunt for Upcoming or Live Solana projects.
          </li>
          <li>Favorite projects to easily re-access later anytime (no more forgetting the Solana projects when most needed by the user because they can't remember the name, Twitter handle or website of the project again).</li>
          <li>
            Engage project team/developers with feedback via rating/review.
          </li>
          <li>
          Help new users of Solana projects make informed decisions about the project based on previous users' feedback aggregated based on favorites, ratings and reviews for a project.
          </li>
          <li>
            Discover opportunities from Solana projects including earning for
            engaging with projects on the Explore Solana platform.
          </li>
          <li>
            <strong> Security - Protect Solana users from scam versions of real Solana project
            websites.
            </strong>
            <p>
            I just realized that the Explore Solana platform can be use to protect Solana users from scam version of real Solana projects websites based on my recent experience below:
<br />
<br />
How? 
<br />
Recently and you can try it (if the ads still up you see it yourself), 
<br />
Google for "Kamino Finance" and at the top of the search is a scam ads leading to a fake version "Kam-no.finance" (instead of official URL Kamino.finance) that request user to input their Phantom solana wallet secret key. 
<br />
Thereby compromising Solana DeFi users of their funds.
<br />
<br />
What about if user can instead of Googling sensitive projects like DeFi, search it on Explore Solana platform instead, where have ensured the link is pointing to the official website and not scam site.  
<br />
<br/>
Do you think that will help save more people especially new users from such scams in the Solana ecosystem?

            </p>
          </li>
        </ol>
        <br />

        <p className="mb-3">
        <strong>B.2.2. FOR SOLANA PROJECT TEAM/DEVELOPERS:</strong>
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            <strong>

            Showcase Solana projects before/after launch
            </strong>

            <p>
            When about to launch a project on Solana, team/developers can now showcase their project even before launch to have it promoted across the Explore Solana platform and social media.
            </p>
          </li>
          <li>
          Projects instantly get access to Solana project users even if the team/developer is not popular, as long as their project solves problems and helps users within the Solana community, they will be added for FREE.
          </li>
          <li>
            Access to feedback from Solana project users to help improve
            projects.
          </li>
        </ol>

        <br />

        <p className="mb-3 text-orange-500">
        <strong>[C] CURRENT WORK DONE WITH EXPLORE SOLANA PLATFORM:</strong>
        </p>
        <p className="mb-3">
          Explore Solana project Alpha was launched a few weeks ago. The public
          Beta version launched a few days ago with three major mediums of
          facilitating Solana projects promotion now fully functional.
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Explore Web3/Solana Projects Website ({" "}
            <Link
              href="https://ExploreWeb3.xyz"
              target="_blank"
              className="text-blue-400 underline"
            >
              https://ExploreWeb3.xyz
            </Link>{" "}
            )
          </li>
          <li>
            Explore Solana 'S' Newsletter ({" "}
            <Link
              href="https://exploresolana.substack.com"
              target="_blank"
              className="text-blue-400 underline"
            >
              https://exploresolana.substack.com
            </Link>{" "}
            )
          </li>
          <li>
            Explore Solana 'S' X(Twitter) Thread ({" "}
            <Link
              href="https://x.com/hashtag/ExploreSolana"
              target="_blank"
              className="text-blue-400 underline"
            >
              https://x.com/hashtag/ExploreSolana
            </Link>{" "}
            )
          </li>
        </ol>
        
        <br />

        <p className="mb-3 text-yellow-500">
        <strong>[D] UPDATE SO FAR IN THE LAST 1 MONTH:</strong>
        </p>
        <p className="mb-3">
          Some updates working on this FULL-TIME for the last month:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>
            Added 50+ Solana projects (Total of 75+ Solana projects now featured
            at{" "}
            <Link
              href="https://ExploreWeb3.xyz"
              target="_blank"
              className="text-blue-400 underline"
            >
              https://ExploreWeb3.xyz
            </Link>{" "}
            )
          </li>
          <li>
            Written & published Tweet Thread to promote 30+ Solana projects (Now
            in "S Ep44" - 44 Solana projects tweet threads done at{" "}
            <Link
              href="https://x.com/hashtag/ExploreSolana?f=live"
              target="_blank"
              className="text-blue-400 underline"
            >
              https://x.com/hashtag/ExploreSolana?f=live
            </Link>{" "}
            )
          </li>
          <li>
            Written & published Newsletter to promote 15+ Solana projects (Now
            in "S Ep20" - 20 Solana project Newsletter content done at{" "}
            <Link
              href="https://exploresolana.substack.com/"
              target="_blank"
              className="text-blue-400 underline"
            >
              https://exploresolana.substack.com/
            </Link>{" "}
            )
          </li>
        </ol>
      </div>
      <br />
      <div className="text-lg text-gray-300">
        <h2 className="mb-5 text-2xl font-bold text-purple-400">
          2. FEEDBACK:
        </h2>
        <strong>
          Looking forward to your recommendation on Solana projects in your area
          of focus that need to be featured
        </strong>
        <p className="mb-3">
          I look forward and am open to any adjustment or feature suggestion
          from you on the platform to promote Solana projects and make it easier
          for new and existing users in the Solana ecosystem to discover and
          engage with upcoming and existing Solana projects.
        </p>
        <p>
          Also, to ensure users can use Explore Solana instead of Google to
          ensure they are visiting official Solana projects links always and not
          scam versions.
        </p>
      </div>
      <br />
      <div className="text-lg text-gray-300">
        <h2 className="mb-5 text-2xl font-bold text-purple-400">3. SUPPORT:</h2>
        <strong>
          3. Actively in search of funding/grant/donation to enable me to keep this up
        </strong>
        <p className="mb-3">
          It will take about 6 months to 10 months of working on this FULL-TIME
          to be able to take this out of public-beta.
        </p>
        <p className="mb-5">
          The target is to have 1,000 Solana projects featured to have almost
          all the ecosystem projects available to users (new/existing) to easily
          navigate the Solana ecosystem easily and securely. 
          <br />
          <br />
          Once that target is
          achieved, then we would be able to remove the "Beta" tag for full
          release of the project within 1 year.
        </p>
        <p>
          <strong>Thank you!</strong>
        </p>
      </div>
      {/* </div> */}
      {/* </motion.div> */}
      {/* </div> */}
    </div>
  );
};

export default Pitch;
