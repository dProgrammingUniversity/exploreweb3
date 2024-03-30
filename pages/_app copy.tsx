// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import "@/styles/globals.css"; // Import your global CSS
import { Providers } from '@/app/providers'; // Import providers if necessary
import Navbar from '@/components/navbar'; // Import Navbar
import Footer from '@/components/footer'; // Create a Footer component and import it here

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers>
      <Navbar />
      <main className="main-content">
        {/* You can add a container div or any other global wrappers here */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </Providers>
  );
};

export default MyApp;
