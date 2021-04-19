import React, { Component } from 'react'
import { Modal, Button , Form} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";
import './CardWithModal.css'

class CardWithModal extends React.Component {
    state = {
        isOpen: false
      };
    
      openModal = () => this.setState({ isOpen: true });
      closeModal = () => this.setState({ isOpen: false });
    render() {
        return (
        <div class="card carditem text-center rounded-lg col-md-3 col-sm-12 mr-2 txtFont">
          <i class="fas fa-address-book pt-4 cardIcon"></i>
          <div class="card-body">
            <h5 class="card-title secondTitle">Contact Us</h5>
            <p variant="primary" class="card-text text-dark pt-5 secondTitle" onClick={this.openModal}>
            Let’s set an appointment together
            </p>            
            <Modal show={this.state.isOpen} onHide={this.closeModal} className=" pt-3" data-aos="zoom-out"  data-aos-duration="800" >              
              <Modal.Body className="modalBg titleFont d-flex flex-column justify-content-center rounded" data-aos="zoom-out"  data-aos-duration="800" >
              <Modal.Header closeButton className="modalHead font-weight-bold closeIcon p-0 align-items-end align-self-end border-0 ">
              </Modal.Header> 
              <Modal.Header  className="modalHead font-weight-bold closeIcon p-0 pb-2  align-items-center align-self-center ">
                <Modal.Title className="text-center mb-0 d-flex flex-column align-items-center align-self-center">
                 Would you like to discuss a project?
                </Modal.Title>
              </Modal.Header> 
              <h5 className=" no-bg m-0 mt-3 text-center">Please fill up your details and we'll be in touch</h5>
              <Form className=" d-flex align-items-center align-self-center  mt-3">
                <Form.Group controlId="formBasicEmail" className="d-flex flex-column align-items-center " >
                  <Form.Control type="text" placeholder="Your Name *" className="mb-2" />                
                  <Form.Control type="email" placeholder="Your Email *" className="mb-2"/>
                  <div className="d-flex mb-2 ">
                    <Form.Control  as="select" className="col-3">
                        <option>050</option>
                        <option>052</option>
                        <option>053</option>
                        <option>054</option>
                        <option>055</option>
                      </Form.Control>
                      <Form.Control type="number" className="col-9" placeholder="Your Number *" />
                  </div>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" className="mb-2"/>
                  <Button variant="primary" className="align-self-center btn btn-light font-weight-bold mb-2" >
                  or you can set an appointment
                  </Button>                 
                  <Modal.Footer className="no-bg mt-2" >
                    <Button variant="primary" className="align-self-end btn btn-light font-weight-bold">
                     Send Message
                    </Button>
                  </Modal.Footer>
                </Form.Group>                                      
              </Form>
              </Modal.Body>
             
            </Modal>
          </div>
        </div>
        )
    }
}

export default CardWithModal;
