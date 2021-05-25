// aboutUsInfo
var express = require('express')
var router = express.Router()
// var HeaderItems = require('./HeaderItems.json');
// var DB = require('../db.js');
var DB = require('../../General/db.js');

module.exports.aboutUsInfo = () => {
    let DbQuery= "SELECT * FROM aboutUsInfo  ";
    let DbRes= DB.DbQuery(DbQuery);
    console.log("aboutUsInfo Query is " + DbRes.toString());
    return DbRes;
//   return HeaderItems;

}