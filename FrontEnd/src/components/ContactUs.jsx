

import React, { Component } from "react";


import './ContactUs.css';


export class ContactUs extends Component{
    render(){
        return(
            <>
       <div className="container">
  <div style={{textAlign: "center"}}>
    <h2>Contact Us</h2>
    <h3>We're all ears!</h3>
    <p>leave us a message:</p>
  </div>
  <div className="row">
    <div className="column">
      <img src="contact.png" style={{width: "100%"}} />
    </div>
    <div className="column">
      <form action="/home">
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label htmlFor="country">City</label>
        <select id="country" name="country">
          <option value="australia">Pune</option>
          <option value="canada">Mumbai</option>
          <option value="usa">Nashik</option>
        </select>
        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</div>

            
            </>
        )
    }
}
export default ContactUs;