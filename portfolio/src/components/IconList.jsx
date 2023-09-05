import React from "react";
import Fade from "react-reveal/Fade";
import { icons } from "../data.js";

function IconList() {
  const renderedIcons = icons.map((icon) => {
    return (
      <div key={icon.name}>
        <Fade left delay={icon.delay}>
          <div className="icon flex items-center justify-center">
            <a
              className="tooltip"
              href={icon.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={icon.image} alt={icon.alt} className={icon.style} />
              <span>
                <h2>{icon.name}</h2>
              </span>
            </a>
          </div>
        </Fade>
      </div>
    );
  });

  return (
    <div className="items-center justify-center">
      <div className="icon-list w-9/12 grid grid-cols-6 gap-1 m-auto">
        {renderedIcons}
      </div>
    </div>
  );
}

export default IconList;
