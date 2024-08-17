import React from "react";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-center py-4">
        <a href="index.html" className="logo d-flex align-items-center w-auto">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">NiceAdmin</span>
        </a>
      </div>
    </>
  );
};

export default Header;
