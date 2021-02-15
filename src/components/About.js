import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about page-default">
        <h2>Hello there!</h2>
        <p>
          Thank you for visiting my page. My name is Daniel Papastratidis and I
          am a Software Developer.
        </p>
        <h4>About me</h4>
        <p>
          My foray into tech, started during the first UK lockdown in 2020. I
          had secured a place at the prestigious{" "}
          <a
            href="http://ironhack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ironhack
          </a>{" "}
          web dev bootcamp and due to being fourloughed, I suddenly had a lot of
          time on my hands. I used this opportunity to learn how to code,
          following courses from{" "}
          <a
            href="https://www.codecademy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            codecademy
          </a>{" "}
          and{" "}
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp.
          </a>{" "}
          I soon realised that this is the path I wanted to follow. That is when
          I started contemplating enrolling to a Computer Science MSc. In the
          end, I decided to opt for a Data Science degree, because although my
          goal is to be a software developer, I wanted the data related skills
          that would expand my stack and knowledge.
        </p>
        <img
          className="images"
          src="../images/daniel-presenting.jpeg"
          alt="Daniel presenting his final coursework"
        ></img>
        <p>
          In August 2020, I went to Berlin and started my bootcamp. It was a
          incredible, intense and very educational experience for 9 weeks, with
          a steep learning curve and it create a solid foundation for my future
          learning. These are among the skills I learned there:
          <ul classList="ironhack-stack">
            <li classList="stack-link">HTML/CSS</li>
            <li classList="stack-link">Responsive Web Design</li>
            <li classList="stack-link">Javascript/ReactJS</li>
            <li classList="stack-link">MongoDB</li>
            <li classList="stack-link">ExpressJS,NodeJS</li>
            <li classList="stack-link">REST API</li>
          </ul>{" "}
        </p>

        <img
          className="images"
          src="../images/java-code.png"
          alt="java code snippet"
        ></img>
        <p>
          On my return to the UK, I started my{" "}
          <a
            href="http://www.bbk.ac.uk/study/2021/postgraduate/programmes/TMSDATSC_C/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Master's degree
          </a>
          . This also proved to be an intense experience, that noticeably
          expanded my knowledge and tech stack. I was able to look behind the
          curtain and see <em>how</em> code works, rather than just calling it
          "magic". I learned about Turing machine, linked lists, distributed
          systems, about Big O notation and loads of other techno-buzzwords and
          concepts. One of the main skills I got, is the ability to understand
          more and learn more, faster. Having understood concepts like Object
          Oriented Programming, learning the languages is not that hard anymore
          and I am confident in my Java and Python. These are some of the
          tangible skills I have learned, with more to come:
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
        </p>
        <p>
          My learning does not stop there. Every day, I complete at least one
          challenge from{" "}
          <a
            href="http://www.codewars.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeWars
          </a>{" "}
          or{" "}
          <a
            href="http://www.hackerrank.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hackerrank
          </a>{" "}
          in order to increase my understanding of algorithms and problem
          solving cababilities. There is a full repository of challenges
          available to see on my{" "}
          <a
            href="https://github.com/idanpap/katas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          page.
        </p>
        <p>
          Before tech, I used to work in the tea industry as a taster, educator
          and seller in Germany and the UK.
        </p>
        <p>
          I hold a British and a Greek passport, so I am free to work in the UK
          and the EU.
        </p>
      </div>
    );
  }
}
