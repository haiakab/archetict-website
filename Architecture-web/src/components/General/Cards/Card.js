import React from 'react';
import ReactDOM from 'react-dom';
import './Card.css'


class Cards extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <a class="card border-0 col-12 col-md-3 rounded-lg cardItem hovereffect" href={this.props.item.url}>
      <img class="card-img-top cardItem rounded-lg img-responsive " src={this.props.item.img} alt="Card image"/>
      <div class="card-img-overlay">
        <div class="overlay text-center overlay">
          <h2 class="mt-auto text-light">{this.props.item.category}</h2>
        </div>
        {/* <!-- <p class="card-text">Some example text.</p>
        <a href="#" class="btn btn-primary">See Profile</a>  --> */}
      </div>
    </a>);
  }
}

export default Cards;
