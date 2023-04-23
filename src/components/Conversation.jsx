import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Conversation = ({ chat, userId }) => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getConnectionInfo = async () => {
      const id = chat.members.find((id) => id !== userId);
      try {
        const result = await axios.get(
          `http://localhost:4001/user/connectionInfo/${id}`
        );

        setUsername(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getConnectionInfo();
  }, []);

  const openConversation = () => {
    navigate(`/chat/${username}`, {
      replace: true,
      state: {
        username,
        chat,
        userId,
      },
    });
  };

  return (
    <li
      onClick={openConversation}
      className={`flex cursor-pointer items-center gap-x-4 font-semibold text-xl text-white rounded-md p-2 bg-neutral/40`}
    >
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        alt=""
        className="w-12 h-12 border-2 border-accent rounded-full"
      />
      <span>{username}</span>
    </li>
  );
};

export default Conversation;
