import React, { Component } from 'react'
import Header from '../../Parts/Header/Header'
import Card from '../../General/Cards/Card'
// import CategoriesJSON from '../../../Json/Categories'
import Simple_Footer from '../../Parts/Footer/Simple_Footer'
// import QuoteGallery from '../../../Json/Gallery';

import './Gallery.css'

class Gallery extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/Projects`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    if (this.state.data.length===0)
        return (<p>ops</p>);

    const Categories= this.state.data.Category.map((jsonItem) =>
        <Card item={jsonItem}/>
    );
    return (
      <div className="bgProj">
        <Header itemName="txtHeaderColor3" headerData={this.state.data.Header}/>
        <div id="content" class="container-fluid row mt-5 pt-3 justify-content-end">
          {<div className="col-md-3 text-light mt-5 pt-5"> 
            <h2 className="mt-5 pt-2 fiquote"><i class="fas fa-quote-left quote"></i> Luxury is in each detail <i class="fas fa-quote-right quote"></i></h2> 
            <div className="Sequote"> Hubert de Givenchy </div> 
          </div>}
          {Categories}
        </div>
        <Simple_Footer itemName="txtHeaderColor3" footerData={this.state.data.Footer}/>
        
      </div>
    );
  }
}

export default Gallery
