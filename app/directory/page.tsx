// ExploreSol/app/directory/page.tsx 
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DirectoryPage() {
  const supabase = createClient();
  const { data: listings } = await supabase.from('listings').select()

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
          <h2 className="font-bold text-4xl mb-4">List of Listings</h2>
          <pre>{JSON.stringify(listings, null, 2)}</pre>
        </main>
      </div>
    </div>
  );
}
