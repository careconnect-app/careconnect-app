import React from "react";

const Spinner = ({ loading }) => {
  return (
    <div className={`spinner spin ${loading && "min-space"}` }>
      <svg className="spinner40" height={100} width={100}>
        <circle cx="50" cy="50" r="40" strokeWidth="5" fill="none"></circle>
      </svg>
      <span>Things are getting ready for You,...</span>
    </div>
  );
};

export default Spinner;
