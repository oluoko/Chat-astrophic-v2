const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running 12345");
});

app.listen(5000, console.log("Server is Running..."));
