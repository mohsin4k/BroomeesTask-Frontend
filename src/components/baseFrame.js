import React from 'react'
import '../App.css';
import backgroundImage from '../assets/wings.png';
import FormComponent from './FormComponent';
import "bootstrap/dist/css/bootstrap.min.css";

export default function baseFrame() {
  return (
    <div className="container_app center">
    <div className="content_app flex">
      <div className="content_app_left_container relative">
        <img src={backgroundImage} className="img_css_style" alt="logo" />
        <div className="img-overlay absolute center">
          <div className='width-70'>
            <div className='sub-heading center'>Altitude Air</div>
            <div className='sub-para'>
              We promise to ansure that your well-being is taken care of
              while travelling with us. Boasting top in class fleet inventory 
              ans a 5 star approval for our in-flight experience you know you're 
              getting the best from Altitude with no altitude  
            </div>
          </div>
        </div>
      </div>
      <div className="content_app_right_container center">
        <FormComponent />
      </div>
    </div>
  </div>
  )
}
