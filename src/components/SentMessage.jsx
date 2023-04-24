import React from "react";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

const SentMessage = ({ msg }) => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              user.avatar ||
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
      </div>
      <div className="chat-header">{user.fullname.split(" ")[0]}</div>
      <div className="chat-bubble">{msg.text}</div>
      <div className="chat-footer opacity-50">{format(msg.createdAt)}</div>
    </div>
  );
};

export default SentMessage;
