

const express =require("express");
const app = express ();
const bodyParser=require("body-parser");
var a =['cow','dog','cat']

app.get("/:animal",(request,response) =>{
    console.log(request.params.animal)
    var b = (request.params.animal)
    if(b ===a[0]){
    response.send("moo");
    }
    else if(b==a[1]){
        response.send("barks")
    }
    else if (b==a[2]){
        response.send("meow")
    }
    else{
        response.send("animal not found")
    }

})


/*
app.get("/profile/id",(req,res)=>{
res.send("your id"+req.params.id)
})

*/
app.listen(3000,()=>{
    console.log("server started")
})