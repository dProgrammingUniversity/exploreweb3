// /app/(site)/auth/signup/page.tsx
import Login from "@/components/Auth/Login";
import SignUp from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup - Explore Solana",
  description: "This is Registration page for Explore Solana",
  // other metadata
};

const SignUpPage = ({ searchParams }: { searchParams: { message: string } }) => {
  return (
    <>
    <SignUp searchParams={searchParams} />
    </>
  );
};

export default SignUpPage;
