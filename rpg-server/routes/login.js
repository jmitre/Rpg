var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET Login page. */
router.get('/', function(req, res, next){
  db.get('users').find(req.body, function(err, data){
    if(data.length != 0){
      res.json({LoggedIn: true});
      return;
    }
    else res.json({LoggedIn: false});
  });
});

router.post('/', function(req, res, next){
  res.json();
})


module.exports = router;
