const express=require("express");
const app=express();


app.use("/",(req,res)=>{
    console.log("i am listening");
    res.send("hello");
});

app.listen("5000",()=>{
    console.log("backend is running on 5000");
});
