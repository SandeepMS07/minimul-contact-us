import React, { useState } from 'react';
import "../Components/Form.css"


export default function Form() {

    const [formValues, setformValues] = useState( 
            {
                username: "",
                email: "",
                phonenumber : "",
                aboutProject: "",
                services:""

            }
    )

    //! Destructuring Form Values
    // let {username, email,phonenumber,aboutProject,services} = formValues;


    //! Submitting Form Data
    let sendData = (e) =>
    {
        e.preventDefault();
        console.log(formValues);
        setformValues("")
    }
    
    //! Updating form values
    let changeData = (e) =>
    {
        let {name, value} = e.target;
        setformValues({...formValues,[name]:value})
    }
  return (
    <div className='main-form'> 
        <h1>Level up your brand</h1>
        <h4>You can reach us anytime via <span className='span-h4'>hi@untitledui.com</span></h4>
        <form action=" " className='my-form' onSubmit={sendData}>
            <div className='form-div'>
                <div className='form-div'>
                    <label htmlFor="username">Name</label><br />
                    <input type="text" name="username" id=""  onChange={changeData} placeholder='your name' />
                </div>
              
                <div className='form-div'>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder='you@company.com' name='email' onChange={changeData}/>
                </div>
    
                <div className='form-div'>
                    <label htmlFor="">Phone number</label><br />
                    {/* <select name="" id="">
                        <option value="" onChange={changeData}>US</option>
                        <option value="" onChange={changeData}>INDIA</option>    
                    </select> */} 
                    <input type="tel" name="phonenumber" id="" placeholder='+91 xxxxxxxxxx' onChange={changeData} />
                </div>
           
                <div className='form-div'>
                    <label htmlFor="">How can we help?</label><br />
                    <textarea name="aboutProject" id="" cols="30" rows="10" placeholder='Tell us little about the project' onChange={changeData}></textarea> 
                </div>
                

               
               <div className='form-div'>
                    
                    <label htmlFor="">Services</label><br />
                   <div className='checkbox-label'>
                        <input type="checkbox" name="services" id="" onChange={changeData} />
                        <label htmlFor="">Website design</label>
                        <br />

                        <input type="checkbox" name="services" id="" onChange={changeData}/>
                        <label htmlFor="">Content creation</label>
                        <br />

                        <input type="checkbox" name="services" id="" onChange={changeData}/>
                        <label htmlFor="">UX design</label>
                        <br />

                        <input type="checkbox" name="services" id="" onChange={changeData}/>
                        <label htmlFor="">Strategy&consulting</label>
                        <br />

                        <input type="checkbox" name="services" id="" onChange={changeData}/>
                        <label htmlFor="">User research</label>
                        <br />

                        <input type="checkbox" name="services" id="" onChange={changeData}/>
                        <label htmlFor="">Other</label>
                        <br />
                    </div>
               </div>
                <button className='ui-button' type="submit">Get started</button>
            </div>
        </form>
    </div>
  )
}
