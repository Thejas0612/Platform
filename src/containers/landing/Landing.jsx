import React from "react";
import { useOktaAuth } from "@okta/okta-react";

export default function Landing() {
  const { authState, oktaAuth } = useOktaAuth();

  return (
    <div>
      {authState && authState.isAuthenticated && <h1>Click on logout for stop the session</h1>}
      {authState && !authState.isAuthenticated && <h1>Click on login to visit MSOL PA Platform</h1>}
    </div>
  );
}
