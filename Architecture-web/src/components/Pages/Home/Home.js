import React , { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Parts/Header/Header'
import Content from '../../Parts/Content/Content'
import Footer from '../../Parts/Footer/Footer'
import './Home.css'


class Home extends React.Component{
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/Home`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render()
  {
    if (this.state.data.length===0)
        return (<p>ops</p>);
    return (
    <>
    {/* <TodoList /> */}
    <div className="container mainBody">
    <Header styleName="header1" itemName="txtHeaderColor" headerData={this.state.data.Header}/>
    <Content content={this.state.data.Content} />
    <Footer  footerData={this.state.data.Footer} AboutUsInfo={this.state.data.AboutUsInfo[0]} />
    </div>
    </> 
    );

  }
}
 export default Home;
