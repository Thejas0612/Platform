import React from "react";
import { useTranslation } from "react-i18next";
import { useOktaAuth } from "@okta/okta-react";

export default function Landing() {
  const { t, i18n } = useTranslation();
  const { authState, oktaAuth } = useOktaAuth();

  return (
    <div>
      {authState && authState.isAuthenticated && <h1>Click on logout for stop the session</h1>}
      {authState && !authState.isAuthenticated && <h1>Click on login to visit website</h1>}
      <h2>{t("Welcome")}</h2>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("fr")}>French</button>
    </div>
  );
}
