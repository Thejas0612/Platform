import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/landing/Landing";
import "@emerson/dynamic-ui-public/dist/emerson-ui.css";
import DpFlowUiLayout from "./containers/layout/ui-sections/dpflow/DpFlowUiLayout";
import ProjectLookoutUiLayout from "./containers/layout/ui-sections/project-lookout/ProjectLookoutUiLayout";
import TempUiLayout from "./containers/layout/ui-sections/temperature/TempUiLayout";
import { Test } from "./pages/Test";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/platform_bucode=dpFlow" exact={true} component={DpFlowUiLayout} />
        <Route
          path="/platform_bucode=project_Lookout"
          exact={true}
          component={ProjectLookoutUiLayout}
        />
        <Route path="/platform_bucode=tempPA" exact={true} component={TempUiLayout} />
        <Route path="/test" exact={true} component={Test} />
      </Switch>
    </Router>
  );
};
export default App;
