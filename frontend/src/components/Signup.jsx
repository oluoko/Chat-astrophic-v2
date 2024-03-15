import logo from "../assets/chatting.png";
import React from "react";
import { Link } from "react-router-dom";
import "./myStyles.css";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p>Create An Account</p>

        <TextField
          id="outlined-basic"
          className="login-input"
          label="Enter Your Email"
          type="email"
          variant="outlined"
          sx={{
            input: { color: "var(--primary-text-color)" },
          }}
        />
        <TextField
          id="outlined-basic"
          className="login-input"
          label="Set Your Username"
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
          Sign up
        </Button>

        <p style={{ fontSize: "0.9rem" }}>
          Already have an account ?{" "}
          <Link to="/" style={{ textDecorationLine: "none" }}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
