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
import sell from '../media/images/sell-you.png'
import support from '../media/images/support.png'
import network from '../media/images/door-network.png'
import coach from '../media/images/coach.png'
import accountability from '../media/images/accountability.png'


const Cards = () => {
  return (
    <div>
       
         <div id="join-card">
            <h3 id="card-header">JOIN US</h3>
            <div className="row">
            <div className="col-sm-4" id="join-col">
                <div className="card" id="card-join">
                    <img src={join1} alt="trust" id="trust-img"  />
                    <div className="card-body">
                        <h5 className="card-title">WE ARE A TRUSTING COMMUNITY</h5>
                        <p className="card-text">Exists to create a trusting environment for Women to learn from each other, in an authentic way.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4" id="join-col">
                <div className="card" id="card-join">
                    <img src={join2} alt="listen" id="listen-img" />
                    <div className="card-body">
                        <h5 className="card-title">WE LISTEN</h5>
                        <p className="card-text">Our unique event format ensures that every woman’s voice in the room is heard.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4" id="join-col">
                <div className="card" id="card-join">
                    <img src={join3} alt="support" id="support-img"/>
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
        <div className="row" id="youtube-row">
            <h3 id="card-header">CIRCLES OF TRUST</h3>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body" id="youtube-vid">
                        <iframe
                            src="https://www.youtube.com/embed/BatMYqjEY3Q" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowfullscreen>    
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body" id="youtube-vid">
                <iframe 
                    src="https://www.youtube.com/embed/lmdgXVRpPI4" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
                </div>
                </div>
            </div>
        </div>
        
        <br></br>
        <h3 id="card-header">BENEFITS OF JOINING CIRCLES OF TRUST</h3>
            <div className='row' id="row-circles">
                    <div className="col-sm-4" id="card-col">
                        <div class="card">
                            <div class="card-body" id="card-circles">
                                <h5 class="card-title">WE SELL YOU, ON YOUR BEHALF</h5>
                                <img src={sell} alt="sell"/>
                                <p class="card-text">
                                Your circle of trust members can act as advocates for you.
                                They can sell your skills and experience to hiring managers on the lookout for talent. 
                                They can get you into key meetings, make sure you take the right training and make it onto the high potential list.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" id="card-col">
                        <div class="card">
                            <div class="card-body" id="card-circles"  >
                                <h5 class="card-title">WE HOLD YOU ACCOUNTABLE</h5>
                                <img src={accountability} alt="account"/>
                                <p class="card-text">
                                It’s not just a matter of sharing their views; the very best circle of trust members will actively challenge you and ask the really hard questions about your grand strategy and plans. This will help you discover and get clear on the
                                potential flaws in your plan.
                               
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" id="card-col">
                        <div class="card">
                            <div class="card-body" id="card-circles">
                                <h5 class="card-title">WE PROVIDE SUPPORT</h5>
                                <img src={support} alt="support"/>
                                <p class="card-text">
                                The members of your circle will not only help you in hard times, but will also be there to celebrate successes and the milestones of your career or advances in life. This group of allies will put their arms around you in good times and bad.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row' id="row-circles">
                    <div className="col-sm-6" id="card-col">
                        <div class="card">
                            <div class="card-body" id="card-circles">
                                <h5 class="card-title">WE OPEN DOORS & EXPAND YOUR NETWORK </h5>
                                <img src={network} alt="doors"/>
                                <p class="card-text">
                                Every individual who sits in your circle holds the key to doors that otherwise may be closed to you. They can be your door to key business contacts, prospects, and others who can help you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6" id="card-col">
                        <div class="card">
                            <div class="card-body" id="card-circles"  >
                                <h5 class="card-title">WE WILL COACH & CHALLENGE YOU</h5>
                                <img src={coach} alt="coach"/>
                                <p class="card-text">
                                Your circle of trust members should be able to hold you
                                accountable for your actions and behavior impacting your professional performance.
                                
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
        <div id="circles-div">
        
        </div>
        <div id="div-carousel">
            <h1 id="card-header">HIGHLIGHTS FROM PAST EVENTS</h1>
            <div className="row" id="carousel">
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                        src={src1}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        />
                        <img
                        src={src2}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={src3}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                        />
                        <img
                        src={src4}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <img
                        src={src5}
                        className="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                        />
                        <img
                        src={src6}
                        className="w-100 shadow-1-strong rounded mb-4"
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