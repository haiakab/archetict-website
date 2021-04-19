import React, { Component } from 'react'
import InteriorDesignGaller from '../../../Json/InteriorDesign';
import Materials from '../../General/Materials/Materials';
import HomeSim from './HomeSim';
import InfoItem from '../../General/InfoArea/InfoItem';
import ProjImage from '../../General/InfoArea/ProjImage'
import ProjPorfolio from '../../Parts/Portfolio/ProjPorfolio'
import './Proj.css'

// information for each project - include 3dModel
export default class Proj extends Component {     
    render() {
        const projDetails= InteriorDesignGaller[2].detailedImages.map((jsonItem) =>
        <InfoItem item={jsonItem}/>
    );
        const photo = InteriorDesignGaller[2].imageUrl;
        return (
            <div>
                <div class="card-bg  text-white border-0 Proj-bg "> 
                    <img src={photo} class=" Proj-bg" alt="Responsive image"></img> 
                    <div class="card-img-overlay materials  ">
                    <Materials />    
                    </div> 
                </div> 
                <HomeSim className="container m-0"/>
                {projDetails}
                <ProjPorfolio/>
             </div>
        )
    }
}
