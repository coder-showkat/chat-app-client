import React from "react";
import { BsEmojiSmileFill, BsSendFill } from "react-icons/bs";

const ChatInputBox = () => {
  return (
    <div className="absolute bottom-4 left-0 right-0 px-8 form-control flex flex-row gap-x-3 items-center">
      <BsEmojiSmileFill className="text-yellow-400 w-8 h-8" />
      <div className="input-group bg-white/20 rounded-3xl">
        <input
          type="text"
          placeholder="Hi"
          className="input w-full !outline-none bg-transparent"
        />
        <button className="btn w-16 btn-accent !rounded-full">
          <BsSendFill className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ChatInputBox;
