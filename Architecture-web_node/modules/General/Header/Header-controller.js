var express = require('express')
var router = express.Router()
var HeaderItems = require('./HeaderItems.json');

module.exports.Header = () => {
    return (HeaderItems)
}