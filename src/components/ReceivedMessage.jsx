import React from "react";
import { format } from "timeago.js";

const ReceivedMessage = ({ msg, fullname, avatar }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              avatar ||
              "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
          />
        </div>
      </div>
      <div className="chat-header">{fullname.split(" ")[0]}</div>
      <div className="chat-bubble">{msg.text}</div>
      <div className="chat-footer opacity-50">{format(msg.createdAt)}</div>
    </div>
  );
};

export default ReceivedMessage;
