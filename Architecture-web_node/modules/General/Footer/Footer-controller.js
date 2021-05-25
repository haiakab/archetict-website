var express = require('express')
var router = express.Router()
// var footerIcons = require('./FooterItems.json');
var FooterDB = require('./Footer-DB');

module.exports.Footer = () => {
    return (FooterDB.FooterItems())
}