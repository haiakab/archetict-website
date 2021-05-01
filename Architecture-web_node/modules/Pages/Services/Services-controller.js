var express = require('express')
var router = express.Router()
var services = require ('./Services.json');

// define the home page route
router.get('/', function (req, res) {
  // res.send(' Services page')
  res.json(services)
})


module.exports = router