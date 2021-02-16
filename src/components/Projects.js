import React, { Component } from "react";

export default class Projects extends Component {
  render() {
    return (
      <div className="page-default">
        <h2>Projects</h2>
        <aside id="projects-container">
          <div id="project-div">
            <a
              href="http://kunstme.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="project-title"
            >
              Kunst.Me
            </a>
            <p>
              Kunst.Me is a platform for people to book art classes. It is the
              second project I had to complete at Ironhack, together with a
              co-coder. It allows users to log in and view art classes uploaded
              by local artists and book a place, together with a group of
              friends on a specific date. This platform was build using
              Javascript and Handlebars, NodeJS with SCSS used for styling.
            </p>
          </div>
          <div id="project-div">
            <a
              href="https://barouche.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="project-title"
            >
              Barouche
            </a>
            <p>
              Barouche is the third project from the Ironhack bootcamp. This was
              the result of a collabaration between me and two more students. We
              created a tandem language learning platform with features such as
              a matching function, a schedule function, video call, live chat,
              screen sharing and conversation topic suggestions. We used
              JavaScript, React,expressJS,socket.io, WebRTC, NodeJS and CSS for
              this project.
            </p>
          </div>
        </aside>
      </div>
    );
  }
}
