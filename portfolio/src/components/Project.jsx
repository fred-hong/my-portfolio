import React from "react";
import { GrGithub } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

function Project({ title, desc, tools, img, github_link }) {
  return (
    <div className="grid-item">
      <img src={img} alt="project" />
      <div className="grid-item-bio">
        <IconContext.Provider
          value={{
            style: {
              color: "#64ffda",
            },
          }}
        >
          <a
            href={github_link}
            className="mt-2"
            target="_blank"
            rel="noreferrer"
          >
            <GrGithub />
          </a>
        </IconContext.Provider>
        <div className="grid-item-bio-title">{title}</div>
        <div className="grid-item-bio-desc">{desc}</div>
        <div className="grid-item-bio-lan">{tools}</div>
      </div>
    </div>
  );
}

export default Project;
