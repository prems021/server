var express = require('express'),
    jwt = require("jwt-simple"), 
    cfg = require('./config'),
    app = module.exports = express.Router(),
    Sequelize = require('Sequelize');
   
var sequelize = new Sequelize('exp', 'root', 'arshavin021', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });
/*
var User = sequelize.define('user',{ email: { type: Sequelize.STRING},
password :{ type: Sequelize.STRING}},{
freezeTableName: true,
timestamps: false
});
User.sync({force: true}).then(function () {
  return User.create({
    email: 'John@me.com',
    password: 'Hock'
    
  });
});
*/




var app = module.exports = express.Router();



var User = sequelize.define('user',{
   id: { 
     type: Sequelize.INTEGER(11),
     field: 'id',
     allowNull:     false,
     primaryKey:    true,
     autoIncrement: true
},
 username:{
        type:      Sequelize.STRING(64),
        field:     'username',
        allowNull: false
    },
    email:{
        type:         Sequelize.STRING(64),
        field:        'email',
        allowNull:    true,
        defaultValue: null
    },
    password:{
        type:         Sequelize.STRING(64),
        field:        'password',
        allowNull:    true,
        defaultValue: null
    },
 

},
{
freezeTableName: true,
timestamps: false,
paranoid: true,
underscored: true

});



var Sdbtd = sequelize.define('sdb_transactiondetails',{
   id: { 
     type: Sequelize.INTEGER(20),
     field: 'ID',
     allowNull:     false,
     primaryKey:    true,
     autoIncrement: true
},
 master:{
        type:      Sequelize.BIGINT(20),
        field:     'MASTER',
        allowNull: false
    },
    today:{
        type:         Sequelize.DATE,
        field:        'TODAY',
        allowNull:    true,
        defaultValue: null
    },
    date:{
        type:         Sequelize.DATE,
        field:        'DATE',
        allowNull:    true,
        defaultValue: null
    },
    comments:{
        type:         Sequelize.STRING(50),
        field:        'COMMENTS',
        allowNull:    true,
        defaultValue: null
    },
      quantity:{
        type:         Sequelize.DOUBLE,
        field:        'QUANTITY',
        allowNull:    true,
        defaultValue: null
    },
   rate:{
        type:         Sequelize.DOUBLE,
        field:        'RATE',
        allowNull:    true,
        defaultValue: null
    },
  amount:{
        type:         Sequelize.DOUBLE,
        field:        'AMOUNT',
        allowNull:    true,
        defaultValue: null
    },
 product:{
        type:         Sequelize.INTEGER(6),
        field:        'PRODUCT',
        allowNull:    true,
        defaultValue: null
    },
    account:{
        type:         Sequelize.INTEGER(6),
        field:        'ACCOUNT',
        allowNull:    true,
        defaultValue: null
    },
    paymentmethod:{
        type:         Sequelize.INTEGER(4),
        field:        'PAYMENT_METHOD',
        allowNull:    true,
        defaultValue: null
    },
     isdebit:{
        type:         Sequelize.BOOLEAN,
        field:        'IS_DEBIT',
        allowNull:    true,
        defaultValue: null
    },

},
{
freezeTableName: true,
timestamps: false,
paranoid: true,
underscored: true

});



/*

User.sync(function () {
  return User.create({
    username:'moke',
    email: 'John@me.com',
    password: 'Hock'
    
  });
})






User.create({ username: 'booz', email: 'migi@me.com', password: 'bitrue', }).then(function(user) {
  
  console.log(user.get({
    plain: true
  })) 
})

User.findAll().then(function(user) {
 // console.log(user.rows);
})
*/
User.findOne({ where: {email: 'migi@me.com'} }).then(function(project) {
  console.log(project.password)
  //res.send(project);
})






 app.get("/getup",function(req,res)
     {

        
         
         
User
  .findAndCountAll({
     where: { username:  'booz'  }
     ,
      offset: 0,
     limit: 2
  })
  .then(function(result) {
    console.log(result.count);
     //res.json({ status: " stay alive"     });
  // console.log(JSON.stringify(result))
   res.send(result);
});
 
  });
        


    
     
     /*
var resp = user.get('password');
 app.get('/up', function(req, res)
{
    
     res.status(201).send({
        resp: resp
});
})

})



*/