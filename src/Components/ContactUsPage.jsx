import React from "react";
import "../Components/ContactUsPage.css";
import Contact from "./Contact";
import Form from "./Form";

function ContactUsPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="ui-sheet col-sm-4">
          <Contact/>
        </div>
        <div className="ui-form col-sm-8">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
