import React, { Component } from 'react'
import InteriorDesignGallery from '../../../Json/InteriorDesign';
import Materials from '../../General/Materials/Materials';
import HomeSim from './HomeSim';
import InfoItem from '../../General/InfoArea/InfoItem';
import ProjImage from '../../General/InfoArea/ProjImage'
import ProjPorfolio from '../../Parts/Portfolio/ProjPorfolio'
import './Proj.css'



// information for each project - include 3dModel
export default class Proj extends Component { 
    constructor(){
        super();
        this.state = { data: [] };
      } 

    
      componentDidMount() {
            fetch(`/Projects?Category=interior`)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
      }    
    render() {
        if (this.state.data.length===0)
        return (<p>ops</p>);
        console.log(" Category is  " + this.props.match.params.Category);
        const projDetails= InteriorDesignGallery[2].detailedImages.map((jsonItem) =>
        <InfoItem item={jsonItem}/>
        // const projDetails= this.state.data.Category[2].detailedImages.map((jsonItem) =>
        // <InfoItem item={jsonItem}/>
    );
        // const photo = this.state.data.Category[2].imageUrl;
        const photo = InteriorDesignGallery[2].imageUrl;

        return (
            <div>
                <div class="card-bg  text-white border-0 Proj-bg "> 
                    <img src={photo} class=" Proj-bg" alt="Responsive image"></img> 
                    <div class="card-img-overlay materials  ">
                    <Materials data={this.state.data.Category}/>    
                    </div> 
                </div> 
                <HomeSim className="container m-0"/>
                {projDetails}
                <ProjPorfolio data={this.state.data.Category}/>
             </div>
        )
    }
}
