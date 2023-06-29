import React, { Component } from "react";

import "./AboutUs.css";

export class AboutUs extends Component {
  render() {
    return (
      <>
       <div class="about-section" style={{ backgroundColor:"#43b7f2"}}>
          <h1>About Us</h1>
          <p>
            SuperMechanic is a Pune based auto-tech company that aims to solve
            three main problems that car-owners face today- high maintenance
            cost, poor quality of service and time taken out of their day.We
            make a difference to our customer’s lives by bringing the garage to
            them and delivering world-class car repair service that costs less
            than any service center.Our mission is to become the most
            trustworthy and tech savvy car repair service provider in India.
          </p>
         
        </div>

        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
           
              <div className="container">
                <h2>Saagar Sonar</h2>
                <p className="title">Pl & Team Member </p>
              
                <p>randhirs.812@gmail.com</p>
                <p>
                  <button className="button">9423893109</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              
              <div className="container">
                <h2>Tushar Rane</h2>
                <p className="title">Team Mentor</p>
               
                <p>tusharrane@gmail.com</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              
              <div className="container">
                <h2>Anshul singh</h2>
                <p className="title">Team Member</p>
                
                <p>Anshulsingh@gmail.com</p>
                <p>
                  <button className="button">9689610380</button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
             
              <div className="container">
                <h2>Manthan Ajmera</h2>
                <p className="title">Team Member</p>
               
                <p>manthan@gmail.com</p>
                <p>
                  <button className="button">9810932790</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default AboutUs;
