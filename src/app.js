console.log("hello");
const express = require('express');
const app = express();
app.get("/getUser", (req,res) => {
    res.send({
        name: "Shubham",
        city: "Pokaran"
    })
})
app.get("/user", (req, res, next) => {
    next();
    //res.send("first request handler");
}, (req, res, next) => {
    //next();
    res.send("second request handler");
}, (req, res, next) => {
    //next();
    //res.send("third request handler");
})
app.use("/", (req, res) => {
    res.send("hello from server");
})
app.listen("3000", () => {
    console.log("server is running on port:3000"); 
});