import React from "react";
import selfportrait from "../assets/img/selfportrait.jpg";
import Fade from "react-reveal/Fade";
// import Zoom from "react-reveal/Zoom";
import iconReact from "../assets/img/react-icon.jpg";
import iconPython from "../assets/img/python-icon.jpg";
import iconJS from "../assets/img/js-icon.jpg";
import iconJava from "../assets/img/java-icon.jpg";
import iconHTML from "../assets/img/html-icon.jpg";
import iconCSS from "../assets/img/css-icon.jpg";

function About() {
  return (
    <section id="aboutme" className="aboutme-section">
      {/* <h2 className="page-headings reveal fade-bottom">&lt;/About Me&gt;</h2> */}
      <h2 className="page-headings">&lt;/About Me&gt;</h2>
      <div className="inner">
        {/* <div className="inner-left reveal fade-bottom"> */}
        <div className="inner-left">
          <div>
            <p>
              Hey! I am Fred Hong. Currently, I am pursuing an Honors BSc Degree
              at York University for Computer Science. With this degree, I am
              seeking an entry-level developer internship that offers the
              opportunity for professional growth, as well as the experience
              from talented team members.
            </p>
            <p>
              With my knowledge and passion about innovative technology, it
              allows me to deliver a finer user-experience through software and
              tools. Moreover, I am always seeking for innovative and creative
              ways to get the job finished in an efficient and professional
              matter!
            </p>
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
            <p>Here are a few technologies I've been working with recently:</p>
          </div>
          {/* insert space 
              also, fix code below
          */}
          <div className="items-center justify-center">
            <div className="w-9/12 grid grid-cols-6 gap-1 m-auto">
              <Fade left>
                <div className="icon flex items-center justify-center">
                  <a
                    className="tooltip"
                    href="https://react.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iconReact} alt="React" className=" w-10 h-9" />
                    <span>
                      <h2>React</h2>
                    </span>
                  </a>
                </div>
              </Fade>
              <Fade left delay={250}>
                <div className="icon flex items-center justify-center">
                  <a
                    className="tooltip"
                    href="https://docs.python.org/3/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iconPython} alt="Python" className="w-9 h-9" />
                    <span>
                      <h2>Python</h2>
                    </span>
                  </a>
                </div>
              </Fade>
              <Fade left delay={500}>
                <div className="icon flex items-center justify-center">
                  <a
                    className="tooltip"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iconJS} alt="JavaScript" className="w-9 h-9" />
                    <span>
                      <h2>JavaScript</h2>
                    </span>
                  </a>
                </div>
              </Fade>
              <Fade left delay={750}>
                <div className="icon flex items-center justify-center">
                  <a
                    className="tooltip"
                    href="https://dev.java/learn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iconJava} alt="Java" className="w-10 h-10" />
                    <span>
                      <h2>Java</h2>
                    </span>
                  </a>
                </div>
              </Fade>
              <Fade left delay={1000}>
                <div className="icon flex items-center justify-center">
                  <a
                    className="tooltip"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iconHTML} alt="HTML" className="w-9 h-9" />
                    <span>
                      <h2>HTML</h2>
                    </span>
                  </a>
                </div>
              </Fade>
              <Fade left delay={1250}>
                <div className="icon flex items-center justify-center">
                  <a
                    className="tooltip"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iconCSS} alt="CSS" className="w-9 h-9" />
                    <span>
                      <h2>CSS</h2>
                    </span>
                  </a>
                </div>
              </Fade>
            </div>
          </div>
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
