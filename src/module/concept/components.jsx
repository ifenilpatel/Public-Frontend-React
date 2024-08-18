import React from "react";
import PropTypes from "prop-types";

const Person = () => {
  return (
    <>
      <div className="row g-3">
        <h1>Hello</h1>
        <div className="col-md-12">
          <PersonData />
        </div>
        <div className="col-md-12">
          <PersonData name={"Fenil Patel"} />
        </div>
      </div>
    </>
  );
};

const PersonData = ({ name }) => {
  return <>{name}</>;
};

export default Person;

PersonData.PropTypes = {
  name: PropTypes.string,
};

PersonData.defaultProps = {
  name: "Hello welcome",
};
