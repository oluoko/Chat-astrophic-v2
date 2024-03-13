import React, { useState } from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isdark, setisdark }) => {
  const [conversations, setConversations] = useState([
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
    {
      name: "Test #5",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #6",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #7",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #8",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
    {
      name: "Test #9",
      lastMessage: "Hey! How are",
      timeStamp: "today",
    },
  ]);

  const navigate = useNavigate();
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <IconButton>
          <AccountCircleIcon />
        </IconButton>

        <div className="other-icons">
          <IconButton onClick={() => navigate("users")}>
            <PersonAddIcon />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon />
          </IconButton>
          <IconButton onClick={() => navigate("create-groups")}>
            <AddCircleIcon />
          </IconButton>
          <IconButton onClick={() => setisdark(!isdark)}>
            {isdark ? <WbSunnyIcon /> : <NightlightIcon />}
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return (
            <ConversationsItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
