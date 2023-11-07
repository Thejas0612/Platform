import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import config from "./config";
import "@emerson/dynamic-ui/dist/emerson-ui.css";
import Home from "./containers/home/Home";
import Navbar from "./containers/navbar/Navbar";
import Solution from "./containers/solution/Solution";
import Landing from "./containers/landing/Landing";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import Counter from "./containers/counter/Counter";
import Layout from "./containers/layout/Layout";
import User from "./pages/user/User";

const oktaAuth = new OktaAuth({ ...config.oidc, clientId: "0oad03nku4eC4BzzW5d7" });

const App = () => {
  const history = useHistory();
  const restoreOriginalUri = async (oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  const style = {
    position: "relative",
    padding: "0 40px"
  };

  return (
    <Provider store={store}>
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
        <Navbar />

        <div style={style}>
          <Route path="/" exact={true} component={Landing} />
          <Route path="/login/callback" component={LoginCallback} />
          <Route exact path="/counter" component={Counter} />
          <SecureRoute path="/home" component={Home} />
          <SecureRoute path="/solution" component={Solution} />
          <SecureRoute path="/user" component={User} />
          {/* <SecureRoute path="/counter" component={Counter} /> */}
          <Route path="/component" component={Layout} />
        </div>
      </Security>
    </Provider>
  );
};
export default App;
