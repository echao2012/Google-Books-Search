import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav"

class Saved extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <div>
        <Nav location={this.props.location.pathname} />
        <h1>Saved</h1>
      </div>
    );
  }
}

export default Saved;