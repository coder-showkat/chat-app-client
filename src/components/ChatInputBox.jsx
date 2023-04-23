import axios from "axios";
import React, { useState } from "react";
import { BsPlus, BsSendFill } from "react-icons/bs";
import InputEmoji from "react-input-emoji";
const ChatInputBox = ({ chatId }) => {
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    const token = localStorage.getItem("token");
    try {
      const result = await axios.post(
        "http://localhost:4001/message",
        { chatId, text: newMessage },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="absolute bottom-4 left-0 right-0 px-8 form-control flex flex-row gap-x-3 items-center">
        <button>
          <BsPlus className="text-4xl text-accent" />
        </button>
        <InputEmoji
          value={newMessage}
          theme="dark"
          onChange={(e) => setNewMessage(e)}
        />

        <button
          onClick={sendMessage}
          className="btn w-16 btn-accent !rounded-full"
        >
          <BsSendFill className="text-lg" />
        </button>
      </div>
    </>
  );
};

export default ChatInputBox;
