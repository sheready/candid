import React from 'react';
import './style/Contact.css';

const Contact = () => {
  return (
    <>
      <div class="contact-container">
        <div class="contact-text">
          <h1 id="contact-header">CONTACT US</h1>
        </div>
      </div>
      <div id="contact-form">
        <h5 id="contact-header-form">GET IN TOUCH WITH US</h5>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Your email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mb-3">Submit</button>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default Contact