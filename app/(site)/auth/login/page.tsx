// /app/(site)/auth/login/page.tsx
import Login from "@/components/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Explore Solana",
  description: "This is Login/Register page for Explore Solana",
  // other metadata
};

const LoginPage = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <>
    <Login searchParams={searchParams} />
    </>
  );
};

export default LoginPage;
