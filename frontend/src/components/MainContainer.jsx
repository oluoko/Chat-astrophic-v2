import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";

const MainContainer = () => {
  const [chatData, setChatData] = useState([
    {
      name: "Test #1",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #2",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #3",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #4",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="main-container">
      <Sidebar />
      {/* <ChatArea props={chatData[1]} /> */}
      <Welcome />
    </div>
  );
};

export default MainContainer;
