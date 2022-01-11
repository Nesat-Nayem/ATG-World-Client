import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AllPost from "../AllPost/AllPost";
import Article from "../Article/Article";

import "./Navigator.css";
const Navigator = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="menu">
              <Link  to='/allPost'>
           
               All Posts
             
              </Link>
              <Link className="" to="/article">
                Active
              </Link>
              <Link className="" to="#">
                Event
              </Link>
              <Link className="" to="#">
                Education
              </Link>
              <Link className="" to="#">
                Jobs
              </Link>

              {/* <Routes>
                <Route path="/article" element={<Article />} />
                <Route path="/allPost" element={<AllPost />} />
              </Routes> */}
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
