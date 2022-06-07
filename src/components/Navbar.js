import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Nombre total :{this.props.Number}
        </a>
      </nav>
    );
  }
}

export default Navbar;
