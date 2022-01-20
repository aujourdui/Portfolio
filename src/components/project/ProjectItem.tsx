import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MouseContext } from "../../context/mouse-context";

const ProjectItem = ({ data }) => {
  const baseImgPath = "/images/";
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="project-item">
      {data.map((list) => (
        <div className="project-item__wrapper" key={list.id}>
          <div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Link
              className="project-link__wrapper"
              to={`/project/${list.title}`}
            >
              {list.title}
              <img
                className="project-image"
                src={`${baseImgPath}${list.imgPath}`}
                alt="Project"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectItem;
