import React from "react";
import { Link } from "react-router-dom";

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
          Even though I had been a sales person for 6years, I had a strong
          interest for web development. So I have a great passion and skills to
          make web applications and sites to help people more convenient and
          enrich their lives.
        </p>
      </div>
      <div className="skills">
        <h1>Skills for web-development</h1>
        <h2>Soft skills</h2>
        <p>Negociation, presentation, critical thinking problem solving</p>
        <h2>technical skills</h2>
        <p>
          React Node.js Next.js Redux JavaScript TypeScript scss Github firebase
          MongoDB MySQL Vagrant Heroku Vercel
        </p>
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
      <div>
        <h1>Contact</h1>
        {/* <div>(236)833-8229</div>
        <div>kyosuke0215@gmail.com</div> */}
        <div>
          <Link to="https://github.com/aujourdui?tab=repositories">Github</Link>
        </div>
        <div>
          <Link to="https://www.linkedin.com/in/kyosuke-ito-506090a8/">
            Linkdin
          </Link>
        </div>
        <div>
          <Link to="https://medium.com/@kyosuke0215">Medium</Link>
        </div>
      </div>
    </div>
  </div>
);

export default ResumePage;
