import React from "react";
import selfportrait from "../assets/img/selfportrait.jpg";

function About() {
  return (
    <section id="aboutme" className="aboutme-section">
      <h2 className="page-headings reveal fade-bottom">&lt;/About Me&gt;</h2>
      <div className="inner">
        {/* <div className="inner-left reveal fade-bottom"> */}
        <div>
          <div>
            <p>
              Hey there! My name is Fred Hong. Currently, I am pursuing a
              Bachelor's Degree at York University for Computer Science. With
              this degree, I am seeking an entry-level developer internship that
              offers the opportunity for professional growth, as well as the
              experience from talented team members.
            </p>
            <p>
              With my knowledge and passion about innovative technology, it
              allows me to deliver a finer user-experience through software and
              tools. Moreover, I am always seeking for innovative and creative
              ways to get the job finished in an efficient and professional
              matter!
            </p>
            <p>
              I've previously worked as a self-employed tutor for compulsory
              courses required in a Computer Science/Software Engineer degree.
              This includes: Discrete Mathematics, Intro to Python, Intro to
              Java, Calc I & II, Data Structures and OOPs, & more. I'm currently
              open to internships/co-op's as a full-stack developer for 2023.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          <ul className="list-skills">
            <li>Java</li>
            <li>Python (Django)</li>
            <li>React</li>
            <li>SQL</li>
            <li>Jira</li>
            <li>Javascript</li>
          </ul>
        </div>
        {/* fixfade reveal later */}
        {/* <div className="inner-right reveal fade-right"> */}
        <div className="inner-right">
          <div className="wrapper">
            <img src={selfportrait} alt="self-portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
