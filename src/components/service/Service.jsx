import React from "react";
import "./service.scss";

import ServiceCard from "./ServiceCard";
const frontService = [
  "Designing and developing the layout of web pages or application screens using HTML, CSS, and JavaScript.",
  "Ensuring that web pages or application screens are responsive and can adapt to different screen sizes and devices.",
  "Optimizing website performance by reducing page load times and improving website speed.",
  "Debugging and troubleshooting issues with the frontend of a website or application.",
];
const backService = [
  "Creating and managing databases to store and retrieve data efficiently.",
  "Developing the server-side logic and API endpoints that allow frontend applications to communicate with the backend.",
  "Collaborating with frontend developers to ensure that the frontend and backend of the application are seamlessly integrated.",
  "Optimizing application performance by improving server-side code and database queries.",
];
const Service = () => {
  return (
    <section id="services">
      <h5>what I Offer</h5>
      <h2>Services</h2>
      <div className="container service-container">
        <ServiceCard heading="Front-End Development" list={frontService} />
        <ServiceCard heading="Back-End Development" list={backService} />
      </div>
    </section>
  );
};

export default Service;
