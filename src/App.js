import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import CV from "./components/CV";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import SideBar from "./components/SideBar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Route exact path="/" component={Home} />
        {<Route exact path="/about" component={About} />}
        {<Route exact path="/cv" component={CV} />}
        {<Route exact path="/projects" component={Projects} />}
        {<Route exact path="/contact-me" component={ContactMe} />}
      </div>
    );
  }
}
