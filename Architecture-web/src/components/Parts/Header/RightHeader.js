import React, { Component } from 'react'
import MenuItem from '../../General/MenuItem/MenuItem';
import MenuJSON from '../../../Json/FooterItems';

class RightHeader extends Component {
    render() {
        const MenuItems= MenuJSON.map((jsonItem) =>
        <MenuItem item={jsonItem}/>
    );

    return (
    <>
     
    <nav id="header" class="container-fluid px-3 navbar navbar-expand-md font-weight-bold">
          {/* <MenuItems/> */}
      {/* <div className="collapse navbar-collapse "> */}
        <ul className="navbar-nav row container-fluid d-flex justify-content-start secondTitle headerSize">{MenuItems}</ul>
      {/* </div> */}
    </nav>
    </> 
    );
    }
}

export default RightHeader
