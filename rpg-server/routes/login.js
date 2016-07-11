var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.json();
});

/* POST Login page. */
router.post('/', function(req, res, next){
  db.get('users').insert(req.body, function(err, data){
    res.send('inside insert');
  });
});


module.exports = router;
