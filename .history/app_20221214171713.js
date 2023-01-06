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


app.route("/articles").get(function(req,res){
    Article.find(function(err,foundArticles){
        if(err){
            console.log(err);
        }
        else{
            res.send
        }
    })
}).post().delete()
app.get("/articles",function(req,res){
    Article.find(function(err,foundArticles){
        if(err){
            console.log(err);
            //res.send("Cannot find the entered route!")
        }
        else{
            console.log(foundArticles);
            res.send(foundArticles);
        }
    })
})

app.post("/articles",function (req,res) {
    console.log(req.body.title);
    console.log(req.body.content);
    const newArticle=new Article({
        title:req.body.title,
        content:req.body.content
    })
    newArticle.save(function(err){
        if(!err){
            res.send("Your response has been recieved!");
        }
        else{
            res.send(err);
        }
    });
})

app.delete("/articles",function(req,res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted the articles!!");
        }
        else{
            res.send(err);
        }
    })
})







app.listen(3000,function(){
    console.log("Server is up and running!");
})
