import React, { Component } from 'react'
import './RightContent.css';
import logo from '../../../img/logo.png';

class RightContent extends Component {
    render() {
        return (
            <div id="rightContent" class="card align-items-center col-4 border-0">
                <img id="logo" class="card-img-top " src={this.props.content.RightContent.img} alt="Card image cap"/>
                <div class="card-body">
                    <h5 id="txtMoto" class="card-title text-center font-weight-bolder pl-1 pr-1 pb-1 pt-1 ">{this.props.content.RightContent.logoTitle}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
            </div>

        )
    }
}

export default RightContent
