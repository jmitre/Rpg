var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  db.get('users').find({_id: req.params.id}, function(err, data){
    res.json(data[0])
  })
});

router.post('/xp/:id', function(req, res){
  db.get('users').find({_id: req.params.id}, function(err, data){
    var user = data[0];
    user.character.xp += req.body.xp;

    //UPDATE THE USER
    db.get('users').update({_id: req.params.id}, user, function(err, data){
      res.end();
    });
  });
});

module.exports = router;
