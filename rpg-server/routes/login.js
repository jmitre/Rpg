var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
  res.json();
});

/* POST Login page. */


function input(username){
  if(username === '') return false;

  return true;
}

module.exports = router;
