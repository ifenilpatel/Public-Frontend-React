import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
            <p className="text-center small">Enter your personal details to create an account</p>
          </div>

          <form className="row g-3" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" {...register("name", { required: "Name is required" })} />
              {errors.name && <small className="text-danger">{errors.name.message}</small>}
            </div>

            <div className="col-12">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <small className="text-danger">{errors.email.message}</small>}
            </div>

            <div className="col-12">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" {...register("username", { required: "Username is required" })} />
              {errors.username && <small className="text-danger">{errors.username.message}</small>}
            </div>

            <div className="col-12">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" {...register("password", { required: "Password is required" })} />
              {errors.password && <small className="text-danger">{errors.password.message}</small>}
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  {...register("acceptTerms", { required: "You must accept the terms and conditions" })}
                  id="acceptTerms"
                />
                <label className="form-check-label" htmlFor="acceptTerms">
                  I agree and accept the terms and conditions
                </label>
                {errors.acceptTerms && <small className="text-danger">{errors.acceptTerms.message}</small>}
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
