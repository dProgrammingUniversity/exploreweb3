// ExploreSol/app/layout.tsx
import React from "react";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { GA_TRACKING_ID } from "../utils/analytics/analytics";
import Analytics from "@/components/analytics/Analytics";
import { Metadata } from 'next';

// Declare page metadata variables
const title = "ExploreSol | Explore Solana Ecosystem & Discover Opportunities";
const description = "Earn while Exploring the best and most interesting Solana Projects.";
const ogImage = "https://exploresol.xyz/images/ExploreSol-Banner-01.jpg"; // Must be an absolute URL

// Base URL for Vercel deployment
const defaultBaseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


// Export meta 
// docs: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead
// Twitter doc: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
//URL: all URL Must be an absolute URL
export const metadata: Metadata = {
  // Default Metadata
  metadataBase: new URL(defaultBaseUrl),
  title: title,
  description: description,
  
  // Open Graph (OG) Metadata
  openGraph: {
    title: title,
    description: description,
    url: defaultBaseUrl,
    siteName: 'ExploreSol',
    images: [
      {
        url: ogImage, 
        width: 800,
        height: 600,
        alt: 'ExploreSol Platform Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Metadata
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    siteId: '1502741097805660160', 
    creator: '@ExploreSolXyz',
    creatorId: '1502741097805660160',
    images: [
      {
        url: ogImage, // Must be an absolute URL
        alt: 'ExploreSol Platform Image',
      },
    ],
  },

};  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //return statement
  return (
    <html lang="en" className={GeistSans.className}>
      <head> 

        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-background text-foreground min-h-screen">
        <Analytics />
        {/* <main className="min-h-screen flex flex-col items-center"> */}
        <main className="min-h-screen flex flex-col items-center container">
          <NavigationBar />
          {children}
          <ScrollToTop />
          <Footer />
        </main>
      </body>
    </html>
  );
}
