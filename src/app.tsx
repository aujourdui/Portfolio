import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import MouseContextProvider from "./context/mouse-context";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <MouseContextProvider>
    <AppRouter />
  </MouseContextProvider>,
  document.getElementById("app")
);
