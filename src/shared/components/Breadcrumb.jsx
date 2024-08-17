/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

function Breadcrumb(props) {
  return (
    <>
      <div className="pagetitle">
        <h1>{props.title}</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">{props.currentMenu}</a>
            </li>
            <li className="breadcrumb-item active">{props.activePage}</li>
          </ol>
        </nav>
      </div>
    </>
  );
}

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  currentMenu: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
};

export default Breadcrumb;
