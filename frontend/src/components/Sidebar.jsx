import React from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <IconButton>
          <AccountCircleIcon />
        </IconButton>

        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" />
      </div>
      <div className="sb-conversations">Conversations</div>
    </div>
  );
};

export default Sidebar;
