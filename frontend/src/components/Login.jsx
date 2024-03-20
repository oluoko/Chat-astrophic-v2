import logo from "../assets/chatting.png";
import { useState } from "react";
import "./myStyles.css";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Toast from "./Toast";

const Login = () => {
  const [showlogin, setShowlogin] = useState(true);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [logInStatus, setLogInStatus] = useState("");
  const [signInStatus, setSignInStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    setLoading(true);
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

      setLogInStatus({ msg: "Success", key: response.data.userId });
      localStorage.setItem("userData", JSON.stringify(response.data));
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
      setSignInStatus({ msg: "Success", key: response.data.userId });
      localStorage.setItem("userData", JSON.stringify(response.data));
      navigate("/app/welcome");
    } catch (error) {
      if (error.response.status === 405) {
        setLogInStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      }
      if (error.response.status === 406) {
        setLogInStatus({
          msg: "User Name already taken, please try another one",
          key: Math.random(),
        });
      }
    }
    setLoading(false);
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
              id="outlined-basic"
              className="login-input"
              label="Enter Your Username"
              variant="outlined"
              name="name"
              sx={{
                input: { color: "var(--primary-text-color)" },
              }}
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  loginHandler();
                }
              }}
            />
            <TextField
              onChange={handleChange}
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
                if (event.code === "Enter") {
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
              Don't halittleve an account?{" "}
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
              onChange={handleChange}
              id="standard-basic"
              label="Set Your Username"
              className="login-input"
              variant="outlined"
              color="secondary"
              sx={{
                input: { color: "var(--primary-text-color)" },
              }}
              name="name"
              helperText=""
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={handleChange}
              id="standard-basic"
              label="Enter Your Email Address"
              className="login-input"
              variant="outlined"
              color="secondary"
              sx={{
                input: { color: "var(--primary-text-color)" },
              }}
              name="email"
              helperText=""
              onKeyDown={(event) => {
                if (event.code === "Enter") {
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={handleChange}
              id="outline-password-input"
              label="Set Your Password"
              type="password"
              autoComplete="current-password"
              className="login-input"
              color="secondary"
              sx={{
                input: { color: "var(--primary-text-color)" },
              }}
              name="password"
              onKeyDown={(event) => {
                if (event.code === "Enter") {
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
            {logInStatus ? (
              <Toast key={signInStatus.key} message={signInStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
