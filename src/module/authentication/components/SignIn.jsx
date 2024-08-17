import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const init = { email: "", password: "" };
  const [formValues, setFormValues] = useState(init);

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="pt-4 pb-2">
            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
            <p className="text-center small">Enter your username & password to login</p>
          </div>

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="form-label">Email</label>
              <div className="input-group ">
                <input type="text" className="form-control" name="email" value={formValues.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="col-12">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={formValues.password} onChange={handleChange} required />
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
