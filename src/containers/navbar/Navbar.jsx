import { useOktaAuth } from "@okta/okta-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const login = async () =>
    oktaAuth.signInWithRedirect({
      originalUri: "/component"
    });
  const logout = async () => oktaAuth.signOut();

  if (!authState) {
    return null;
  }

  return (
    <ul>
      <li>
        <img alt="" src="../asset/emerson-logo.png" className={style.logo} width="100px" />
      </li>
      {authState.isAuthenticated && (
        <li>
          <NavLink to={"/home"} activeClassName={style.active}>
            Automation Solutions
          </NavLink>
        </li>
      )}
      {authState.isAuthenticated && (
        <li>
          <NavLink to={"/solution"} activeClassName={style.active}>
            Commercial & Residential Solutions
          </NavLink>
        </li>
      )}
      {authState.isAuthenticated && (
        <li>
          <NavLink to={"/counter"} activeClassName={style.active}>
            Counter
          </NavLink>
        </li>
      )}
      {authState.isAuthenticated && (
        <li>
          <NavLink to={"/user"} activeClassName={style.active}>
            User
          </NavLink>
        </li>
      )}
      {!authState.isAuthenticated && (
        <li onClick={login} className={style.login}>
          <a>Okta Login</a>
        </li>
      )}
      {authState && authState.isAuthenticated && (
        <li onClick={logout} className={style.login}>
          <a>Logout</a>
        </li>
      )}
    </ul>
  );
};
export default Navbar;
