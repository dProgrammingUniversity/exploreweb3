// /app/auth/login/page.tsx
import Login from "@/components/Auth/Login";
import { Metadata } from "next";

// Define fixed metadata values
const title = "Login Page - Explore Web3";
const description = "This is Login/Register page for Explore Web3";
const ogImage = "https://ExploreWeb3.xyz/images/opengraph-image.png";
const siteUrl = "https://ExploreWeb3.xyz"; // Replace with your actual site URL

// Create metadata object
export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: siteUrl,
    type: 'website',
    title: title,
    description: description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [ogImage],
  },
};

const LoginPage = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <>
    <Login searchParams={searchParams} />
    </>
  );
};

export default LoginPage;
