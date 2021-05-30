var express = require('express')
const HeaderJson = require ('../../General/Header/Header-controller');
const contsctUsContent = require('./ContactUs.json');



module.exports.ContactUsPage = async () => {
  return ({
    "Header": await HeaderJson.Header(),
    "Content" : contsctUsContent
  });

}