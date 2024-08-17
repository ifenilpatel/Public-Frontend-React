import React from "react";
import { Outlet } from "react-router-dom";

//pages

import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Master = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <Header />
                  <Outlet />
                  <Footer />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Master;
