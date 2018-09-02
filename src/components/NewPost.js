import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Actions from "../actions/actions";
import "../App.css";

class NewPost extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    let { title, body } = this.state;
    this.props.Actions.addPost({ userId: 0, title, body });
  }

  updateNew = ({ target: { value } }, field) => {
    field === "body"
      ? this.setState({ body: value })
      : this.setState({ title: value });
  };

  render() {
    let { title, body } = this.state;
    return (
      <div className="container">
        <div className="card w-75" id="new-post-card">
          <div className="card-header">
            <h2>Create new post</h2>
          </div>
          <div className="card-body">
            <form>
              <fieldset>
                <div className="form-group">
                  <label>
                    <b>Title: </b>
                  </label>
                  <input
                    type="text"
                    value={title}
                    className="form-control"
                    placeholder="What's your title?"
                    onChange={e => this.updateNew(e, "title")}
                  />
                </div>
                <div className="form-group">
                  <label>
                    <b>Body: </b>
                  </label>
                  <input
                    type="text"
                    value={body}
                    className="form-control"
                    placeholder="Write something . . . "
                    onChange={e => this.updateNew(e, "body")}
                  />
                </div>
                <Link to="/">
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-sm"
                    id="submit-btn"
                  >
                    Submit
                  </button>
                </Link>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewPost);
