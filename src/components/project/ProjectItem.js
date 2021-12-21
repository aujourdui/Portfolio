import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ data }) => {
  const baseImgPath = "/images/";
  return (
    <div className="project-item">
      {data.map((list) => (
        <div className="project-item__wrapper" key={list.id}>
          <Link className="project-link__wrapper" to={`/project/${list.title}`}>
            {list.title}
            <img
              className="project-image"
              src={`${baseImgPath}${list.imgPath}`}
              alt="Project"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
