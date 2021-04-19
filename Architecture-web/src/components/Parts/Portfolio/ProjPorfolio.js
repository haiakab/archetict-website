import React, { Component } from 'react'
import InteriorDesignGaller from '../../../Json/InteriorDesign';
import ProjImage from '../../General/InfoArea/ProjImage';
import  './Portfolio.css';


class ProjPorfolio extends Component {
    render() {
        const projImages= InteriorDesignGaller[2].imagesArr.map((jsonItem) =>
        <ProjImage item={jsonItem}/>
    );
        return (
            <div className="row justify-content-around mt-5">
                {projImages}
            </div>
        )
    }
}
export default ProjPorfolio;