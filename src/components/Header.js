import React from 'react'
import './style/Header.css'
import logo from '../media/images/logo.png'


const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="container-logo">
                    <a class="navbar-brand">
                        <img src={logo} alt="" width="75" height="70"/>
                    </a>
                </div>
            <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                {/* <span class="navbar-toggler-icon"></span> */}
                <span class="line"></span> 
                <span class="line"></span> 
                <span class="line"></span>
            </button>
                <div class="nav-list collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-12 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header