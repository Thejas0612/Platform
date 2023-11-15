import React from "react";
import { useTranslation } from "react-i18next";
import { useOktaAuth } from "@okta/okta-react";
import Button from "../../components/common/ButtonInput";
export default function Landing() {
  const { t, i18n } = useTranslation();
  const { authState, oktaAuth } = useOktaAuth();

  return (
    <div>
      {authState && authState.isAuthenticated && <h1>Click on logout for stop the session</h1>}
      {authState && !authState.isAuthenticated && <h1>Click on login to visit website</h1>}
      <h1>{t("Welcome")}</h1>
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }}>
        <Button label="English" onClick={() => i18n.changeLanguage("en")} />
        <Button label="French" onClick={() => i18n.changeLanguage("fr")} />
      </div>
    </div>
  );
}
