const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require('mongoose');

const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema={
    title:String,
    content:String
}
const Article=new mongoose.model("Article",articleSchema);


///All Articles//////


app.route("/articles")


.get(function(req,res){
    Article.find(function(foundArticles,err){
        if(foundArticles){
            const jsonArticles=JSON.stringify(foundArticles);
            res.send()
        }
    })
})




















app.listen(3000,function(req,res){
    console.log("Server is up and running!");
})