let express=require("express");
let app=express();

app.listen(4000, "127.0.0.1", ()=>{
    console.log("Connected")
})