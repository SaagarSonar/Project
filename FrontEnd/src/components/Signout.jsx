import React, { Component } from "react";

class Signout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    sessionStorage.clear();
    this.props.history.push("/login");
  }

  render() {
    return <></>;
  }
}

export default Signout;
