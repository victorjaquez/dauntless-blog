import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Post = props => {
  const titleCharacterLimit = props.post.title.slice(0, 15);
  const bodyCharacterLimit = props.post.body.slice(0, 30);

  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {props.post.title.length > 15
              ? `${titleCharacterLimit}...`
              : props.post.title}
          </h5>
          <p className="card-text">
            {props.post.body.length > 30
              ? `${bodyCharacterLimit}...`
              : props.post.body}
          </p>
          <Link
            className="btn btn-secondary btn-sm"
            to="/posts/:id"
            id="read-btn"
          >
            Read more. .
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
