import React , { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Parts/Header/Header'
import Content from '../../Parts/Content/Content'
import Footer from '../../Parts/Footer/Footer'
import './Home.css'


class Home extends React.Component{

  render()
  {
    return (
    <>
    {/* <TodoList /> */}
    <div className="container mainBody">
    <Header styleName="header1" itemName="txtHeaderColor"/>
    <Content/>
    <Footer/>
    </div>
    </> 
    );

  }
}
 export default Home;
