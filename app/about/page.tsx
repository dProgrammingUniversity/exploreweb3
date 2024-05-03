// ExploreSol/app/about/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(Array(6).fill(false));

  const toggleSection = (index: number) => {
    setIsOpen(isOpen.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-6 text-purple-500">
        WHAT IS EXPLORESOL PLATFORM ABOUT
      </h1>

      {/* Introduction Section */}
      <h2 className="text-2xl font-bold my-6 text-purple-500">
        A. INTRODUCTION:
      </h2>
      <p className="text-md mb-4 text-justify">
        ExploreSol is a comprehensive platform designed (serves as a
        non-token/non-financial launchpad) for upcoming and existing Solana
        projects to reach and acquire (new/more) users.
      </p>
      <p className="text-md mb-4 text-justify">
        And for the users (also earn contributing to the platform), ExploreSol
        serves as platform to discover upcoming and existing Solana projects,
        Interact with them, favorite the best you like to re-access later
        anytime and also give ratings and review to Solana projects that will
        help prospective users make an informed decision about the project.
      </p>
      <p className="text-md mb-4 text-justify">
        Additionally, the users ratings/reviews serves as feedback to the Solana
        project team/developer to improve their product and services.
      </p>
      <p className="text-md mb-4 text-justify">
        ExploreSol platform is not just another regular solana project directory
        popping up here and there and eventually going stale with few listings
        and less updated - Nope, the directory is just one of the many essential
        features and solutions that ExploreSol aim to offer the existing Solana
        community while helping to onboard new people and enhance experience of
        new users after been onboarded to the Solana ecosystem.
      </p>

      <h3 className="text-xl font-bold my-6 text-purple-500">Main Slogan:</h3>
      <p className="text-md mb-4 text-justify">
        "Explore Solana ecosystem and discover opportunities."
      </p>

      <h3 className="text-xl font-bold my-6 text-purple-500">🔔 Hint:</h3>
      <p className="text-md mb-4 text-justify">
        The term "Solana project(s)" throughout this content refers to dApps,
        tools, content, protocols, features, communities, DAOs, and much more in
        the Solana ecosystem.
      </p>

      {/* Problems and Solutions Section */}
      <h2 className="text-2xl font-bold my-6 text-purple-500">
        B. PROBLEMS AND SOLUTIONS OFFERED BY EXPLORESOL:
      </h2>
      <p className="text-md mb-4 text-justify">
        See the existing problems and solutions we aim to offer below:
      </p>
      <div>
        {problemsAndSolutions.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left py-2 px-4 bg-gray-900 text-white font-medium rounded hover:bg-gray-700"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-xl font-bold my-6 text-purple-500">
                {item.title} - <br />
              </h3>
              <p className="text-md mb-4 text-justify">
                Click Here To Expand or Hide This Problem/Solution
              </p>
            </button>
            <div
              className={`p-4 border-l-2 border-b-2 border-r-2 border-red-500
              ${isOpen[index] ? "block" : "hidden"}`}
            >
              <p>{item.description}</p>
            </div>
            <div
              className={`p-4 border-l-2 border-b-2 border-r-2 border-green-500
                ${isOpen[index] ? "block" : "hidden"}`}
            >
              <h3 className="text-xl font-bold my-6 text-purple-500">
                ExploreSol Solution:
              </h3>
              <p className="text-md mb-4 text-justify">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Features Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold my-6 text-purple-500">
          C. KEY FEATURES OF EXPLORESOL:
        </h2>
        <ol>
          <li>
            <label className="text-l font-bold my-6 text-purple-300">
              Comprehensive Directory:
            </label>
            <span> Access over 1,000 Solana projects...</span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-400">
              Favorites System:
            </label>
            <span> Bookmark projects for easy future access.</span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-300">
              Project Launch Tracking:
            </label>
            <span>
              {" "}
              Stay updated with upcoming project and feature launches.
            </span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-400">
              Community-Driven Updates:
            </label>
            <span>
              {" "}
              Engage with the latest developments and community insights.
            </span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-300">
              Reviews and Ratings:
            </label>
            <span> Share and read experiences to make informed choices.</span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-400">
              Earn Opportunities:
            </label>
            <span>
              {" "}
              Contribute to the platform and earn rewards in dPUT tokens.
            </span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-300">
              Trending Projects:
            </label>
            <span>
              {" "}
              Discover what’s popular based on community interaction and
              feedback.
            </span>
          </li>
          {/* More features */}
        </ol>
      </div>

      {/* Earning Opportunities Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold my-6 text-purple-500">
          D. EARNING OPPORTUNITIES ON EXPLORESOL:
        </h2>
        <p>
          ExploreSol is not only about Solana projects discovery and engagement
          but also about rewarding its community:
        </p>
        <ol>
          <li>
            <label className="text-l font-bold my-6 text-purple-300">
              Submit Listings:
            </label>
            <span> Earn dPUT tokens for approved project submissions.</span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-400">
              Participate in Social Campaigns:
            </label>
            <span>
              {" "}
              Engage with project-specific campaigns for additional rewards.
            </span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-300">
              Referral Program:
            </label>
            <span>
              {" "}
              Earn by referring others to subscribe to the ExploreSol "S"
              Newsletter.
            </span>
          </li>
          <li>
            <label className="text-l font-bold my-6 text-purple-400">
              Stay Tuned for More:
            </label>
            <span>
              {" "}
              Future opportunities are on the horizon, ensuring our community
              remains vibrant and rewarded.
            </span>
          </li>
          {/* More features */}
        </ol>
        <p>
          <label className="text-l font-bold my-6 text-purple-500">
            Side Note:
          </label>
        </p>
        <p>
          The dPUT earned is the official utility token of dProgramming
          University (dPU) ecosystem and ExploreSol is one of the project in the
          ecosystem that qualify to reward users with dPUT.
        </p>
        <p>Do you want to know about what is dPUT?</p>
        <p>
          How much of dPUT you can earn and a lot more about earning on
          ExploreSol platform?
        </p>
        <p>How to exchange your earned dPUT for SOL?</p>
        <p>Then check out the: </p>
        <p>
          <Link
            href="/earn"
            className="text-l font-bold my-6 text-purple-400"
          >
            ExploreSol Earn Opportunity Paths
          </Link>
        </p>
      </div>
    </div>
  );
}

// Problems and Solution Content Items
const problemsAndSolutions = [
  {
    title: "Problem 1: Lack of Comprehensive Tracking for Solana Projects",
    description:
      "There is no central platform currently to stay informed and in the loop with upcoming and existing projects on Solana (not referring to just Token, NFT or TVL tracking and Token/Meme launchpads). There are Solana project directories but they only add a couple of limited 100-300+ popularly known projects, denying upcoming or less-popular from being listed and discovered by users. But, Solana is bigger than that, a lot of amazing projects are been launched daily and there needs to be a place to track them before, during and after launch no matter if launched by a popular team/developer or not ....",
    solution:
      "ExploreSol serves as a centralized platform where the Solana community can stay updated with both upcoming and recently launched projects. It eliminates the need to scour through countless tweets or websites to find valuable Solana projects, offering a single, streamlined platform for discovery and engagement. We give every Solana project an equal opportunity to reach Solana users without focusing on just established projects. Even if you got zero community, we are ready to list your project as long as it solves problems and is beneficial to the growth of the Solana ecosystem as a whole.",
  },
  {
    title: "Problem 2: Limited Visibility for New Solana Projects",
    description:
      "New Solana project creators/developers don't have a central place to announce their projects to the Solana community and enthusiasts aside from social media like Twitter and their own community until they are already launched and big to be given a chance with some podcast or community calls.",
    solution:
      "Nope, every solana project deserves a launchpad-like platform (not financially focused but user acquisition aspect) where they can feature their projects to Solana enthusiasts to gain community even before launching the project as long as the project serves or solves problems within the Solana ecosystem and ExploreSol is the platform to make this a reality.",
  },
  {
    title:
      "Problem 3: Difficulty Re-accessing Previously Used (Helpful) Solana Projects",
    description:
      "Have you ever used a Solana project to fix a pressing issue like recovering a bricked Solana wallet, revoking unauthorized access to your Solana tokens, Airdrop tracker and a lot more before?  Then, some weeks or months after you need the same tool(s) again (or just want to share with friends) only for you to discover that you couldn't even remember the name, website or twitter handle of the project nor know if still updated recently or not.",
    solution:
      "The Exploresol 'Favorites' feature is the solution to this as it allows you to favorite projects and have access to them in your user dashboard anytime. So, even if you need it months later, just check your favorites list and here you have it lead you back to its listings details page with the website, Twitter and other details about it. It also allows you to discover how popular a Solana project is becoming by showing you how many other people favorited it as well.  Kindly note that your favourite is not known to other users unless you reveal it to them, we only show the total number of favourites for a project and not who actually did the favorites.",
  },
  {
    title: "Problem 4: Lack of a Platform for User Feedback on Solana Projects",
    description:
      "Have you used a Solana project before and wish you could share your experience with it (good or average or bad) to help future users make informed decisions about it? - But nowhere to do that with assurance that a lot of Solana community members will discover your feedback?",
    solution:
      "ExploreSol’s rating and review system enables users to share detailed feedback, helping others make informed decisions and providing developers with actionable insights to improve their projects. NOTE: to ensure helpful feedback for users and developers/team, the review was made to require a minimum of 50 characters to prevent less-useful short reviews like 'good', 'worked', 'horrible', 'dumb' etc. do not just say it good or horrible, also tell others more details why it is a good or bad Solana project.",
  },
  {
    title:
      "Problem 5: Inefficient Discovery and Categorization of Solana Projects",
    description:
      "Finding specific types of Solana projects can be cumbersome without the right tools. Users often find it difficult to discover upcoming, new, existing or specific types of Solana projects quickly and efficiently, especially when urgently needed.",
    solution:
      "ExploreSol features advanced search capabilities and micro-categories, allowing for easy navigation and discovery based on user interests and needs. Our platform includes an intuitive search feature and categorization for over 1,000 Solana projects, simplifying the discovery process.",
  },
  {
    title: "Problem 6: Awareness of Alternatives and Similar Solana Projects",
    description:
      "Users are frequently unaware of alternative or similar projects that may offer the same, better or different solutions within the Solana ecosystem.",
    solution:
      "Yes, there are usually multiple projects doing the same/similar things within the Solana ecosystem, so why get stuck to one or turned off totally due to a bad experience with one project when there are alternatives that might even be better? ExploreSol includes a section for alternative and similar projects on each Solana project full details page, ensuring users can easily find and compare options.",
  },
  // More problems and solutions
];
