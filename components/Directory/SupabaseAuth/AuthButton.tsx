// ExploreSol/components/AuthButton.tsx
"use client"
import React, { useEffect, useState } from 'react';
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

const AuthButton = () => {
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const supabase = createClient();
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        fetchUsername(user.id);
      }
    };

    const fetchUsername = async (userId: string) => {
      const { data: usernames, error } = await supabase.rpc("usernames_fetch", {
        _user_id: userId,
      });
      if (!error && usernames && usernames.length > 0) {
        setUsername(usernames[0].username);
      }
    };

    fetchUser();
  }, []);

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  if (!user) {
    return (
      <Link href="/login" className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
        Login
      </Link>
    );
  }

  const displayName = username || user.email;

  return (
    <div className="flex items-center gap-4">
      {displayName}
      <button onClick={signOut} className="py-2 px-4 rounded-md">
        Sign Out
      </button>
    </div>
  );
};

export default AuthButton;