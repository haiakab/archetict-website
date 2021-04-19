import React, { Component } from 'react'
import './infoArea.css'

class ProjImage extends Component {
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div className="col-12 col-lg-6 mb-5 " data-aos="zoom-in-left" data-aos-duration="1500">
                <img src={this.props.item.img} class="img-fluid" alt="Responsive image"/>
            </div>
        )
    }
}
export default ProjImage;