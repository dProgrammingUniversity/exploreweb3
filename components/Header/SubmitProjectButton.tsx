// /components/Header/SubmitProjectButton.tsx
"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";

const SubmitProjectButton = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== '/dashboard/create-listings' && (
        <Link
          href="/dashboard/create-listings"
          className="flex items-center justify-center rounded-full bg-green-600 w-48 h-12 text-regular text-white duration-300 ease-in-out hover:bg-green-700"
        >
          Submit Project 🚀
        </Link>
      )}
    </>
  );
};

export default SubmitProjectButton;
