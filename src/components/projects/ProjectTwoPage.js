import React from "react";
import ProjectItemPage from "./ProjectItemPage";

const ProjectTwoPage = () => (
  <div>
    <ProjectItemPage
      project="Project2"
      title="Cats' Community"
      gitTitle="cats-community"
      article="This app is for people loving cats"
      technology="HTML, scss, React.js, firebase, Material UI"
      app="https://cats-community.firebaseapp.com/"
      appName="App"
    />
  </div>
);

export default ProjectTwoPage;
