import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../../../src/images/aa.jpg";
import Common from "../Common";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
