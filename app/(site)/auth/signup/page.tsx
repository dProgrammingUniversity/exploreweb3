// /app/(site)/auth/login/page.tsx
import Login from "@/components/Auth/Login";
import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - Explore Solana",
  description: "This is Registration page for Explore Solana",
  // other metadata
};

const LoginPage = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <>
    <Signup searchParams={searchParams} />
    </>
  );
};

export default LoginPage;
