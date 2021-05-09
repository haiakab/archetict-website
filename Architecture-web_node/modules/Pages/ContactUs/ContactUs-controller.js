var express = require('express')
var router = express.Router()
const ContactUsDB = require('./ContactUs-DB');


module.exports.ContactUsPage = (req,res) => {
  res.json(ContactUsDB.ContactUsPage())
}

