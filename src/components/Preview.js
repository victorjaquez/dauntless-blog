import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Actions from "../actions/actions";
import post_thumbnail from "../post_thumbnail.png";
import "../App.css";

class Preview extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      email: "",
      displayComments: false
    };
  }

  openCommentsForm = () => {
    this.setState({ displayComments: true });
  };

  textInputUpdate(
    {
      target: { value }
    },
    field
  ) {
    field === "title"
      ? this.setState({ title: value })
      : field === "body"
        ? this.setState({ body: value })
        : this.setState({ email: value });
  }

  closeCommentsForm = () => {
    this.setState({ displayComments: false });
  };

  submitForm = e => {
    e.preventDefault();
    let { title, body, email } = this.state;

    this.props.Actions.addComment({
      name: title,
      body: body,
      email: email,
      postId: +this.props.match.params.id
    });
    this.setState({ displayComments: false, title: "", body: "", email: "" });
  };

  render() {
    let { title, body, email, displayComments } = this.state;

    let [post] = this.props.posts.filter(
      post => post.id === +this.props.match.params.id
    );

    let [author] =
      post && post.id
        ? this.props.authors.filter(author => author.id === post.userId)
        : "";

    let postComments = this.props.comments
      ? this.props.comments
          .filter(comment => comment.postId === +this.props.match.params.id)
          .slice(0, 5)
          .map((comment, i) => (
            <div className="container" key={i}>
              <div className="card w-75">
                <div className="card-body">
                  <h5 className="card-title">
                    <p className="card-text">{comment.name}</p>
                    <p className="card-text">{comment.body}</p>
                    <p className="card-text">{comment.email}</p>
                  </h5>
                </div>
              </div>
            </div>
          ))
      : "";
    return (
      <div className="container">
        <img src={post_thumbnail} alt="post_thumbnail" id="post_thumbnail" />
        <h5 id="preview-title">{post ? post.title : ""}</h5>
        <p>{post ? post.body : ""}</p>

        <h6>
          <p>
            Author:
            {""}
            {author ? (
              <Link
                to={{ pathname: `/author/${author.name ? author.id : null}` }}
              >
                <p>{author.name}</p>
              </Link>
            ) : (
              " Anonymous User"
            )}
          </p>
        </h6>
        {displayComments ? (
          <div className="container">
            <div className="card">
              <div className="card-body">
                <form>
                  <fieldset>
                    <div className="form-group">
                      <label>Title: </label>
                      <input
                        type="text"
                        value={title}
                        onChange={e => this.textInputUpdate(e, "title")}
                      />
                    </div>
                    <div className="form-group">
                      <label>Body: </label>
                      <input
                        type="text"
                        value={body}
                        onChange={e => this.textInputUpdate(e, "body")}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email: </label>
                      <input
                        type="text"
                        value={email}
                        onChange={e => this.textInputUpdate(e, "email")}
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={e => this.submitForm(e)}
                      className="btn btn-primary btn-sm"
                      id="submit-btn"
                    >
                      Submit
                    </button>
                    <button
                      type="text"
                      onClick={this.closeCommentsForm}
                      className="btn btn-primary btn-sm"
                      id="submit-btn"
                    >
                      Cancel
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="submit"
            onClick={this.openCommentsForm}
            className="btn btn-primary btn-sm"
            id="submit-btn"
          >
            Add
          </button>
        )}
        <div className="row" id="comments-section">
          {postComments}
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
