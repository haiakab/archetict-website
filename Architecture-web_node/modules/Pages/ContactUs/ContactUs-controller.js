var express = require('express')
var router = express.Router()
const ContactUsDB = require('./ContactUs-DB');


module.exports.ContactUsPage = async (req,res) => {
  res.json(await ContactUsDB.ContactUsPage())
}

