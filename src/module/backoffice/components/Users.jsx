import React from "react";

// shared
import Breadcrumb from "../../../shared/components/Breadcrumb";

const Users = () => {
  return (
    <>
      <Breadcrumb title="User" currentMenu="Master" activePage="User" />
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">User List</div>
              <div className="card-body"></div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
