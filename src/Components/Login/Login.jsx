/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const diffToast = () => {
    toast("loggedIn Successfully!");
  };

  return (
    <>
      <center>
        <div className="container">
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-6">
              <form>
                <h3>Sign In</h3>
                <br />

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control text-secondary mb-"
                    placeholder="Enter email"
                  />
                </div>

                <br />

                <div className="form-group text-secondary mb-2">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={diffToast}
                >
                  LogIn
                </button>
                <ToastContainer
                  className="py-5"
                  position="top-center"
                  transition={Zoom}
                />
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </center>
      <ToastContainer />
    </>
  );
};

export default Login;
