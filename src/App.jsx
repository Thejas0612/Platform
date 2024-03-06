import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { menuData } from "./ui/templates/Landing/landingPageCards";
import { Header } from "./ui/dynamic-ui/uiComponentsConfig";
import Landing from "./ui/templates/Landing";
import "@emerson/dynamic-ui-public/dist/emerson-ui.css";
import UiLayout from "./ui/templates/Layout";
import ProcessCondition from "./ui/templates/screens/ProcessCondition/ProcessCondition";
//Hi
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
        <Route path="/process-condition" exact={true} component={ProcessCondition} />
      </Switch>
    </Router>
  );
};
export default App;
