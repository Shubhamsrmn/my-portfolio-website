import React from "react";
import "./experience.scss";
import ExperienceBox from "./ExperienceBox";
const Experience = () => {
  const frontendSkills = [
    {
      id: 1,
      skill: "HTML",
      level: "experienced",
    },
    { id: 2, skill: "CSS", level: "experience" },
    { id: 3, skill: "JavaScipt", level: "experience" },
    { id: 4, skill: "React", level: "experience" },
    { id: 5, skill: "Next.js", level: "experience" },
    { id: 6, skill: "Scss/Sass", level: "experience" },
    { id: 7, skill: "TypeScript", level: "experience" },
  ];
  const backendSkills = [
    { id: 1, skill: "mongoDb", level: "experience" },
    { id: 2, skill: "Node.js", level: "experience" },
    { id: 3, skill: "Express.js", level: "experience" },
    { id: 4, skill: "Java", level: "experience" },
  ];
  return (
    <section id="experience">
      <h5>What skills I Have</h5>
      <h2>My Experiance</h2>
      <div className="container experience-container">
        <ExperienceBox
          className="exprience-frontend"
          skills={frontendSkills}
          heading="FrontEnd Development"
        />
        <ExperienceBox
          className="exprience-backend"
          skills={backendSkills}
          heading="BackEnd Development"
        />
      </div>
    </section>
  );
};

export default Experience;
