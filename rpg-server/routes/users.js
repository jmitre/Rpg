var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  db.get('users').find({_id: req.params.id}, function(err, data){
    res.json(data[0])
  })
});

module.exports = router;
