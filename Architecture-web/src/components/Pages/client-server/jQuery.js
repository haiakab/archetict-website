import React, { Component } from 'react';


class MyjQueryReactComponent extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        bgColor: 'red',
        context: props.context
      };
      // Listen to bgColor events.
      this.state.context.subscribe(this, this.onBgColor);
    }
    
    onBgColor(bgColor, that) {
      // Change the state value for bgColor.
      that.setState({ bgColor: bgColor });
    }
    render() {
      return (
        <div className='alert alert-success' role='alert'>
          <h3>Hello, from React!</h3>
          <span className={ 'icon ' + (this.state.bgColor === 'red' ? 'icon-danger' : 'icon-success') + ' p-3' }>
            { this.state.bgColor }
          </span>
        </div>
      );
    }
  }

  export default MyjQueryReactComponent;