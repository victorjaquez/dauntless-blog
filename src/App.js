import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
