import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";

export default function User() {
  const { authState, oktaAuth } = useOktaAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authState?.isAuthenticated) {
      const getUserInfo = async () => {
        const res = await oktaAuth.getUser();
        setUser(res);
      };
      getUserInfo();
    }
  }, [authState]);

  if (authState?.isAuthenticated && user)
    return (
      <div>
        <p>
          Hi, <span data-testid="userName">{user?.name}</span>
        </p>
        <p>Email: {user?.email}</p>
        <p>Zone: {user?.zoneinfo}</p>
      </div>
    );
  if (authState?.isAuthenticated && user === null)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );

  return null;
}
