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
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/detail/:blogId" element={<ViewBlog />} />
        <Route path="/update/:blogId" element={<UpdateBlog />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
