import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {OBJModel} from 'react-3d-viewer'
import ModelViewer from 'react-model-viewer';
import '@google/model-viewer';
import './Proj.css'




export default class HomeSim extends Component {
  render() {
    return (
      <model-viewer className="container-fluid p-0 ml-5"
        src="./new3DModel.glb"
        // ios-src={../Link/To/Model.usdz}
        alt='model name'
        ar
        loading='lazy'
        camera-controls
        // poster={../Link/To/Image.png}
        autoplay>
      </model-viewer>

    )
  }
}
