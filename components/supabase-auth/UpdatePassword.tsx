// ExploreSol/components/supabase-auth/UpdatePassword.tsx
"use client";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // New state to track the type of message

  // Function to process update password request
  const handleUpdatePassword = async () => {
    const supabaseClient = createClient();
    const { error } = await supabaseClient.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.log("Error: ", error);
      setMessage("Failed to update password: " + error.message);
      setMessageType("error");
    } else {
      setMessage("Password updated successfully");
      setMessageType("success");
      window.location.href = "/login"; // Redirect after successful password update
    }
  };

  // Determine the message color based on success or error
  const messageColor = messageType === "success" ? "green" : "red";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >

      {/* new password input */}
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          background: "gray",
        }}
      />

      {/* Update password button */}
      <button
        onClick={handleUpdatePassword}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
        }}
      >
        Update Password
      </button>

      {/* Feedback message for users */}
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </div>
  );
};

export default UpdatePassword;
