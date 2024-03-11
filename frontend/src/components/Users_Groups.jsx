import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";

const Users_Groups = () => {
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
  ]);
  return (
    <div className="list-container">
      <div className="sb-header"></div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search..." className="search-box" />
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

export default Users_Groups;
