import React from 'react'
import './style/About.css'

const About = () => {
  return (
    <>
    <div class="about-container">
      <div class="about-text">
        <h1 id="about-header">ABOUT US</h1>
      </div>
    </div>
    
    <div class="card text-center" id="about-card">
      <h4 id="topic-header"></h4>
      <div class="card-body" id="about-body">
        <p class="card-text" id="about-text">
          <i>Candid Conversations: Circles for women in Business </i> 
          was founded in 2016 after the launch of <br></br> 
          <em style={{color:'#005486'}}> ‘A Candid Handbook for Women doing Business’ </em>, which is a “how to” guide for any woman starting a small business in Kenya</p>
        <p class="card-text" id="about-text">
          We exist to create a trusting environment for women to learn from each other, in an authentic way. 
        </p>
        <p class="card-text" id="about-text">
          Our unique event format ensures that every woman’s voice in the room is heard. After the event, women should leave feeling heard, with hope, equipped with immediate action plans and where possible a set of new friends.
        </p>
      </div>
    </div>
    </>
  )
}

export default About