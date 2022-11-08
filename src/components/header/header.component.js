import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.navLinks = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Products",
        path: "/products",
      },
      {
        name: "Categories",
        path: "/categories?search",
      },
      {
        name: "Date Range",
        path: "/date-range",
      },
    ];
  }

  getActiveLinkBackgroundColor = (path) => {
    const routeName = window.location.pathname;
    if (routeName === path) {
      return "grey";
    }

    if (routeName !== "/" && path.includes(routeName)) {
      return "grey";
    }

    return "";
  };

  render() {
    const { title } = this.props;

    return (
      <nav
        className="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <h2 className="title is-4 p-3 has-text-white">{title}</h2>
        </div>
        <div
          id="navbarBasicExample"
          className="navbar-menu"
          style={{ marginLeft: "900px" }}
        >
          <div className="navbar-start">
            {this.navLinks.map((navLink) => (
              <Link
                className="navbar-item ml-1"
                key={navLink.name}
                to={navLink.path}
                style={{
                  background: this.getActiveLinkBackgroundColor(navLink.path),
                }}
              >
                {navLink.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}
