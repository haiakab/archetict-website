var express = require('express')
var router = express.Router()
// var footerIcons = require('./FooterItems.json');
var DB = require('../db.js');

module.exports.FooterItems = () => {
    // return (footerIcons)
    let DbQuery= "SELECT * FROM `MenuItems` WHERE menuID=2";
    let DbRes= DB.DbQuery(DbQuery);
    console.log("Query is " + DbRes.toString());
    return DbRes;
}

