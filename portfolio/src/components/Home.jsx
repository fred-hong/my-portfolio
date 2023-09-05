import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Resume from "../assets/img/Resume.pdf";

function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      strings: [
        "Full-Stack Developer",
        "Software Engineer",
        "Database Administrator",
      ],
      showCursor: true,
      typeSpeed: 80,
      backSpeed: 70,
      backDelay: 1000,
    });
  }, []);

  return (
    <section id="home" className="first-section">
      <div className="first-small-header">
        <h1 className="init-fade">Hi, my name is</h1>
      </div>
      <div className="main-header">
        <h2 className="big-heading init-fade">Fred Hong.</h2>
      </div>
      <div className="sub-header">
        <h3 className="big-heading init-fade">
          I am a <span ref={textRef}></span>
        </h3>
      </div>
      <div className="header-p">
        <p className="init-fade">
          A 3rd year <b>Computer Science</b> student specializing in building
          exceptional user experiences through my passion for{" "}
          <b>web development</b>, <b>software engineering</b> and{" "}
          <b>database administrating</b>.
        </p>
      </div>
      <div className="home-button-wrapper">
        <a
          className="home-buttons init-fade"
          href={Resume}
          target="_blank"
          rel="noreferrer"
        >
          My Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
