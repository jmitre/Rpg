var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET Login page. */
router.get('/', function(req, res, next){
  db.get('users').find({}, function(err, data){
    res.json(data)
  });
});

module.exports = router;
