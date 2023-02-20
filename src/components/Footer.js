import React from 'react'
import './style/Footer.css'
import logo from '../media/images/logo.png'

const Footer = () => {
  return (
        <section id="footer">
            <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                    <div class="col-xs-12 col-sm-6 col-md-6">
                        <ul class="list-unstyled quick-links">
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Home</a></li>
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>About</a></li>
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>FAQ</a></li>
                            <li><a href="javascript:void();"><i class="fa fa-angle-double-right"></i>Join Us As A Retailer</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-4" id="logo-footer">
                        <img src={logo} alt="logo" />
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