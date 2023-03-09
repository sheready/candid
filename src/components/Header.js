import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './style/Header.css'
import logo from '../media/images/logo.png'


const Header = () => {
  return (
    <div id="header-nav">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="container-logo">
                    <Link to="/">
                        <a class="navbar-brand">
                            <img src={logo} alt="" width="80" height="75"/>
                        </a>
                    </Link>
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
                <div class="nav-list collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav me-auto mb-12 mb-lg-0">
                    <li class="nav-item">
                        <NavLink to="/" class="nav-link" aria-current="page">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/about" class="nav-link" >About Us</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/circles-of-trust" class="nav-link" >Circles Of Trust</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/contact" class="nav-link">Contact Us</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header