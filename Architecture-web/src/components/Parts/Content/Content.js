import React from 'react';
import ReactDOM from 'react-dom';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import MiddleContent from './MiddleContent';
import './Content.css';

class Content extends React.Component {
  render(){
    return(
    <>
    <div id="content" class="container-fluid">
     <div className=" row">
        <LeftContent content={this.props.content}/>
        <RightContent content={this.props.content}/>
      </div>
      <div className="container-fluid ml-0 mr-0">
      <MiddleContent content={this.props.content}/>
      </div>
    </div>
    </>
    )

  }
}

export default Content;
