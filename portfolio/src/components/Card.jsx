import React from "react";

function Card({ company, role, date, description, img }) {
  return (
    <div className="container">
      <div className="banner-img"></div>
      <div className="company-img-wrapper">
        <img src={img} alt="company" className="company-img" />
      </div>
      <p className="company-name">
        {role} @ <b>{company}</b>
      </p>
      <h4>{date}</h4>
      <p className="description">{description}</p>
    </div>
  );
}

export default Card;
