import React from 'react';
import ReactDOM from 'react-dom';
import './MenuItem.css'

class MenuItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    // const view=null;
    var view;
    if (this.props.item.type === 1)
        {view= (<li className={`nav-item px-1`}>
          <a className={`nav-link txtHeader ${this.props.itemName}` } href={this.props.item.url}>{this.props.item.title}</a>
        </li>)}
    else if (this.props.item.type === 2)
    {
      view=(<li class="nav-item ml-auto ">
      <a className={`nav-link txtHeader ${this.props.itemName}`} href={this.props.item.url}>{this.props.item.title}<i className={this.props.item.icon}></i></a>
      </li>)
    }
    else
    {
      view=(<li class="list-inline-item">
      <a className={`btn-floating btn-fb mx-1 ${this.props.itemName}`} href={this.props.item.url}>
      <i className={`${this.props.itemName} ${this.props.item.icon} `}></i></a>
      </li>
      )
    }
    return( 
     
      view
     );
  }
}



export default MenuItem;

{/* <li class="nav-item px-1">
                <a class="nav-link txtHeader" href="home.html">Home</a>
              </li> */}