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
      <div className="w-full mt-2.5 mb-10 h-auto items-center align-middle justify-center">
        <h2 className="page-headings">&lt;/Experience&gt;</h2>
      </div>

      <div className="grid-wrapper">{renderedExperience}</div>
    </section>
  );
}

export default Experience;
