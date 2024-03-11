import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { menuData } from "./containers/landing/landingPageCards";
import { Header } from "./components/dynamic-ui/uiComponentsConfig";
import Landing from "./containers/landing/Landing";
import "@emerson/dynamic-ui-public/dist/emerson-ui.css";
import DpFlowUiLayout from "./containers/layout/ui-sections/dpflow/DpFlowUiLayout";
import ProjectLookoutUiLayout from "./containers/layout/ui-sections/project-lookout/ProjectLookoutUiLayout";
import TempUiLayout from "./containers/layout/ui-sections/temperature/TempUiLayout";

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
      </Switch>
    </Router>
  );
};
export default App;
