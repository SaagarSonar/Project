import React, { Component } from "react";
import ServiceDetail from "./servicedetail/ServiceDetail";
import axios from "axios";

class ServiceGrouping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      services: [],
      cartItemCount: this.props.cartItemCount,
      filteredservices: [],
      selectedcategory: "",
    };
    this.filterUpdated = this.filterUpdated.bind(this);
  }

  redirectToCartPage = () => {
    this.props.history.push("/cart");
  };

  addServiceRedirection = () => {
    this.props.history.push("/addservice");
  };

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if (token === null || token === "undefined" || token === "") {
      alert("unauthoirzed access");
      this.props.history.push("/login");
    }
    const headers = {
      authorization: `Bearer ${token}`,
    };

    axios
      .get("http://localhost:8081/fetchallservices", { headers: headers })
      .then((response) => {
        this.setState({
          services: response.data,
          filteredservices: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteServicePermanently(sid) {
    let token = sessionStorage.getItem("token");

    const headers = {
      authorization: `Bearer ${token}`,
    };

    axios
      .post(
        "http://localhost:8081/deleteservice",
        { sid: sid },
        { headers: headers }
      )
      .then((response) => {
        this.setState({
          services: response.data,
          filteredservices: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateServiceDetails(sid,name,description,price,category) {
    let token = sessionStorage.getItem("token");

    const headers = {
      authorization: `Bearer ${token}`,
    };

    axios
      .post(
        "http://localhost:8081/updateService",
        { sid: sid },
        { headers: headers }
      )
      .then((response) => {
        this.setState({
          services: response.data,
          filteredservices: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  filterUpdated(event) {
    const selectedValue = event.target.value;
    const filteredServices =
      selectedValue === "default"
        ? this.state.services
        : this.state.services.filter(
            (service) => service.category === selectedValue
          );
    this.setState({
      filteredservices: filteredServices,
      selectedcategory: selectedValue,
    });
  }

  render() {
    return (
      <>
        <div className="mb-3">
          <label htmlFor="serviceCategory" className="form-label">
            Filter by category:
          </label>
          <select
            className="form-select"
            id="serviceCategory"
            name="serviceCategory"
            value={this.state.selectedcategory}
            onChange={this.filterUpdated}
          >
            <option value="default">Default</option>
            <option value="periodicservices">Periodic Services</option>
            <option value="acservices">AC Service & Repair</option>
            <option value="tyres">Tyres & Wheel Care</option>
            <option value="dentingpainting">Denting & Painting</option>
            <option value="detailing">Detailing Services</option>
          </select>
          <button className="btn btn-primary mt-3">Filter</button>
        </div>
        {this.state.filteredservices.map((service, index) => (
          <ServiceDetail
            key={index}
            servicedata={service}
            updateCartItemCount={this.props.updateCartItemCount}
            deleteServicePermanently={this.deleteServicePermanently}
          />
        ))}
        <div className="row container-fluid">
          <button
            onClick={this.redirectToCartPage}
            className="btn btn-success mt-3"
          >
            Go to Cart
          </button>
        </div>
        {sessionStorage.getItem("role") === "admin" ? (
          <div className="row container-fluid">
            <button
              onClick={this.addServiceRedirection}
              className="btn btn-success mt-3"
            >
              Add a Service
            </button>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default ServiceGrouping;
