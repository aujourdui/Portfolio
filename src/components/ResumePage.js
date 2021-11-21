import React from "react";

const ResumePage = () => (
  <div className="resume">
    <div className="introduce">
      <h1>Kyosuke Ito</h1>
      <p>I'm a front-end developer in Vancouver</p>
    </div>
    <div className="background-container">
      <div>
        <h1>Background</h1>
        <p className="comment">
          I have a strong communication skills because I had been a sales person
          for 6years. I have a great passion and skills to make web applications
          and sites to help people more convenient and enrich their lives.
        </p>
      </div>
      <div className="skills">
        <h1>Skills for web-development</h1>
        <h2 className="soft-title">Soft skills</h2>
        <div className="soft-skills">
          <span>Leadership</span>
          <span>Collaboration</span>
          <span>Communication</span>
          <span>Critical Thinking</span>
          <span>Creativity</span>
          <span>Organization Skills</span>
          <span>Enthusiasm</span>
          <span>Work Ehic</span>
          <span>Problem Solving</span>
        </div>
        <h2 className="technical-title">Technical skills</h2>
        <div className="technical-skills">
          <span>React</span>
          <span>Node.js</span>
          <span>Next.js</span>
          <span>Redux</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>scss</span>
          <span>Github</span>
          <span>firebase</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>Webpack</span>
          <span>Jest</span>
          <span>Ensyme</span>
          <span>Vagrant</span>
          <span>Heroku</span>
          <span>Vercel</span>
        </div>
      </div>
      <div>
        <h1>Education</h1>
        <ul>
          <li>
            Bachelor of Liberal Arts, YOKOHAMA NATIONAL UNIVERSITY 　JAPAN（Apr
            2009 - Mar 2014)
          </li>
          <li>
            Web development, CICCC - Cornerstone International Community College
            of Canada (Sep 2021 - present)
          </li>
        </ul>
      </div>
      <div>
        <h1>Qualifications/Certificates</h1>
        <ul>
          <li>
            The Complete 2021 Web Development Bootcamp(Certificate on Udemy, Sep
            2021)
          </li>
          <li>
            The Complete React Developer Course (W/ Hooks and Redux)
            (Certificate on Udemy, Oct 2021)
          </li>
          <li>
            Next.js & React - The Complete Guide (incl. Two Paths1) (Certificate
            on Udemy, Nov 2021)
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

export default ResumePage;
