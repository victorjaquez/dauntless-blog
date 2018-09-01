import React, { Component } from "react";
import "../App.css";

class Preview extends Component {
  constructor() {
    super();
    this.state = {
      description: "Preview"
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

export default Preview;
