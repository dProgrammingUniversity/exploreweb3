// ExploreSol/components/Footer.tsx 
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Footer() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/login");
  // }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">

      {/* <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">DASHBOARD HOME PAGE</h2>
          <div className="w-full max-w-4xl flex justify-between items-center p-3">
            <div className="flex-1 flex justify-center">
              <Link href="/dashboard/user" className="btn">Am A USER</Link>
              <Link href="/dashboard/moderator" className="btn">Am A MODERATOR</Link>
              <Link href="/dashboard/admin" className="btn">Am An ADMIN</Link>    
            </div>
          </div>
        </main>
      </div> */}

      {/* This ensures the footer is pushed to the bottom of the page */}
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Developed by{" "}
          <a
            href="https://dProgrammingUniversity.com/?utm_source=ExploreSol.xyz&utm_medium=ExploreSol.xyz&utm_term=ExploreSol.xyz"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            dProgrammingUniversity
          </a>
        </p>
      </footer>
    </div>
  );
}
