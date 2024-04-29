// ExploreSol/components/AuthButton.tsx
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // check if user to ensure user not null
  if (!user) {
    return redirect("/login");
  }

  // Fetch username using the server-side Supabase client
  let username = "";
  const { data: usernames, error } = await supabase.rpc("usernames_fetch", {
    _user_id: user.id,
  });

  if (!error && usernames && usernames.length > 0) {
    username = usernames[0].username; // Assuming the RPC returns an array of usernames
  }

  // Use username if available, otherwise fallback to email
  const displayName = username || user.email;

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  // Split the email string to remove the domain part
  // const userName = user?.email?.split('@')[0] ?? '';

  return user ? (
    <div className="flex items-center gap-4">
      S, {displayName}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
