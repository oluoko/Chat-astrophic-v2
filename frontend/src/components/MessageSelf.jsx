import React from "react";
import "./myStyles.css";

const MessageSelf = () => {
  var props2 = { name: "You", message: "This is a sample message" };
  return (
    <div className="self-message-container messo">
      <div className="messageBox">
        <p className="con-lastMessage">{props2.message}</p>
        <p className="self-timeStamp">12:00 am</p>
      </div>
    </div>
  );
};

export default MessageSelf;
