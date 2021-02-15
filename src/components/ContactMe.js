import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.textContent = null;
    this.state = {
      copied: false,
    };
  }

  copyToClipboard = async (e) => {
    window.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(this.textContent);
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    this.setState({ copied: true });
  };

  initRef = (c) => (this.textContent = c);

  render() {
    const { copied } = this.state;
    return (
      <div className="contact-me page-default">
        <div className="contact-details">
          <a
            href="https://www.linkedin.com/in/idanpap1/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn Profile
          </a>
          <a
            href="http://github.com/idanpap"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Github Profile
          </a>
        </div>
        <div>
          <div className="container">
            <p>Click on the button below to copy my email address</p>
            <p
              onClick={this.copyToClipboard}
              ref={this.initRef}
              className="cv-download btn span-email"
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
              <span className="span-email">daniel.papastratidis@gmail.com</span>
            </p>
          </div>
          {copied && <p>Text copied to clipboard</p>}
        </div>
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Conta />, rootElement);
