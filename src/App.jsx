import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuData } from "./containers/landing/landingPageCards";
import { Header } from "./components/dynamic-ui/uiComponentsConfig";
import Landing from "./containers/landing/Landing";
import "@emerson/dynamic-ui/dist/emerson-ui.css";
import UiLayout from "./containers/layout/UiLayout";

const App = () => {
  const reduxStore = useSelector((state) => state);
  console.log("Redux-store", reduxStore);

  return (
    <Router>
      <Header
        menuData={menuData}
        isAuthenticated={false}
        title="MSOL PA PLATFORM"
        logo="https://www.emerson.com/resource/blob/emerson-logo-compressed--data-5576584.png"
      />
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/platform" exact={true} component={UiLayout} />
      </Switch>
    </Router>
  );
};
export default App;
