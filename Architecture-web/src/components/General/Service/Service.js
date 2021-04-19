import React, { Component } from 'react';
import './Service.css';

class Service extends Component {
    constructor(props){
        super(props);
      }
    render() {
        return (
            <ul  class="list-group ml-1 col">
                <li class="list-group-item border-0 servicesBg servicesTxt p-0">{this.props.item.name}</li>
                <div className="line mb-3"></div>
            </ul>
        )
    }
}

export default Service
