import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideBar from '../../Parts/SideNav/SideBar';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from 'react-click-outsider'
import MailIcon from '@material-ui/icons/Mail';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './UserArea.css'

class UserArea extends Component {
    render() {
        return (
            <div className="userArea row">
                <SideBar />
                <div className="col-6 ml-5  WelcomeTxt">
                    <p className="WelcomeTxt">WELCOME</p>
                    <p>In a mauris est. Ut diam ex, dignissim sit amet arcu vitae, posuere fermentum est. Curabitur molestie, orci sit amet tincidunt eleifend, lorem lacus auctor libero, at iaculis sapien leo non dolor. Phasellus pellentesque turpis sit amet ipsum eleifend semper </p>
                </div>
                <div className="col-5 ml-5 WelcomeImg  ">

                </div>
            </div>
        );
   
    }
}   
export default UserArea;