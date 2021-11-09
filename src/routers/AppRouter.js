import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import ProjectPage from "../components/ProjectPage";
import ProjectOnePage from "../components/ProjectOnePage";
import ProjectTwoPage from "../components/ProjectTwoPage";
import NotFoundPage from "../components/NotFoundPage";

// import { BrowserRouter, Route, Switch, Link, Navlink } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/project" component={ProjectPage} exact={true} />
        <Route path="/project/1" component={ProjectOnePage} />
        <Route path="/project/2" component={ProjectTwoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;