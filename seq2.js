var express = require('express'),
    jwt = require("jwt-simple"), 
    cfg = require('./config'),
    app = module.exports = express.Router(),
    Sequelize = require('Sequelize');
  var router = express.Router();
var sequelize = new Sequelize('stodaddon', 'root', 'arshavin021', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  
});

app.get("/parties",function(req,res)
     {

        
         var Parties = sequelize.import(__dirname + "/models/sdb_parties")
         
Parties
  .findAndCountAll({
     where: { NAME:  'SHIVAM'  }
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

app.post('/api/newpooja', function(req, res) {
  var sdbt_detailes = sequelize.import(__dirname + "/models/sdb_transactiondetails")

  sdbt_detailes.create({
         MASTER: 2,
         DATE: 2016-09-29,
         QUANTITY:req.body.quantity,
         RATE:req.body.rate,
         AMOUNT:req.body.amount,
         
    
  }
  
  
  ) 
  return res.json({success:true, msg:'Successfully saved'});
  }
  
);

app.post('/api/login', function(req, res) {
  var sdb_user = sequelize.import(__dirname + "/models/sdb_users")

  sdb_user.findOne({
  where: {
    username: req.body.user_name,
    password: req.body.password
    }
}).then(function(result){
  
  if(result)
  {
  return res.json({success:true, msg:'Successfully logged'});
  
  }   
  else
  {
   
  res.status(403).send({success: false, msg: 'Authentication failed, User not found'});
  }    
}       
    
  )
})

app.get('/api/getpooja', function(req, res) {
  var sdb_se = sequelize.import(__dirname + "/models/sdb_products")

  sdb_se.findAll({
  attributes: ['NAME'],
  


   where: {
    IS_POOJA: 1
    
  }
}).then(function(result) {
    console.log(result.count);
     
   res.send(result);
});
  
  }
  
);








app.post('/api/savepoojadetails', function(req, res) {
  var sdbt_master = sequelize.import(__dirname + "/models/sdb_transactionmaster")
  var sdbt_detailes = sequelize.import(__dirname + "/models/sdb_transactiondetails")
 
 
  sdbt_detailes.create({
         MASTER: 2,
         DATE: 2016-09-29,
         QUANTITY:req.body.quantity,
         RATE:req.body.rate,
         AMOUNT:req.body.amount,
         
    
  }) 
  return res.json({success:true, msg:'Successfully saved'});
  });

/*
app.post('/api/savepooja', function(req, res) 
{
  var sdb_test = sequelize.import(__dirname + "/models/sdb_test")
  
sdb_test.sync({force: true}).then(function (){
  sdb_test.create({
         QUANTITY:req.body.quantity,
         POOJA_NAME:req.body.pooja_name,
         DEVOTEE_NAME:req.body.quantity,
         DEVOTEE_STAR:req.body.devotee_star,
         RATE:req.body.rate,
         AMOUNT:req.body.amount,
         TOTAL:req.body.total
         
    
  })
  return res.json({success:true, msg:'Successfully saved'});
  });

});

*/



/* ------------------------       working add pooja    ------------------             */
 

app.post('/api/savepooja', function(req, res) {
  var sdb_test = sequelize.import(__dirname + "/models/sdb_test")
  var sdb_devotees = sequelize.import(__dirname + "/models/sdb_devotees")
   
   sdb_devotees.findOne({
  where: {
   NAME : req.body.devotee_name
        }
}).then(function(result){
  
  if(result)
{
  

    sdb_test.create({
         QUANTITY:req.body.quantity,
         POOJA_NAME:req.body.pooja_name,
         DEVOTEE_NAME:result.ID,
         DEVOTEE_STAR:req.body.devotee_star,
         RATE:req.body.rate,
         AMOUNT:req.body.amount,
         TOTAL:req.body.total

  });
}
else{
       sdb_devotees.create({
         NAME:req.body.devotee_name,
         IS_VARISANKHYA:false
       })


     sdb_devotees.max('ID').then(function(max){
       
     
       
        

   sdb_test.create({
         QUANTITY:req.body.quantity,
         POOJA_NAME:req.body.pooja_name,
         DEVOTEE_NAME:max+1,
         DEVOTEE_STAR:req.body.devotee_star,
         RATE:req.body.rate,
         AMOUNT:req.body.amount,
         TOTAL:req.body.total

  })
  })
}
})
 return res.json({success:true, msg:'Successfully saved'});
  });

    



/* ------------------------      experimental add pooja    ------------------          


app.post('/api/savepooja', function(req, res) {
  var sdb_test = sequelize.import(__dirname + "/models/sdb_test")
  var sdb_devotees = sequelize.import(__dirname + "/models/sdb_devotees")
   
   sdb_devotees.findOne({
  where: {
   NAME : req.body.devotee_name
        }
}).then(function(result){
  
  if(result)
{
  

    sdb_test.create({
         QUANTITY:req.body.quantity,
         POOJA_NAME:req.body.pooja_name,
         DEVOTEE_NAME:result.ID,
         DEVOTEE_STAR:req.body.devotee_star,
         RATE:req.body.rate,
         AMOUNT:req.body.amount,
         TOTAL:req.body.total

  });
}
else{
         
       
//User.belongsTo(Company, {foreignKey: 'fk_companyname', targetKey: 'name'}); // Adds fk_companyname to User

      //    sdb_devotees.belongsTo(sdb_test,{ constraints: false});
        sequelize.sync().then(function() {
 
 
    sdb_devotees.create({ 
                  NAME:req.body.devotee_name,
                  IS_VARISANKHYA:false,
                  sdb_test: {


                  QUANTITY:req.body.quantity,
                  POOJA_NAME:req.body.pooja_name, 
                  
                  DEVOTEE_STAR:req.body.devotee_star,
                  RATE:req.body.rate,

                  AMOUNT:req.body.amount,
                  TOTAL:req.body.total,
                          } 
                    
                    }, {
                   include: [ sdb_test ]
                    });

          }); 
      } 

 return res.json({success:true, msg:'Successfully saved'});
  }); 
  
 
});






*/


app.post('/api/addnewpooja', function(req, res) {
  var sdbt_products = sequelize.import(__dirname + "/models/sdb_products")

  sdbt_products.create({
         
         NAME: req.body.vazhipad_name,
         PRICE: req.body.rate,
         HAS_STOCK: 0,
         IS_POOJA: 1,
         IS_DONATION: 0,
         IS_SAMARPANAM: 0,
         IS_MARRIAGE:0,
         IS_RENTAL:0,
         IS_AUDITORIUM:0,
         IS_PURCHASE:0,
         IS_SALARY:0,
         IS_NADAVARAVU:0
        
         
    
  }
  
  
  ) 
  return res.json({success:true, msg:'Successfully saved'});
  }
  
);










app.get('/api/getpoojaplus', function(req, res) {
  var sdb_test = sequelize.import(__dirname + "/models/sdb_test")
 sdb_test.findAll( {
   attributes: { exclude: ['ID'] }
   //,
   //where: {
   // Id: {
    //  $lt: 10
   // }
  
  }).then(function(rest) {
    console.log(rest.count);
     
   res.send(rest);

  });
});



app.post('/api/getbookingdate', function(req, res)


 {
    var sdb_pm = sequelize.import(__dirname + "/models/sdb_trans_bookingmaster")

    /*
sdb_pm.sync({force: true}).then(function () {
  // Table created
  return sdb_pm.create({
    DATE:'2017-01-01',
    PRODUCT:194,
    RATE: 5000,
    USER: 1,
    IS_FINISH: 0,
    IS_DELETED:0,
    IS_EDITED:0
    
  });
});


 });


 */
  sdb_pm.findOne( 
    {
      where: {

        DATE: req.body.bookingdate,
        PRODUCT: req.body.hallid
        
       
       
      }
    }).then(function(bookings)
  { 
     if(bookings)
  {
  
  res.status(403).send({success: false, msg: 'Already booked'});
    
  }   
  else
  {
     
   return res.json({success:true, msg:'You can book for the day'});
  
    
  
  
  }   
    
    
  
   })
 });



 app.post('/api/savebooking', function(req, res)

 {
       var sdb_pm = sequelize.import(__dirname + "/models/sdb_trans_bookingmaster")
        
         sdb_pm.create({
          
           DATE:req.body.bookingdate,
          PRODUCT: req.body.hallid,
           RATE: req.body.booking_rate,
           USER: 1,
           IS_FINISH: 0,
           IS_DELETED:0,
           IS_EDITED:0,
       
      
  });  
          return res.json({success:true, msg:'You booked for the day'});
});

     /*   
 var Player = sequelize.import(__dirname + "/models/sdb_player")
 
 
var Team = sequelize.import(__dirname + "/models/sdb_teams")
 
 
 Player.belongsTo(Team);



        
 
 
    Player.create({ 
                       NAME:'barciia',
                           GOALS:75,
                     sdb_TeamID: Team.max('ID'),
                 

                  Team: {
                                 TEAM_NAME:'sam',
                                 MANAGER_NAME:'crux'

                          } 
                    
                    }, {
                   include: [ Team ]
                    });

                     
       

 */











