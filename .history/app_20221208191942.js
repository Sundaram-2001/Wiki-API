const express=


const app=express();

app.use('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));











app.listen(3000,function(){
    console.log("Server is up and running!");
})
