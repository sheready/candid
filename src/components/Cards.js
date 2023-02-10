import React from 'react'
import './style/Card.css'
import src1 from '../media/images/img1.jpg'
import src2 from '../media/images/img2.jpg'
import src3 from '../media/images/img3.jpg'
import src4 from '../media/images/img4.jpg'
import src5 from '../media/images/img5.jpg'
import src6 from '../media/images/img6.jpg'


const Cards = () => {
  return (
    <div>
         <div id="join-card">
            <h1 id="card-header">JOIN US</h1>
            <div className="row">
            <div className="col-sm-4">
                <div className="card" id="card-join">
                    <div className="card-body">
                        <h5 className="card-title">WE ARE A TRUSTING COMMUNITY</h5>
                        <p className="card-text">Exists to create a trusting environment for Women to learn from each other, in an authentic way.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" id="card-join">
                    <div className="card-body">
                        <h5 className="card-title">WE LISTEN</h5>
                        <p className="card-text">Our unique event format ensures that every woman’s voice in the room is heard.</p>
                        
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card" id="card-join">
                    <div className="card-body">
                        <h5 className="card-title">WE SUPPORT</h5>
                        <p className="card-text">After every event women should leave feeling heard, with hope, equipped with immediate action plans and where possible a set of new friends.</p>
                        
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        <h1 id="card-header">HIGHLIGHTS FROM PAST EVENTS</h1>
        <div className="row" id="carousel">
            <div className="col-sm-6" id="carousel-card">
                <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel" data-mdb-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={src1} class="d-block w-100" alt="Wild Landscape" />
                        </div>
                        <div class="carousel-item" data-mdb-interval="2000">
                            <img src={src2} class="d-block w-100" alt="Camera" />
                        </div>
                        <div class="carousel-item" data-mdb-interval="2000">
                            <img src={src3} class="d-block w-100" alt="Exotic Fruits" />
                        </div>
                    </div>
                </div>
            
            </div>
            <div className="col-sm-6" id="carousel-card">
                <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel" data-mdb-interval="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={src4} class="d-block w-100" alt="Wild Landscape" />
                        </div>
                        <div class="carousel-item" data-mdb-interval="1500">
                            <img src={src5} class="d-block w-100" alt="Camera" />
                        </div>
                        <div class="carousel-item" data-mdb-interval="1500">
                            <img src={src6} class="d-block w-100" alt="Exotic Fruits" />
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        <div id="circles-div">
        
        </div>
       
       
       

    </div>
  )
}

export default Cards