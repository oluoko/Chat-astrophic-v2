import React, { useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import logo from "../assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";

const Users_Groups = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ ease: "anticipate", duration: "0.3" }}
        className="list-container"
      >
        <div className="ug-header">
          <img
            src={logo}
            alt="logo"
            style={{ height: "2rem", width: "2rem" }}
          />
          <p className="ug-title">Available Groups</p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
        <div className="ug-list">
          <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="list-tem"
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Group</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Users_Groups;
