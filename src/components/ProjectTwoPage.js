import React from "react";
import { Link } from "react-router-dom";

const ProjectTwoPage = () => (
  <div className="project-two">
    <h1>Project2</h1>
    <h2>Cats' Community</h2>
    <p>This app is for people who love cats!!</p>
    <div>
      <Link to="https://github.com/aujourdui?tab=repositories">Github</Link>
    </div>
  </div>
);

export default ProjectTwoPage;
