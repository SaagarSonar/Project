import React, { Component } from "react";
import axios from "axios";

class AddService extends Component {
   constructor(props){
    super(props)
    this.state = {
      serviceName: "",
      serviceDescription:"",
      serviceCategory:"",
      servicePrice:0
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

   handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  submitForm(e){

    let request = {
      "name" :this.state.serviceName,
      "description" : this.state.serviceDescription,
      "category": this.state.serviceCategory,
      "price": this.state.servicePrice
    }
let token = sessionStorage.getItem("token");
      const headers = {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      };

    axios.post("http://localhost:8081/registerservice",request,{headers: headers})
    .then(response => {
      alert("service created successfully");
      this.props.history.push("/services/");
    })
    .catch((error) => {
      alert("Failed to register service");
      console.log(error)
    })  
  }

  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="serviceName" className="form-label">Service Name</label>
          <input required type="text" className="form-control" id="serviceName" name="serviceName" placeholder="Enter service name"
            value={this.state.serviceName}
            onChange={this.handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="serviceCategory" className="form-label">Category</label>
          <select className="form-select" id="serviceCategory" name="serviceCategory" value={this.state.serviceCategory} onChange={this.handleInputChange}>
            <option value="default">Default</option>
            <option value="periodicservices">Periodic Services</option>
            <option value="acservices">AC Service & Repair</option>
            <option value="tyres">Tyres & Wheel Care</option>
            <option value="dentingpainting">Denting & Painting</option>
            <option value="detailing">Detailing Services</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="servicePrice" className="form-label">Price</label>
          <input required type="number" step="0.01" className="form-control" id="servicePrice" name="servicePrice" placeholder="Enter service price"
          value={this.state.servicePrice}
            onChange={this.handleInputChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="serviceDescription" className="form-label">Description</label>
          <textarea required className="form-control" id="serviceDescription" name="serviceDescription" rows="3" placeholder="Enter service description"
          value={this.state.serviceDescription}
            onChange={this.handleInputChange}></textarea>
        </div>
        <button onClick={this.submitForm} className="btn btn-primary">Add Service</button>
      </form>

    )
  };
}

export default AddService;