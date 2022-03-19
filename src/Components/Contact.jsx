import React from "react";
import "../Components/Contact.css";
// import { FontAwesomeIcon } from 'font-awesome'

function Contact() {
  return (
    <div>
      <div className="container mt-5">
        {/* <div className="row"> */}
        <div className="text-start my-2">
          <h4>Get in touch</h4>
          <p className="lead mt-3">
            We' love to hear from you. Our friendly team is always here to chat.
          </p>
        </div>

        <div className="row my-2">
          <div className="col-sm-2">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="col-sm-8">
            <h6>Chat to us</h6>
            <p className="lead">Our friendly team is here to help.</p>
            <p><a href="#">hi@untitled.com</a></p>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-sm-2">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="col-sm-8">
            <h6>Office</h6>
            <p className="lead fs-6 mb-4">
              Come to say hello at our office HQ.
            </p>
            <p className="my-1">100 Smith Street</p>
            <p className="my-1">Collingwood VIC 3066 AU</p>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-sm-2">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="col-sm-8">
            <h6>Phone</h6>
            <p className="lead">Mon-Fri from 8am to 5pm</p>
            <p>+1(555)0000-0000</p>
          </div>
        </div>

        {/* </div> */}
      </div>
      <div className="container">
        <div className="ui-footer row fs-5">
          <div className="col-2">
            <a href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className="col-2">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

          <div className="col-2">
            <a href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div className="col-2">
            <a href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <div className="col-2">
            <a href="#">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
