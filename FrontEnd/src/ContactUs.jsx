import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

// import './ContactUs.css';


export class ContactUs extends Component{
    render(){
        return(
            <>
        <div className="contact-text">
            <h1>Contact SuperMechanic</h1>
                <p>
                
SuperMechanic aims to be the best of both worlds - Reliable and Cost-effective Car Services
Car Servicing, Car repairs and Car cleaning - we are your one-stop solution for all things cars.</p>

<p>SuperMechanic is a network of technology-enabled car service centres, offering a seamless car service experience at the convenience of a tap. With our highly skilled technicians, manufacturer recommended procedures and the promise of genuine spare parts we are your best bet.</p>

Stay in the comforts of your home or office and make the most of our complimentary pick-up and drop-in service. Count on us to be your personal car care expert, advisor and car mechanic.
                    
                    
            </div>
            <Tabs>
                <Tab eventKey="Contact Us" title="Contact Us">
                    <div>
                        <p>Welcome to SuperMechanic! We are excited to have you here and are dedicated to providing you the best car service experience.</p>
                        <p>SuperMechanic is a network of technology-enabled car service centers, offering a seamless car service experience at the convenience of a tap. With our highly skilled technicians, manufacturer recommended procedures and the promise of genuine spare parts, we are your best bet.</p>
                        <p>Stay in the comforts of your home or office and make the most of our complimentary pick-up and drop-in service. Count on us to be your personal car care expert, advisor, and car mechanic.</p>
                    </div>
                </Tab>
                <Tab eventKey="Our Services" title="Our Services">
                    <div>
                        <p>At SuperMechanic, we offer a wide range of services to meet all your car needs. From car servicing and repairs to car cleaning, we are your one-stop solution for all things cars.</p>
                        <p>Our highly skilled technicians are trained to use advanced technology and equipment to diagnose and fix any issue with your car. We use only genuine parts and manufacturer-recommended procedures to ensure that your car is in the best condition.</p>
                        <p>Our services are reliable, cost-effective, and convenient. We keep your car running at its best, so you can enjoy your ride with peace of mind.</p>
                    </div>
                </Tab>
                <Tab eventKey="Our Promise" title="Our Promise">
                    <div>
                        <p>We promise to provide you the best car service experience. Our experienced and highly trained technicians are committed to providing you with quality service and genuine parts.</p>
                        <p>We strive to make your car service experience as convenient as possible. We offer complimentary pick-up and drop-in services, so you don’t have to leave the comforts of your home or office.</p>
                        <p>We understand that your car is a valuable asset and we take care of it as if it were our own. We guarantee that your car will be in the best condition when you get it back.</p>
                    </div>
                </Tab>
            </Tabs>
            </>
        )
    }
}
export default ContactUs;