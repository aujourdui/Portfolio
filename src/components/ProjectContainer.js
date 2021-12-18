import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./projects/ProjectItem";

const ProjectContainer = ({ data }) => (
  <div className="project-container">
    <ProjectItem data={data} />
  </div>
);

export default ProjectContainer;
