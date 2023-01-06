const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const ejs=require('ejs');


const app=express();

app.use('view engine','ejs')