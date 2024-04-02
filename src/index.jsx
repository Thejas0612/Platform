import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./polyfills";
import App from "./App";
import style from "./index.module.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./index.css";

render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App className={style.app} />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
