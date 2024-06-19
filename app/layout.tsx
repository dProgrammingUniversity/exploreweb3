// /app/layout.tsx
"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import ToasterContext from "./context/ToastContext";
import { GA_TRACKING_ID } from "@/utils/analytics/analytics"; //Google analytics
import Analytics from "@/components/Directory/Analytics/Analytics"; //Google Analytics
import { SpeedInsights } from "@vercel/speed-insights/next"; //Vercel Insight
import { Analytics as VercelAnalytics } from "@vercel/analytics/react"; //Vercel Analytics

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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

        {/* Umami Analytics */}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="50665529-146d-4e5f-af3a-12b4ec4b363f"
        ></script>

        {/* Google Analytics HTML Tag - for second account due to issues from above account - so if want to remove one of the analytics later, it should be this first */}
        <meta
          name="google-site-verification"
          content="m-Q68-M51r-c7pPZWemHiBAepq7zp-AAqoFFg7K7sLY"
        />
      </head>
      <body className={`dark:bg-black ${inter.className}`}>
        <Analytics />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <SpeedInsights />
          <VercelAnalytics />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
