import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectContainer = ({ data }) => (
  <div className="project-container">
    <ProjectItem data={data} />
  </div>
);

export default ProjectContainer;
