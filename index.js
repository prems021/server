     var express = require("express");
     var logger = require('morgan');
     var cors  = require('cors');
     var   bodyparser = require("body-parser");
     var jwt = require("jwt-simple");
     var auth =require("./auth.js")();
     var users =require("./users.js");
     
    
     var app = express();

     app.use(bodyparser.json());
     app.use(auth.initialize());
     app.use(cors());
 
   // app.use(require("./seq"));
   app.use(require("./seq2"));
     app.get("/",function(req,res)
     {

         res.json({ status: "alive"     });
         
     });

app.get("/resp",function(req,res)
{
    console.log("hi"+resp);
   
});



     app.listen(3009,function()
     {console.log("server running")});
     module.exports = app;