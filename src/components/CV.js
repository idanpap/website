import React, { Component } from "react";

export default class CV extends Component {
  render() {
    return (
      <div className="cv-container">
        <img
          className="cv-img"
          src="../images/daniel-cv.jpg"
          alt="Daniel CV"
        ></img>

        <div className="container">
          <a
            href="../DanielPapastratidisCV.pdf"
            download="DanielPapastratidisCV"
            className="cv-download btn"
          >
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
            <span>DOWNLOAD CV</span>
          </a>
        </div>
      </div>
    );
  }
}
