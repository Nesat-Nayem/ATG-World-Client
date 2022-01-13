import React, { useEffect, useState } from "react";
import "./AllPost.css";
const AllPost = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allPost")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <div className="container">
      <div className="row">
        {services?.map((post) => (
          <div className="col-md-8">
            <div className="card">
              <img src={post?.img} alt="" />
              <div className="card-body">
                <div className="writing">
                  <img
                    className="article"
                    src="https://i.ibb.co/Hh2bq49/Article.png"
                    alt=""
                  />
                  <p>
                    <i className="fas fa-ellipsis-h"></i>
                  </p>
                </div>
                <h5 className="card-title">{post.Title}</h5>
                <p className="card-text">{post.Description}</p>
              </div>
              <div className="d-flex justify-content-between space">
                <div className="card-Footer">
                  <img src={post?.manImg} alt="" />
                  <p>{post.name}</p>
                </div>
                <div className="d-flex">
                  <p className="viewStyle">
                    <i className="fas fa-eye"></i> 1.4k views
                  </p>
                  <h4 className="">
                    <i className="fas fa-share-alt shareBg"></i>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default AllPost;
