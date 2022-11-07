import React, { Component } from "react";
import ViewProduct from "../view-product/view-product.component";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewProductData: null,
    };
  }

  handleViewProduct = (data) => {
    this.setState({
      viewProductData: data,
    });
  };

  closeModal = () => {
    this.setState({
      viewProductData: null,
    });
  };

  render() {
    const { data } = this.props;
    const { viewProductData } = this.state;

    return (
      <div className="column is-3">
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
            <button
              className="button is-info is-fullwidth"
              onClick={(e) => this.handleViewProduct(data)}
            >
              View Product
            </button>
            <button className="button is-info is-fullwidth mt-2">Buy</button>
          </article>
          {viewProductData && <ViewProduct data={viewProductData} />}
        </div>

        {viewProductData && (
          <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
              <section class="modal-card-body">
                <ViewProduct data={viewProductData} />
              </section>
            </div>
            <button
              onClick={(e) => this.closeModal()}
              class="modal-close is-large"
              aria-label="close"
            ></button>
          </div>
        )}
      </div>
    );
  }
}
