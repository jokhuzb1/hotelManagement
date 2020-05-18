const express = require("express");
const app = express();

app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});
app.get("/contact", function(req,res){
  res.send("contact me at: jokhuzb@mail.ru");
});
app.get("/about", function(req,res){
  res.send("this is about page");
});

app.get("/listing", function(req,res){
  res.send("this is about page");
});

app.listen(3000, function(){console.log("server is running");});
