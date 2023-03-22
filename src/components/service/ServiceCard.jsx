import React from "react";
import "./service.scss";
import { BiCheck } from "react-icons/bi";
const ServiceCard = (props) => {
  return (
    <article className="service">
      <div className="service-head">
        <h3>{props.heading}</h3>
      </div>
      <ul className="service-list">
        {props.list.map((item, idx) => {
          return (
            <li key={idx}>
              <BiCheck className="service-list-icon" />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default ServiceCard;
