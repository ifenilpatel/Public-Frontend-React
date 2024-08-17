import React from "react";

// shared
import Breadcrumb from "../../../shared/components/Breadcrumb";

const Designation = () => {
  return (
    <>
      <Breadcrumb title="Designation" currentMenu="Master" activePage="Designation" />
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Designation List</div>
              <div className="card-body"></div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Designation;
