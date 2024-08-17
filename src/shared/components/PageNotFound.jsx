import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main>
      <div className="container">
        <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
          <h1>404</h1>
          <h2>The page you are looking for doesnt exist.</h2>
          <Link className="btn" to={"/"}>
            Back to home
          </Link>
        </section>
      </div>
    </main>
  );
}

export default PageNotFound;
