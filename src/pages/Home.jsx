import React, { useState } from "react";
import { BsChatText } from "react-icons/bs";
import Chat from "../components/Chat";

const chats = [
  {
    id: "1",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "2",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "3",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "4",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "5",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "6",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "7",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "8",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
  {
    id: "9",
    img: "https://avatars.githubusercontent.com/u/119802653?v=4",
    name: "Showkat",
  },
];

const Home = () => {
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);

  return (
    <div className="bg-base-100">
      <div className="flex space-x-6 container mx-auto">
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
                    selectedChatIndex === chat.id
                      ? "bg-neutral"
                      : "bg-neutral/40"
                  }`}
                  onClick={() => setSelectedChatIndex(chat.id)}
                >
                  <img
                    src={chat.img}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <span>{chat.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 min-h-screen">
          {/* <Banner /> */}
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Home;
