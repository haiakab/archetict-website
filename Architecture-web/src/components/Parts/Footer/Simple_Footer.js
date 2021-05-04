import React, { Component } from 'react'
import MenuItem from '../../General/MenuItem/MenuItem';
// import MenuJSON from '../../../Json/FooterItems';
import './Footer.css'

export class Simple_Footer extends Component {
    constructor(props) {
        super(props);
        // this.state = { data: [] };
      }
    
      // componentDidMount() {
      //   fetch(`/Footer`)
      //     .then(res => res.json())
      //     .then(json => this.setState({ data: json }));
      // }
    
    render() {
        const MenuItems= this.props.footerData.map((jsonItem) =>
        <MenuItem item={jsonItem} itemName={`${this.props.itemName}`}/>
      );
        return (
            <div>
                <ul className=" list-inline text-center pb-5 mt-5">
                 {MenuItems}
                </ul>
            </div>
        )
    }
}

export default Simple_Footer