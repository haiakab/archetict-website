import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from '../../General/MenuItem/MenuItem';
// import MenuJSON from '../../../Json/FooterItems';
import aboutUsInf from '../../../Json/aboutJs';
import './Footer.css'

// this is a complicated footer component - 
// it includes social media icons and about us section
class Footer extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch(`/Footer`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render(){
    // read the footer items(icons) from json file
    const MenuItems= this.state.data.map((jsonItem) =>
    <MenuItem item={jsonItem}/>
  );

return (
<>
<div id="footer" class="container-fluid mt-1" data-aos="zoom-in-right" data-aos-duration="1500" >  
{/* data-aos="zoom-in-right" data-aos-duration="1500" */}
  <div class="separator">
    <div class="square "> </div>
    <div class="hr_1 container-fluid"></div>
  </div>
  <div id="aboutUs" class="txtFont text-center pt-1">
    <div dangerouslySetInnerHTML={{__html:aboutUsInf}}></div>
  </div>
  <ul className=" list-inline text-center pt-5 mt-5 pb-3">
    {MenuItems}
  </ul>
</div>
</> 
);
  }
}

export default Footer;