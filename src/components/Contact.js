import React from 'react';
import './style/Contact.css';
import whatsapplogo from '../media/images/whatsapp-logo.png';
import emaillogo from '../media/images/email-logo.png'

const Contact = () => {
  return (
    <>
      <div class="contact-container">
        <div class="contact-text">
          <h1 id="contact-header">CONTACT US</h1>
        </div>
      </div>
      <br></br>

      <br></br>
      <div id="contact-form">
        <h5 id="contact-header-form">GET IN TOUCH WITH US</h5>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Your email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Your message
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-primary mb-3"
          id="contact-form-button"
        >
          Submit
        </button>
      </div>
      <div>
        <iframe
          id="contact-us-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.799595885224!2d36.787679514960104!3d-1.2947880360012172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10969d1409f1%3A0x9cb370689cc9135e!2sCMS-Africa!5e0!3m2!1sen!2ske!4v1678085390360!5m2!1sen!2ske"
          allowfullscreen=""
          loading="lazy"
          title="CMS-Africa map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Contact