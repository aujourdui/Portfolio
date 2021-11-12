import React from "react";
import { Link } from "react-router-dom";

const ProjectThreePage = () => (
  <div className="project-one">
    <h1>Project3</h1>
    <h2>Game Of Life</h2>
    <p>This app is conway's game app algorithm</p>
    <div>
      <Link to="https://github.com/aujourdui?tab=repositories">Github</Link>
    </div>
  </div>
);

export default ProjectThreePage;
