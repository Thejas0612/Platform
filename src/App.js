import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./containers/styles/customStyle.css";
// import "@emerson/dynamic-ui/dist/emerson-ui.css";
import Home from "./components/pages/Home";
import UiBuilder from "./components/pages/UiBuilder";
import UiBuilderAdapter from "./components/pages/UiBuilderAdapter";
import UiDashboard from "./components/pages/UiDashboard";
import Accordion from "./components/pages/Accordion";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* standard UI component */}
          <Route exact path="/" component={UiDashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/accordion" component={Accordion} />
          {/* Dynamic UI component route */}
          <Route path="/dynamicui" component={UiBuilder} />
          {/* Adapter UI component route */}
          <Route path="/pilot" component={UiBuilderAdapter} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
