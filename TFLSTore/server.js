// import dependency modules
var express=require('express');
var session =require('express-session');
var parseurl=require('parseurl');
var path=require('path');
var bodyParser=require('body-parser');

//retrive global experss object
const app=express();

//set up http middleware
//configure HTTP pipeline 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//session configuration
var sessionConfiguration={
    secret:"secret",
    resave:true,
    saveUninitialized:false
};
app.use(session(sessionConfiguration));

//Configure Interceptor for session Management
app.use(function(req, res,next){
    // define session variables
    if (!req.session.views) {
       req.session.views = {};
       req.session.views.shoppingCart=[];
    }
 
    var pathname=parseurl(req).pathname;
    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
    next();
 });

 //static resources middleware configuration
 
 var staticMiddlware=express.static(path.join(__dirname,'public'));
app.use(staticMiddlware);

 var routes=require('./router');
routes(app);
app.listen(9000);
console.log("Transflower server is listening on port 9000");
