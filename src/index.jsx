import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./polyfills";
import App from "./App";
import style from "./index.module.css";
import registerServiceWorker from "./registerServiceWorker";
import i18n from "./i18next";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Router>
      <Provider store={store}>
        <App className={style.app} />
      </Provider>
    </Router>
  </I18nextProvider>,
  document.getElementById("root")
);
registerServiceWorker();
