/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    fullname: "",
    username: "",
    password: "",
    phone: "",
  });

  const [record, setRecord] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegister, id: new Date().getTime().toString() };

    setRecord([...record, newRecord]);

    setUserRegister({ fullname: "", username: "", password: "", phone: "" });
  };

  const diffToast = () => {
    toast("Registered Successfully!");
  };

  return (
    <>
      <center>
        <div className="container">
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-6">
              <form action="" onSubmit={handleSubmit}>
                <h2>Register Here</h2>
                <div className="form-group">
                  <label htmlFor="fullname" className="text-secondary mb-2">
                    FullName
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    value={userRegister.fullname}
                    onChange={handleInput}
                    name="fullname"
                    id="fullname"
                    className="form-control"
                  />
                </div>
                <br />

                <div className="form-group">
                  <label htmlFor="username" className="text-secondary mb-2">
                    Username
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    value={userRegister.username}
                    onChange={handleInput}
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>

                <br />

                <div className="form-group">
                  <label htmlFor="password" className="text-secondary mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    autoComplete="off"
                    value={userRegister.password}
                    onChange={handleInput}
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>

                <br />

                <div className="form-group">
                  <label htmlFor="phone" className="text-secondary mb-2">
                    Phone No
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    value={userRegister.phone}
                    onChange={handleInput}
                    name="phone"
                    id="phone"
                    className="form-control"
                  />
                </div>

                <br />

                <button
                  type="submit"
                  onClick={diffToast}
                  className="btn btn-primary btn-block"
                >
                  Register
                </button>
                <p className="forgot-password text-right">
                  Already registered?
                  <NavLink type="submit" to="/login">
                    log in
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </center>

      {/* <div>
        {record.map((currEle) => {
          return (
            <div className="showDataStyle">
              <p>{currEle.fullname}</p>
              <p>{currEle.username}</p>
              <p>{currEle.password}</p>
              <p>{currEle.password}</p>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Register;
