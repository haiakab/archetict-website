import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideBar from '../../Parts/SideNav/SideBar';
import Vtabs from '../../Parts/Vtabs/Vtabs'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from 'react-click-outsider'
import MailIcon from '@material-ui/icons/Mail';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './User.css'

class MainPage extends Component {
    render() {
        return (
              <div className="row ">
                <div className="col-12 col-md-5  WelcomeTxt">
                    <p >WELCOME</p>
                    <p className="container">In a mauris est. Ut diam ex, dignissim sit amet arcu vitae, posuere fermentum est. Curabitur molestie, orci sit amet tincidunt eleifend, lorem lacus auctor libero, at iaculis sapien leo non dolor. Phasellus pellentesque turpis sit amet ipsum eleifend semper </p>
                </div>
                <div className="col-12 col-md-6 mb-4 mt-2 WelcomeImg">

                </div>
                </div> 
           
        );
   
    }
}   
export default MainPage;