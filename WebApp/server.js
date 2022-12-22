var http=require('http');
var fs=require('fs');
var person={
    'id':23,
    'firstname':'ravi',
    'lastname':'tambade'
};


var server=http.createServer((req,res)=>{
    res.write(' <h1> Welcome to Transflower </h1>');
    res.end();
});

server.listen(7000);
console.log( 'server is listening on port 70000');