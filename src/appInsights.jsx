import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: "" });
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "b95594aa-79fc-4779-8c95-46e01f387486",
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
});
appInsights.loadAppInsights();
appInsights.trackPageView("p3");
export { reactPlugin, appInsights };
