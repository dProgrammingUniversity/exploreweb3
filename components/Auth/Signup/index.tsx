// /components/Auth/Signup/index.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SubmitButton from "../SubmitButton";

const Signup = async ({
  searchParams,
}: {
  searchParams: { message: string };
}) => {
  const supabase = createClient();

  // Signup function
  const signUp = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;
    const supabase = createClient();

    const { error } = await supabase.rpc("signup_with_username", {
      p_username: username,
      p_email: email,
      p_password: password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      return redirect(`/auth/signup?message=Error: ${error.message}`);
    }

    return redirect(
      "/auth/login?message=Signup/Registration Successful! Kindly sign in.",
    );
  };

  return (
    <>
      <section className="flex-grow pb-12.5 pt-32.5 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="relative z-1 mx-auto max-w-c-1016 px-7.5 pb-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]">
            <div className="absolute bottom-17.5 left-0 -z-1 h-1/3 w-full">
              <Image
                src="/images/shape/shape-dotted-light.svg"
                alt="Dotted"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/shape/shape-dotted-dark.svg"
                alt="Dotted"
                className="hidden dark:block"
                fill
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Link
              href="/"
              className="text-foreground bg-btn-background hover:bg-btn-background-hover group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>{" "}
              Back
            </Link>

            <h2 className="mb-5 text-center text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
              Sign Up for a New Account
            </h2>
            <div className="mb-5">
              <p>If you already have an account, click "Sign In" to Login.</p>
              <p>If not, fill the form below to register a new account:</p>
            </div>

            <form
              className="animate-in flex w-full flex-1 flex-col justify-center gap-4 sm:max-w-md"
              action={signUp}
            >
              <label className="text-md" htmlFor="username">
                Username
              </label>
              <input
                className="mb-6 rounded-md border bg-inherit px-4 py-2"
                name="username"
                placeholder="your username"
                required
              />
              <label className="text-md" htmlFor="email">
                Email
              </label>
              <input
                className="mb-6 rounded-md border bg-inherit px-4 py-2"
                name="email"
                placeholder="you@example.com"
                required
              />
              <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
                className="mb-6 rounded-md border bg-inherit px-4 py-2"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />

              {/* Signup button */}
              <SubmitButton
                formAction={signUp}
                className="text-foreground mb-2 rounded-md bg-green-700 px-4 py-2"
                pendingText="Signing Up..."
              >
                Sign Up/Register
              </SubmitButton>

              {/* Feedback message display */}
              {searchParams?.message && (
                <p className="bg-foreground/10 text-foreground mt-4 p-4 text-center">
                  {searchParams.message}
                </p>
              )}
            </form>

            <div className="mt-5">
              <p>
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="text-blue-500 hover:text-blue-700">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
