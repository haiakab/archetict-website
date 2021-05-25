var express = require('express')
var router = express.Router()
const HomeDB = require('./Home-DB');


module.exports.HomePage = async (req,res) => {
  res.json( await HomeDB.HomePage())
}

