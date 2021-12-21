import React from "react";
import { resumeDataList } from "../resource/data";

const ResumePage = () => {
  return (
    <div className="resume">
      <div className="background-container-first">
        <div className="introduce">
          <h1>{resumeDataList[0].name}</h1>
          <p>{resumeDataList[0].intro}</p>
        </div>
        <div className="background-wrapper">
          <h1>Background</h1>
          {resumeDataList[0].background.split("\n").map((str, index) => (
            <p key={index} className="comment">
              {str}
            </p>
          ))}
        </div>
        <div className="skills">
          <h1>Skills for web-development</h1>
          <h2 className="soft-title">Soft skills</h2>
          <div className="soft-skills">
            {resumeDataList[1].softSkillList.map((list, index) => (
              <span key={index}>{list}</span>
            ))}
          </div>
          <h2 className="technical-title">Technical skills</h2>
          <div className="technical-skills">
            {resumeDataList[1].technicalSkillList.map((list, index) => (
              <span key={index}>{list}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="background-container-second">
        <div>
          <h1>Education</h1>
          <ul>
            {resumeDataList[0].education.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Qualifications/Certificates</h1>
          <ul>
            {resumeDataList[0].qualifications.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
