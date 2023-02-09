import React from 'react'
import './style/Banner.css';
import src from '../media/video/ciwb.mp4'


const Banner = () => {
  return (
    <div>
      <div class="row">
        <div class="col-sm-8" id="banner-text">
          <h3>WELCOME TO</h3>
          <h1>CANDID</h1>
          <h1>CONVERSATIONS</h1>
          <h2>CIRCLES FOR WOMEN IN BUSINESS</h2>
        </div>
        <div class="col-sm-4" id="banner-video">
          <video autoPlay loop muted>
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Banner