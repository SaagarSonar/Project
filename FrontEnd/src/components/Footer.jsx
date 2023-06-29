import { Component } from "react";
import "./Footer.css";

export class Footer extends Component{
    render(){
        return(
            <>   
            <footer className="Footer-Style" >
            <div className="container">
      <div className="row">
        <div className="col-md-4">
       
          <h4>Address</h4>
          <address>
          Office No. 14, 2nd Floor,<br />Saagar Arcade Premises Society Ltd.,<br /> Viman Nagar, Pune. 411 004.
          <br /> Maharashtra, India
           
          </address>
        </div>
        <div className="col-md-4">
          <h4>Services</h4>
          <ul type="none">
            <li><a href="/services/">Periodic Services</a></li>
            <li><a href="/services/">AC Service & Repair</a></li>
            <li><a href="/services/">Tyres & Wheel Care</a></li>
            <li><a href="/services/">Denting & Painting</a></li>
            <li><a href="/services/">Batteries Services</a></li>
          </ul>
        </div>
        <div className="col-md-4" >
          
          <h4>About SuperMechanic</h4>
          <ul type="none">
          
          <li>
            <a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><b>For any help you may 
              <p>call us at
9423893109</p></b>
(Monday to Sunday, 9AM-9PM)</li>
            {/* <li><a href="#">Terms & Conditions</a></li> */}
          </ul>
        </div>
      </div>
      
      
     
    </div>
    <div class="footer-copyright text-center py-3">
    © 2023 Copyright:
    <a href="#"> SuperMechanic </a>
</div>
            </footer>
            </> 
            );
    }
}
