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
import { SpeedInsights } from '@vercel/speed-insights/next'; //Vercel Insight
import { Analytics as VercelAnalytics } from "@vercel/analytics/react" //Vercel Analytics

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
