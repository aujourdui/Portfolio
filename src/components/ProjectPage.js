import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = () => (
  <div className="project-container">
    <h1>Projects</h1>
    <div className="projects">
      <div className="project1">
        <Link to="/project/1">Project1</Link>
        <p>Cat's lovers community</p>
      </div>
      <div className="project2">
        <Link to="/project/2">Project2</Link>
        <p>Coming soon</p>
      </div>
    </div>
  </div>
);

export default ProjectPage;
