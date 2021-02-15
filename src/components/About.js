import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about page-default">
        <h2>About me</h2>
        <a href="http://ironhack.com" target="_blank" rel="noopener noreferrer">
          Ironhack
        </a>{" "}
        <p>
          <ul classList="ironhack-stack">
            <li classList="stack-link">HTML/CSS</li>
            <li classList="stack-link">Responsive Web Design</li>
            <li classList="stack-link">Javascript/ReactJS</li>
            <li classList="stack-link">MongoDB</li>
            <li classList="stack-link">ExpressJS,NodeJS</li>
            <li classList="stack-link">REST API</li>
          </ul>{" "}
        </p>
        <a
          href="http://www.bbk.ac.uk/study/2021/postgraduate/programmes/TMSDATSC_C/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Master's degree
        </a>
        <ul classList="ironhack-stack">
          <li classList="stack-link">Python</li>
          <li classList="stack-link">Java</li>
          <li classList="stack-link">Django</li>
          <li classList="stack-link">Pandas</li>
          <li classList="stack-link">NoSQL</li>
          <li classList="stack-link">R</li>
          <li classList="stack-link">Linux environment and CLI</li>
          <li classList="stack-link">Apache Cassandra</li>
        </ul>
      </div>
    );
  }
}
