// ExploreSol/app/directory/page.tsx
"use client";
import React, { useEffect } from 'react';
import DirectoryPage from '@/components/DirectoryPage'; 
import EmailSubscriptionForm from '@/components/EmailSubscriptionForm';
import AnimatedTitle from '@/components/AnimatedTitle';

export default function Page() {
  // Define fixed metadata values
  const title = "Directory - ExploreSol";
  const description = "Earn while Exploring the best and most interesting Solana Projects.";
  const ogImage = "https://res.cloudinary.com/difhad1rl/image/upload/v1712648696/ExploreSol-Banner-01_qgtopx.jpg";

  useEffect(() => {
    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      let selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.getElementsByTagName('head')[0].appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    // Update the document title and meta tags
    document.title = title;  // Update the title
    updateMetaTag("description", description);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", window.location.href, true);
    updateMetaTag("og:type", "website", true);

  }, []); // Empty dependency array to run only once on component mount

  return (
    <div>
      {/* Top text section with highlighted text */}
      <EmailSubscriptionForm />


      {/* Animated text component */}
      <AnimatedTitle />
            
      {/* Directory Page */}
      <DirectoryPage />
    </div>
  );
}