import React, { Component } from "react";
import Header from "../components/header/header.component";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="header">
          <Header title="Shopping Cart" subTitle="Shop unlimited products" />
        </div>
        <div className="p-6">Home Page</div>
      </>
    );
  }
}
