import React, { useState } from "react";
import "../Components/Form.css";

export default function Form() {
  const [formValues, setformValues] = useState({
    username: "",
    email: "",
    phonenumber: "",
    aboutProject: "",
    services: "",
  });

  //! Destructuring Form Values
  // let {username, email,phonenumber,aboutProject,services} = formValues;

  //! Submitting Form Data
  let sendData = (e) => {
    e.preventDefault();
    console.log(formValues);
    setformValues("");
  };

  //! Updating form values
  let changeData = (e) => {
    let { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };
  return (
    <div className="main-form">
      <h1>Level up your brand</h1>
      <h4>
        You can reach us anytime via{" "}
        <span className="span-h4">hi@untitledui.com</span>
      </h4>
      <form action=" " className="my-form" onSubmit={sendData}>
        <div className="form-cont">
          <div className="form-div">
            <label htmlFor="username">Name</label>
            <br />
            <input
              type="text"
              name="username"
              id=""
              onChange={changeData}
              placeholder="your name"
            />
          </div>

          <div className="form-div">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="you@company.com"
              name="email"
              onChange={changeData}
            />
          </div>

          <div className="form-div">
            <label htmlFor="">Phone number</label>
            <br />
            {/* <select name="" id="">
                        <option value="" onChange={changeData}>US</option>
                        <option value="" onChange={changeData}>INDIA</option>    
                    </select> */}
            <input
              type="tel"
              name="phonenumber"
              id=""
              placeholder="+91 xxxxxxxxxx"
              onChange={changeData}
            />
          </div>

          <div className="form-div">
            <label htmlFor="">How can we help?</label>
            <br />
            <textarea
              name="aboutProject"
              id=""
              cols="30"
              rows="10"
              placeholder="Tell us little about the project"
              onChange={changeData}
            ></textarea>
          </div>

          <div className="form-check">
            <label htmlFor="">Services</label>
            <br />
            <div className="checkbox-label">
              <div className="check-1">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    id="1"
                    onChange={changeData}
                  />
                  <label htmlFor="1">Website design</label>
                  <br />
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    id="2"
                    onChange={changeData}
                  />
                  <label htmlFor="2">Content creation</label>
                  <br />
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    id="3"
                    onChange={changeData}
                  />
                  <label htmlFor="3">UX design</label>
                  <br />
                </div>
              </div>

              <div className="check-2">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    id="4"
                    onChange={changeData}
                  />
                  <label htmlFor="4">Strategy&amp;consulting</label>
                  <br />
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    id="5"
                    onChange={changeData}
                  />
                  <label htmlFor="5">User research</label>
                  <br />
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="services"
                    id="6"
                    onChange={changeData}
                  />
                  <label htmlFor="6">Other</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <button className="ui-button" type="submit">
            Get started
          </button>
        </div>
      </form>
    </div>
  );
}
