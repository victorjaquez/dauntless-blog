import React, { Component } from "react";
import "../App.css";

class Author extends Component {
  constructor() {
    super();
    this.state = {
      description: "Author"
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to, {this.state.description}</h1>
      </div>
    );
  }
}

export default Author;
