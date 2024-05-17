// ExploreSol/app/contact/page.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaDiscord, FaEnvelope } from "react-icons/fa";
import { AppendSiteUrlToExternalLink } from '@/utils/AppendSiteUrlToExternalLink';

const ContactPage = () => {
  const email = "hello@exploresol.xyz";  // Setup your contact email here

  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-2xl font-bold my-4 text-purple-500">Contact Us</h1>
      
      {/* Contact via Email Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-green-500">Contact via Email</h2>
        <p>Click the email to send us a message directly:</p>
        <a href={`mailto:${email}`} className="email-link btn flex flex-col items-center justify-center gap-2 mx-auto">
          <FaEnvelope className="text-lg" />
          Click Me To Send ExploreSol Team An Email!
        </a>
      </div>
      
      {/* Social Media Contacts */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-green-500">Connect on Social Media</h2>
        <div className="flex flex-col items-center gap-2">
          <p>Follow us on Twitter for updates and news:</p>
          <Link
            href={AppendSiteUrlToExternalLink("https://twitter.com/ExploreSolXyz")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaTwitter className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p>Join our official dProgrammingUniversity Discord server to find the ExploreSol channel:</p>
          <Link
            href={AppendSiteUrlToExternalLink("https://dProgrammingUniversity.com/Discord")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="text-indigo-500 hover:text-indigo-600"
          >
            <FaDiscord className="h-6 w-6" />
          </Link>
        </div>
      </div>

    </div>
  );  
};

export default ContactPage;
