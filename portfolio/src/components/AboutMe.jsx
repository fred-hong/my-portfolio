import React from "react";
import selfportrait from "../assets/img/selfportrait2.jpg";
import Fade from "react-reveal/Fade";
import IconList from "./IconList";
// import Zoom from "react-reveal/Zoom";
// import iconReact from "../assets/img/react-icon.jpg";
// import iconPython from "../assets/img/python-icon.jpg";
// import iconJS from "../assets/img/js-icon.jpg";
// import iconJava from "../assets/img/java-icon.jpg";
// import iconHTML from "../assets/img/html-icon.jpg";
// import iconCSS from "../assets/img/css-icon.jpg";

function About() {
  return (
    <section id="aboutme" className="aboutme-section">
      {/* <h2 className="page-headings reveal fade-bottom">&lt;/About Me&gt;</h2> */}
      <div className="w-full mt-2.5 mb-10 h-auto items-center align-middle justify-center block text-center">
        <Fade bottom distance="50px">
          <h2 className="page-headings">&lt;/About Me&gt;</h2>
        </Fade>
      </div>
      {/* <h2 className="page-headings">&lt;/About Me&gt;</h2> */}
      <div className="inner">
        {/* <div className="inner-left reveal fade-bottom"> */}
        <div className="inner-left">
          <div>
            <Fade up distance="50px">
              <p>
                Hi there, thanks for stopping by! My name is Fred and I am a 4th
                year student with Honors in Computer Science at York University.
                With this degree, I am seeking an entry-level developer
                internship that offers the opportunity for professional growth,
                as well as the experience from talented team members.
              </p>
            </Fade>
            <Fade delay={100} up distance="50px">
              <p>
                With my knowledge and passion about innovative technology, it
                allows me to deliver a finer user-experience through software
                and tools. Moreover, I am always seeking for innovative and
                creative ways to get the job finished in an efficient and
                professional matter!
              </p>
            </Fade>
            <Fade delay={200} up distance="50px">
              <p>
                {/* Previously, I worked as a Full-Stack Developer Intern at LDRS
              Investments Inc where I worked with React & Django to build a
              fully functional EAOS (Executive Assistant Operative Software)
              Additionally, I worked as a self-employed tutor for compulsory
              courses often required in a Computer Science degree. This
              includes: Discrete Mathematics, Intro to Python & Java, Calc I &
              II, Data Structures and OOPs. */}
                I'm currently open to internships/co-op's as a Full-Stack
                Developer for Winter/Summer 2024.
              </p>
            </Fade>
            <Fade delay={300} up distance="50px">
              <p>
                Here are a few of my skills that I've been working on recently:
              </p>
            </Fade>
          </div>
          <br />
          <IconList />
        </div>
        {/* fixfade reveal later */}
        {/* <div className="inner-right reveal fade-right"> */}
        <div className="inner-right">
          <Fade right distance="50px">
            <div className="wrapper">
              <img src={selfportrait} alt="self-portrait" />
            </div>
            <div>
              <p className="font-light text-sm mt-1 text-center">
                <i>My first hike at Tobermory, ON!</i>
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
