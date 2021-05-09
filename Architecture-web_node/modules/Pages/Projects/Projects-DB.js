var express = require('express')
var categories = require('./Categories.json');
const footerJson = require('../../General/Footer/Footer-controller');
const HeaderJson = require ('../../General/Header/Header-controller');


let Categories = () => {
  return(categories)
}

module.exports.GalleryPage = () => {
  return ({
    "Header": HeaderJson.Header(),
    "Footer": footerJson.Footer(),
    "Category": Categories()
  });

}
