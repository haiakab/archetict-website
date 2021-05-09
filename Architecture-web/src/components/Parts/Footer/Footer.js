import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from '../../General/MenuItem/MenuItem';
import './Footer.css'

// this is a complicated footer component - 
// it includes social media icons and about us section
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    // read the footer items(icons) from json file
    const MenuItems= this.props.footerData.map((jsonItem) =>
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
    {/* <div dangerouslySetInnerHTML={{__html:aboutUsInf}}></div> */}
    <h2 class="mt-4"> {this.props.AboutUsInfo.title} </h2> 
    <h5 class="mt-4"> {this.props.AboutUsInfo.firstSent} </h5> 
    <p class="mt-3"> {this.props.AboutUsInfo.seconSent}
    <br/>  {this.props.AboutUsInfo.thirdSent}
    <br/> {this.props.AboutUsInfo.forthSent}
     {this.props.AboutUsInfo.fifthSent}
    </p> 

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