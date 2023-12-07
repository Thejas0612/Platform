import React from "react";
import { useTranslation } from "react-i18next";
import { useOktaAuth } from "@okta/okta-react";
import { appInsights } from "../../appInsights";
import Button from "../../components/common/ButtonInput";
export default function Landing() {
  const { t, i18n } = useTranslation();
  const { authState, oktaAuth } = useOktaAuth();
  const translateLanguage = async (lang) => {
    console.log("Language", lang);
    i18n.changeLanguage(lang);
    // appInsights.trackPageView("p3");
    handleTrackEvent();
  };

  const handleTrackEvent = () => {
    console.log("Handle clicked.......");
    appInsights.trackEvent({
      name: "ButtonClicked",
      properties: { customProperty: "customValue for track Event" }
    });
  };
  return (
    <div>
      {authState && authState.isAuthenticated && <h1>Click on logout for stop the session</h1>}
      {authState && !authState.isAuthenticated && <h1>Click on login to visit website</h1>}
      <h1>{t("Welcome")}</h1>
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }}>
        <Button label="English" onClick={() => translateLanguage("en")} />
        <Button label="French" onClick={() => translateLanguage("fr")} />
      </div>
    </div>
  );
}
