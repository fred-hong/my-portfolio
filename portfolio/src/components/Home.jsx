import React, { useEffect, useRef } from "react";
import { init } from "ityped";

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
    <section id="home" class="first-section">
      <div class="first-small-header">
        <h1 class="init-fade">Hi, my name is</h1>
      </div>
      <div class="main-header">
        <h2 class="big-heading init-fade">Fred Hong.</h2>
      </div>
      <div class="sub-header">
        <h3 class="big-heading init-fade">
          I am a <span ref={textRef}></span>
        </h3>
      </div>
      <div class="header-p">
        <p class="init-fade">
          A 3rd year <b>Computer Science</b> student specializing in building
          exceptional user experiences through my passion for{" "}
          <b>web development</b>, <b>software engineering</b> and{" "}
          <b>database administrating</b>.
        </p>
      </div>
      <div>
        <a
          class="home-buttons init-fade"
          href="../assets/img/Resume 2023.pdf"
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
