var express = require('express')
var router = express.Router()
var ArchProjs = require('./Archeticture-controller');
var InteriorDesignProjs = require('./InteriorDesign-controller');
const ProjectsDB = require('./Projects-DB');


module.exports.GalleryPage = (req,res) => {
    const category = req.query.Category
    res.json(ProjectsDB.GalleryPage(category))
}
