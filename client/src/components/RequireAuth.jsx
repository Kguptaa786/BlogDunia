import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

function RequireAuth() {
  let location = useLocation();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  let token = localStorage.getItem("token");
  // if (token) {
  //   setIsAuthenticated(true);
  // }
  // useEffect(() => {

  // }, [isAuthenticated]);
  if (!token.length) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/account" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuth;
