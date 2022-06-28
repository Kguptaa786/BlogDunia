import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import CreateBlog from "./pages/CreateBlog";

import MainPage from "./pages/MainPage";
import ViewBlog from "./pages/ViewBlog";

const App = () => {
  return (
    <>
      <ViewBlog />
      {/* <CreateBlog /> */}
      {/* <MainPage /> */}
      <BrowserRouter>{/* <AllRoutes /> */}</BrowserRouter>
    </>
  );
};

export default App;
