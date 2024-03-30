import React from "react"; 

const Features = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bx-map-alt"></i>
            </div>
            <span className="sub-title">Active Listings</span>
            <h3>10</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bx-line-chart"></i>
            </div>
            <span className="sub-title">Total Views</span>
            <h3>854</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bx-star"></i>
            </div>
            <span className="sub-title">Total Reviews</span>
            <h3>99</h3>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="stats-card-box">
            <div className="icon-box">
              <i className="bx bx-heart"></i>
            </div>
            <span className="sub-title">Bookmarked</span>
            <h3>150</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
