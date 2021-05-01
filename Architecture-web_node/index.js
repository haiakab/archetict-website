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


// const port = 8081;


// GET method route
app.get('/', function (req, res) {
  res.send('Home page')
})

app.use('/Projects',Projects)
app.use('/ContactUs',ContactUs)
app.use('/Services',Services)
app.use('/Office',Office)
app.use('/Auth',Auth)
app.use('/Footer',Footer)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});