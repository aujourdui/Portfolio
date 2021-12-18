import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ data }) => {
  const baseImgPath = "/images/";
  return (
    <div className="project-item">
      {data.map((list) => (
        <div key={list.id}>
          <h4>
            <Link to={`/project/${list.title}`}>{list.title}</Link>
            <img src={`${baseImgPath}${list.imgPath}`} alt="Project" />
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
