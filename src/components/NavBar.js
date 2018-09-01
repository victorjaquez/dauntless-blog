import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Dauntless
        </Link>
        <Link to="/" className="btn btn-secondary" id="home-btn">
          Home
        </Link>
        <Link to="/post/new" className="btn btn-secondary " id="create-btn">
          Create Post
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
