import React from "react";
import Project from "./Project";
import { projects } from "../data.js";

function Projects() {
  const renderedProjects = projects.map((project) => {
    return (
      <Project
        title={project.title}
        desc={project.desc}
        tools={project.tools}
        img={project.img}
      />
    );
  });

  return (
    <section id="projects" className="projects">
      {/* <section id="projects" class="projects reveal fade-bottom"> */}
      <h2 class="page-headings">&lt;/Projects&gt;</h2>
      <div class="grid-container">{renderedProjects}</div>
    </section>
  );
}

export default Projects;
