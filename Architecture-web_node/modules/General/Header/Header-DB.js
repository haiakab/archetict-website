var express = require('express')
var router = express.Router()
// var HeaderItems = require('./HeaderItems.json');
var DB = require('../db.js');

module.exports.HeaderItems = () => {
    let DbQuery= "SELECT * FROM `MenuItems` WHERE menuID=1";
    let DbRes= DB.DbQuery(DbQuery);
    console.log("Query is " + DbRes.toString());
    return DbRes;
//   return HeaderItems;

}