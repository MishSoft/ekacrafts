"use client";
import React, { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";

interface OnlineChatProps {
  isActiveChat: boolean;
  setIsActiveChat: () => void;
}

const OlineChat: React.FC<OnlineChatProps> = () => {
  const [isActiveChat, setIsActiveChat] = useState(false);
  console.log(isActiveChat);
  return (
    <div className="fixed z-50 top-[85%] right-[20px]">
      <button
        onClick={() => setIsActiveChat(!isActiveChat)}
        className="p-4 bg-blue-500 shadow-md rounded-full text-white"
      >
        <FaFacebookMessenger size={30} />
      </button>

      {isActiveChat && (
        <div className="absolute bottom-20 right-0 w-[300px] max-w-[500px] bg-white shadow-lg border rounded-md">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Chat Connector</h3>
            <p className="text-gray-600 mb-4">
              Connect with us for more information.
            </p>
            <button
              onClick={() => console.log("Connect to chat")}
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Connect to Chat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default OlineChat;
