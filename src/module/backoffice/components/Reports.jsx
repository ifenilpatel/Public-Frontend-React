import React from "react";

// shared
import Breadcrumb from "../../../shared/components/Breadcrumb";

const Reports = () => {
  return (
    <>
      <Breadcrumb title="Report" currentMenu="Master" activePage="Report" />
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Report List</div>
              <div className="card-body"></div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reports;
