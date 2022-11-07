import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, subTitle } = this.props;

    return (
      <div className="is-primary has-text-primary">
        <section className="hero is-link">
          <div className="hero-body">
            <p className="title">{title}</p>
            <p className="subtitle">{subTitle}</p>
          </div>
        </section>
      </div>
    );
  }
}
