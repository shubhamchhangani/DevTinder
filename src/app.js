console.log("hello");
const express = require("express");
const { adminAuth, userAuth } = require("./middlewares/auth");
const app = express();

app.use("/admin", adminAuth);
app.get("/admin/getAllUsers", (req, res) => {
  res.send("got the data of all the users");
});

app.get("/user", userAuth, (req, res) => {
  console.log("inside user api");
  //throw new Error("Error");
  res.send("data of user fetched");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.send("something went wrong contact support");
  } else {
    next();
  }
});

app.listen("3000", () => {
  console.log("server is running on port:3000");
});
