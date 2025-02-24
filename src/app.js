console.log("hello");
const express = require("express");
const app = express();
const connect = require("./config/database");
connect();
app.listen("3000", () => {
  console.log("server is running on port:3000");
});
