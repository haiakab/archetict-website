import React from 'react';
import ReactDOM from 'react-dom';
import Masony from "react-masonry-component";
// import InteriorDesignGaller from '../../../Json/InteriorDesign';
// import ArchetictGallery from '../../../Json/Archetict';
import Proj from '../../Pages/Proj/Proj';
import "./Portfolio.css";

// Gallery for reach Category- Using masonry Gallery
 class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
  } 


  
  componentDidMount() {

    fetch(`/Projects?Category=`+ this.props.galleryType)
         .then(res => res.json())
         .then(json => this.setState({ data: json }));

    //  if (this.props.galleryType == "archetict")
    //   { 
    //     fetch(`/Projects?Category=ArchProjs`)
    //     .then(res => res.json())
    //     .then(json => this.setState({ data: json }));
    //   }
    //   else if(this.props.galleryType == "interior")
    //   { 
    //     fetch(`/Projects?Category=InteriorDesignProjs`)
    //     .then(res => res.json())
    //     .then(json => this.setState({ data: json }));
    //   }
  }

  render(){
    if (this.state.data.length===0)
    return (<p>ops</p>);
    
      const masonryOptions = {
        fitWidth: true,
        columnWidth: 450,
        gutter: 30,
        itemSelector: ".photo-item",
      }
      // show projects by type
      // if(this.props.galleryType == "interior")
      // var photos=InteriorDesignGaller;
      // else if (this.props.galleryType == "archetict")
      // var photos=this.state.data;
      if (this.props.galleryType == "Kitchens")
      var photos=this.state.data.Category;
      else
      var photos=this.state.data.Category;

    return (    
      <div>
        <Masony
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {/* by click on each project - an information page will appear*/}
          {photos.map((photo) => (
            <a href="ProjectInfo" ><li className={`photo-item container hovereffect2`} >
              <img src={photo.imageUrl} alt=""/>
              <div class="card-img-overlay">
              <div class="overlay2 text-center hovereffect2">
                <h2 class="mt-auto"><div >{photo.name}</div></h2>
              </div>
            </div>
            </li>
            </a>
          )
          )}
        </Masony>
      </div>
    );  
  }
}


export default Portfolio;
