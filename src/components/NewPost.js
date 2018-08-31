import React, { Component } from "react";

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      description: "NewPost"
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

export default NewPost;
