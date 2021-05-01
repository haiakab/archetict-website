var express = require('express')
var router = express.Router()
var footerIcons = require('./FooterItems.json');

// define the home page route
router.get('/', function (req, res) {
//   res.send(' ContactUs page')
    res.json(footerIcons)
})


module.exports = router