import React from "react";
import "../Components/Contact.css";
// import { FontAwesomeIcon } from 'font-awesome'

function Contact() {
  return (
    <div className="contact-page">
      <div className="ui-desc">
        <h2>Get in touch</h2>
        <p style={{ marginTop: "10px" }}>
          We' love to hear from you. Our friendly team is always here to chat
        </p>
      </div>

      <div className="ui-chatUs">
        <div className="icon-en">
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div className="cont-us">
          <h4>Chat to us</h4>
          <p>Our friendly team is here to help.</p>
          <a href="#">hi@untitled.com</a>
        </div>
      </div>

      <div className="ui-loc">
        <div className="icon-map">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="loc">
          <h4>Office</h4>
          <p>Come to say hello at our office HQ.</p>
          <h5>100 Smith Street</h5>
          <h5>Collingwood VIC 3066 AU</h5>
        </div>
      </div>

      <div className="ui-phn">
        <div className="icon-phone">
          <i className="fa-solid fa-phone"></i>
        </div>
        <div className="phone">
          <h4>Phone</h4>
          <p>Mon-Fri from 8am to 5pm</p>
          <h5>+1(555)0000-0000</h5>
        </div>
      </div>

      <div className="container-social">
        <a href="#">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-chrome"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
