var express = require('express');
var router = express.Router();

var db = require("../app")

console.log(db)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Hello World" });
});

module.exports = router;
