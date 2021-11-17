import React from "react";

const ProjectItemPage = (props) => {
  const { project, title, gitTitle, article, technology } = props;
  const linkPath = `https://github.com/aujourdui/${gitTitle}`;
  return (
    <div className="project-item">
      <h1>{project}</h1>
      <h2>{title}</h2>
      <h3>{article}</h3>
      <p>Technology: {technology}</p>
      <div>
        <a href={linkPath}>Github: {gitTitle}</a>
      </div>
    </div>
  );
};

export default ProjectItemPage;
