import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const token = localStorage.getItem("token");
  return token && token.length;
};

const PrivateRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/account" />;
};

export default PrivateRoute;
