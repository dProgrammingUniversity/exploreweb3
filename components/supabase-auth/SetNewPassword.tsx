// ExploreSol/component/supabase-auth/SetNewPassword.tsx
"use client";
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';

const SetNewPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // New state to track the type of message
  const [accessToken, setAccessToken] = useState('');

  // Extract access_token directly from the URL query string
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const access_token = queryParams.get('access_token');
    if (access_token) {
      setAccessToken(access_token);
    } else {
      setMessage('No access token provided.');
      setMessageType('error');
    }
  }, []);

  const handleNewPassword = async () => {
    if (!accessToken) {
      setMessage('Access token is required for this operation.');
      setMessageType('error');
      return;
    }

    const supabaseClient = createClient();
    const { error } = await supabaseClient.auth.updateUser({ password });

    if (error) {
      setMessage('Failed to update password: ' + error.message);
      setMessageType('error');
    } else {
      setMessage('Password updated successfully');
      setMessageType('success');
      window.location.href = '/login'; // Redirect after successful password update
    }
  };

  // Determine the message color based on success or error
  const messageColor = messageType === 'success' ? 'green' : 'red';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button
        onClick={handleNewPassword}
        style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}
      >
        Update Password
      </button>
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </div>
  );
};

export default SetNewPassword;

