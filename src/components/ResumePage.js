import React from "react";
import { skillList } from "../resource/data";

const ResumePage = () => {
  return (
    <div className="resume">
      <div className="background-container-first">
        <div className="introduce">
          <h1>Kyosuke Ito</h1>
          <p>I'm a front-end developer in Vancouver</p>
        </div>
        <div className="background-wrapper">
          <h1>Background</h1>
          <p className="comment">
            I have a strong communication skills because I had been a sales
            person for 6years.
            <br /> Moreover, I have a great passion and skills to make web
            applications and sites to help people more convenient and enrich
            their lives.
          </p>
        </div>
        <div className="skills">
          <h1>Skills for web-development</h1>
          <h2 className="soft-title">Soft skills</h2>
          <div className="soft-skills">
            {skillList[0].softSkillList.map((list, index) => (
              <span key={index}>{list}</span>
            ))}
          </div>
          <h2 className="technical-title">Technical skills</h2>
          <div className="technical-skills">
            {skillList[0].technicalSkillList.map((list, index) => (
              <span key={index}>{list}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="background-container-second">
        <div>
          <h1>Education</h1>
          <ul>
            <li>
              Bachelor of Liberal Arts, YOKOHAMA NATIONAL UNIVERSITY JAPANApr
              (2009 - Mar 2014)
            </li>
            <li>
              Web development, CICCC - Cornerstone International Community
              College of Canada (Sep 2021 - present)
            </li>
          </ul>
        </div>
        <div>
          <h1>Qualifications/Certificates</h1>
          <ul>
            <li>
              The Complete 2021 Web Development Bootcamp(Certificate on Udemy,
              Sep 2021)
            </li>
            <li>
              The Complete React Developer Course (W/ Hooks and Redux)
              (Certificate on Udemy, Oct 2021)
            </li>
            <li>
              Next.js & React - The Complete Guide (incl. Two Paths1)
              (Certificate on Udemy, Nov 2021)
            </li>
            <li>
              Understanding TypeScript 2021 Edition (Certificate on Udemy, Nov
              2021)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
