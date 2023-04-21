import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import { chats } from "../assets/fakeData";

const SideBar = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  return (
    <div className="p-4 max-w-sm flex-1">
      <h1 className="w-fit mx-auto text-3xl text-white flex items-center gap-x-4 font-bold mb-5">
        <span className="flex justify-center items-center w-10 h-10 bg-accent p-3 rounded-xl">
          <BsChatText className="text-white" />
        </span>
        SAM
      </h1>
      <div>
        <ul className="space-y-4 max-h-[calc(100vh-90px)] pr-3 border-r-4 border-neutral overflow-y-scroll">
          {chats.map((chat) => (
            <li
              key={chat.id}
              className={`flex cursor-pointer items-center gap-x-4 font-semibold text-xl text-white rounded-md p-2 ${
                selectedChatIndex === chat.id ? "bg-neutral" : "bg-neutral/40"
              }`}
              onClick={() => setSelectedChatIndex(chat.id)}
            >
              <img src={chat.img} alt="" className="w-12 h-12 rounded-full" />
              <span>{chat.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
