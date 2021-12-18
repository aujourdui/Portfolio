import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = ({ data }) => {
  const { title } = useParams();
  return (
    <div>
      <div>
        {data
          .filter((list) => list.title === title)
          .map((list) => (
            <div key={list.id}>
              <h2>Title: {list.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
