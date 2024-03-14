const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRouters");

const app = express();
dotenv.config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is Connected to Db".yellow.bold.underline);
  } catch (error) {
    console.log(
      "Server is NOT connected to Databae".red.bold.underline,
      error.message
    );
  }
};

connectDb();

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("user/", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is Running..."));
