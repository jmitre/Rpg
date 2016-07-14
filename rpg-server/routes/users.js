var express = require('express');
var router = express.Router();
var db = require('../config/database');
var levelUP = require('../logic/levelUp')


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  db.get('users').find({_id: req.params.id}, function(err, data){
    res.json(data[0])
  })
});

router.post('/xp/:id', function(req, res){
  db.get('users').find({_id: req.params.id}, function(err, data){
    console.log("IS THIS IT?", req.body);
    var user = levelUP(data[0], req.body.xp);
    //UPDATE THE USER
    console.log(user);
    console.log("THE XP", req.body.xp);
    db.get('users').update({_id: req.params.id}, user, function(err, data){
      res.json(data)
    });
  });
});

module.exports = router;
