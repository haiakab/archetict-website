var express = require('express')
const footerJson = require('../../General/Footer/Footer-controller');
const HeaderJson = require ('../../General/Header/Header-controller');



module.exports.ContactUsPage = () => {
  return ({
    "Header": HeaderJson.Header(),
  });

}