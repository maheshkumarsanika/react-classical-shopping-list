import axios from "axios";
import React, { Component } from "react";
import Header from "../components/header/header.component";
import Product from "../components/product/product.component";

const mockMultiCategories = async () => {
  const categories = [
    {
      name: "electronics",
    },
    {
      name: "jewelery",
    },
    {
      name: "clothing",
      sub_categories: [
        {
          name: "men's clothing",
          sub_categories: [
            {
              name: "shirts",
            },
          ],
        },
        {
          name: "women's clothing",
        },
      ],
    },
  ];

  return new Promise((res, rej) => res(categories));
};

export default class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      products: [],
      category: "",
    };
  }
  handleClick(c) {
    axios.get("https://fakestoreapi.com/products/category/" + c).then((res) => {
      this.setState({
        products: res.data,
        category: c,
      });
    });
  }
  componentDidMount() {
    // axios.get("https://fakestoreapi.com/products/categories").then((res) => {
    mockMultiCategories().then((res) => {
      this.setState(
        {
          categories: res,
        },
        () => {
          this.handleClick(this.state.categories[0].name);
        }
      );
    });
  }

  renderCatergories = (categories) => {
    return categories.map((c) => (
      <div
        className="py-2 pl-3 m-2 has-background-grey has-text-white is-capitalized"
        key={c.name}
        onClick={() => !c.sub_categories && this.handleClick(c.name)}
      >
        {c.name}
        {c.sub_categories && this.renderCatergories(c.sub_categories)}
      </div>
    ));
  };

  render() {
    const { categories, products, category } = this.state;

    return (
      <>
        <div className="header">
          <Header title="Shopping Cart" subTitle="Shop unlimited products" />
        </div>
        <h2 className="head m-6 has-text-info has-text-weight-bold is-size-3">
          Categories
        </h2>
        <div className="columns is-multiline px-6 py-3">
          <div className="column is-2 pt-6">
            {this.renderCatergories(categories)}
          </div>
          <div className="column is-10">
            <h2 className="head m-6 has-text-info has-text-weight-bold is-size-3 is-capitalized">
              {products.length
                ? `${category} Products`
                : `No Products in ${category}`}
            </h2>
            <div className="columns is-multiline">
              {products.map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
