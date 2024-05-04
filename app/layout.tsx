// ExploreSol/app/layout.tsx
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import { GA_TRACKING_ID } from '../utils/analytics/analytics';
import Analytics from '@/components/analytics/Analytics'; 

// Default metadata if want to overide individual page metadata <Head> content
// const defaultUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

// export const metadata = {
//   metadataBase: new URL(defaultUrl),
//   title: "ExploreSol",
//   description: "Explore Solana Ecosystem & Discover Opportunities",
// };

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
