// LoaderOverlay.js

import React from "react";
import "./LoaderOverlay.css"; // Add your styling here

const LoaderOverlay = ({ loading }) => {
  return (
    <div className={`loader-overlay ${loading ? "visible" : "hidden"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default LoaderOverlay;
