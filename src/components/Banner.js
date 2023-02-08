import React from 'react'
import './style/Banner.css';
import src from '../media/video/ciwb.mp4'


const Banner = () => {
  return (
    <div className="header-column">
        <div id="banner-text">
          <h3>WELCOME TO</h3>
          <h1>CANDID CONVERSATIONS</h1>
          <h2>CIRCLES FOR WOMEN IN BUSINESS</h2>
        </div>
        <div id="banner-video">
          <video controls height='350px' autoplay muted loop>
            <source src={src} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        
    </div>
  )
}

export default Banner