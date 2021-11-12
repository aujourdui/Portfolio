import React from "react";
import { Link } from "react-router-dom";

const ProjectFourPage = () => (
  <div className="project-four">
    <h1>Project4</h1>
    <h2>Weather Project</h2>
    <p>This app can be searched the current weather by cityname</p>
    <div>
      <Link to="https://github.com/aujourdui?tab=repositories">Github</Link>
    </div>
  </div>
);

export default ProjectFourPage;
