import React, { Component } from 'react'
import './infoArea.css'

class InfoItem extends Component {
    constructor(props){
        super(props);
      }
    render() {
        var view;
        if(this.props.item.num%2 === 0 )
        {
            view = (
            <div className="infoArea d-flex flex-row ml-1 ">
                <div className="col-12 col-lg-6 p-0 ">
                    <img src={this.props.item.img} class="img-fluid" alt="Responsive image"/>
                </div>
                <div className="col-12 col-lg-5 infoBox mt-4 pt-5 pl-2 pr-2">
                    <div className="horiz-line mb-4 pr-0" data-aos="slide-left" 
                    data-aos-duration="1600"
                    data-aos-easing="ease-in">
                    </div>
                    <p >{this.props.item.info}</p>
                    {/* <div className="horiz-line mt-4"/> */}
                </div>
                <div className="horiz-line mt-5 pt-5 pl-0 " data-aos="slide-down" 
                    data-aos-duration="1600"
                    data-aos-easing="ease-in">
                </div>
            </div>
            )
        }
        else
        {
            view = (
                <div className="infoArea d-flex flex-row-reverse ml-1 ">
                    <div className="col-12 col-lg-6 p-0 ">
                        <img src={this.props.item.img} class="img-fluid" alt="Responsive image"/>
                    </div>
                    <div className="col-12 col-lg-5 infoBox mt-4 pt-5 pl-2 pr-2">
                        <div className="horiz-line mb-4 pr-0" data-aos="slide-right" 
                        data-aos-duration="1600"
                        data-aos-easing="ease-in">
                        </div>
                        <p >{this.props.item.info}</p>
                        {/* <div className="horiz-line mt-4"/> */}
                    </div>
                    <div className="horiz-line mt-5 pt-5 pl-0 " data-aos="slide-up" 
                        data-aos-duration="1600"
                        data-aos-easing="ease-in">
                    </div>
                </div>
                )
        }
        return (
            view
        )
    }
}
export default InfoItem;