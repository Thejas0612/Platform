import React from "react";
import { Route, Switch } from "react-router-dom";
import "@emerson/dynamic-ui/dist/emerson-ui.css";
import LayoutType from "./components/common/LayoutType";
import { Provider } from "react-redux";
import store from "./redux/store/store";
const App = () => {
  return (
    
     <Provider store={store}>
      <div>
        {/* <LayoutType /> */}
        <h1>Hello React</h1>
        <Route path="/component" exact={true} component={LayoutType} />
        {/* <Route path="/login/callback" component={LoginCallback} /> */}
        {/* <Route path="/component" component={Layout} /> */}
      </div>
      </Provider>
    
  );
};

export default App;
