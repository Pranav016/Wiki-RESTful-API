//jshint esversion: 6

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

// Request Targeting all articles

app.route("/articles")

.get(function(req, res){
    Article.find(
        function(err, foundArticles){
            if(!err){
                res.send(foundArticles);
            }
            else{
                res.send(err);
            }
        }
    );
})

.post(function(req,res){
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content,
    })
    newArticle.save(
        function(err){
            if(!err){
                res.send("Successfully added a new article.");
            }
            else{
                res.send(err);
            }
        }
    );
})

.delete(function(req, res){
    Article.deleteMany(
        {},
        function(err){
            if(!err){
                res.send("Successfully deleted all articles");
            }
            else{
                res.send(err);
            }
        }
    );
});

// Request Targeting specific articles-

app.route("/articles/:articleTitle")

.get(function(req, res){
    const articleTitle = req.params.articleTitle;
    Article.findOne(
        {title: articleTitle},
        function(err, foundArticle){
            if(!err){
                if(foundArticle){
                    res.send(foundArticle);
                }
                else{
                    res.send("No articles matching that title were found!");
                }
            }
        }
    );
})

.put(function(req, res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        function(err){
            if(!err){
                res.send("Successfully replaced the article!");
            }
            else{
                res.send(err);
            }
        }
    );
})

.patch(function(req, res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err){
            if(!err){
                res.send("Successfully updated the article!");
            }
            else{
                res.send(err);
            }
        }
    );
})

.delete(function(req, res){
    Article.deleteOne(
        {title: req.params.articleTitle},
        function(err){
            if(!err){
                res.send("Successfully deleted the article!");
            }
            else{
                res.send(err);
            }
        }
    );
});

//Launching the server on port 3000-
app.listen(3000, function(){
    console.log("Server started on port 3000");
});