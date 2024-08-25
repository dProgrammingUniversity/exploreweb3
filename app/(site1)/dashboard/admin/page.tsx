// /app/(site)/directory/dashboard/admin/page.tsx
"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import Image from "next/image";

const AdminDashboardPage = () => {
  const [pendingListings, setPendingListings] = useState<DisplayListingTypes[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: user, error } = await supabase.auth.getUser();

      if (error || !user) {
        // If there is an error or no user, redirect to login
        window.location.href = "/auth/login";
        return;
      }

      // Check if the user is an admin
      const { data: roles, error: roleError } = await supabase
        .from("user_role_manager")
        .select("*")
        .eq("user_role_level", "admin") // Check if the user has an admin role
        .single();

      if (roleError || !roles || roles.user_role_level !== "admin") {
        // If there's an error, no role info, or the user is not an admin, redirect to login
        window.location.href = "/auth/login";
        return;
      }

      setIsAdmin(true); // Set admin state to true if the user is an admin
      fetchPendingListings();
    };

    const fetchPendingListings = async () => {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("moderation_status", "pending");

      if (error) {
        console.error("Error fetching pending listings:", error);
      } else {
        setPendingListings(data);
      }
      setLoading(false);
    };

    checkAdmin();
  }, [supabase]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    // Show a loading or blank screen if not admin
    return <div>Checking permissions...</div>;
  }

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
              Pending Listings - ADMIN DASHBOARD PAGE
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {pendingListings.length > 0 ? (
                pendingListings.map((listing) => (
                  <Link
                    key={listing.slug}
                    href={`/dashboard/admin/${listing.slug}`}
                    target="_blank"
                    passHref
                  >
                    <div className="card cursor-pointer rounded-lg bg-gray-800 p-4 shadow transition duration-300 hover:shadow-lg">
                      <img
                        src={listing.logo_url}
                        alt={listing.name}
                        className="h-48 w-full rounded-t-lg object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">
                          {listing.name}
                        </h3>
                        <p className="text-gray-400">
                          {listing.short_description}
                        </p>
                        {/* Additional info and actions */}
                        <div className="mt-4">Edit</div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-white">No pending listings</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboardPage;
