import React, { Component } from 'react';
import axios from "axios";
import "./mechanic-login.css";

class MechanicLogin extends Component {
  state = {
    username: '',
    password: '',
    isSignUp: false,
    role: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSignUpClick = (event) => {
    event.preventDefault();
    this.setState({ isSignUp: true });
  };

  handleLoginClick = (event) => {
    event.preventDefault();
    this.setState({ isSignUp: false });
  };

  handleSubmit = (event) => {
    
    event.preventDefault();
    // Do something with username, password, and role
    if(this.state.isSignUp){
      console.log("entered handle register");
      //registration logic
      if(this.state.username==="" || this.state.password==="" || this.state.role===""){
        alert("please fill the form properly");
        return;
      }
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (!emailRegex.test(this.state.username)) {
        alert("Invalid email format");
        return;
      }
      if (!passwordRegex.test(this.state.password)) {
        alert("Password should be 8 characters long and must contain at least one lowercase letter, one uppercase letter, one number and one special character");
        return;
      }
      axios.post("http://localhost:8081/register", {
        name: this.state.username,
        email: this.state.username,
        password: this.state.password,
        role: this.state.role
    })
    .then(response => {
      if(response.data!==""){
      alert("Registration success");
      }else{
      alert("Registration failed. Please try again.");  
      }
    })
    .catch(error => {
      alert("Registration failed. Please try again.");
      sessionStorage.clear();
    });

    }else{
      console.log("entered handle login");
      //login logic
      if(this.state.username==="" || this.state.password===""){
        alert("please fill the form properly");
        return;
      }
      let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (!emailRegex.test(this.state.username)) {
        alert("Invalid email format");
        return;
      }
      if (!passwordRegex.test(this.state.password)) {
        alert("Password should be 8 characters long and must contain at least one lowercase letter, one uppercase letter, one number and one special character");
        return;
      }
    
      axios.post("http://localhost:8081/signin", {
      email: this.state.username,
      password: this.state.password
    })
    .then(response => {
      if(response.data!==""){
        console.log(response.data);
        sessionStorage.setItem("userid",response.data.user.id);
        sessionStorage.setItem("email",response.data.user.email);
        sessionStorage.setItem("role",response.data.user.role);
        sessionStorage.setItem("token",response.data.token)
      alert("Login success");
      this.props.history.push("/home");
      }else{
      alert("Login failed. Please try again.");  
      }
    })
    .catch(error => {
      alert("Login failed. Please try again.");
      sessionStorage.clear();
    });


    }
  };

  render() {
    const { username, password, role, isSignUp } = this.state;
    return (
      <div className="mechanic-login-container">
  <form className="mechanic-login-form" onSubmit={this.handleSubmit}>
    <h2 className="mechanic-login-heading">
      {isSignUp ? 'Mechanic Signup' : 'Login'}
    </h2>
    <div className="mechanic-login-input-group">
      <label htmlFor="username">Username/E-mail:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={this.handleInputChange}
        required
        autocomplete="off"
      />
    </div>
    <div className="mechanic-login-input-group">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={this.handleInputChange}
        required
        autocomplete="off"
      />
    </div>
    {isSignUp && (
      <div className="mechanic-login-input-group">
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={this.handleInputChange}
          required
          autocomplete="off"
        >
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    )}
    <button type="submit" className="btn btn-primary mechanic-login-button">
      {isSignUp ? 'Sign up' : 'Login'}
    </button>
    {!isSignUp ? (
      <p className="mechanic-login-signup">
        Don't have an account?{' '}
        <button onClick={this.handleSignUpClick} className="btn btn-link">
          Sign up
        </button>
      </p>
    ) : (
      <p className="mechanic-login-signup">
        Already have an account?{' '}
        <button onClick={this.handleLoginClick} className="btn btn-link">
          Login
        </button>
      </p>
    )}
  </form>
</div>

    );
  }
}

export default MechanicLogin;