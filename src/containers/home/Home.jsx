import { useOktaAuth } from "@okta/okta-react";
import React, { useState, useEffect } from "react";

const Home = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  if (!authState) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>It’s Time to Transform Your Projects and Operations</h1>
      <span>
        Many of the industry’s standard approaches were created decades ago, long before today’s
        innovation. Doing more of the same is yielding only incremental benefits and management
        expects you to deliver better results. With a partner like Emerson, you can. Our automation
        expertise – from projects to operations – is focused on helping you hit your targets and
        move your organization into Top Quartile performance.
      </span>
    </div>
  );
};
export default Home;
