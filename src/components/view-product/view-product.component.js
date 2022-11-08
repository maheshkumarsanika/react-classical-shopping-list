import React, { Component } from "react";

export default class ViewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;

    return (
      <div className="">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <h4 className="title is-4 has-text-primary">{data.title}</h4>
            <h5 className="title is-5 my-3">Rs.{data.price}</h5>

            <figure className="image my-3">
              <img
                alt="product_image"
                src={data.image}
                style={{ height: "300px" }}
              />
            </figure>
            <h5 className="title is-5 my-3">Rs.{data.description}</h5>
            <button className="button is-info is-fullwidth">
              View Product
            </button>
            <button className="button is-info is-fullwidth mt-2">Buy</button>
          </article>
        </div>
      </div>
    );
  }
}
