import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      description: "Home"
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

export default Home;
