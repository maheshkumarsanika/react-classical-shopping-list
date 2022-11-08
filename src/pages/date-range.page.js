import React, { Component } from "react";
import DateRange from "../components/daterange/daterange.component";
import Header from "../components/header/header.component";

export default class DateRangePage extends Component {
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
        <div>
          <div>
            <DateRange />
          </div>
        </div>
      </>
    );
  }
}
