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
    content
}







app.listen(3000,function(){
    console.log("Server is up and running!");
})
