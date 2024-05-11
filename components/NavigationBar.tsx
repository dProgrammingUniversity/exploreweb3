// ExploreSol/components/NavigationBar.tsx
"use client";
import React, { useState } from "react";
import AuthButton from "@/components/AuthButton";
import Link from "next/link";
import "../app/globals.css";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="w-full">
        <div className="py-6 font-bold bg-purple-950 text-center">
          <span className="text-green-500">LATEST:</span>
          <span>
            {""} There May Be A Earn Opportunity For You On SuperteamEarn -
          </span>
          <span className="text-blue-500">
            <Link
              href="https://superteam.fun"
              target="_blank"
              rel="noopener noreferrer"
            >
              {""} Discover Now!
            </Link>
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full md:w-auto p-3">
            <input
              type="checkbox"
              className="peer hidden"
              id="menu-toggle"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label
              htmlFor="menu-toggle"
              className="block cursor-pointer md:hidden px-3 py-1 text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </label>
            <div className="peer-checked:flex flex-col absolute top-full left-0 bg-gray-400 w-full z-50 hidden md:flex md:static md:bg-transparent md:flex-row md:space-x-4">
              <Link href="/" className="btn" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="https://exploresolana.substack.com/"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/directory"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Directory
              </Link>
              <Link
                href="/about"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/contact"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/donate"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Donate
              </Link>
              <Link
                href="/earn"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Earn
              </Link>
              <Link
                href="/roadmap"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Link
                href="/s"
                className="btn"
                onClick={() => setMenuOpen(false)}
              >
                S
              </Link>
              <AuthButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
