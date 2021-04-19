import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './MenuItem';
import MenuJSON from '../../../Json/LeftMenuItems';

class MenuItems extends React.Component {
    render() {
        const MenuItems= MenuJSON.map((jsonItem) =>
        <MenuItem item={jsonItem}/>
        );
        return (
            <div className="collapse navbar-collapse ">
                <ul className="navbar-nav row container-fluid d-flex justify-content-start secondTitle headerSize">{MenuItems}</ul>
            </div>
        )
    }
}

export default MenuItems
