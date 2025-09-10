const express = require("express");
let app = express();
const port = 2000;
const path = require("path");
const ejsMate = require("ejs-mate");
require('dotenv').config() 

app.set("view engine" , "ejs");

app.engine("ejs" , ejsMate);
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));


app.get("/" , (req,res) =>{
    res.render("index");
})

app.get("/about" , (req,res) =>{
    res.render("includes/about");
})

app.get("/skills" , (req,res) =>{
    res.render("includes/skills");
})

app.get("/work" , (req,res) =>{
    res.render("includes/work");
})


app.get("/contact" , (req,res) =>{
    res.render("includes/contact");
})


app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
