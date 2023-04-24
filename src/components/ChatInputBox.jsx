import axios from "axios";
import React, { useState } from "react";
import { BsPlus, BsSendFill } from "react-icons/bs";
import InputEmoji from "react-input-emoji";
import { useDispatch, useSelector } from "react-redux";

const ChatInputBox = ({ chat, socket }) => {
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();

  // send message handler
  const sendMessage = async () => {
    // prevent to send empty message
    if (newMessage.trim() === "") return;

    // save message to db
    const token = localStorage.getItem("token");
    try {
      const result = await axios.post(
        "http://localhost:4001/message",
        { chatId: chat._id, text: newMessage },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      socket.current.emit("message", result.data);

      // to see sender message in real time
      // dispatch(addMessage(result.data));
      setNewMessage("");

      // send sender message to socket server
      // const receiverId = chat.members.find((id) => id !== user._id);
      // socket.current.emit("send-message", { ...result.data, receiverId });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="absolute bottom-4 left-0 right-0 p-4 md:px-8 form-control flex flex-row gap-x-2 md:gap-x-3 items-center">
        <button>
          <BsPlus className="text-4xl text-accent" />
        </button>
        <InputEmoji
          value={newMessage}
          theme="dark"
          cleanOnEnter
          onEnter={sendMessage}
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
