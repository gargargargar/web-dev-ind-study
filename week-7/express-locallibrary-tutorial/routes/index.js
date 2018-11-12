var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.render('index', {title: "Garcia's Test Local Library Site"});
});

module.exports = router;
