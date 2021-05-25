import React, { Component } from 'react'
import Portfolio from '../../Parts/Portfolio/Portfolio';

export default class Archeticture extends Component {
    render() {
        return (
            <div>
                {/* <Portfolio galleryType={this.props.match.params.galleryType}/> */}
                <Portfolio galleryType="archetict"/>
            </div>
        )
    }
}