import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ data }) => {
  const { title } = useParams();
  const linkPathCode = "https://github.com/aujourdui/";
  const baseImgPath = "/images/";
  return (
    <div className="projectDetail__container">
      <div>
        {data
          .filter((list) => list.title === title)
          .map((list) => (
            <div className="projectDetail__wrapper" key={list.id}>
              <h1 className="project__content">{list.title}</h1>
              <h2 className="project__content">{list.article}</h2>
              <h3 className="project__content">{list.addInfo}</h3>
              <img src={`${baseImgPath}${list.imgDetailPath}`} alt="Project" />
              <p className="project__content">Technology: {list.technology}</p>
              <div className="detailLink__wrapper">
                <div className="project__content">
                  <a href={`${linkPathCode}${list.gitTitle}`}>Code</a>
                </div>
                <div className="project__content">
                  <a href={list.app}>{list.appName}</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
