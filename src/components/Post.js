import React, { Component } from "react";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      description: "Dauntless blog"
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome to {this.state.description}</h1>
      </div>
    );
  }
}

export default Post;
