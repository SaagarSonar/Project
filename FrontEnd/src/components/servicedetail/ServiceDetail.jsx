import React, { Component } from "react";
import "./service-detail.css";
import { Link } from "react-router-dom";

class ServiceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddedToCart: false,
    };
    this.addtoSessionAndMovetoModify =
      this.addtoSessionAndMovetoModify.bind(this);
  }

  componentDidMount() {
    if (sessionStorage.getItem("cartItems")) {
      let cartItems = sessionStorage.getItem("cartItems");
      if (cartItems.includes(this.props.servicedata.sid)) {
        this.setState({
          isAddedToCart: true,
        });
      } else {
        this.setState({
          isAddedToCart: false,
        });
      }
    }
  }

  addItemToCart() {
    if (sessionStorage.getItem("cartItems")) {
      let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      cartItems.push(this.props.servicedata.sid);

      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      let cartItems = [this.props.servicedata.sid];
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  addtoSessionAndMovetoModify() {
    sessionStorage.setItem("modifyserviceid", this.props.servicedata.sid);
  }

  removeItemFromCart() {
    if (sessionStorage.getItem("cartItems")) {
      let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));
      let sid = this.props.servicedata.sid;
      cartItems = cartItems.filter((item) => item !== sid);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      let cartItems = [];
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }

  render() {
    return (
      <>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <div className="card-img-container">
                <img
                  className="card-img"
                  src="../servicedetail/basic-service.jpg"
                  alt="Card image cap"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{this.props.servicedata.name}</h5>
                <p className="card-text">
                  {this.props.servicedata.description}
                </p>
                {this.state.isAddedToCart ? (
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      this.props.updateCartItemCount(-1);
                      this.removeItemFromCart();
                      this.setState((prevState) => ({
                        isAddedToCart: !prevState.isAddedToCart,
                      }));
                    }}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                      this.props.updateCartItemCount(1);
                      this.addItemToCart();
                      this.setState((prevState) => ({
                        isAddedToCart: !prevState.isAddedToCart,
                      }));
                    }}
                  >
                    Add to Cart
                  </button>
                )}
                <br />
                {sessionStorage.getItem("role") === "admin" ? (
                  <>
                    <Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          this.props.deleteServicePermanently(
                            this.props.servicedata.sid
                          )
                        }
                      >
                        Delete
                      </button>
                    </Link>

                    <br />

                    <Link to="/modifyservice">
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => this.addtoSessionAndMovetoModify()}
                      >
                        Update
                      </button>
                    </Link>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ServiceDetail;
