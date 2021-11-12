import React from "react";

const ProjectItemPage = (props) => {
  const { project, title, article } = props;
  const linkPath = `https://github.com/aujourdui/${title}`;
  return (
    <div className="project-item">
      <h1>{project}</h1>
      <h2>{title}</h2>
      <p>{article}</p>
      <div>
        <a href={linkPath}>Github: {title}</a>
      </div>
    </div>
  );
};

export default ProjectItemPage;
