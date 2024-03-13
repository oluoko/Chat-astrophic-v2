import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Users_Groups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} alt="logo" style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Available Groups</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="Search..." className="search-box" />
      </div>
      <div className="ug-list">
        <motion.div whileHover={{ scale: 1.2 }} className="list-tem">
          <p className="con-icon">T</p>
          <p className="con-title">Test Group</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Users_Groups;
