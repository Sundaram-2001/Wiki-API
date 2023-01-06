const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app=express();


//app.use('view engine','ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/wikiDB");
const articleSchema={
    title:String,
    content:String
};
const Article=mongoose.model("Article",articleSchema);
app.route("/articles")


.get(function(req, res){
    Article.find(function(err, articles){
    if (articles) {
        const jsonArticles = JSON.stringify(articles);
        res.send(jsonArticles);
    } else {
        res.send("No articles currently in wikiDB.");
    }
    });
})

.post(function(req, res){
    const newArticle = Article({
    title: req.body.title,
    content: req.body.content
    });

    newArticle.save(function(err){
    if (!err){
        res.send("Successfully added a new article.");
    } else {
        res.send(err);
    }
    });
})

.delete(function(req, res){

    Article.deleteMany(function(err){
    if (!err){
        res.send("Successfully deleted all the articles in wikiDB.");
    } else {
            res.send(err);
    }
    });

});


app.route("/articles/:articleTitle")
.get(function(req,res){
    Article.findOne({title:req.params.articleTitle},function(err,foundArticle){
        if(!err){
            res.send(foundArticle);
        }
        else{
            res.send("No articles with this title found!!");
        }
    })
})

.put(function(req,res){
    Article.update(
        {
            title:req.params.articleTitle
        }

    )
})



app.listen(3000,function(){
    console.log("Server is up and running!");
})
