import logo from "../assets/chatting.png";
import React from "react";
import { Link } from "react-router-dom";
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
          className="login-input"
          label="Enter Your Username"
          variant="outlined"
          sx={{
            input: { color: "var(--primary-text-color)" },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          className="login-input"
          type="password"
          variant="outlined"
          sx={{
            input: { color: "var(--primary-text-color)" },
          }}
        />
        <Button className="login-input button" variant="outlined">
          Log In
        </Button>

        <p style={{ fontSize: "0.9rem" }}>
          {" "}
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecorationLine: "none" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
