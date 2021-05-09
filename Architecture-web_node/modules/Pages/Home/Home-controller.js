var express = require('express')
var router = express.Router()
const HomeDB = require('./Home-DB');


module.exports.HomePage = (req,res) => {
  res.json(HomeDB.HomePage())
}

