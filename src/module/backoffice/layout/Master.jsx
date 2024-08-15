import React from "react";
import { Outlet } from "react-router-dom";

//pages

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Master = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Master;
