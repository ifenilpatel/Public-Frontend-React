import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const init = { email: "", password: "", rememberMe: false };
  const [formValues, setFormValues] = useState(init);

  const handleChange = (event) => {
    const target = event.target;
    if (target.type == "text" || target.type == "password" || target.type == "email") setFormValues({ ...formValues, [target.name]: target.value });
    if (target.type == "checkbox") setFormValues({ ...formValues, [target.name]: target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Navigate programmatically
    navigate("/register");
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
            <p className="text-center small">Enter your username & password to login</p>
          </div>

          <form className="row g-3" autoComplete="off" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={formValues.email} onChange={handleChange} />
            </div>

            <div className="col-12">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={formValues.password} onChange={handleChange} />
            </div>

            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="rememberMe" value={formValues.rememberMe} onChange={handleChange} id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col-12">
              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
            </div>
            <div className="col-12">
              <p className="small mb-0">
                Don't have account? <Link to="/register">Create an account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
