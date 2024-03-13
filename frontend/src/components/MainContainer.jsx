import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainContainer = ({ isdark, setisdark }) => {
  return (
    <div className="main-container">
      <Sidebar isdark={isdark} setisdark={setisdark} />
      <Outlet />
    </div>
  );
};

export default MainContainer;
