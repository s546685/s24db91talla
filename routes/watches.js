var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('watches', { title: 'A seartch by watches' });
});

module.exports = router;
