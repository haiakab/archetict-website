var express = require('express')
var router = express.Router()
var footerIcons = require('./FooterItems.json');

module.exports.Footer = () => {
    return (footerIcons)
}