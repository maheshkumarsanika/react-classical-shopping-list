import axios from "axios";
import React, { Component } from "react";
import Header from "../components/header/header.component";
import Product from "../components/product/product.component";

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <div className="header">
          <Header title="Shopping Cart" subTitle="Shop unlimited products" />
        </div>
        <h2 className="head m-6 has-text-info has-text-weight-bold is-size-3">
          Categories
        </h2>
        <div className="columns is-multiline px-6 py-3">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </>
    );
  }
}
