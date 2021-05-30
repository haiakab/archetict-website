var express = require('express')
// var categories = require('./Categories.json');
const footerJson = require('../../General/Footer/Footer-controller');
const HeaderJson = require ('../../General/Header/Header-controller');
// var ArchProjs = require('./Archetict.json');
// var InteriorDesignProjs = require('./InteriorDesign.json');
var DB = require('../../General/db.js');
const Gallery = require('../../../modules/Config/Gallery.json')
const Cat=Gallery.CategoryID;
const ImagesTypes=Gallery.Images

let Categories = () => {
  let DbQuery= "SELECT * FROM Categories";
  let DbRes= DB.DbQuery(DbQuery);
  console.log("Query is " + DbRes.toString());
  console.log("res is " + DbRes.res);
  return DbRes;
}

let getGallery = (ImageType, CategoryID) => {
  let DbQuery= "SELECT ProjID , ProjName , CategoryId , imgUrl , ImageType , info "+
                "FROM Projects "+
                "INNER JOIN Images "+
                "ON Projects.ProjID=Images.ProjectID "+
                "WHERE CategoryID= "+ CategoryID + 
                " AND ImageType=  " + ImageType;

  let DbRes= DB.DbQuery(DbQuery);
  console.log("ARCHPROJS ARE " + DbRes.toString());
  return DbRes;
}


module.exports.GalleryPage = async (category) => {
  if(!category)
  { return ({
      "Header": await HeaderJson.Header(),
      "Footer": await footerJson.Footer(),
      "Category": await Categories()
    })}
  else if (category== "archetict")
    return ({
      "Category": await getGallery(ImagesTypes.MAIN,Cat.ARCH)
    })

  else if (category== "interior")
    return ({
      "Category": await getGallery(ImagesTypes.MAIN,Cat.INTERIOR)
    })

}
