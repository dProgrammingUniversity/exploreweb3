// /components/Directory/SupabaseAuth/ResetPassword.tsx
"use client";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // State to track message type

  const handleReset = async () => {
    const supabaseClient = createClient();
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://exploresol.xyz/dashboard/update-password',
    });

    if (error) {
      setMessage("Error sending reset password link: " + error.message);
      setMessageType("error"); // Set message type as error
    } else {
      setMessage("Check your email for the reset link");
      setMessageType("success"); // Set message type as success
    }
  };

  // Determine the message color based on success or error
  const messageColor = messageType === "success" ? "green" : "red";

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >

     {/* input for reset password */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          background: "black",
        }}
      />

      {/* Button reset password */}
      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
        }}
      >
        Reset Password
      </button>

      {/* Feedback message for users */}
        {message && <p style={{ color: messageColor }}>{message}</p>}
    </div>

    </>
  );
};

export default ResetPassword;
