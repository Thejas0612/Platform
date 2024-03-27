import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./polyfills";
import App from "./App";
import style from "./index.module.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles'
import './index.css'

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App className={style.app} />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
