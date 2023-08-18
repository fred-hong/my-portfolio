import React from "react";
import { experience } from "../data.js";
import Card from "./Card";

function Experience() {
  const renderedExperience = experience.map((exp) => {
    // edit the props
    return (
      <Card
        key={exp.title}
        company={exp.company}
        role={exp.role}
        date={exp.date}
        description={exp.description}
        img={exp.img}
      />
    );
  });

  return (
    // <section id = "experience" class="experience reveal fade-bottom">
    <section id="experience">
      <h2 class="page-headings">&lt;/Experience&gt;</h2>
      <div class="grid-wrapper">{renderedExperience}</div>
    </section>
  );
}

export default Experience;
