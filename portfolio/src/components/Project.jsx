import React from "react";

function Project({ title, desc, tools, img }) {
  return (
    <div class="grid-item">
      <img src={img} alt="project-image" />
      <div class="grid-item-bio">
        <div class="grid-item-bio-title">{title}</div>
        <div class="grid-item-bio-desc">{desc}</div>
        <div class="grid-item-bio-lan">{tools}</div>
      </div>
    </div>
  );
}

export default Project;
