import React from "react";

const PortfolioItem = (props) => {
  return (
    <article className="portfolio-item">
      <div className="portfolio-item-image">
        <img src={props.imgUrl} alt="" />
      </div>
      <h3>{props.heading}</h3>
      <div className="portfolio-item-cta">
        <a href={props.github} className="btn" target="_blank">
          GitHub
        </a>
        <a href={props.demo} className="btn btn-primary" target="_blank">
          Live demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
