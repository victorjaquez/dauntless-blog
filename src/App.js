import React, { Component } from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";

import NewPost from "./components/NewPost";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Preview from "./components/Preview";
import Author from "./components/Author";

import * as Actions from "./actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.Actions.fetchPosts();
    this.props.Actions.fetchAuthors();
    this.props.Actions.fetchComments();
  }

  homeRedirect(e) {
    e.preventDefault();
    this.props.history.replace("/");
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/post/new" component={NewPost} />
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={Preview} />
          <Route exact path="/author/:id" component={Author} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
