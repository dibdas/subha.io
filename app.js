

const express =require("express");
const app = express ();
const bodyParser=require("body-parser");


app.get("/cow",(request,response) =>{
    
    console.log(response)
    response.send(MOO);
})

app.get("/dog",(request,response) =>{
    
    console.log(response)
    response.send("BARKS");
})

app.get("/cat",(request,response) =>{
    
    console.log(response)
    response.send("MEOW");
})


/*
app.get("/profile/:abcid",(req,res)=>{
res.send("your id"+req.params.abcid)
})
*/


app.listen(3000,()=>{
    console.log("server started")
})