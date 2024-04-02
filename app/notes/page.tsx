// ExploreSol/app/notes/page.tsx 
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CreateNotes from "@/components/CreateNotes";

export default async function notesPage() {
  const supabase = createClient();
  const { data: notes } = await supabase.from('notes').select()

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
          <CreateNotes />
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          <pre>{JSON.stringify(notes, null, 2)}</pre>
        </main>
      </div>
    </div>
  );
}
