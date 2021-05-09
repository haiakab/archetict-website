import React, { Component } from 'react';
import './LeftContent.css';
import './Content.css';
import { AnimateOnChange } from 'react-animation'; 
import Typical from 'react-typical';
 class LeftContent extends Component {
    render() {
        return (
            <div id="leftContent" className="ml-auto col-8">
                <section className="wrapper pr-5 pl-5 pb-5 pt-5 mt-5">
                <h2 className="sentence font-weight-bolder pl-5 ml-5">
                    <Typical
                        steps={[this.props.content.LeftContent.first, 1000, this.props.content.LeftContent.second, 1000, this.props.content.LeftContent.third, 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
       
                </h2>
                </section>
      
            </div>
        )
    }
}

export default LeftContent
