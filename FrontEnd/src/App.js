import "./App.css";
import ServiceGrouping from "./components/ServiceGrouping";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MechanicLogin from "./components/login/MechanicLogin ";
import Home from "./components/home/Home";
import NavigationBar from "./components/NavigationBar";
import React from "react";
import CartItems from "./components/CartItems";
import AddService from "./components/AddService";
import Signout from "./components/Signout";
import MyOrders from "./components/MyOrders";
import UpdateService from "./components/ModifyService";
import ModifyService from "./components/ModifyService";
import { Footer } from "./components/Footer";
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Policy } from './components/Policy';


class App extends React.Component {
  constructor(props) {
    super(props);

    let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));

    this.state = {
      cartItemCount: cartItems ? cartItems.length : 0,
      email: sessionStorage.getItem("email") || "",
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App container-fluid">
          <NavigationBar cartItemCount={this.state.cartItemCount} />
          <Switch>
          
            <Route path="/" exact component={MechanicLogin}></Route>
            <Route path="/login" exact component={MechanicLogin}></Route>
            <Route path="/about-us" exact component={AboutUs}></Route>
            <Route path="/contact-us" exact component={ContactUs}></Route>
            <Route path="/policy" exact component={Policy}></Route>
            <Route path="/myorders" exact component={MyOrders}></Route>
            <Route path="/register" exact component={MechanicLogin}></Route>
            <Route
              path="/services"
              exact
              render={(props) => (
                <ServiceGrouping
                  {...props}
                  cartItemCount={this.state.cartItemCount}
                  updateCartItemCount={(count) =>
                    this.setState({
                      cartItemCount: this.state.cartItemCount + count,
                    })
                  }
                />
              )}
            ></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/addservice" exact component={AddService}></Route>
            <Route
              path="/modifyservice"
              exact
              component={ModifyService}
            ></Route>
            <Route path="/signout" exact component={Signout}></Route>

            <Route
              path="/cart"
              exact
              render={(props) => <CartItems {...props} />}
            ></Route>
          </Switch>
        </div>
        
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
