// /components/Header/AuthButton.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = await supabase.auth.getUser();
      setLoggedIn(!!user.data.user);
    };

    checkUser();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setLoggedIn(false);
    router.push("/auth/login");
  };

  return (
    <>
      {loggedIn ? (
        <button
          onClick={handleLogout}
          className="flex items-center justify-center rounded-full bg-red-600 w-25 h-12 text-regular text-white duration-300 ease-in-out hover:bg-red-700"
        >
          Logout 🔥
        </button>
      ) : (
        <Link
          href="/auth/login"
          className="flex items-center justify-center rounded-full bg-primary w-25 h-12 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
        >
          Login 🔥
        </Link>
      )}
    </>
  );
};

export default AuthButton;
