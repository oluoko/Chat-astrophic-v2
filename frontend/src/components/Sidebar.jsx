import React from "react";
import "./myStyles.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sb-header">Header</div>
      <div className="sb-search">Search</div>
      <div className="sb-conversations">Conversations</div>
    </div>
  );
};

export default Sidebar;
