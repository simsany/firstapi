var express=require("express");
var app=express();
var mongoose=require("mongoose");
var routes=require("./routes/todo")
var bodyParser=require("body-parser");
var cors = require('cors')


app.use(cors())






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/todos",routes);

app.get("/",(req,res)=>res.send("ollé"));











app.listen(process.env.PORT);