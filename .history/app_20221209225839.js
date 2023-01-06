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
    console.log(req.body.con)
})







app.listen(3000,function(){
    console.log("Server is up and running!");
})
