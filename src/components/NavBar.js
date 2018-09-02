import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" id="logo">
          Dauntless
        </Link>
        <Link to="/" className="navbar-brand" id="home-btn">
          Home
        </Link>
        <Link
          to="/post/new"
          className="navbar-brand btn btn-secondary"
          id="create-btn"
        >
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
