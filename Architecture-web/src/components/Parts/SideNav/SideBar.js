import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import ClickOutside from 'react-click-outsider'
import MailIcon from '@material-ui/icons/Mail';
import Home from '../../Pages/Home/Home';
import RootComponent from '../../Pages/UserArea/UserArea';
import ContactUs from '../../Pages/ContactUs/ContactUs';
 
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideBar.css'

class SideBar extends Component {
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
                    <NavItem eventKey="home" onClick={this.expandSideNav}>
                        <NavIcon onClick={this.expandSideNav}>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Plans
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
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
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
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
                <Route path="/" exact component={props => <RootComponent />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/ContactUs" component={props => <ContactUs />} />
                
                {/* <Route path="/devices" component={props => <Devices />} /> */}
            </main>
            </ClickOutside>
        </React.Fragment>
    )}
    />
</Router>
        )
    }
}
export default SideBar;