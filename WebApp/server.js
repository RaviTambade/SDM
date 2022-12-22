var express=require('express');
var app=express();
var person={
    'id':23,
    'firstname':'ravi',
    'lastname':'tambade'
};

app.get('/', (req,res)=>{
    res.send(person);
})

app.listen(7000);
console.log( ' express server is listening on port 70000');