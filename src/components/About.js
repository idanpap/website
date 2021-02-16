import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about page-default">
        <h1>About me</h1>
        <img
          id="daniel-presenting"
          src="../images/daniel-presenting.jpeg"
          alt="Daniel presenting"
        ></img>
        <p>
          My name is Daniel Papastratidis and I am a software developer,
          currently looking for a position in a company, from September-October
          2021.
        </p>
        <p>
          I love creating, enhancing and maintaning software that has the
          potential to make a difference to the world.
        </p>
        <p>
          My coding skills and knowledge are the result of self study, a web
          development bootcamp at{" "}
          <a
            href="http://ironhack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ironhack
          </a>{" "}
          and the result of my ongoing studies for my{" "}
          <a
            href="http://www.bbk.ac.uk/study/2021/postgraduate/programmes/TMSDATSC_C/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Master's degree
          </a>{" "}
          in Data Science . This combination of education models that mixes
          praxis with theory, has provided me the solid foundations needed
          launch a career as a software developer.
        </p>
        <h3>Tech Stack</h3>
        <section classList="stack">
          <div classList="stack-grouping" id="stack-grouping">
            <span classList="stack-link">HTML/CSS</span>
            <span classList="stack-link">Responsive Web Design</span>
            <span classList="stack-link">Javascript/ReactJS</span>
            <span classList="stack-link">MongoDB</span>
            <span classList="stack-link">ExpressJS,NodeJS</span>
          </div>
          <div classList="stack-grouping" id="stack-grouping">
            <span classList="stack-link">REST API</span>
            <span classList="stack-link">Python</span>
            <span classList="stack-link">Java</span>
            <span classList="stack-link">Django</span>
            <span classList="stack-link">Pandas</span>
          </div>
          <div classList="stack-grouping" id="stack-grouping">
            <span classList="stack-link">NoSQL</span>
            <span classList="stack-link">R</span>
            <span classList="stack-link">Linux environment and CLI</span>
            <span classList="stack-link">Apache Cassandra</span>
            <span classList="stack-link">JUnit</span>
          </div>
        </section>
        <p>
          Having been born in London and raised in Athens, I hold
          dual-citizenship, meaning I can work in both the EU and the UK. I
          received my BA in International Business Management from London South
          Bank University. Prior to my foray into tech, I worked in the tea
          industry as a taster, buyer and seller in Germany and the UK.
        </p>
        <p>
          In my free time, I like to read books and solve challenges platforms
          like CodeWars and Hackerrank. I enjoy staying fit, so I start most of
          my days with some yoga or HIIT exercises and I enjoy playing five a
          side football. Prior to the pandemic, I travelled abroad once every
          two months, as I love discovering new places and exploring different
          cultures. I speak fluent English and Greek and my German is at C1
          level. I am currently based in London, but I am flexible in terms of
          relocating for the right job.
        </p>
      </div>
    );
  }
}
