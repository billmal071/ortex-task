import React from "react";
import "./spinner.css";

function Spinner(): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
