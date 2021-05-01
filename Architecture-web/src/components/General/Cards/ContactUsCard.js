import React, { Component } from 'react'
import MapContainer from '../../Parts/Maps/Maps'
// import Office_Calendar from '../../Parts/Calendar/Office_Calendar'
import { Modal, Button , Form} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

import './Card.css'

class ContactUsCard extends React.Component {
    constructor(props){
        super(props);
      }
      state = {
        isOpen: false
      };
    
      openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false });
    
 
    render() {
      var view;
      if(this.props.item.id==1)
       view=(<Modal className= "mapModal container-fluid" show={this.state.isOpen} onHide={this.closeModal} className=" pt-3" data-aos="zoom-out"  data-aos-duration="800" >              
                  <MapContainer className="mapModal pr-5 mr-5"/>
                </Modal>) ;
      // else if (this.props.item.id==2)
      //  view=(<Modal className= "mapModal container-fluid" show={this.state.isOpen} onHide={this.closeModal} className=" pt-3" data-aos="zoom-out"  data-aos-duration="800" >              
      //             <Office_Calendar className="mapModal pr-5 mr-5"/>
      //         </Modal>) ;

        return (
            <div class="card carditem text-center rounded  col-md-3 col-sm-12 mr-2 txtFont" >
                <div dangerouslySetInnerHTML={{__html:this.props.item.txt}} onClick={this.openModal}>
                </div>
                  {view}
            </div>
            
        )
    }
}

export default ContactUsCard;
