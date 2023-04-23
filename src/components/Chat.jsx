import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import ChatInputBox from "./ChatInputBox";
import ReceivedMessage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  if (!location.state) return <Navigate to="/" replace={true} />;

  const { username, chat, userId } = location.state;

  useEffect(() => {
    const initMessages = async () => {
      try {
        const result = await axios.get(
          `http://localhost:4001/message/${chat._id}`
        );

        setMessages(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    initMessages();
  }, [chat]);

  return (
    <div className="h-full p-4 relative">
      <ChatHeader username={username} />
      <div className="py-6 pb-16 h-[calc(100vh-150px)] overflow-y-auto">
        {messages.map((message) => {
          return message.senderId === userId ? (
            <SentMessage key={message._id} msg={message} />
          ) : (
            <ReceivedMessage
              key={message._id}
              msg={message}
              username={username}
            />
          );
        })}
      </div>

      <ChatInputBox chatId={chat._id} />
    </div>
  );
};

export default Chat;
