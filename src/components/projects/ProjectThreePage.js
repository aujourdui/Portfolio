import React from "react";
import ProjectItemPage from "./ProjectItemPage";

const ProjectThreePage = () => (
  <div>
    <ProjectItemPage
      project="Project3"
      title="WeatherAPI App"
      gitTitle="weatherAPI-app"
      article="This app can be searched the current weather by city name"
      technology="Node.js, Express, heroku"
    />
  </div>
);

export default ProjectThreePage;
