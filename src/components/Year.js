import React from "react";
import "../styles/Year.css";

const Year = ({ year }) => {
  return (
    <div className="year-container">
      <span className="year-text">{year}</span>
    </div>
  );
};

export default Year;
