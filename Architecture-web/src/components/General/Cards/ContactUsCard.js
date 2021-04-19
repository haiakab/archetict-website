import React, { Component } from 'react'
import MapContainer from '../../Parts/Maps/Maps'
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
        return (
            <div class="card carditem text-center rounded  col-md-3 col-sm-12 mr-2 txtFont" onClick={this.openModal}>
                <div dangerouslySetInnerHTML={{__html:this.props.item.txt}}></div>
                {/* <Modal className= "container-fluid" show={this.state.isOpen} onHide={this.closeModal} className=" pt-3" data-aos="zoom-out"  data-aos-duration="800" >              
              <Modal.Body className="mapModal   titleFont d-flex flex-column justify-content-center rounded" data-aos="zoom-out"  data-aos-duration="800" > */}
              {/* <Modal.Header closeButton className="modalHead font-weight-bold closeIcon p-0 align-items-end align-self-end border-0 ">
              </Modal.Header>  */}
              

                                     
               {/* <MapContainer/>
              </Modal.Body>
             
            </Modal> */}

<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


            </div>
        )
    }
}

export default ContactUsCard;
