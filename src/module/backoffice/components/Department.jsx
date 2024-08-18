import React, { useRef } from "react";

// shared
import Breadcrumb from "../../../shared/components/Breadcrumb";

const Department = () => {
  const modalRef1 = useRef(null);
  const modalRef2 = useRef(null);

  const handleModal = (modalRef, action) => {
    const modalElement = modalRef.current;
    const modal = window.bootstrap.Modal.getInstance(modalElement) || new window.bootstrap.Modal(modalElement);

    if (action === "show") {
      modal.show();
    } else if (action === "hide") {
      modal.hide();
    }
  };

  const openModal = (modalRef) => {
    handleModal(modalRef, "show");
  };

  const closeModal = (modalRef) => {
    handleModal(modalRef, "hide");
  };

  const departmentList = [
    {
      departmentId: 1,
      title: "Department 1",
    },
    {
      departmentId: 2,
      title: "Department 2",
    },
    {
      departmentId: 3,
      title: "Department 3",
    },
    {
      departmentId: 4,
      title: "Department 4",
    },
    {
      departmentId: 5,
      title: "Department 5",
    },
  ];

  return (
    <>
      <Breadcrumb title="Department" currentMenu="Master" activePage="Department" />
      <section className="section">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">Department List</div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentList.map((department) => (
                      <tr key={department.departmentId}>
                        <th scope="row" onClick={() => openModal(modalRef1)}>
                          {department.departmentId}
                        </th>
                        <td onClick={() => openModal(modalRef2)}>{department.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="card-footer"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" ref={modalRef1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => closeModal(modalRef1)}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" ref={modalRef2}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title 1
              </h1>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => closeModal(modalRef2)}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
