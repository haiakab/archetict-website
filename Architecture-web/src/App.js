import React, { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import ContactUs from './components/Pages/ContactUs/ContactUs.js';
import AdaptiveHeader from './components/Pages/AboutUs/AboutUs';
import Gallery from './components/Pages/Gallery/Gallery';
import InteriorDesign from './components/Pages/Gallery/InteriorDesign';
import Archeticture from './components/Pages/Gallery/Archeticture';
import ProjectInfo from './components/Pages/Proj/Proj';
import HomeSim from './components/Pages/Proj/HomeSim';
import UserArea from './components/Pages/UserArea/UserArea';
import MapContainer from './components/Parts/Maps/Maps'
import Auth from './components/Pages/Auth/Auth';
import Sumbit from './components/Pages/client-server/sumbit'

function App() {

 
  return (
  <div className="App">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/ContactUs" component={ContactUs} />
      {/* <Route path="/AboutUs" component={AdaptiveHeader} /> */}
      <Route path="/Gallery" component={Gallery} />
      <Route path="/InteriorDesign_Gallery" component={InteriorDesign} />
      <Route path="/Archeticture_Gallery" component={Archeticture} />
      <Route path="/ProjectInfo" component={ProjectInfo} />
      <Route path="/HomeSim" component={HomeSim} />
      <Route path="/UserArea" component={UserArea} />
      <Route path="/MapContainer" component={MapContainer} />
      <Route path="/Auth" component={Auth} />
      <Route path="/Client" component={Sumbit} />
    </Switch>
    </div>
  );
}

export default App;
