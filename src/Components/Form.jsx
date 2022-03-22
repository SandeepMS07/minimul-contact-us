import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";
// import IntlTelInput from 'react-bootstrap-intl-tel-input'
// import PhoneInput from 'react-phone-input-2'
import "../Components/Form.css";
import HomePage from "../pages/HomePage";
import formData from "./details";
import Inputs from "./Inputs";

export default function Form() {
  const [formvalues, setformvalues] = useState({
    username: "",
    email: "",
    phonenumber: "",
    services: [],
    query: "",
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //! Destructuring Form Values
  // let {username, email,phonenumber,query,services} = formValues;
  // console.log(handleSubmit)
  // console.log(useForm());
  // console.log(errors);
  //! Submitting Form Data
  let sendData = (data) => {
    // console.log(formValues);
    // console.log(formvalues);
    // console.log(data.phonenumber);
    let details = {
      Name: data.username,
      Email: data.email,
      Phonenumber: data.phonenumber,
      query: data.query,
      services: data.services,
    };
    axios
      .post("https://sheetdb.io/api/v1/kix2fwrql2gls", details)
      .then((response) => {
        console.log(response);
        setformvalues({});
      });
  };

  let servicesLabes = [
    "Website design",
    "UX design",
    "User research",
    "Content creation",
    "Strategy & consulting",
    "Other",
  ];

  let updateData = (e) => {
    let { name, value } = e.target;
    setformvalues({...formvalues,[name]:value})
     



  return (
    <div className="container">
    <h1>{JSON.stringify(formvalues)}</h1>
      <div className="ui row mt-4">
        <div className="text-center">
          <h4 className="fw-bolder">Level up your brand</h4>
          <p className="lead mt-1">
            You can reach us anytime via{" "}
            <span className="ui-span">hi&#64;untitledui.com</span>
          </p>
        </div>
        <div className="row justify-content-center my-1">
          <div className="col-lg-6">
            <form action="" onSubmit={handleSubmit(sendData)}>
              {formData.map((inp, ind) => {
                return (
                  <div key={ind} className="my-1">
                    <label htmlFor={inp.name} className="form-label">
                      {inp.inputname}
                    </label>
                    <Inputs
                      name={inp.name}
                      type={inp.type}
                      id={inp.id}
                      placeholder={inp.placeholder}
                      message={inp.msg}
                      value={inp.inpval}
                      onchange={updateData}
                    />
                    <p>{errors[inp.name]?.message}</p>
                  </div>
                );
              })}

              <div className="my-1">
                <label htmlFor="query" className="form-label">
                  How can we help?
                </label>
                <textarea
                  name="query"
                  id="query"
                  style={{ height: "120px" }}
                  onChange={updateData}
                  // value={formvalues.query}
                  className="form-control p-1"
                  placeholder="Tell us a little about  the project"
                  {...register("query")}
                ></textarea>
                <p>{errors.query?.message}</p>
              </div>

              <div className="ui-check my-1">
                <label htmlFor="form-check" className="form-label">
                  Services
                </label>
                <div className="row">
                  {servicesLabes.map((el, index) => {
                    return (
                      <div className="col-sm-6" key={index}>
                        <div className="form-check">
                          <input
                            name="services"
                            id={index}
                            type="checkbox"
                            onChange={updateData}
                            value={el}
                            className="form-check-input"
                            {...register("services")}
                          />
                          <label htmlFor={index} className="form-label">
                            {el}
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="text-center d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
