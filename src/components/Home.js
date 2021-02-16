import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="homepage page-default">
        <img
          className="images"
          src="../images/IH-AUG2020_Daniel_Papas(1).jpg"
          alt="My face"
        ></img>
        <h1 id="job-title">Daniel Papastratidis</h1>
        <h2 id="job-title">Software Developer</h2>
        <p>
          Full stack developer. Adaptable, curious, energetic and a fast
          learner, I am equally happy self-motivating and working in a team.
          Experienced in working in hands-on roles for SMEs.{" "}
        </p>
        <div className="container">
          <Link to="/about" className="btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stop-color="#e73beb" />
                  <stop offset="100%" stop-color="#e73beb" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>FIND OUT MORE ABOUT ME</span>
          </Link>
        </div>
      </div>
    );
  }
}
