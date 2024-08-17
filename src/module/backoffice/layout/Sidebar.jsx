import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link className="nav-link collapsed" to="/backoffice">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide" />
              <span>Components</span>
              <i className="bi bi-chevron-down ms-auto" />
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="department">
                  <i className="bi bi-circle" />
                  <span>Department</span>
                </Link>
              </li>
              <li>
                <Link to="designation">
                  <i className="bi bi-circle" />
                  <span>Designation</span>
                </Link>
              </li>
              <li>
                <Link to="users">
                  <i className="bi bi-circle" />
                  <span>User</span>
                </Link>
              </li>
              <li>
                <Link to="reports">
                  <i className="bi bi-circle" />
                  <span>Report</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
