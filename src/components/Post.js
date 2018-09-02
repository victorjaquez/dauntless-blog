import React from "react";
import { Link } from "react-router-dom";
import user_icon from "../user_icon.png";
import "../App.css";

const Post = props => {
  let { post } = props;
  const titleCharacterLimit = props.post.title.slice(0, 15);
  const bodyCharacterLimit = props.post.body.slice(0, 30);

  return (
    <div className="row">
      <div className="card w-75 ">
        <div className="card-body">
          <h5 className="card-title">
            <img src={user_icon} alt="user icon" id="user-icon" />
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
            to={{ pathname: `/post/${post.id}` }}
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
