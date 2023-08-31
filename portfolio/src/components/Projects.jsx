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
        github_link={project.github_link}
      />
    );
  });

  return (
    <section id="projects" className="projects">
      {/* <section id="projects" class="projects reveal fade-bottom"> */}
      <div className="w-full mt-2.5 mb-10 h-auto items-center align-middle justify-center">
        <h2 className="page-headings">&lt;/Projects&gt;</h2>
      </div>
      <div className="grid-container">{renderedProjects}</div>
    </section>
  );
}

export default Projects;
