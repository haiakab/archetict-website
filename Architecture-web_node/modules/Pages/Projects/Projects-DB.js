var express = require('express')
var categories = require('./Categories.json');
const footerJson = require('../../General/Footer/Footer-controller');
const HeaderJson = require ('../../General/Header/Header-controller');
var ArchProjs = require('./Archetict.json');
var InteriorDesignProjs = require('./InteriorDesign.json');


let Categories = () => {
  return(categories)
}

module.exports.GalleryPage = (category) => {
  if(!category)
  { return ({
      "Header": HeaderJson.Header(),
      "Footer": footerJson.Footer(),
      "Category": Categories()
    })}
  else if (category== "archetict")
    return ({
      "Category": ArchProjs
    })

  else if (category== "interior")
    return ({
      "Category": InteriorDesignProjs
    })

}
