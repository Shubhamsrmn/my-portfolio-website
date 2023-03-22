import React from "react";
import "./about.scss";
const AboutCard = (props) => {
  const { Icon, heading, text } = props;
  return (
    <>
      <article className="about-card">
        <Icon className="about-icon" />
        <h5>{heading}</h5>
        <small>{text}</small>
      </article>
    </>
  );
};

export default AboutCard;
