// ExploreSol/app/dashboard/user/page.tsx 
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function userDashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4"> USER DASHBOARD PAGE</h2>
          <div className="w-full max-w-4xl flex justify-between items-center p-3">
            <div className="flex-1 flex justify-center">
              <div className="btn">Welcome To Your USER Page</div>
              <Link href="/dashboard" className="btn"> &lt;&lt; Back To Main Dashboard </Link>      
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}