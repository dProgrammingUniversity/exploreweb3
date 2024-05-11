// ExploreSol/components/EmailSubscriptionForm.tsx
import "../app/globals.css";
import React from 'react';
import Iframe from "react-iframe"; // import Iframe from react-iframe to render subscribe form

const EmailSubscriptionForm = () => {
  return (
    <div className="bg-black py-8 container">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Explore <span className="text-purple-400">Solana Ecosystem</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          & Discover Opportunities!
        </h2>
        <p className="text-sm md:text-base text-purple-300 mt-2 px-4">
          Handpicked <span className="text-pink-600">"S"</span>, exclusive
          dApps/tools/resources updates, insights and opportunities await you:
        </p>
        <p>
          <em>
            Subscribe now and be part of the pioneering &quot;S&quot;
            community.
          </em>
        </p>
        <Iframe
          url="https://exploresol.substack.com/embed"
          width="250px"
          height="320px"
          id="myId"
          display="initial"
          position="relative"
          styles={{ border: "1px solid #EEE", background: "white" }}
        />
      </div>
    </div>
  );
};

export default EmailSubscriptionForm;