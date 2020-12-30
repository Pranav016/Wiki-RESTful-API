//Acquiring Dependencies- 
const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

//Setting up the app and the ejs view engine-
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

//Launching the server on port 3000-
app.listen(3000, function(){
    console.log("Server started on port 3000");
});