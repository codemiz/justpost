const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.send("posts show here")

})
app.get("/register",(req,res)=>{
    res.render("register")

})




app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`);
})