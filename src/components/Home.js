import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions/actions";
import Post from "./Post";
import "../App.css";

class Home extends Component {
  renderPosts = () =>
    this.props.posts.map((post, i) => {
      let comments = this.props.comments.filter(
        comment => comment.postId === post.id
      );
      return (
        <div>
          <Post key={i} post={post} comments={comments} />
        </div>
      );
    });

  render() {
    return (
      <div>
        <section>
          <div className="container" id="home-article-container">
            <h3 id="quote">Your words can make an impact, be Dauntless.</h3>
            <div className="row">{this.renderPosts()}</div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    authors: state.authors,
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
