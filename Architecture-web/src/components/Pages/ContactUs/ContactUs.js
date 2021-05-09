import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button , Form} from "react-bootstrap";
import ModalHeader from 'react-bootstrap/ModalHeader';
import Header from '../../Parts/Header/Header'
import ContactUsCard from '../../General/Cards/ContactUsCard'
import CardWithModal from '../../General/Cards/CardWithModal'
import ContactJSON from '../../../Json/ContactUs'
import './ContactUs.css'


class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/Projects`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length===0)
        return (<p>ops</p>);
    // read the cards info from json file
    const ContactUsCards= ContactJSON.map((jsonItem) =>
    <ContactUsCard item={jsonItem}/>
    );
    return(
    <div className="container-fluid bgCont pl-0 pr-0 ml-0 mr-0">
      <Header itemName="txtHeaderColor2" headerData={this.state.data.Header}/>
      <div id="content" class="mt-5 pt-5">
        {/* Welcome section */}
        <div id="welcome" class="container text-center titleFont">
          <h1>Welcome </h1>
          <h4>We are looking forward to help you create the house of your dreams</h4>
        </div>
        {/* main cards section */}
        <div id="mainCard" class="card-group justify-content-center container mt-5 pt-3 ">
          {ContactUsCards}
          {/* this is a card with modal - the modal opens up when click on the text */}
          <CardWithModal/>                 
        </div>
      </div>
    </div>
      );
  }
}

export default ContactUs;
