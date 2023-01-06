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
            res.send(jsonArticles);
        }
        else{
            res.send(err);
        }
    })
})


.post(function(req,res){
    const newArticle=new Article({
        title:req.body.title,
        content:req.body.content
    });
    newArticle.save(function(err){
        if(!err){
            res.send("Article added successfully!")
        }
        else{
            res.send(err);
        }
    })
})


.delete(function(req,res){
    Article.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted Article!");
        }
        else{
            res.send(err);
        }
    })
})


///Specific Articles///
app.route("/articles/:articleTitle")
.get(function(req,res){
    const articleTitle=req.params.articleTitle;
    Article.findOne({title:articleTitle},function(result,err){
        if(!err)
        const jsonArticle=JSON.stringify(j)
    })
})















app.listen(3000,function(req,res){
    console.log("Server is up and running!");
})