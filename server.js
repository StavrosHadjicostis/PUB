const request = require("request");
const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));

app.listen (3001, function (){
  console.log("Server is running on port 3001");
});

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});
