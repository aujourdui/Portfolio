import React, { useState } from "react";
import { resumeDataList } from "../../resource/data";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    // setTimeout(() => setIsLoading(false), 3000);
    setIsLoading(false);
  };

  return (
    <div className="home">
      <div
        className="image-vancouver"
        // style={{ display: isLoading ? "none" : "block" }}
        // onLoad={onLoad}
      >
        {/* <div
        className="image-placeholder"
        style={{ display: isLoading ? "block" : "none" }}
        onLoad={onLoad}
      > */}
        <div className="introduce__container">
          <h1 className="name">{resumeDataList[0].name}</h1>
          <p className="introduce">{resumeDataList[0].intro}</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default HomePage;
