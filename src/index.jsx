import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./polyfills";
import App from "./App";
import style from "./index.module.css";
import registerServiceWorker from "./registerServiceWorker";
import i18n from "./i18next";
import { I18nextProvider } from "react-i18next";


ReactDOM.render(
  <Router>
    <App className={style.app} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
