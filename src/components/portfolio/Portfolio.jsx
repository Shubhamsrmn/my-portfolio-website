import React from "react";
import "./portfolio.scss";
import PortfolioItem from "./PortfolioItem";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: project2,
      github: "https://github.com/Shubhamsrmn/movies-shows-webiste",
      heading: "Movies & TV-Shows app",
      demo: "https://movies-shows-webiste.vercel.app/",
    },
    {
      id: 2,
      image: project1,
      github: "https://github.com/Shubhamsrmn/MoviesBookingApp",
      demo: "https://shubhamsrmn.github.io/MoviesBookingApp/",
      heading: "The Movie Booking App",
    },
    {
      id: 3,
      image: project3,
      github: "https://github.com/Shubhamsrmn/Tic-Tac-Toe-Game",
      demo: "https://shubhamsrmn.github.io/Tic-Tac-Toe-Game/",
      heading: "Tic Tac Toe Game",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {projects.map((project) => {
          return (
            <PortfolioItem
              key={project.id}
              imgUrl={project.image}
              heading={project.heading}
              demo={project.demo}
              github={project.github}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
