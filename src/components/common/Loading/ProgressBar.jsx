import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: "100%", height: "4px", backgroundColor: "#f0f0f0" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#29d",
          transition: "width 0.3s",
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number,
};

export default ProgressBar;
