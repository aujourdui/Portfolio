import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import HomePage from "../components/pages/HomePage";
import ProjectContainer from "../components/project/ProjectContainer";
import ProjectDetail from "../components/project/ProjectDetail";
import ResumePage from "../components/pages/ResumePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import Cursor from "../components/feature/Cursor";
import data from "../resource/data";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Cursor />
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/project" exact={true}>
            <ProjectContainer data={data} />
          </Route>
          <Route path="/project/:title">
            <ProjectDetail data={data} />
          </Route>
          <Route path="/resume" component={ResumePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default AppRouter;
