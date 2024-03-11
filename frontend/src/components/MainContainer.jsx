import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import Users_Groups from "./Users_Groups";

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

      <Users_Groups />
      {/* <ChatArea props={chatData[1]} /> */}
      {/* <CreateGroup /> */}
      {/* <Welcome /> */}
    </div>
  );
};

export default MainContainer;
