import React from "react";

function Card({ company, role, date, description, img }) {
  return (
    <div className="container">
      <div className="banner-img"></div>
      <div className="company-img-wrapper">
        <img src={img} alt="company" className="company-img" />
      </div>
      <p className="company-name">
        <b>{role}</b>
        <br />
        {company}
      </p>
      <h4>{date}</h4>
      <p className="description">{description}</p>
    </div>
  );
}

export default Card;
