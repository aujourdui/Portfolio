import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ data }) => {
  const baseImgPath = "/images/";
  return (
    <div className="project-item">
      {data.map((list) => (
        <div className="project-item__wrapper" key={list.id}>
          <h4>
            <Link to={`/project/${list.title}`}>{list.title}</Link>
          </h4>
          <img src={`${baseImgPath}${list.imgPath}`} alt="Project" />
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
