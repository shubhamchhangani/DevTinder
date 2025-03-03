const express = require("express");
const User = require("./models/user");
const app = express();
const connect = require("./config/database");
connect();

app.use(express.json());

app.post("/signup", async (req, res) => {
    const newUser = req.body;
    //console.log(newUser);
    const user = new User(newUser);
    await user.save();
    res.send("new user created");
})

app.get("/users", async (req, res) => {
  const userEmail = req.body.email;
  try {
    
    const users = await User.find({email : userEmail});
    if(users.length === 0){
      res.status(404).send("user not found");
    }else{
      res.send(users);
    }
  } catch (error) {
    res.status(400).send(error);
  }
})

app.get("/feed", async (req, res) => {
  try {
    res.send(await User.find({}));
  } catch (error) {
    res.status(400).send("something went wrong");
  }
})

app.get("/user", async (req, res) => {
  const userEmail = req.body.email;
  try {
    const user = await  User.findOne({email : userEmail});
    if(!user){
      res.status(404).send("user not found");
    }else{
      res.send(user);
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
})

//delete the user

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully")
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
})

//update the user

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, data);
    res.send("user updated successfully")
  } catch (error) {
    res.status(400).send("something went wrong");
  }
})


app.listen("3000", () => {
  console.log("server is running on port:3000");
});
