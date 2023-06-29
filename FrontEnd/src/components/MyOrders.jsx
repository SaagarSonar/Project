import React, { Component } from "react";
import axios from "axios";

class MyOrders extends Component {
     constructor(props){
    super(props)
    this.state = {
       mechanics: [
      { id: 1, name: "John Doe", specialty: "Engine Repair", experience: "5 years" },
      { id: 2, name: "Jane Smith", specialty: "Brake Repair", experience: "8 years" },
      { id: 3, name: "Bob Johnson", specialty: "Transmission Repair", experience: "10 years" },
      { id: 4, name: "Sara Lee", specialty: "Electrical Repair", experience: "3 years" },
    ],
    orders:[]
    };
  }

  componentDidMount(){
    let token = sessionStorage.getItem("token");
    if(token===null || token ==="undefined" || token===""){
        alert("unauthoirzed access");
        this.props.history.push("/login");
    }
    const headers = {
    authorization: `Bearer ${token}`
    };

    axios.post("http://localhost:8081/fetchserviceofuser",{"userId":sessionStorage.getItem("userid")},{headers: headers})
    .then(response => {
        this.setState({
        orders: response.data,
        })
    })
    .catch((error) => {
        console.log(error)
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center my-5">My Orders</h2>
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order) => (
              <tr key={order.upid}>
                <td>{order.sid.name}</td>
                <td>{order.sid.description}</td>
                <td>&#8377;{order.sid.price}</td>
                <td>{order.sid.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyOrders;
