import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

import "./AboutUs.css";

export class Policy extends Component {
  render() {
    return (
      <>
        <div className="about-text">
          <h1>Privacy Policy Of SuperMechanic</h1>
          <br></br>
          <p>
            Team-42 COMMERCE PRIVATE LIMITED, having its registered Office No.
            14, 2nd Floor, Saagar Arcade Premises Society Ltd., Viman Nagar,
            Pune. 411 004. Maharashtra, India (“Company” or “we” or “us” or
            “our”), is the owner of the website domain at (referred as
            “Platform”); provides Services (as defined in the Terms of Service)
            through its mobile application SuperMechanic- Doorstep Car repair and
            Service App” available at Google Play Store/Apple Play Store
            (collectively referred to as “Platform”)
          </p>
          <p>
            Any Service availed by Users (as defined in the Terms of Service)
            who avail our Services (hereinafter referred to as “you”, “your” or
            “User”) Users of the Platform (as defined in the Terms of Service)
            (hereinafter referred to as “you”, “your” or “User”) through the
            Platform is conditioned upon your acceptance of the terms and
            conditions contained in Terms of Service, as available on Platform
            and this privacy policy (“Privacy Policy”).
          </p>
        </div>
        <br></br>
        <Tabs>
          <Tab eventKey="About Us" title="PRIVACY POLICY">
            <div>
              <p>
               
              THIS PRIVACY POLICY HAS BEEN DRAFTED AND PUBLISHED IN ACCORDANCE WITH THE INFORMATION TECHNOLOGY ACT 2000; THE INFORMATION TECHNOLOGY (AMENDMENT) ACT 2008; AND THE INFORMATION TECHNOLOGY (REASONABLE SECURITY PRACTICES AND PROCEDURES AND SENSITIVE PERSONAL DATA OR INFORMATION) RULES 2011. THIS PRIVACY POLICY CONSTITUTES A LEGAL AGREEMENT BETWEEN YOU, AS A USER OF THE PLATFORM AND US, AS THE OWNER OF THE PLATFORM. YOU MUST BE A NATURAL PERSON WHO IS AT LEAST 18 YEARS OF AGE.
              </p>
              
            </div>
          </Tab>
          <Tab eventKey="Our Services" title="Our Services">
            <div>
              <p>
              Disclaimer
Please be advised that any Information (as defined herein below) procured by us, shall be:
processed fairly and lawfully for rendering the Services (as defined in Terms of Service);
obtained only for specified and lawful purposes, and not be used in any manner which is against the law or policy in force in India (“Applicable Law”);
adequate, relevant and not excessive in relation to the purpose for which it is required;
able to be reviewed by the User, from time to time and updated-if need arises; and
not kept longer than for the time which it is required or the purpose for which it is required or as required by the applicable law.


              </p>
             
            </div>
          </Tab>
          <Tab eventKey="Our Promise" title="Our Promise">
            <div>
              <p>
                We promise to provide you the best car service experience. Our
                experienced and highly trained technicians are committed to
                providing you with quality service and genuine parts.
              </p>
              <p>
                We strive to make your car service experience as convenient as
                possible. We offer complimentary pick-up and drop-in services,
                so you don’t have to leave the comforts of your home or office.
              </p>
              <p>
                We understand that your car is a valuable asset and we take care
                of it as if it were our own. We guarantee that your car will be
                in the best condition when you get it back.
              </p>
            </div>
          </Tab>
        </Tabs>
      </>
    );
  }
}
export default Policy;
