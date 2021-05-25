var express = require('express')
const footerJson = require('../../General/Footer/Footer-controller');
// const HeaderJson = require ('../../General/Header/Header-controller');
const HeaderJson = require ('../../General/Header/Header-controller');
// const AboutUsInfo = require('./aboutJs.json');
const AboutUsInfo = require('../aboutUs/aboutUs-controller');
const Content = require('./Content.json');


module.exports.HomePage = async () => {
  return ({
    "Header": await HeaderJson.Header(),
    "Footer": await footerJson.Footer(),
    "AboutUsInfo" : await AboutUsInfo.aboutUs(),
    "Content" : Content,
  });

}