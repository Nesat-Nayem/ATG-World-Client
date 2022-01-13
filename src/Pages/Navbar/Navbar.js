import React, { useState } from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../../Firebase/firebase.insialize";

const Navbar = () => {
  initializeAuthentication();
  const provider = new GoogleAuthProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((res) => {
      const user = res.user;
      console.log(user);
    });
  };
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).then((res) => {
    const user = res.user;
    console.log(user);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img src={logo} alt="" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex  ms-auto searchBar form_style">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Create account{" "}
                </a>
              </li>
            </ul>

            <button
              type="text"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              It's free
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Login Form
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                      {/* <div class="mb-3">
                        <label for="name" class="Name">
                          Name:
                        </label>
                        <input
                          type="name"
                          class="form-control"
                          onBlur={nameChange}
                          id="Name"
                          required="true"
                        />
                      </div> */}

                      <div class="mb-3">
                        <label for="email" class="Email">
                          Email:
                        </label>

                        <input
                          type="email"
                          class="form-control"
                          onBlur={emailChange}
                          id="Email"
                          required="true"
                        />
                      </div>

                      <div class="mb-3">
                        <label for="password" class="password">
                          Password:
                        </label>
                        <input
                          type="password"
                          onBlur={changePassword}
                          class="form-control"
                          id="Password"
                          required
                        />
                        <input
                          className="submit-btn btn btn-danger mt-3"
                          type="submit"
                          value="Log In"
                        />
                      </div>
                    </form>

                    <h5 className="my-3">---------OR---------</h5>
                    <button className="buttonStyle" onClick={signInWithGoogle}>
                    <i class="fab fa-google color"></i> Sign In With Google
                    </button>
                    <button className="buttonStyle">
                    <i class="fab fa-facebook-f colorF"></i>  Sign In With Facebook
                    </button>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
