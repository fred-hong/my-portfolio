import React from "react";
import Project from "./Project";
import projects from "";

function Projects() {
  // const renderedProjects =

  return (
    <section id="projects" className="projects">
      {/* <section id="projects" class="projects reveal fade-bottom"> */}
      <h2 class="page-headings">&lt;/Projects&gt;</h2>
      <div class="grid-container">
        <div class="grid-item">
          <img src="./img/img-portfolio.PNG" />
          <div class="grid-item-bio">
            <div class="grid-item-bio-title">My Portfolio</div>
            <div class="grid-item-bio-desc">SHOWCASING MY WORK</div>
            <div class="grid-item-bio-lan">HTML | CSS | JS</div>
          </div>
        </div>
        <div class="grid-item">
          <img src="./img/img-portfolio.PNG" />
          <div class="grid-item-bio">
            <div class="grid-item-bio-title">Footwear Site</div>
            <div class="grid-item-bio-desc">E-COMMERCE FOR FOOTWEAR</div>
            <div class="grid-item-bio-lan">
              JS (React) | MongoDB | Express | Node.js
            </div>
          </div>
        </div>
        <div class="grid-item">
          <img class="img_contain" src="./img/eventproject.JPG" />
          <div class="grid-item-bio">
            <div class="grid-item-bio-title">Event Management System</div>
            <div class="grid-item-bio-desc">MANAGE VARIOUS EVENTS</div>
            <div class="grid-item-bio-lan">Java (Swift) | MySQL</div>
          </div>
        </div>
        <div class="grid-item">
          <img src="./img/calculator.JPG" />
          <div class="grid-item-bio">
            <div class="grid-item-bio-title">Calculator App</div>
            <div class="grid-item-bio-desc">SOLVE ARITHMETIC EXPRESSIONS</div>
            <div class="grid-item-bio-lan">Python (Tkinter)</div>
          </div>
        </div>
        <div class="grid-item">
          <img src="./img/img-portfolio.PNG" />
          <div class="grid-item-bio">
            <div class="grid-item-bio-title">My Portfolio</div>
            <div class="grid-item-bio-desc">SHOWCASING MY WORK</div>
            <div class="grid-item-bio-lan">HTML | CSS | JS</div>
          </div>
        </div>
        <div class="grid-item">
          <img src="./img/img-portfolio.PNG" />
          <div class="grid-item-bio">
            <div class="grid-item-bio-title">My Portfolio</div>
            <div class="grid-item-bio-desc">SHOWCASING MY WORK</div>
            <div class="grid-item-bio-lan">HTML | CSS | JS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
