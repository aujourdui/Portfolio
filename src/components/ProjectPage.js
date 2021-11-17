import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => (
  <div className="project-container">
    <h1>Projects</h1>
    <div className="projects">
      <div className="project1">
        <Link to="/project/1">Project1</Link>
        <p>Portfolio</p>
      </div>
      <div className="project2">
        <Link to="/project/2">Project2</Link>
        <p>Cats' Community</p>
      </div>
      <div className="project3">
        <Link to="/project/3">Project3</Link>
        <p>Game Of Life</p>
      </div>
      <div className="project4">
        <Link to="/project/4">Project4</Link>
        <p>WeatherAPI App</p>
      </div>
      <div className="project5">
        <Link to="/project/5">Project5</Link>
        <p>Budget Management</p>
      </div>
    </div>
  </div>
);

export default ProjectPage;
