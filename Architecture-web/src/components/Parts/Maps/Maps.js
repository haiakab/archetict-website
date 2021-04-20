import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './Maps.css'

export class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '602px',
            height: '500px',
          };
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
    
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAcqyzgRpkclU3zuC5NTCvpa76fWG8YWkM'
  })(MapContainer);
