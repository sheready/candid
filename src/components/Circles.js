import React from 'react'
import './style/Circles.css'
import image1 from '../media/images/img12.jpg';
import image2 from '../media/images/img28.JPG';
import image3 from '../media/images/img29.JPG';
import image4 from '../media/images/img30.jpg';

const Circles = () => {
  return (
    <>
    <div className="circles-container">
      <div className="circles-text">
        <h1 id="circles-header">CIRCLES OF TRUST</h1>
      </div>
    </div>
    <div id="circles-div">
    </div>

    <div className='row' id='circles-row'>
      <h4 id="circle-header">AREAS OF FOCUS</h4>
        <div className="col-sm-3" id="circle-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">FINANCE</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3" id="circle-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">LEADERSHIP</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3" id="circle-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ENTREPRENEURSHIP</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3" id="circle-card">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">FINANCE</h5>
            </div>
          </div>
        </div>
    </div>
    <div id="circles-div">
    </div>
    <div id="row-circles">
      <h4 id="circle-header">MORE ABOUT US</h4>
      <div className="col-sm-8" id="col-image">
        <div class="card" id="card-img">
            <div class="row" id="card-row">
              <div class="col-md-7">
                <div class="card-body">
                  <p class="card-text">Circle of trust can also be referred to as a Personal Board, which is a small group of people that you go to for support and advice on advancing your business or career.</p>
                </div>
              </div>
              <div class="col-md-5">
                <img src={image1} class="img-fluid rounded-start" id="img-card" alt="image-one"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8" id="col-image">
          <div class="card" id="card-img">
            <div class="row" id="card-row">
              <div class="col-md-5">
                <img src={image2} class="img-fluid rounded-start" id="img-card" alt="image-one"/>
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <p class="card-text">The Circle of Trust should consist of five to eight carefully selected individuals that you can rely on to strategize with and to act as your personal sounding board when it comes to your professional or personal development.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8" id="col-image">
          <div class="card" id="card-img">
              <div class="row" id="card-row">
              <div class="col-md-7">
                  <div class="card-body">
                    <p class="card-text">Members will acquire mentors and professional experts in the different fields of interest, who will help and guide them reach their potential as business people and develop friendships that last a lifetime.</p>
                  </div>
                </div>
                <div class="col-md-5">
                  <img src={image3} class="img-fluid rounded-start" id="img-card" alt="image-one"/>
                </div>
              </div>
            </div>
        </div>
        <div className="col-sm-8" id="col-image">
        <div class="card" id="card-img">
              <div class="row" id="card-row">
                <div class="col-md-5">
                  <img src={image4} class="img-fluid rounded-start" id="img-card" alt="image-one"/>
                </div>
                <div class="col-md-7">
                  <div class="card-body">

                    <p class="card-text">Becoming a member of Candid Conversations opens you up to authentic conversations. We believe that by presenting our authentic selves we are better able to:</p>
                    <ol>
                      <li>Position our businesses to solve real problems</li>
                      <li>Become effective business leaders</li>
                      <li>Grow our networks</li>
                      <li>Encourage each other to create businesses that will last for posterity</li>
                      <li>Create a support system that will walk alongside us as we build our businesses.</li>
                    </ol>
                  </div>
                </div>
              </div>
          </div>
        </div>          
      </div>
      <div class="row" id="circle-flip">
          <h4 id="circle-header">BUILDING YOUR CIRCLE OF TRUST</h4>
          <div class="col-sm-4">
            <div id="card-circle-flip">
              <div class="card-body" id="content">
                <div class="front">
                  Front
                </div>
                <div class="back">
                  Back!
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div id="card-circle-flip">
              <div class="card-body" id="content">
                <div class="front">
                  Front
                </div>
                <div class="back">
                  Back!
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div id="card-circle-flip">
              <div class="card-body" id="content">
                <div class="front">
                  Front
                </div>
                <div class="back">
                  Back!
                </div>
              </div>
            </div>
          </div>
        </div>
    <div id="circles-div">

    </div>


  </>
  )
}

export default Circles