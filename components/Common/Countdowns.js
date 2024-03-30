import React from "react";

const Countdowns = () => {
  return (
    <>
      <div className="col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="single-funfacts">
          <i className="bx bx-bullseye"></i>
          <p>New Visitors</p>
          <h3>5</h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="single-funfacts">
          <i className="bx bx-group"></i>
          <p>Happy Customer</p>
          <h3>9579</h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="single-funfacts">
          <i className="bx bx-shape-polygon"></i>
          <p>Listings</p>
          <h3>1034</h3>
        </div>
      </div>

      <div className="col-lg-3 col-md-3 col-sm-3 col-6">
        <div className="single-funfacts">
          <i className="bx bx-trophy"></i>
          <p>Awards</p>
          <h3>52</h3>
        </div>
      </div>
    </>
  );
};

export default Countdowns;
