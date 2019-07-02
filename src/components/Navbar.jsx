// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <React.Fragment>
          <h1>You are logged out</h1>
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        </React.Fragment>
      )}

      {isAuthenticated && (
        <React.Fragment>
          <h1>You are logged in</h1>
          <button onClick={() => logout()}>Log out</button>
        </React.Fragment>
      )}
    </div>
  );
};

export default NavBar;
