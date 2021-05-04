import React from 'react';
import ReactDOM from 'react-dom';
// import InteriorDesignGaller from '../../../Json/InteriorDesign';
import './Materials.css'

// materials plate for each project
class Materials extends React.Component {
  constructor(){
    super();
    this.state = { data: [] };
  } 

  componentDidMount() {
        fetch(`/InteriorDesignProjs`)
        .then(res => res.json())
        .then(json => this.setState({ data: json }));
  }    
  render(){
    const materialsPlate= this.state.data[0].materials.map((jsonItem) =>
    <img item={jsonItem} class="rounded-circle img-circular mt-2 mr-2" alt="100x100" 
    src={jsonItem} data-holder-rendered="true"/>
    );
    return(
       <div class="material_box ">
        <div id="plate" class=" border-top border-bottom  pt-3 pb-3">
        {materialsPlate}
        </div>
      </div>
      )
  }
}

export default Materials;
