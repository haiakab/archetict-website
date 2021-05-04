import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
//  import MenuItems from '../../General/MenuItem/MenuItems';
import MenuItem from '../../General/MenuItem/MenuItem';
// import MenuJSON from '../../../Json/HeaderItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { data: [] };
  }

  render()
  {
    const MenuItems= this.props.headerData.map((jsonItem) =>
        <MenuItem item={jsonItem} itemName={`${this.props.itemName}`}/>
    );
    return (
    <>
     
    <nav id="header" className={`container-fluid px-3 navbar navbar-expand-md  ${this.props.styleName}` }>
      <div className="collapse navbar-collapse ">
        <ul className={'navbar-nav row container-fluid d-flex justify-content-start secondTitle'} >{MenuItems}</ul>
      </div>
    </nav>
    </> 
    );
  }
}

export default Header;
