// /app/(site)/auth/reset-password/page.tsx
import ResetPassword from "@/components/Directory/SupabaseAuth/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const ResetPasswordPage = () => {
  return (
    <>
    <ResetPassword />
    </>
  );
};

export default ResetPasswordPage;
