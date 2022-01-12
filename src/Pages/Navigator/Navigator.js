import React from "react";
import { Link } from "react-router-dom";

import "./Navigator.css";
const Navigator = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="menu">
              <Link to="/allPost">All Posts</Link>
              <Link className="" to="/article">
                Article
              </Link>
              <Link className="" to="/event">
                Event
              </Link>
              <Link className="" to="/education">
                Education
              </Link>
              <Link className="" to="/job">
                Jobs
              </Link>
            </div>
          </nav>
        </div>

        <div className="col-md-4">
          <div>
            <button className="btn">Write a post</button>
            <button className="btn">Create Group</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
