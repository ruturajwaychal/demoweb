import React from "react";
import Home from "../Components/Home/Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "../Components/About/About";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/" />
        <Home />
      </Switch>
      <Footer />
    </>
  );
};

export default Landing;
