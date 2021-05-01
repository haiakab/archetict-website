var express = require('express')
var router = express.Router()
var archetictProjs = require('./Archetict.json');


// define the home page route
router.get('/', function (req, res) {
  res.json(archetictProjs)
})




module.exports = router