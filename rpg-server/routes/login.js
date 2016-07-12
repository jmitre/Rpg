var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET Login page. */
router.post('/', function(req, res, next){
  console.log('REQUEST****BODY',req.body);
  db.get('users').find(req.body, function(err, data){
    console.log(data);
    if(data.length != 0){
      res.json({LoggedIn: true});
      return;
    }
    else res.json({LoggedIn: false});
  });


});

// router.post('/', function(req, res, next){
//   res.json();
// })


module.exports = router;
