var express = require('express')
var router = express.Router()
var HeaderItems = require('./HeaderItems.json');
var HeaderDB = require('./Header-DB');

module.exports.Header =  () => {
    return( HeaderDB.HeaderItems())
    // return (HeaderItems)
}