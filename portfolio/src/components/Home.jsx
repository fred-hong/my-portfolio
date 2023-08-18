import React from "react";

function Home() {
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
          I am a<span id="ityped"></span>
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
          href="img/Resume22.pdf"
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
