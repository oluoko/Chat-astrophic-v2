import logo from "../assets/chatting.png";
import React from "react";
import "./myStyles.css";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p>Login to you Account</p>
        <TextField
          id="outlined-basic"
          label="Enter Your Username"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Button variant="outlined">Log In</Button>
      </div>
    </div>
  );
};

export default Login;
