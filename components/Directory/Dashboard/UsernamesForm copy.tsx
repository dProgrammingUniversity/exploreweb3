// /components/Directory/Dashboard/UsernamesForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const UsernamesForm = () => {
  const [username, setUsername] = useState("");
  const [wallet, setWallet] = useState("");
  const [fetchedUsername, setFetchedUsername] = useState(""); // Add state for fetched username
  const [fetchedWallet, setFetchedWallet] = useState(""); // Add state for fetched wallet
  const [userId, setUserId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const supabaseClient = createClient();

  useEffect(() => {
    // Fetch the user details and set the user ID
    supabaseClient.auth.getUser().then(({ data }) => {
      if (data?.user) {
        setUserId(data.user.id);
        fetchUsername(data.user.id); // Call fetchUsername here
      }
    });
  }, [supabaseClient.auth]);

  // Fetch username for display
  const fetchUsername = async (userId: string) => {
    const { data, error } = await supabaseClient.rpc("usernames_fetch", {
      _user_id: userId,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
      setIsError(true);
    } else if (data && data.length > 0) {
      // Set the fetched username if it exists
      setFetchedUsername(data[0].username);
      setFetchedWallet(data[0].wallet_solana);
    } else {
      // If username does not exist, set an appropriate message
      setMessage("You have not set a username or wallet yet.");
      setIsError(true);
    }
  };

  // Handle submit form function
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsError(false);

    // Make sure we have the user ID before making the RPC call
    if (!userId) {
      setMessage("User is not authenticated.");
      setIsError(true);
      return;
    }

    const { data, error } = await supabaseClient.rpc("usernames_insert", {
      _user_id: userId,
      _username: username,
      _wallet_solana: wallet,
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
      setIsError(true);
    } else {
      setMessage(data);
      setFetchedUsername(username); // Update fetchedUsername to reflect the newly set username
      setFetchedWallet(wallet); // Update fetchedWallet to reflect the newly set wallet
      setUsername(""); // Clear the input after successful insertion
      setWallet(""); // Clear the wallet input
    }
  };

  // Wallet copy function starts
  const copyToClipboard = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      // Try to use the Clipboard API
      try {
        await navigator.clipboard.writeText(fetchedWallet);
        alert("Wallet address copied to clipboard!");
      } catch (err) {
        console.error("Copy failed:", err);
        fallbackCopyTextToClipboard(fetchedWallet);
      }
    } else {
      // Fallback if Clipboard API is not available
      fallbackCopyTextToClipboard(fetchedWallet);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    // Create a text area element dynamically
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
      alert("Wallet address copied to clipboard!");
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
      alert("Failed to copy wallet address. Please try manually.");
    }

    document.body.removeChild(textArea);
  };
  // Wallet copy function ends

  // Determine the message class based on error or success
  const messageClass = isError ? "text-red-500" : "text-green-500";

  return (
    <>
      {fetchedUsername ? (
        // Display the fetched username
        <>
          {/* Username */}
          <p className="mb-5 text-xl font-bold text-gray-300">
            Your Username:{" "}
            <span className="text-green-500">{fetchedUsername}</span>
          </p>
          {/* Wallet */}
          <p className="mb-5 text-xl font-bold text-gray-300">
            Your Wallet(Solana):
          </p>
          <p
            className="mb-2 break-words rounded-md border bg-gray-800 p-2 text-lg text-green-500"
            style={{ userSelect: "text" }}
          >
            {fetchedWallet}
          </p>
          <button
            onClick={copyToClipboard}
            className="mt-2 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Copy Wallet Address
          </button>
        </>
      ) : (
        // Display the form to set a username
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <label className="mb-2 text-2xl font-bold capitalize text-purple-500">
              Set Your Username & Solana Wallet:
            </label>
            <br />
            <span className="mb-1 text-sm text-gray-400">
              WARNING: Your unique username and Solana wallet can only be set
              once and can't be edited, updated, or deleted later!
            </span>
          </div>
          <div className="mt-2">
            <label
              htmlFor="usernamesform"
              className="block text-xl font-bold text-gray-300"
            >
              Create Username:
            </label>
            <span className="mb-1 text-sm text-gray-400">
              Username must be 3-15 characters long, contain only letters,
              numbers, and underscores, and no leading or trailing spaces.
            </span>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="mt-1 block rounded-md border-gray-300 bg-gray-500 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="wallet"
              className="mt-4 block text-xl font-bold text-gray-300"
            >
              Enter Your Solana Wallet Address:
            </label>
            <input
              id="wallet"
              type="text"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              placeholder="Enter your Solana Wallet Address"
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-500 shadow-sm"
              style={{ fontFamily: "monospace" }} // Ensures the wallet address is easily readable
            />
          </div>
          <div className="mt-2">
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Set Username
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-sm ${messageClass}`}>{message}</p>
          )}
        </form>
      )}
    </>
  );
};

export default UsernamesForm;
