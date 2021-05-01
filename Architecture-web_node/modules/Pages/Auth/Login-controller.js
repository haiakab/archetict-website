var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.send(' Auth page')
})

router.get('/login', function (req, res) {
    res.send('Login page')
  })

router.get('/signUp', function (req, res) {
    res.send('signUp page')
  })
  
  


module.exports = router