var express = require('express')
const footerJson = require('../../General/Footer/Footer-controller');
const HeaderJson = require ('../../General/Header/Header-controller');
const AboutUsInfo = require('./aboutJs.json');
const Content = require('./Content.json');


module.exports.HomePage = () => {
  return ({
    "Header": HeaderJson.Header(),
    "Footer": footerJson.Footer(),
    "AboutUsInfo" : AboutUsInfo,
    "Content" : Content,
  });

}