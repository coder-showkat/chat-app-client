import axios from "axios";
import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import { useDispatch } from "react-redux";
import useChat from "../hook/useChat";
import { addChatList } from "../redux/features/chatSlice";
import { toastError } from "../utilities/toastify";
import Conversation from "./Conversation";

const SideBar = ({ user }) => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const { chatList } = useChat();
  const dispatch = useDispatch();

  const handleAddUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const result = await axios.post(
        `http://localhost:4001/chat/${searchParam}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (result.status === 201) {
        dispatch(addChatList(result.data));
      }
    } catch (error) {
      toastError(error.response.data.error);
    }
  };

  return (
    <div className="p-4 max-w-sm flex-1">
      {/* logo */}
      <h1 className="w-fit mx-auto text-3xl text-white flex items-center gap-x-4 font-bold mb-5">
        <span className="flex justify-center items-center w-10 h-10 bg-accent p-3 rounded-xl">
          <BsChatText className="text-white" />
        </span>
        SAM
      </h1>

      {/* add user input box */}
      <div className="form-control mb-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Add connection by username"
            className="input input-bordered border-neutral border-2 w-full !outline-none"
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <button
            onClick={handleAddUser}
            className="absolute right-0 btn border-2 border-neutral btn-outline btn-square !rounded-lg hover:bg-accent hover:border-neutral hover:text-white text-3xl"
          >
            +
          </button>
        </div>
      </div>

      {/* chat list */}
      <div>
        <ul className="space-y-4 h-[calc(100vh-180px)] pr-3 border-r-4 border-neutral overflow-y-scroll">
          {chatList.map((chat) => (
            <Conversation key={chat._id} chat={chat} userId={user._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
