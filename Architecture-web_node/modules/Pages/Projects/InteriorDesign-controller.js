var express = require('express')
var router = express.Router()
var InteriorDesignProjs = require('./InteriorDesign.json');


// define the home page route
router.get('/', function (req, res) {
  res.json(InteriorDesignProjs)
})




module.exports = router