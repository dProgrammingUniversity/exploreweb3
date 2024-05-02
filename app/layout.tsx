// ExploreSol/app/layout.tsx
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTop from '@/components/ScrollToTop';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ExploreSol",
  description: "Explore Solana Ecosystem & Discover Opportunities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground min-h-screen">
        {/* <main className="min-h-screen flex flex-col items-center"> */}
        <main className="container">
          <NavigationBar />          
          {children}
          <ScrollToTop />
          <Footer />
        </main>
      </body>
    </html>
  );
}
