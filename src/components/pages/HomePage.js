import React from "react";
import { resumeDataList } from "../../resource/data";

const HomePage = () => (
  <div className="home">
    <div className="image-vancouver">
      <div className="introduce__container">
        <h1 className="name">{resumeDataList[0].name}</h1>
        <p className="introduce">{resumeDataList[0].intro}</p>
      </div>
    </div>
  </div>
);

export default HomePage;
