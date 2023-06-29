import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';

class CartItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };

    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if(token===null || token ==="undefined" || token===""){
      alert("unauthoirzed access");
      this.props.history.push("/login");
    }
    const headers = {
        authorization: `Bearer ${token}`
      };

    const cartItemsJson = JSON.parse(sessionStorage.getItem('cartItems'));
    let filteredServices ;
    let allservices = []
     axios.get("http://localhost:8081/fetchallservices",{headers:headers})
    .then(response => {
        allservices= response.data
        filteredServices = allservices.filter(service => {return cartItemsJson.includes(service.sid);});
    this.setState({
        cartItems:filteredServices
    })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  placeOrder(){
    let request = [];
    let uid = sessionStorage.getItem("userid");

    let token = sessionStorage.getItem("token");
    if(token===null || token ==="undefined" || token===""){
      alert("unauthoirzed access");
      this.props.history.push("/login");
    }
    
    const headers = {
      authorization: `Bearer ${token}`
    };

    this.state.cartItems.map((item) => {
      request.push({"sid":item.sid,"uid":uid,"status":"approved"})
    })

    axios.post("http://localhost:8081/submitorder",{"userPortfolioDtoList":request},{headers: headers})
    .then(response => {
      alert("order placed successfully");
      sessionStorage.removeItem("cartItems");
    })
    .catch((error) => {
      alert("Failed to place order");
      console.log(error)
    })    
  }

//   fetchCartItems = () => {
//     const cartItemsJson = JSON.parse(sessionStorage.getItem('cartItems'));
//     let filteredServices ;
//     let allservices = []
//      axios.get("http://localhost:8081/fetchallservices")
//     .then(response => {
//         allservices= response.data
//       console.log(response.data);
//       console.log(cartItemsJson);
//         return filteredServices = (response.data).filter(service => cartItemsJson.includes(service.sid));
//         // console.log("filteredServices "+ JSON.parse(filteredServices));
//     })
//     .catch((error) => {
//       console.log(error)
//     })

//   };

render() {
    return (
      <div className="container">
        <h1 className="text-center my-4">Cart Items</h1>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>&#8377;{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <button className="btn btn-primary btn-block" onClick={this.placeOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(CartItems);
