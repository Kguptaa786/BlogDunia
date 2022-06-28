import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LoginSignup />} />
    </Routes>
  );
};

export default AllRoutes;
