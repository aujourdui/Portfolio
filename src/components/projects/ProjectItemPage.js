import React from "react";

const ProjectItemPage = ({
  project,
  title,
  gitTitle,
  article,
  technology,
  app,
  appName,
}) => {
  const linkPathCode = `https://github.com/aujourdui/${gitTitle}`;
  return (
    <div className="project-item">
      <h1>{project}</h1>
      <h2>{title}</h2>
      <h3>{article}</h3>
      <p>Technology: {technology}</p>
      <div>
        <a href={linkPathCode}>Code</a>
      </div>
      <div>
        <a href={app}>{appName}</a>
      </div>
    </div>
  );
};

export default ProjectItemPage;
