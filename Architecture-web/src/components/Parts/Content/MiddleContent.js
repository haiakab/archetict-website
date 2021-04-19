import React, { Component } from 'react'
import './MiddleContent.css'
import Service from '../../General/Service/Service';
import ServicesJSON from '../../../Json/Services';

class MiddleContent extends Component {
    render() {
        const ServiceItems= ServicesJSON.map((jsonItem) =>
        <Service item={jsonItem}/>
        );
        return (
            <div id="middleContent" className="container-fluid col-12 text-center align-items-center ml-0 mr-0  pt-3">
                <h4 className="txtFont txt-Col pt-2"> Our  Specialization</h4>
                <div className="row text-center align-items-center pt-2">
                    <div id="services" class="container-fluid  servicesBg row ml-1 ">
                        {ServiceItems}
                    </div>
                </div>
            </div>
        )
    }
}

export default MiddleContent
