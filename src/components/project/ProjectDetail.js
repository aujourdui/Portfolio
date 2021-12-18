import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ data }) => {
  const { title } = useParams();
  const linkPathCode = "https://github.com/aujourdui/";
  return (
    <div>
      <div>
        {data
          .filter((list) => list.title === title)
          .map((list) => (
            <div key={list.id}>
              <h1>{list.title}</h1>
              <h2>{list.article}</h2>
              <p>Technology: {list.technology}</p>
              <div>
                <a href={`${linkPathCode}${list.gitTitle}`}>Code</a>
              </div>
              <div>
                <a href={list.app}>{list.appName}</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
