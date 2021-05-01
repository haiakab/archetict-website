var express = require('express')
var router = express.Router()
var categories = require('./Categories.json');
var ArchProjs = require('./Archeticture-controller');
var InteriorDesignProjs = require('./InteriorDesign-controller');


// define the home page route
router.get('/', function (req, res) {
  res.json(categories)
})

router.use("/ArchProjs",ArchProjs);
router.use("/InteriorDesignProjs",InteriorDesignProjs);


module.exports = router