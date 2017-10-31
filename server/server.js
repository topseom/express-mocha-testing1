const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get("/",(req,res)=>{
    res.status(404).send({
        error:"Page Not Found.",
        name:"Todo App v1.0"
    });
});

app.get("/users",(req,res)=>{
    res.send([
        {name:"top",age:22},
        {name:"joojee",age:20}
    ])
});


app.listen(port,()=>{
    console.log("Server run at localhost:3000");
});

module.exports.app = app;