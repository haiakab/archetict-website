import React, { Component } from 'react'
import { Tab, Tabs } from "react-tabify";
import MailIcon from '@material-ui/icons/Mail';
import HomeSim from '../../Pages/Proj/HomeSim';
import MainPage from '../../Parts/User/MainPage';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import  './Vtabs.css'

class Vtabs extends Component {

    render()
  { 
      return(       
        <div >
            <Tabs stacked>
                <Tab label={<span>  <i className="fa fa-fw fa-home tabIcon mt-1" /> Plans </span>}><MainPage/></Tab>
                <Tab label={<span><i className="fab fa-unity tabIcon mt-1"/> 3D Model</span>}><HomeSim/></Tab>
                <Tab label={<i className="fas fa-file-invoice-dollar tabIcon mt-1"/>}><HomeSim/></Tab>
                <Tab label={<i className="fas fa-mug-hot tabIcon mt-1"/>}><HomeSim/></Tab>
                <Tab label={<MailIcon className="tabIcon mt-1"/> }><HomeSim/></Tab>
                <Tab label={<i className="fa fa-fw fa-cogs tabIcon mt-1"/>}><HomeSim/></Tab>
                {/* <div class="sc-gZMcBi fxGkLM mr-1 ml-1"></div> */}
                {/* <div className="separatorUser"></div> */}
                <Tab className="align-items-end" label={<span><i className="fa fa-fw fa-power-off tabIcon mt-5"/></span>}><HomeSim/></Tab>
            </Tabs>
        </div>
  )}
  
}
export default Vtabs;