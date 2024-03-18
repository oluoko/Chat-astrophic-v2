import logo from "../assets/chatting.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./myStyles.css";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "./Toast";

const Login = () => {
  const [showlogin, setShowlogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const [loading, setLoading] = useState(false);

  const [logInStatus, setLogInStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();
  const changerHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/login/",
        data,
        config
      );
      console.log("Login : ", response);
      setLogInStatus({ msg: "Success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      setLogInStatus({
        msg: "Invalid Username or Password",
        key: Math.random(),
      });
    }

    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register/",
        data,
        config
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status == 406) {
        setLogInStatus({
          msg: "User Name already taken, please try another one",
          key: Math.random(),
        });
      }
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="welcome-logo" />
        </div>
        {showlogin ? (
          <div className="login-box">
            <p>Login to you Account</p>
            <TextField
              // onChange={changerHandler}
              id="outlined-basic"
              className="login-input"
              label="Enter Your Username"
              variant="outlined"
              name="name"
              sx={{
                input: { color: "var(--primary-text-color)" },
              }}
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  loginHandler();
                }
              }}
            />
            <TextField
              onChange={changerHandler}
              id="outlined-basic"
              label="Password"
              className="login-input"
              type="password"
              variant="outlined"
              sx={{
                input: { color: "var(--primary-text-color)" },
              }}
              name="password"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  loginHandler();
                }
              }}
            />
            <Button
              className="login-input button"
              onClick={loginHandler}
              variant="outlined"
            >
              Log In
            </Button>

            <p style={{ fontSize: "0.9rem" }}>
              {" "}
              Don't have an account?{" "}
              <span
                className="hyper"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowlogin(false);
                }}
              >
                Sign Up
              </span>
            </p>
            {logInStatus ? (
              <Toast key={logInStatus.key} message={logInStatus.msg} />
            ) : null}
          </div>
        ) : (
          <div className="login-box">
            <p className="login-text">Create you Account</p>
            <TextField
              onChange={changerHandler}
              id="standard-basic"
              label="Set Your Username"
              className="login-input"
              variant="outlined"
              color="secondary"
              name="name"
              helperText=""
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changerHandler}
              id="standard-basic"
              label="Enter Your Email Address"
              className="login-input"
              variant="outlined"
              color="secondary"
              name="email"
              helperText=""
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changerHandler}
              id="outline-password-input"
              label="Set Your Password"
              type="password"
              autoComplete="current-password"
              className="login-input"
              color="secondary"
              name="password"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <Button
              className="login-input button"
              variant="outlined"
              onClick={signUpHandler}
            >
              Signup
            </Button>
            <p style={{ fontSize: "0.9rem" }}>
              Already have an Account?{" "}
              <span
                className="hyper"
                style={{ cursor: "pointer" }}
                onClick={() => setShowlogin(true)}
              >
                Log in
              </span>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
