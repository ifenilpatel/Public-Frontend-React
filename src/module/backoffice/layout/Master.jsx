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
      <main id="main" className="main">
        <Outlet />
      </main>
      <Footer />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default Master;
