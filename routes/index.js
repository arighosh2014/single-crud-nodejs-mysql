var os = require('os');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', hostname: os.hostname() });
}).bind(this);

module.exports = router;
