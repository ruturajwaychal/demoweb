/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/About/About.css";
// import web from "../../src/images/logo.svg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h3>
                    {props.name}
                    <strong className="brand-name"> RiserTechub </strong>
                  </h3>
                  <h5 className="my-3 about">
                    Riser Techub was born out of an idea to create a place where
                    a person could find solutions to all their software needs in
                    one place, under one roof.
                  </h5>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-1 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
