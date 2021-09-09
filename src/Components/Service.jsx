/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Card from "./Card/Card";
import Sdata from "./Sdata";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                {Sdata.map((val, index) => {
                  return (
                    <Card key={index} imgscr={val.imgscr} title={val.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
