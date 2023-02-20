import React from 'react'
import './style/Card.css'
import src1 from '../media/images/img1.jpg'
import src2 from '../media/images/potrait1.JPG'
import src3 from '../media/images/img3.jpg'
import src4 from '../media/images/potrait2.jpg'
import src5 from '../media/images/img5.jpg'
import src6 from '../media/images/potrait4.jpg'
import join1 from '../media/joinus/trusting.png'
import join2 from '../media/joinus/listen.png'
import join3 from '../media/joinus/wesupport.png'


const Cards = () => {
  return (
    <div>
       
         <div id="join-card">
            <h1 id="card-header">JOIN US</h1>
            <div className="row">
            <div className="col-sm-4">
                <div className="card" id="card-join">
                    <img src={join1} alt="trust" />
                    <div className="card-body">
                        <h5 className="card-title">WE ARE A TRUSTING COMMUNITY</h5>
                        <p className="card-text">Exists to create a trusting environment for Women to learn from each other, in an authentic way.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" id="card-join">
                    <img src={join2} alt="trust" />
                    <div className="card-body">
                        <h5 className="card-title">WE LISTEN</h5>
                        <p className="card-text">Our unique event format ensures that every woman’s voice in the room is heard.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" id="card-join">
                    <img src={join3} alt="trust" />
                    <div className="card-body">
                        <h5 className="card-title">WE SUPPORT</h5>
                        <p className="card-text">After every event women should leave feeling heard, with hope, equipped with immediate action plans and where possible a set of new friends.</p>
                        
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        <div id="circles-div">
        
        </div>
        <div class="row" id="youtube-row">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body" id="youtube-vid">
                        <iframe
                            src="https://www.youtube.com/embed/FLTFRSXw-ps" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>    
                        </iframe>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body" id="youtube-vid">
                <iframe 
                    src="https://www.youtube.com/embed/Iucw2pyuMXM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                </div>
                </div>
            </div>
        </div>
        <div id="circles-div">
        
        </div>
        <div id="div-carousel">
            <h1 id="card-header">HIGHLIGHTS FROM PAST EVENTS</h1>
            <div className="row" id="carousel">
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src={src1}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        />
                        <img
                        src={src2}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={src3}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                        />
                        <img
                        src={src4}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={src5}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                        />
                        <img
                        src={src6}
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                        />
                    </div>
                </div>

            </div>
     
        
        </div>


    </div>
  )
}

export default Cards