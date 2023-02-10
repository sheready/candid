import React from 'react';
import './style/Banner.css';
import logo from '../media/images/logo.png'

const Banner = () => {
  return (
    <div class="banner-container">
      <div class="banner-text">
        <h1>WELCOME TO</h1>
        <h1>CANDID CONVERSATIONS</h1>
        <h3>CIRCLES FOR WOMEN IN BUSINESS</h3>
      </div>
      <div class="banner-image">
        <img src={logo} alt="banner"/>
      </div>
    </div>

  );
}

export default Banner;
