var express = require('express')
var router = express.Router()
var categories = require('./Categories.json');
var ArchProjs = require('./Archeticture-controller');
var InteriorDesignProjs = require('./InteriorDesign-controller');
// var footerJson = require('../../General/Footer/FooterItems.json');
const footerJson = require('../../General/Footer/Footer-controller');
const HeaderJson = require ('../../General/Header/Header-controller');


let Categories = () => {
  return(categories)
}

// let FooterJson = () => {
//   return(footerJson)
// }

// let GalleryPageJson = () => {
//   return JSON.parse('{"Footer":'+footerJson.Footer()+',+,"Category":'+JSON.stringify(Categories())+"}")
// }


module.exports.GalleryPage = (req,res)=>{
  // res.json(GalleryPageJson())
  
  res.json({
    Header: HeaderJson.Header(),
    Footer: footerJson.Footer(),
    Category: Categories()
  });

}




router.use("/ArchProjs",ArchProjs);
router.use("/InteriorDesignProjs",InteriorDesignProjs);

// module.exports = router