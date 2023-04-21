import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInputBox from "./ChatInputBox";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const Chat = () => {
  return (
    <div className="h-full p-4 relative">
      <ChatHeader />
      <div className="py-6 pb-16 h-[calc(100vh-150px)] overflow-y-auto">
        <ReceivedMessage />
        <SentMessage />
      </div>

      <ChatInputBox />
    </div>
  );
};

export default Chat;
