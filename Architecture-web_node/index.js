const express = require('express')
const app = express();
const Connection = require('./modules/Config/General.json')
const PORT=Connection.nodeJs.PORT;
const Home = require ('./modules/Pages/Home/Home-controller.js');
const Projects = require ('./modules/Pages/Projects/Projects-controller.js');
const ContactUs = require ('./modules/Pages/ContactUs/ContactUs-controller.js');
const Services = require ('./modules/Pages/Services/Services-controller.js');
const Office = require ('./modules/Pages/Office/Office-controller.js');
const Auth = require ('./modules/Pages/Auth/Login-controller.js');
const Footer = require('./modules/General/Footer/Footer-controller');
const ArchProjs = require('./modules/Pages/Projects/Archeticture-controller');
const InteriorDesignProjs = require('./modules/Pages/Projects/InteriorDesign-controller');
const Client = require('./modules/Pages/Client/Client-controller');

// const port = 8081;


// GET method route
app.get('/Home', Home.HomePage)
app.get('/Projects',Projects.GalleryPage)
app.get('/ContactUs',ContactUs.ContactUsPage)
app.use('/Services',Services)
app.use('/Office',Office)
app.use('/Auth',Auth)
app.use('/Client',Client)
// app.use('/Footer',Footer)
// app.use('/ArchProjs',ArchProjs)
// app.use('/InteriorDesignProjs',InteriorDesignProjs)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});