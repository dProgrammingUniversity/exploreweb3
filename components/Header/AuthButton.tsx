// /components/Header/AuthButton.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
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
    setUser(null);
    router.push("/auth/login");
  };

  const displayName = user?.username || user?.email;

  return (
    <>
      {user ? (
        <div className="flex items-center gap-4">
          <span>S, {displayName}</span>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center rounded-full bg-red-600 w-25 h-12 text-regular text-white duration-300 ease-in-out hover:bg-red-700"
          >
            Logout 🔥
          </button>
        </div>
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
