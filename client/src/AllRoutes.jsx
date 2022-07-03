import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateBlog from "./pages/CreateBlog";
import LoginSignup from "./pages/LoginSignup";
import MainPage from "./pages/MainPage";
import UpdateBlog from "./pages/UpdateBlog";
import ViewBlog from "./pages/ViewBlog";
import RequireAuth from "./components/RequireAuth";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/account" element={<LoginSignup />} />
      <Route
        path="/"
        element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        }
      />
      <Route
        path="/create"
        element={
          <RequireAuth>
            <CreateBlog />
          </RequireAuth>
        }
      />
      <Route
        path="/detail/:blogId"
        element={
          <RequireAuth>
            <ViewBlog />
          </RequireAuth>
        }
      />
      <Route
        path="/update/:blogId"
        element={
          <RequireAuth>
            <UpdateBlog />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
