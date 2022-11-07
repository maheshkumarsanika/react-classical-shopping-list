import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="field is-grouped">
        <p className="control" style={{ marginLeft: "600px" }}>
          <input className="input" type="text" placeholder="search product" />
        </p>
        <p className="control">
          <a className="button is-info">Search</a>
        </p>
      </div>
    );
  }
}
