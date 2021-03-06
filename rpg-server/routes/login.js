var express = require('express');
var router = express.Router();
var db = require('../config/database');

/* GET Login page. */
router.post('/', function(req, res, next){
  db.get('users').find(req.body, function(err, data){
    if(data.length != 0){
      res.json({dataID: data[0]._id});
      return;
    }
    else {
      console.log('failed to log in');
      res.status(404)  
      res.json({LoggedIn: false});
    }
  });
});

module.exports = router;
