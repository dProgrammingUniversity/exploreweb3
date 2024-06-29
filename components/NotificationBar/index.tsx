// /components/NavigationBar/index.tsx
"use client";
import { useEffect, useState } from "react";

const NotificationBar = () => {
  const [visible, setVisible] = useState(true);

  // Function to close the notification bar
  const handleClose = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className=" text-white py-4 flex justify-center items-center">
        <div className="w-full max-w-c-1390 px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <strong>New Feature:</strong>
            <span>
              Solana Blinks Explorer!{" "}
              <a
                href="#"
                className="underline hover:text-yellow-300"
              >
                Coming Soon
              </a>
            </span>
          </div>
          <button onClick={handleClose} className="text-white font-bold">
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default NotificationBar;

