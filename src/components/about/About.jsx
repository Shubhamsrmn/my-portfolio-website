import React from "react";
import aboutme from "../../assets/about-me.JPG";
import { FiAward } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";
import "./about.scss";
import AboutCard from "./AboutCard";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={aboutme} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <AboutCard Icon={FiAward} heading="Experience" text="Fresher" />
            <AboutCard
              Icon={VscFolderActive}
              heading="Projects"
              text="5+ Completed"
            />
          </div>
          <p>
            I'm a versatile and skilled professional who can handle a wide range
            of web development tasks, from designing responsive user interfaces
            to creating robust back-end systems. I am capable of working
            independently or as part of a team, and I always looking for new
            challenges and opportunities to expand my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
