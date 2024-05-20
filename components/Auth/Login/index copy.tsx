// /components/Auth/Login/index.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SubmitButton from "../SubmitButton";

const Login = async ({ searchParams }: { searchParams: { message: string } }) => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Signin function
  const signIn = async (formData: FormData) => {
    "use server";

    const identifier = formData.get("identifier") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    // Attempt login with email or username
    const { data, error } = await supabase.rpc("signin_with_username", {
      p_identifier: identifier,
      p_password: password,
    });

    if (data && data.length > 0) {
      // Use Supabase's signInWithPassword to manage the session
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: data[0].email,
        password: password,
      });

      if (signInError) {
        console.error("Error signing in:", signInError.message);
        return redirect(`/auth/login?message=Error signing in: ${signInError.message}`);
      }

      return redirect("/auth/login");
    }

    if (error) {
      console.error("Error logging in:", error.message);
      return redirect(
        `/auth/login?message=Username or Password Error: ${error.message}`
      );
    }

    return redirect("/auth/login");
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
              {user ? "You are already logged in" : "Login to Your Account"}
            </h2>
            <div className="mb-5">
              {!user && (
                <>
                  <p>
                    If you already have an account, click "Sign In" to Login.
                  </p>
                  <p>If not, click "Sign Up" to register a new account:</p>
                </>
              )}
            </div>

            {!user && (
              <>
                <form
                  className="animate-in flex w-full flex-1 flex-col justify-center gap-4 sm:max-w-md"
                  action={signIn}
                >
                  <label className="text-md" htmlFor="identifier">
                    Username or Email
                  </label>
                  <input
                    className="mb-6 rounded-md border bg-inherit px-4 py-2"
                    name="identifier"
                    placeholder="username or you@example.com"
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

                  {/* Signin button */}
                  <SubmitButton
                    formAction={signIn}
                    className="text-foreground mb-2 rounded-md bg-green-700 px-4 py-2"
                    pendingText="Signing In..."
                  >
                    Sign In/LogIn
                  </SubmitButton>

                  {/* Feedback message display */}
                  {searchParams?.message && (
                    <p className="bg-foreground/10 text-foreground mt-4 p-4 text-center">
                      {searchParams.message}
                    </p>
                  )}
                </form>

                {/* Password reset button */}
                <Link
                  href="/auth/reset-password"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Forgot password?
                </Link>

                {/* Signup/Register account */}
                <p>
                  Not have an account yet?{" "}
                  <Link
                    href="/auth/signup"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Sign Up
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
