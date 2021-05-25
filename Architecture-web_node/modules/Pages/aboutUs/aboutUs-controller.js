var express = require('express')
var router = express.Router()
// var HeaderItems = require('./HeaderItems.json');
var aboutUsDB = require('./aboutUs-DB');

module.exports.aboutUs = () => {
    return(aboutUsDB.aboutUsInfo())
    // return (HeaderItems)
}