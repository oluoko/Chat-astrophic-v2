import "./myStyles.css";
import React from "react";

const ChatArea = () => {
  return (
    <div className="chatarea-container ">
      <div className="chatarea-header">ChatArea-Header</div>
      <div className="messages-container">Messages Container</div>
      <div className="text-input-area">Text-input-area</div>
    </div>
  );
};

export default ChatArea;
