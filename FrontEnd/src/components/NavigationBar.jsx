import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
   constructor(props){
    super(props)
    this.state = {
      count: 0
    };
  }
  
componentDidMount(){
  this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 4000);
}

componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{width:"100%"}}>
  <a className="navbar-brand" href="/home" style={{color:"DodgerBlue"}}>
   <b>Super-Mechanic</b> 
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/services">
          Services
        </a>
      </li>
      <li className="nav-item">
        <Link  className="btn btn-link cart-button" to="/cart">
          <i className="material-icons">shopping_cart</i>
          <span className="badge badge-pill badge-primary">{this.props.cartItemCount}</span>
        </Link >
      </li>
      { (sessionStorage.getItem("email")==="underfined" || sessionStorage.getItem("email")===""||sessionStorage.getItem("email")===null)?
      (<li className="nav-item">
        <Link className="btn btn-link" to="/login">
          <i className="material-icons">login</i>
          Login
        </Link>
        
      </li>):(
        <>
        <li className="nav-item">
          <button className="btn ml-2">{sessionStorage.getItem("email")}</button>
        </li>
        <li className="nav-item">
          <Link className="btn btn-link signout-button" to="/myorders">
            <i></i>
            My Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-link signout-button" to="/signout">
          <i className="material-icons">exit_to_app</i>
          Logout
          </Link>
        </li>
        </>
      )

      }
      
    </ul>
    
  </div>
</nav>

    );
  }
}

export default NavigationBar;