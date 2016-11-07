var express = require('express'),
  jwt = require("jwt-simple"), 
  cfg = require('./config'),
  
   mongoose = require('mongoose');
var app = module.exports = express.Router();




var userSchema = mongoose.Schema({
  email: String,
  password: String,
  
  
});

var User = mongoose.model('User', userSchema);

// useful for sign up

 app.post('/signup', function(req, res) {

  if (!req.body.username || !req.body.password) {
   return res.status(400).send("You must send the username and the password");
 }

  //WG: connect to mongodb

  mongoose.connect('mongodb://localhost/users');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('db connected');
  });



  //User.collection.remove() //use to clear collection during dev

  //    check user does not exist
  var found = false; //boolean flag
  var email = req.body.email;

  User.count({
    email: email
  }, function(err, c) {
    if (err) return console.error(err);
    found = c > 0; //true or false

    if (!found) {
      //new user to be signed up
      var tempUser = new User({
        email: email,
        password: req.body.password, //needs bCrypting
       // date: new Date()
      });
      //save to collection
      tempUser.save(function(err, tempUser) {
        if (err) return console.error(err);
        //create profile object for jwt
        var profile = {
          email: email,
          password: req.body.password
        };
     

        //retrieve list of all users for testing during dev
        User.find(function(err, users) {
          if (err) return console.error(err);
          console.log(users);
          //close the db connection
         mongoose.connection.close(); //need to move this out of this testing function at production stage
        })

      });
    } else {
      return res.status(400).send("A user with that username already exists");
    }

  });


});

app.post('/token', function(req, res) {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  //WG: connect to mongodb

  mongoose.connect('mongodb://localhost/users');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('db on login connected');
  });


  //find if user matches username/password
  User.find({ email: req.body.email,password: req.body.password},
   function(err, users) {
    if (err) return console.error(err);
    //if results less than 1 then no matches
    if (users.length < 1) {
      return res.status(401).send("The username or password don't match");
    } else {
      //user found so send back token with response

      
    var  payload = users.email;
      console.log(payload);
      //var token = jwt.encode(payload, cfg.jwtSecret);
     // res.status(201).send({
     // token : token 
        
    //  });
    }
    //close the db connection
    mongoose.connection.close();
  })

});