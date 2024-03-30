// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import "@/styles/globals.css"; // Make sure this is the correct path to your global styles
import { Providers } from '@/app/providers'; // Ensure this path is correct
import Navbar from '@/components/navbar'; // Ensure this path is correct
import { Link } from '@nextui-org/link'; // Ensure this path is correct
import { siteConfig } from "@/config/site"; // Ensure these paths are correct
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import SubscriberMilestones from "@/components/subscribermilestones"; // And this one too

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Navbar />
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            <Component {...pageProps} />
            <SpeedInsights />
            <Analytics />
          </main>
          <footer className="w-full flex items-center justify-center py-3">
            <div className="flex flex-col">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="#"
                title="S"
              >
                <span className="text-default-600">Subscribers:</span>
                <p className="text-primary">10</p>
                {/* Replace this part with whatever content or components you want in your footer */}
              </Link>
              <SubscriberMilestones />
            </div>
          </footer>
        </body>
      </html>
    </Providers>
  );
};

export default MyApp;
