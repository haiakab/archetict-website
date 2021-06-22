import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from 'react-click-outsider'
import MailIcon from '@material-ui/icons/Mail';
import Home from '../../Pages/Home/Home';
import RootComponent from '../../Pages/UserArea/UserArea';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import HomeSim from '../../Pages/Proj/HomeSim';
import MainPage from '../../Parts/User/MainPage'


import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideBar.css'

class SideBar extends Component {
  
    //     <>
    //     <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top sidenavGen" id="sideNavUserArea">
    //     {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">
    //         <span class="d-block d-lg-none">Clarence Taylor</span>
    //         <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="..." /></span>
    //     </a> */}
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    //     <div class="collapse navbar-collapse mt-4" id="navbarResponsive">
    //         <ul class="navbar-nav">
    //             <li class="nav-item" ><a class="nav-link js-scroll-trigger " href="#about"><i className="fa fa-fw fa-home tabIcon mt-1 mr-2" /></a></li>
    //             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience"><i className="fab fa-unity tabIcon mt-1 mr-2"/></a></li>
    //             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education"><i className="fas fa-file-invoice-dollar tabIcon mt-1 mr-2"/></a></li>
    //             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills"><i className="fas fa-mug-hot tabIcon mt-1 mr-2"/></a></li>
    //             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests"><MailIcon className="tabIcon mt-1 mr-2"/>  </a></li>
    //             <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards"><i className="fa fa-fw fa-cogs tabIcon mt-1 mr-2"/></a></li>
    //         </ul>
    //     </div>
    // </nav>

   
    // </>
    
    expandSideNav()  {
        console.log("expand sidenav");
        SideNav.expanded=false;
    }
    render() {
        return (
            <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <ClickOutside
    onClickOutside={() => {
        this.setState({ expanded: false });
    }}
>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle onClick={this.expandSideNav} />
                <SideNav.Nav defaultSelected="/"  >
                    <NavItem eventKey="MainPage" onClick={this.expandSideNav}>
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                             Plans
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="HomeSim">
                        <NavIcon>
                            <i className="fab fa-unity" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            3D Model
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fas fa-file-invoice-dollar"   style={{ fontSize: '1.75em'}} />
                        </NavIcon>
                        <NavText>
                            Bills
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fas fa-mug-hot" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Our Meetings
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contactUs">
                        <NavIcon className="iconColSide MuiSvgIcon-root">
                            <MailIcon />
                        {/* <i><a href="https://icons8.com/icon/_pDGGXiEvyZU/meeting" style={{ fontSize: '1.75em' }}></a> </i> */}
                            {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        </NavIcon>
                        <NavText>
                            Contact Us
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Settings">
                        <NavIcon className="iconColSide ">
                            <i className="fa fa-fw fa-cogs " style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Settings
                        </NavText>
                    </NavItem>
                    <div class="sc-gZMcBi fxGkLM mr-1 ml-1"></div>
                    <NavItem eventKey="Logout">
                        <NavIcon>
                            <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Logout
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/MainPage" exact component={props => <MainPage />} />
                {/* <Route path="/MainPage" component={props => <MainPage />} /> */}
                <Route path="/ContactUs" component={props => <ContactUs />} />
                <Route path="/HomeSim" component={props => <HomeSim />} />
                
                {/* <Route path="/devices" component={props => <Devices />} /> */}
            </main>
            </ClickOutside>
        </React.Fragment>
    )}
    />
</Router>
   
    );
}
 
}
export default SideBar;