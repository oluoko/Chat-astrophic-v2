const express = require("express");
const UserModel = require("../models/userModel");
const User = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");

const loginController = () => {};

const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check for all fields
  if (!name || !email || !password) {
    res.send(400);
    throw Error("All necessary fields have not been filled!");
  }

  //pre-existing user
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    throw new Error("User already Exists.");
  }

  //userName already taken
  const userNameExist = await UserModel.findOne({ name });
  if (userNameExist) {
    throw new Error("Username already taken.");
  }

  const user = await UserModel.create({ name, email, password });
});

module.exports = { loginController, registerController };
