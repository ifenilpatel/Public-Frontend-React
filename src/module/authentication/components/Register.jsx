import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
            <p className="text-center small">Enter your personal details to create account</p>
          </div>

          <form className="row g-3">
            <div className="col-12">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" required />
              <div className="invalid-feedback">Please, enter your name!</div>
            </div>

            <div className="col-12">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" required />
            </div>

            <div className="col-12">
              <label className="form-label">Username</label>
              <div className="input-group ">
                <input type="text" className="form-control" required />
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="acceptTerms" required />
                <label className="form-check-label" for="acceptTerms">
                  I agree and accept the terms and conditions
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100" type="submit">
                Create Account
              </button>
            </div>
            <div className="col-12">
              <p className="small mb-0">
                Already have an account? <Link to="/">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
