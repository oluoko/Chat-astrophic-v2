import React, { useState, useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Users = () => {
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
          <p className="ug-title">Online Users</p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="ug-list"
        >
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Users;
