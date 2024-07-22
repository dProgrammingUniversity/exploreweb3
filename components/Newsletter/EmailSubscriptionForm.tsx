// /components/Newsletter/EmailSubscriptionForm.tsx
import React from "react";
import Iframe from "react-iframe"; // import Iframe from react-iframe to render subscribe form

const EmailSubscriptionForm = () => {
  return (
    <div className="container bg-black py-8">
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          Explore <span className="text-purple-400">Web3 Ecosystems</span>
        </h1>
        <h2 className="text-xl font-semibold text-white md:text-2xl">
          & Discover Opportunities!
        </h2>
        <p className="mt-2 px-4 text-sm text-purple-300 md:text-base">
          Handpicked <span className="text-pink-600">"Alpha"</span>, exclusive
          dApps/tools/resources updates, insights and opportunities in Web3 Ecosystems like Solana and more await you:
        </p>
        <p>
          <em>
            Subscribe now and be part of the pioneering &quot;S&quot; community.
          </em>
        </p>

        {/* Newsletter Substack iframe */}
        <Iframe
          url="https://exploresolana.substack.com/embed"
          // width="auto"
          height="320"
          // style="border:1px solid #EEE; background:white;"
          styles={{ border: "1px solid #EEE", background: "white" }}
          frameBorder={0}
          scrolling="no"
        />

      </div>
    </div>
  );
};

export default EmailSubscriptionForm;
