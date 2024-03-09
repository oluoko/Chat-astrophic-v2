import React from "react";
import "./myStyles.css";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { IconButton } from "@mui/material";

const CreateGroup = () => {
  return (
    <div className="createGroups">
      <input
        type="text"
        placeholder="Enter Group Name"
        className="search-box"
      />
      {/* <IconButton>
        <AddBoxRoundedIcon />
      </IconButton> */}
      <IconButton>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroup;
