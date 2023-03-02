import React from 'react'
import './style/Footer.css'
import logo from '../media/images/logo.png';
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
  return (
        <section id="footer">
            <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <ul class="list-unstyled quick-links">
                            <li><NavLink to="/" href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</NavLink></li>
                            <li><NavLink to="/about" href="javascript:void();"><i class="fa fa-angle-double-right"></i>About</NavLink></li>
                            <li><NavLink to="/" href="javascript:void();"><i class="fa fa-angle-double-right"></i>FAQ</NavLink></li>
                            <li><NavLink to="/contact" href="javascript:void();"><i class="fa fa-angle-double-right"></i>Contact Us</NavLink></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4" id="logo-footer">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                    <hr></hr>
                </div>	
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p class="h6">Circles Women In Business © 2023.  All Rights Reserved.</p>
                    </div>
                    <hr></hr>
                </div>	
	    </section>
  )
}

export default Footer