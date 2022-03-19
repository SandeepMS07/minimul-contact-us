import React from "react";
import { useForm } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";
// import IntlTelInput from 'react-bootstrap-intl-tel-input'
// import PhoneInput from 'react-phone-input-2'
import "../Components/Form.css";

export default function Form() {
  // const [formValues, setformValues] = useState({
  //   username: "",
  //   email: "",
  //   phonenumber: "",
  //   query: "",
  //   services: "",
  // });

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
    console.log(data);
  };

  return (
    <div className="container">
      <div className="ui row mt-5">
        <div className="text-center">
          <h4 className="fw-bolder">Level up your brand</h4>
          <p className="lead mt-2">
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
                type="username"
                id="username"
                placeholder="Your name"
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
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  className="form-control p-1"
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
                  type="tel"
                  id="phonenumber"
                  placeholder="+91 xxxxxxxxxx"
                  className="form-control p-1"
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
                    <div className="form-check">
                      <input
                        name="services"
                        id="flex-check-1"
                        type="checkbox"
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
