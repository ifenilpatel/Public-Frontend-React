import React from "react";

// shared
import Breadcrumb from "../../../shared/components/Breadcrumb";

const Department = () => {
  return (
    <>
      <Breadcrumb title="Department" currentMenu="Master" activePage="Department" />
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Department List</div>
              <div className="card-body"></div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Department;
