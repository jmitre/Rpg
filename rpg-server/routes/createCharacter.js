var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET Login page. */
router.post('/', function(req, res, next){
  if(Object.keys(req.body).length === 0){
    res.json('No body');
    return;
  }
  console.log('YOU SENT ME', req.body);
  db.get('users').find({_id: req.body.id}, function(err, data){
    var user = data[0];
    user.character = {
      clas: req.body.clas,
      level: 1,
      xp: 0
    }
    console.log('THE USER IS NOW', user);
    db.get('users').update({_id: req.body.id}, user, function(err, data){
      console.log(data);
      res.json('Successful')
    });
  });
});

module.exports = router;
