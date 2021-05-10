var express = require('express')
const HeaderJson = require ('../../General/Header/Header-controller');
const contsctUsContent = require('./ContactUs.json');



module.exports.ContactUsPage = () => {
  return ({
    "Header": HeaderJson.Header(),
    "Content" : contsctUsContent
  });

}