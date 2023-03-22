import React from "react";
import "./experience.scss";
import { BsFillPatchCheckFill } from "react-icons/bs";
const ExperienceBox = (props) => {
  return (
    <>
      <div className={props.className}>
        <h3>{props.heading}</h3>
        <div className="experience-content">
          {props.skills.map((item) => (
            <article className="experience-details" key={item.id}>
              <BsFillPatchCheckFill className="experience-details-icon" />
              <div>
                <h4>{item.skill}</h4>
                <small className="text-light">{item.level}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceBox;
