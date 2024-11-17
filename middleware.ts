// /middleware.ts
import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from '@/utils/supabase/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle case-insensitive project URLs
  if (pathname.startsWith('/projects/')) {
    const slug = pathname.split('/projects/')[1];
    
    // If slug contains uppercase letters
    if (/[A-Z]/.test(slug)) {
      const lowercaseSlug = slug.toLowerCase();
      
      // Check if lowercase version exists in database
      const supabase = createClient();
      const { data } = await supabase
        .from('listings')
        .select('slug')
        .eq('slug', lowercaseSlug)
        .single();

      if (data) {
        // Redirect to lowercase version if it exists
        return NextResponse.redirect(
          new URL(`/projects/${lowercaseSlug}`, request.url)
        );
      }
    }
  }

  // Continue with existing session management
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
