import React from 'react'
import Contact from './Contact'
import "../Components/ContactUsPage.css"
import Form from './Form'

function ContactUsPage() {
  return (
    <div className='main-page'>
      <div className='cont-page'>
        <Contact/>
      </div>
      
      <div className='form-page'>
        <Form/>
      </div>        
    </div>
  )
}

export default ContactUsPage
