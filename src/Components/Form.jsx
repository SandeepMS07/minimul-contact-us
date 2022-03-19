import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";
// import IntlTelInput from 'react-bootstrap-intl-tel-input'
// import PhoneInput from 'react-phone-input-2'
import "../Components/Form.css";

export default function Form() {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [query, setquery] = useState();
  const [services, setservices] = useState([]);

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
    console.log(data.phonenumber);
    let details = {
      Name : data.username,
      Email : data.email,
      Phonenumber : data.phonenumber,
      query : data.query,
      services : data.services 
    }
    axios.post('https://sheetdb.io/api/v1/kix2fwrql2gls',details).then((response)=>
    {
      console.log(response)
      setusername('')
      setemail('')
      setphonenumber('')
      setquery('')
      setservices('')
    })
    
  };

  // let servicesLabes = [
  //   "Website design",
  //   "UX design",
  //   "User research",
  //   "Content creation",
  //   "Strategy & consulting",
  //   "Other",
  // ];

  return (
    <div className="container">
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
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                name="username"
                type="username"
                id="username"
                placeholder="Your name"
                onChange={(e) => setusername(e.target.value)}
                value={username}
                {...register("username", {
                  required: "*Name is required",
                  maxLength: { value: 80, message: "*Maximum 10 characters" },
                })}
                className="form-control p-1"
              />
              <p>{errors.username?.message}</p>

              <div className="my-1">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="form-control p-1"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  {...register("email", {
                    required: "*Email is Required",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "*Enter valid email address",
                    },
                  })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="my-1">
                <label htmlFor="phonenumber" className="form-label">
                  Phone number
                </label>
                <input
                  name="phonenumber"
                  type="tel"
                  id="phonenumber"
                  placeholder="+91 xxxxxxxxxx"
                  className="form-control p-1"
                  onChange={(e) => setphonenumber(e.target.value)}
                  value={phonenumber}
                  {...register("phonenumber", {
                    required: "*Phone number Required",
                    pattern: {
                      value: /^[6-9][0-9]{9}$/g,
                      message: "*Enter valid mobile number",
                    },
                  })}
                />
                <p>{errors.phonenumber?.message}</p>
              </div>

              <div className="my-1">
                <label htmlFor="query" className="form-label">
                  How can we help?
                </label>
                <textarea
                  name="query"
                  id="query"
                  style={{ height: "120px" }}
                  onChange={(e) => setquery(e.target.value)}
                  value={query}
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
                  <div className="col-sm-6">
                    {/* {servicesLabes.map((el, index) => {
                      return (
                        <div className="form-check" key={index}>
                          <input
                            name="services"
                            id={index}
                            type="checkbox"
                            // onChange={setservices([...services, "Website design"])}
                            value={el}
                            className="form-check-input"
                            {...register("services")}
                          />
                          <label htmlFor={index} className="form-label">
                            {el}
                          </label>
                        </div>
                      );
                    })} */}

                    <div className="form-check">
                      <input
                        name="services"
                        id="flex-check-1"
                        type="checkbox"
                        // onChange={setservices([...services, "Website design"])}
                        value={"Website design"}
                        className="form-check-input"
                        {...register("services")}
                      />
                      <label htmlFor="flex-check-1" className="form-label">
                        Website design
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        name="services"
                        id="flex-check-2"
                        // onChange={setservices([...services, "UX design"])}
                        type="checkbox"
                        className="form-check-input"
                        value={"UX design"}
                        {...register("services")}
                      />
                      <label htmlFor="flex-check-2" className="form-label">
                        UX design
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        name="services"
                        id="flex-check-3"
                        // onChange={setservices([...services, "User research"])}
                        type="checkbox"
                        className="form-check-input"
                        value={"User research"}
                        {...register("services")}
                      />
                      <label htmlFor="flex-check-3" className="form-label">
                        User research
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        name="services"
                        // onChange={setservices([...services,
                        //   "Content creation",
                        // ])}
                        id="flex-check-4"
                        type="checkbox"
                        className="form-check-input"
                        value={"Content creation"}
                        {...register("services")}
                      />
                      <label htmlFor="flex-check-4" className="form-label">
                        Content creation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        name="services"
                        id="flex-check-5"
                        // onChange={setservices([...services,
                        //   "Strategy&consulting",
                        // ])}
                        type="checkbox"
                        className="form-check-input"
                        value={"Strategy&consulting"}
                        {...register("services")}
                      />
                      <label htmlFor="flex-check-5" className="form-label">
                        Strategy&amp;consulting
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        name="services"
                        id="flex-check-6"
                        // onChange={setservices([...services,
                        //   "Other",
                        // ])}
                        type="checkbox"
                        className="form-check-input"
                        value={"Other"}
                        {...register("services")}
                      />
                      <label htmlFor="flex-check-6" className="form-label">
                        Other
                      </label>
                    </div>
                  </div>
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
