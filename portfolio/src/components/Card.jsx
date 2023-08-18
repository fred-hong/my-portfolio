import React from "react";

function Card({ company, role, date, description, img }) {
  return (
    <div className="container">
      <div class="banner-img"></div>
      <div class="company-img-wrapper">
        <img src={img} alt="company-image" class="company-img" />
      </div>
      <p class="company-name">
        {role} @ <b>{company}</b>
      </p>
      <h4>{date}</h4>
      <p class="description">{description}</p>
    </div>
  );
}

export default Card;
