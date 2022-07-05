import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });
  return (
    <>
      <Component />
    </>
  );
};

export default PrivateRoute;
