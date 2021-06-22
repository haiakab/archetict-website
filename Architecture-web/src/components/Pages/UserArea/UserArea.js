import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideBar from '../../Parts/SideNav/SideBar';
import Vtabs from '../../Parts/Vtabs/Vtabs'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from 'react-click-outsider'
import MailIcon from '@material-ui/icons/Mail';
import HomeSim from '../../Pages/Proj/HomeSim';
import MainPage from '../../Parts/User/MainPage'
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './UserArea.css'

class UserArea extends Component {
    render() {
        return (
            <div className="userArea">
                <SideBar />
                <MainPage/>
                {/* <div class="container-fluid p-0">
                   
                    <section id="about">
                       
                            <MainPage></MainPage>
               
                    </section>
                    <hr class="m-0" />
                   
                    <section  id="experience">
                        <HomeSim></HomeSim>
                    </section>
                </div> */}
            </div>
        );
   
    }
}   
export default UserArea;