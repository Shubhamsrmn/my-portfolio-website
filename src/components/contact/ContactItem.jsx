import React from "react";
import "./contact.scss";
const ContactItem = (props) => {
  return (
    <article className="contact-option">
      <props.data.icon className="contact-option-icon" />
      <h4>{props.data.type}</h4>
      <h5>{props.data.subtype}</h5>
      <a href={props.data.link} target="_blank">
        Send a Message
      </a>
    </article>
  );
};

export default ContactItem;
