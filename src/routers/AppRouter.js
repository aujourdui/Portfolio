import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import ProjectPage from "../components/ProjectPage";
import ProjectOnePage from "../components/projects/ProjectOnePage";
import ProjectTwoPage from "../components/projects/ProjectTwoPage";
import ProjectThreePage from "../components/projects/ProjectThreePage";
import ProjectFourPage from "../components/projects/ProjectFourPage";
import ProjectFivePage from "../components/projects/ProjectFivePage";
import ResumePage from "../components/ResumePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/project" component={ProjectPage} exact={true} />
        <Route path="/project/1" component={ProjectOnePage} />
        <Route path="/project/2" component={ProjectTwoPage} />
        <Route path="/project/3" component={ProjectThreePage} />
        <Route path="/project/4" component={ProjectFourPage} />
        <Route path="/project/5" component={ProjectFivePage} />
        <Route path="/resume" component={ResumePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
