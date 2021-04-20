import React, { Component } from 'react'
import './ContactUs.css'

export class locationCard extends Component {
    render() {
        return (
        <div class="card carditem text-center rounded  col-md-3 col-sm-12 mr-2 txtFont" >
        <i class="fa fa-home pt-4 cardIcon"></i>
        <div class="card-body">"  
        <h5 class="card-title secondTitle">Visit Us</h5>
        <p class="card-text">You are welcomed to our office </p>
              <p class="card-text"> Sun - Thu 08:30-16:30 </p>
              <p class="card-text"> Location : Israel , Beit jann  </p>
              <p class="card-text">  Northen St. </p>
        </div>
        </div>
        )
    }
}

export default locationCard
