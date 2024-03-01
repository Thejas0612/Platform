import React from "react";
import { Route, Switch } from "react-router-dom";
import "@emerson/dynamic-ui/dist/emerson-ui.css";
import LayoutType from "./components/common/LayoutType";
const App = () => {
  return (
    <>
      <div>
        {/* <LayoutType /> */}
        <Route path="/component" exact={true} component={LayoutType} />
        {/* <Route path="/login/callback" component={LoginCallback} /> */}
        {/* <Route path="/component" component={Layout} /> */}
      </div>
    </>
  );
};

export default App;
