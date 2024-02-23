import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./containers/home/Home";
import Navbar from "./containers/navbar/Navbar";
import Solution from "./containers/solution/Solution";
import Landing from "./containers/landing/Landing";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Counter from "./containers/counter/Counter";

const App = () => {

  const style = {
    position: "relative",
    padding: "0 40px"
  };

  return (
    <Provider store={store}>
      {/* <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}> */}
      <Navbar />
      <Switch>
        <div style={style}>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/solution" component={Solution} />
          <Route path="/counter" component={Counter} />
        </div>
      </Switch>
      {/* </Security> */}
    </Provider>
  );
};
export default App;
