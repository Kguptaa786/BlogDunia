import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import CreateBlog from "./pages/CreateBlog";
import LoginSignup from "./pages/LoginSignup";
import MainPage from "./pages/MainPage";
import UpdateBlog from "./pages/UpdateBlog";
import ViewBlog from "./pages/ViewBlog";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/account" element={<LoginSignup />} />
      <Route path="/" element={<PrivateRoute Component={MainPage} />} />
      <Route path="/create" element={<PrivateRoute Component={CreateBlog} />} />
      <Route
        path="/detail/:blogId"
        element={<PrivateRoute Component={ViewBlog} />}
      />
      <Route
        path="/update/:blogId"
        element={<PrivateRoute Component={UpdateBlog} />}
      />
    </Routes>
  );
};

export default AllRoutes;
