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

//Connecting to Mongo database using ODM Mongoose-
mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true});

const wikiSchema = {
    title: String,
    content: String,
};

const Article = new mongoose.model("Article", wikiSchema);

app.get("/articles", function(req, res){
    Article.find(function(err, foundArticles){
        if(!err){
            res.send(foundArticles);
        }
        else{
            res.send(err);
        }
    });
});

//Launching the server on port 3000-
app.listen(3000, function(){
    console.log("Server started on port 3000");
});